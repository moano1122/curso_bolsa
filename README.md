# Curso de Bolsa

Curso propio, nivel profesional. 60 sesiones, 3 meses, 1 hora al día, 5 días por
semana. Con gate real: sin aprobar el examen no se abre la siguiente sesión.

## Arrancar

Doble clic en `iniciar.bat`, o bien:

```bash
python backend/server.py
```

Y abrir http://127.0.0.1:8777

No hay que instalar nada. Solo Python (stdlib) y un navegador.

## Documentos

- `PLAN.md` — índice de las 60 sesiones.
- `CROQUIS.md` — desglose del contenido de cada sesión, términos del glosario y
  caso histórico. Incluye qué queda **fuera** del curso.
- `CLAUDE.md` — reglas de trabajo del repositorio.

## Cómo funciona la semana

| Día | Qué |
|---|---|
| Lun–Mié | Teoría densa (50 min de lectura) + test de 10 preguntas |
| Jue | Laboratorio: datos reales, simuladores, autopsias |
| Vie | Examen semanal: 40 preguntas + 3 casos abiertos |

**Corte 80%.** Suspender un test diario obliga a repetir la sesión. Suspender el
examen semanal borra el progreso de esa semana entera y hay que repetirla; el
segundo intento prioriza preguntas que no viste, así que memorizar no sirve.

Cada sesión arranca con las preguntas de repaso espaciado que estén vencidas,
priorizando lo que más has fallado. El algoritmo es un SM-2 simplificado: fallar
una pregunta la devuelve al día siguiente.

## Estudiar en dos equipos

Clona el repositorio en el otro PC y arranca igual. El contenido del curso viaja
por git; **el progreso no**: `data/curso.db` está en `.gitignore` a propósito,
porque SQLite es binario y un conflicto de merge te haría perder un historial
entero.

Para llevarte el progreso, en **Progreso → Llevarte el progreso a otro equipo**:

1. **Exportar** en el PC donde estudiaste. Descarga un JSON.
2. Cópialo al otro equipo e **Importar**.

Traspasa notas, estado de desbloqueo, historial de respuestas y el calendario de
repaso espaciado. Al importar eliges:

- **Fusionar** (por defecto): se queda con lo más avanzado de cada lado. Una
  sesión aprobada en cualquiera de los dos equipos queda aprobada, y de cada
  pregunta gana el registro con más historial. Reimportar el mismo archivo no
  duplica nada.
- **Reemplazar**: borra el progreso local y deja el del archivo.

## Estado

Semana 1 escrita y funcionando (sesiones 01–05). El resto del temario está
especificado en `CROQUIS.md` pendiente de redacción.

## Estructura

```
content/sesiones/NN-slug.md      una sesión por archivo, con frontmatter
content/examenes/*.json          bancos de preguntas con explicación de distractores
backend/server.py                servidor y lógica del gate
backend/store.py                 SQLite: progreso, respuestas, repaso espaciado
backend/content.py               carga de markdown y JSON
frontend/                        HTML/CSS/JS plano, sin build
data/curso.db                    se crea sola al arrancar
```

## Añadir una sesión

1. `content/sesiones/NN-slug.md` con frontmatter (`id`, `semana`, `dia`, `tipo`,
   `titulo`, `glosario`, `requisitos`). El `id` va **entrecomillado**: `"07"`.
2. `content/examenes/test-NN.json` con 10 preguntas. Cada una necesita
   `explicacion` y `distractores` (por qué tienta cada opción falsa).
3. Nada más. El índice, el glosario y el gate recorren el contenido solos.

Los simuladores se declaran en el markdown con un bloque cercado
` ```sim:nombre ` y se implementan en `frontend/simuladores.js`.
