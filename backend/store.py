"""Persistencia. SQLite, sin dependencias externas.

El progreso, las respuestas y el estado de repaso espaciado viven aquí. El
frontend nunca calcula nada de esto: pregunta.
"""

import sqlite3
import json
from datetime import date, timedelta
from pathlib import Path

DB_PATH = Path(__file__).resolve().parent.parent / "data" / "curso.db"

ESQUEMA = """
CREATE TABLE IF NOT EXISTS progreso (
    sesion_id   TEXT PRIMARY KEY,
    estado      TEXT NOT NULL DEFAULT 'pendiente',
    nota        REAL,
    intentos    INTEGER NOT NULL DEFAULT 0,
    fecha       TEXT
);

CREATE TABLE IF NOT EXISTS respuestas (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    examen_id   TEXT NOT NULL,
    pregunta_id TEXT NOT NULL,
    elegida     INTEGER NOT NULL,
    correcta    INTEGER NOT NULL,
    acierto     INTEGER NOT NULL,
    fecha       TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS srs (
    pregunta_id     TEXT PRIMARY KEY,
    origen          TEXT NOT NULL,
    facilidad       REAL NOT NULL DEFAULT 2.5,
    intervalo       INTEGER NOT NULL DEFAULT 0,
    siguiente       TEXT NOT NULL,
    aciertos        INTEGER NOT NULL DEFAULT 0,
    fallos          INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS casos (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    examen_id   TEXT NOT NULL,
    caso_id     TEXT NOT NULL,
    respuesta   TEXT NOT NULL,
    autonota    REAL,
    fecha       TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_srs_siguiente ON srs(siguiente);
CREATE INDEX IF NOT EXISTS idx_resp_pregunta ON respuestas(pregunta_id);
"""


def conectar():
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    con = sqlite3.connect(DB_PATH)
    con.row_factory = sqlite3.Row
    return con


def inicializar():
    con = conectar()
    con.executescript(ESQUEMA)
    con.commit()
    con.close()


# --- progreso -------------------------------------------------------------

def estado_sesiones():
    con = conectar()
    filas = con.execute("SELECT * FROM progreso").fetchall()
    con.close()
    return {f["sesion_id"]: dict(f) for f in filas}


def registrar_resultado(sesion_id, nota, aprobado):
    con = conectar()
    fila = con.execute(
        "SELECT intentos FROM progreso WHERE sesion_id = ?", (sesion_id,)
    ).fetchone()
    intentos = (fila["intentos"] if fila else 0) + 1
    estado = "aprobada" if aprobado else "suspendida"
    con.execute(
        """INSERT INTO progreso (sesion_id, estado, nota, intentos, fecha)
           VALUES (?, ?, ?, ?, ?)
           ON CONFLICT(sesion_id) DO UPDATE SET
             estado = excluded.estado,
             nota = MAX(COALESCE(progreso.nota, 0), excluded.nota),
             intentos = excluded.intentos,
             fecha = excluded.fecha""",
        (sesion_id, estado, nota, intentos, date.today().isoformat()),
    )
    con.commit()
    con.close()
    return intentos


# --- respuestas y repaso espaciado ---------------------------------------

def guardar_respuestas(examen_id, resultados):
    """resultados: lista de dicts con pregunta_id, elegida, correcta, acierto."""
    hoy = date.today().isoformat()
    con = conectar()
    for r in resultados:
        con.execute(
            """INSERT INTO respuestas
               (examen_id, pregunta_id, elegida, correcta, acierto, fecha)
               VALUES (?, ?, ?, ?, ?, ?)""",
            (examen_id, r["pregunta_id"], r["elegida"], r["correcta"],
             int(r["acierto"]), hoy),
        )
        _actualizar_srs(con, r["pregunta_id"], examen_id, r["acierto"])
    con.commit()
    con.close()


def _actualizar_srs(con, pregunta_id, origen, acierto):
    """SM-2 simplificado. Fallar reinicia el intervalo: lo que fallas vuelve ya."""
    fila = con.execute(
        "SELECT * FROM srs WHERE pregunta_id = ?", (pregunta_id,)
    ).fetchone()

    if fila is None:
        facilidad, intervalo, aciertos, fallos = 2.5, 0, 0, 0
    else:
        facilidad = fila["facilidad"]
        intervalo = fila["intervalo"]
        aciertos = fila["aciertos"]
        fallos = fila["fallos"]

    if acierto:
        aciertos += 1
        if intervalo == 0:
            intervalo = 1
        elif intervalo == 1:
            intervalo = 3
        else:
            intervalo = max(1, round(intervalo * facilidad))
        facilidad = min(2.8, facilidad + 0.08)
    else:
        fallos += 1
        intervalo = 1
        facilidad = max(1.3, facilidad - 0.25)

    siguiente = (date.today() + timedelta(days=intervalo)).isoformat()
    con.execute(
        """INSERT INTO srs
           (pregunta_id, origen, facilidad, intervalo, siguiente, aciertos, fallos)
           VALUES (?, ?, ?, ?, ?, ?, ?)
           ON CONFLICT(pregunta_id) DO UPDATE SET
             facilidad = excluded.facilidad,
             intervalo = excluded.intervalo,
             siguiente = excluded.siguiente,
             aciertos = excluded.aciertos,
             fallos = excluded.fallos""",
        (pregunta_id, origen, facilidad, intervalo, siguiente, aciertos, fallos),
    )


def preguntas_para_repaso(limite=5):
    """Las vencidas, priorizando las más falladas y las más atrasadas."""
    con = conectar()
    filas = con.execute(
        """SELECT pregunta_id, origen, fallos, siguiente FROM srs
           WHERE siguiente <= ?
           ORDER BY fallos DESC, siguiente ASC
           LIMIT ?""",
        (date.today().isoformat(), limite),
    ).fetchall()
    con.close()
    return [dict(f) for f in filas]


def preguntas_vistas(examen_id):
    con = conectar()
    filas = con.execute(
        "SELECT DISTINCT pregunta_id FROM respuestas WHERE examen_id = ?",
        (examen_id,),
    ).fetchall()
    con.close()
    return {f["pregunta_id"] for f in filas}


def guardar_caso(examen_id, caso_id, respuesta, autonota):
    con = conectar()
    con.execute(
        """INSERT INTO casos (examen_id, caso_id, respuesta, autonota, fecha)
           VALUES (?, ?, ?, ?, ?)""",
        (examen_id, caso_id, respuesta, autonota, date.today().isoformat()),
    )
    con.commit()
    con.close()


# --- estadísticas ---------------------------------------------------------

def estadisticas():
    con = conectar()
    total = con.execute("SELECT COUNT(*) c FROM respuestas").fetchone()["c"]
    aciertos = con.execute(
        "SELECT COUNT(*) c FROM respuestas WHERE acierto = 1"
    ).fetchone()["c"]
    debiles = con.execute(
        """SELECT pregunta_id, fallos, aciertos FROM srs
           WHERE fallos > 0 ORDER BY fallos DESC LIMIT 10"""
    ).fetchall()
    pendientes = con.execute(
        "SELECT COUNT(*) c FROM srs WHERE siguiente <= ?",
        (date.today().isoformat(),),
    ).fetchone()["c"]
    con.close()
    return {
        "respuestas_totales": total,
        "aciertos": aciertos,
        "tasa": round(aciertos / total, 3) if total else None,
        "repasos_pendientes": pendientes,
        "puntos_debiles": [dict(d) for d in debiles],
    }


def reiniciar_semana(sesiones):
    """Suspender el examen semanal borra el estado de esa semana."""
    con = conectar()
    for sid in sesiones:
        con.execute("DELETE FROM progreso WHERE sesion_id = ?", (sid,))
    con.commit()
    con.close()
