"""Carga del contenido: sesiones en markdown y exámenes en JSON.

Frontmatter YAML mínimo parseado a mano para no depender de PyYAML.
"""

import json
import re
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DIR_SESIONES = RAIZ / "content" / "sesiones"
DIR_EXAMENES = RAIZ / "content" / "examenes"


def _parse_frontmatter(texto):
    """Parser de un subconjunto de YAML: escalares, listas y listas anidadas
    de un nivel. Suficiente para el frontmatter de las sesiones."""
    if not texto.startswith("---"):
        return {}, texto

    fin = texto.find("\n---", 3)
    if fin == -1:
        return {}, texto

    bloque = texto[3:fin].strip("\n")
    cuerpo = texto[fin + 4:].lstrip("\n")

    meta = {}
    clave_actual = None
    for linea in bloque.split("\n"):
        if not linea.strip() or linea.strip().startswith("#"):
            continue
        if linea.startswith("  - ") and clave_actual:
            meta[clave_actual].append(_valor(linea[4:].strip()))
            continue
        m = re.match(r"^(\w+):\s*(.*)$", linea)
        if not m:
            continue
        clave, valor = m.group(1), m.group(2).strip()
        if valor == "":
            meta[clave] = []
            clave_actual = clave
        elif valor.startswith("["):
            meta[clave] = [_valor(v.strip()) for v in
                           valor.strip("[]").split(",") if v.strip()]
            clave_actual = None
        else:
            meta[clave] = _valor(valor)
            clave_actual = None
    return meta, cuerpo


def _valor(v):
    v = v.strip()
    # Un valor entrecomillado es siempre texto: "01" no debe volverse 1.
    if len(v) >= 2 and v[0] == v[-1] and v[0] in "\"'":
        return v[1:-1]
    if re.fullmatch(r"-?\d+", v):
        return int(v)
    if re.fullmatch(r"-?\d+\.\d+", v):
        return float(v)
    return v


def cargar_sesiones():
    sesiones = []
    for ruta in sorted(DIR_SESIONES.glob("*.md")):
        texto = ruta.read_text(encoding="utf-8")
        meta, cuerpo = _parse_frontmatter(texto)
        meta["archivo"] = ruta.name
        meta["cuerpo"] = cuerpo
        meta["id"] = str(meta.get("id", ruta.stem[:2]))
        sesiones.append(meta)
    return sorted(sesiones, key=lambda s: s["id"])


def cargar_sesion(sesion_id):
    for s in cargar_sesiones():
        if s["id"] == sesion_id:
            return s
    return None


def cargar_examen(examen_id):
    ruta = DIR_EXAMENES / f"{examen_id}.json"
    if not ruta.exists():
        return None
    return json.loads(ruta.read_text(encoding="utf-8"))


def indice_preguntas():
    """Todas las preguntas de todos los exámenes, por id. Para el repaso."""
    indice = {}
    for ruta in DIR_EXAMENES.glob("*.json"):
        datos = json.loads(ruta.read_text(encoding="utf-8"))
        for p in datos.get("preguntas", []):
            indice[p["id"]] = {**p, "examen_id": datos["id"]}
    return indice


def sin_soluciones(pregunta):
    """Versión de una pregunta apta para enviar al frontend antes de corregir."""
    return {
        "id": pregunta["id"],
        "concepto": pregunta.get("concepto", ""),
        "enunciado": pregunta["enunciado"],
        "opciones": pregunta["opciones"],
    }


def glosario():
    """Términos acumulados, con la sesión que los introduce."""
    terminos = {}
    for s in cargar_sesiones():
        for t in s.get("glosario", []) or []:
            if t not in terminos:
                terminos[t] = {
                    "termino": t,
                    "sesion": s["id"],
                    "titulo_sesion": s.get("titulo", ""),
                }
    return sorted(terminos.values(), key=lambda t: t["termino"].lower())
