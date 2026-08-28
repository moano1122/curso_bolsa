"""Servidor local del curso. Solo stdlib: no hace falta instalar nada.

El gate de progreso se resuelve aquí, no en el frontend: la sesión N solo se
sirve si la N-1 está aprobada. Suspender un examen semanal borra el progreso de
esa semana entera.
"""

import json
import random
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

import content
import store

RAIZ = Path(__file__).resolve().parent.parent
FRONTEND = RAIZ / "frontend"
PUERTO = 8777

MIME = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
}


# --- lógica de curso ------------------------------------------------------

def examen_de(sesion):
    """Qué examen corresponde a una sesión."""
    if sesion.get("tipo") == "examen":
        return f"examen-s{sesion['semana']}"
    return f"test-{sesion['id']}"


def construir_indice():
    sesiones = content.cargar_sesiones()
    estado = store.estado_sesiones()

    salida = []
    anterior_aprobada = True
    for s in sesiones:
        est = estado.get(s["id"], {})
        aprobada = est.get("estado") == "aprobada"
        salida.append({
            "id": s["id"],
            "semana": s.get("semana"),
            "dia": s.get("dia"),
            "tipo": s.get("tipo"),
            "titulo": s.get("titulo"),
            "subtitulo": s.get("subtitulo", ""),
            "duracion_min": s.get("duracion_min"),
            "conceptos": s.get("conceptos", []),
            "estado": est.get("estado", "pendiente"),
            "nota": est.get("nota"),
            "intentos": est.get("intentos", 0),
            "desbloqueada": anterior_aprobada,
            "examen_id": examen_de(s),
        })
        anterior_aprobada = aprobada
    return salida


def sesion_desbloqueada(sesion_id):
    for s in construir_indice():
        if s["id"] == sesion_id:
            return s["desbloqueada"]
    return False


def componer_examen(examen_id):
    """Devuelve la lista de preguntas de un examen, sin soluciones."""
    datos = content.cargar_examen(examen_id)
    if datos is None:
        return None, None

    propias = list(datos.get("preguntas", []))

    heredadas = []
    for origen in datos.get("pool_heredado", []):
        otro = content.cargar_examen(origen)
        if otro:
            heredadas.extend(otro.get("preguntas", []))

    if heredadas:
        vistas = store.preguntas_vistas(examen_id)
        no_vistas = [p for p in heredadas if p["id"] not in vistas]
        ya_vistas = [p for p in heredadas if p["id"] in vistas]
        random.shuffle(no_vistas)
        random.shuffle(ya_vistas)
        heredadas = no_vistas + ya_vistas

    objetivo = datos.get("n_preguntas", len(propias))
    seleccion = propias + heredadas[: max(0, objetivo - len(propias))]
    seleccion = seleccion[:objetivo]
    random.shuffle(seleccion)
    return datos, seleccion


def corregir(examen_id, sesion_id, respuestas):
    """respuestas: {pregunta_id: indice_elegido}."""
    indice = content.indice_preguntas()
    datos = content.cargar_examen(examen_id) or {}
    corte = datos.get("corte", 0.8)

    detalle, resultados, aciertos = [], [], 0
    for pid, elegida in respuestas.items():
        p = indice.get(pid)
        if p is None:
            continue
        acierto = int(elegida) == p["correcta"]
        aciertos += acierto
        resultados.append({
            "pregunta_id": pid,
            "elegida": int(elegida),
            "correcta": p["correcta"],
            "acierto": acierto,
        })
        detalle.append({
            "id": pid,
            "enunciado": p["enunciado"],
            "opciones": p["opciones"],
            "elegida": int(elegida),
            "correcta": p["correcta"],
            "acierto": acierto,
            "explicacion": p.get("explicacion", ""),
            "por_que_tienta": p.get("distractores", {}).get(str(elegida), ""),
            "concepto": p.get("concepto", ""),
        })

    total = len(resultados)
    nota = aciertos / total if total else 0.0
    aprobado = nota >= corte

    store.guardar_respuestas(examen_id, resultados)
    intentos = store.registrar_resultado(sesion_id, nota, aprobado)

    reiniciada = None
    if datos.get("tipo") == "semanal" and not aprobado:
        semana = datos.get("semana")
        ids = [s["id"] for s in construir_indice() if s["semana"] == semana]
        store.reiniciar_semana(ids)
        reiniciada = semana

    return {
        "nota": round(nota, 3),
        "aciertos": aciertos,
        "total": total,
        "corte": corte,
        "aprobado": aprobado,
        "intentos": intentos,
        "semana_reiniciada": reiniciada,
        "detalle": sorted(detalle, key=lambda d: d["acierto"]),
    }


def repaso_espaciado(limite=5):
    pendientes = store.preguntas_para_repaso(limite)
    indice = content.indice_preguntas()
    salida = []
    for p in pendientes:
        q = indice.get(p["pregunta_id"])
        if q:
            salida.append({**content.sin_soluciones(q),
                           "fallos_previos": p["fallos"]})
    return salida


# --- HTTP -----------------------------------------------------------------

class Handler(BaseHTTPRequestHandler):
    def log_message(self, *args):
        pass

    def _json(self, datos, codigo=200):
        cuerpo = json.dumps(datos, ensure_ascii=False).encode("utf-8")
        self.send_response(codigo)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(cuerpo)))
        self.end_headers()
        self.wfile.write(cuerpo)

    def _estatico(self, nombre):
        ruta = (FRONTEND / nombre).resolve()
        if not str(ruta).startswith(str(FRONTEND.resolve())) or not ruta.is_file():
            self.send_error(404)
            return
        cuerpo = ruta.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", MIME.get(ruta.suffix, "text/plain"))
        self.send_header("Content-Length", str(len(cuerpo)))
        self.end_headers()
        self.wfile.write(cuerpo)

    def do_GET(self):
        ruta = urlparse(self.path).path

        if ruta in ("/", "/index.html"):
            return self._estatico("index.html")

        if ruta == "/api/curso":
            return self._json({"sesiones": construir_indice(),
                               "stats": store.estadisticas()})

        if ruta.startswith("/api/sesion/"):
            sid = ruta.rsplit("/", 1)[-1]
            if not sesion_desbloqueada(sid):
                return self._json({"error": "bloqueada"}, 403)
            s = content.cargar_sesion(sid)
            if s is None:
                return self._json({"error": "no existe"}, 404)
            return self._json(s)

        if ruta.startswith("/api/test/"):
            eid = ruta.rsplit("/", 1)[-1]
            datos, preguntas = componer_examen(eid)
            if datos is None:
                return self._json({"error": "no existe"}, 404)
            return self._json({
                "id": datos["id"],
                "titulo": datos.get("titulo", ""),
                "tipo": datos.get("tipo"),
                "corte": datos.get("corte", 0.8),
                "preguntas": [content.sin_soluciones(p) for p in preguntas],
                "casos": datos.get("casos", []),
            })

        if ruta == "/api/repaso":
            return self._json({"preguntas": repaso_espaciado()})

        if ruta == "/api/glosario":
            return self._json({"terminos": content.glosario()})

        if ruta == "/api/stats":
            return self._json(store.estadisticas())

        return self._estatico(ruta.lstrip("/"))

    def do_POST(self):
        ruta = urlparse(self.path).path
        largo = int(self.headers.get("Content-Length", 0))
        cuerpo = json.loads(self.rfile.read(largo) or b"{}")

        if ruta == "/api/enviar":
            return self._json(corregir(
                cuerpo["examen_id"], cuerpo["sesion_id"], cuerpo["respuestas"]
            ))

        if ruta == "/api/caso":
            store.guardar_caso(cuerpo["examen_id"], cuerpo["caso_id"],
                               cuerpo["respuesta"], cuerpo.get("autonota"))
            return self._json({"ok": True})

        return self._json({"error": "ruta desconocida"}, 404)


def main():
    store.inicializar()
    servidor = ThreadingHTTPServer(("127.0.0.1", PUERTO), Handler)
    print(f"\n  Curso de bolsa  ->  http://127.0.0.1:{PUERTO}\n")
    print("  Ctrl+C para parar\n")
    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        print("\n  Parado.\n")


if __name__ == "__main__":
    main()
