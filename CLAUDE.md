# Contexto del proyecto

Curso propio de bolsa e inversión, nivel profesional, para un inversor empírico
con experiencia real de mercado pero con huecos teóricos. No es un curso de
iniciación: el usuario ya domina análisis técnico clásico, mecánica de mercado
y el ecosistema cripto. El agujero declarado son las opciones y la teoría
formal que nunca sistematizó.

Duración: 3 meses. 5 sesiones semanales de 1 hora. 60 sesiones.

## Reglas de trabajo en este repo

- **Densidad antes que brevedad.** Cada sesión de teoría son **7.000-9.000
  palabras** de prosa densa: entre 35 y 45 minutos de lectura real. Si una
  sesión cabe en viñetas, está mal escrita. El usuario ha pagado el equivalente
  a un curso caro en tiempo: se nota o no vale nada.
- **Cada sesión lleva sus tres elementos.** No son adorno: rompen el muro de
  texto y fijan lo importante.
  - ````clave` — al menos 8 por sesión. Primera línea el título, el resto
    el cuerpo. Es lo que el lector debe retener si solo retiene una cosa.
  - ````anecdota` — entre 3 y 6 por sesión. Historia real, verificable, con
    su lección analítica explícita. Nunca decorativa.
  - ````grafico` — entre 4 y 6 por sesión. `tipo: barras` o `tipo: lineas`.
    Los datos deben ser reales o estar marcados como ilustración conceptual
    en la `nota`.
- **Nunca dar consejo de inversión personalizado.** Se enseñan marcos, no
  recomendaciones. "Así se valora una empresa", nunca "compra esta".
- **Honestidad sobre lo que no funciona.** Cada herramienta se enseña con su
  evidencia empírica y sus fallos conocidos. Si un factor dejó de funcionar
  tras publicarse, se dice. Si el 90% de compradores de opciones pierde, se
  dice y se explica por qué.
- **Terminología en inglés + glosario vivo.** Se usa el término que el usuario
  va a encontrar en un broker real (strike, theta decay, carry, drawdown), y
  se desmonta en español la primera vez. `content/glosario/` es acumulativo.
- **Nada de datos inventados.** Cifras históricas, precios y cadenas de
  opciones vienen de fuentes reales y citadas. Si no hay dato, se dice.
- **El gate es real.** Sin aprobar el examen, la siguiente sesión queda
  bloqueada en la app. No hay botón de saltar.
- **El banco de preguntas no puede tener pistas gratis.** Dos sesgos que
  aparecen solos si no se vigilan y que permiten aprobar sin saber nada:
  - **Posición.** La respuesta correcta debe repartirse a partes iguales entre
    las cuatro posiciones. Comprobar el reparto tras añadir preguntas.
  - **Longitud.** Si la correcta lleva la justificación incorporada y los
    distractores son escuetos, la longitud la delata. La justificación va en
    `explicacion`, no en la opción. Objetivo: ratio medio de longitud
    correcta/distractores por debajo de 1,20.

  Prueba de humo antes de dar por buena una tanda: responder eligiendo siempre
  la opción más larga debe suspender con holgura.

## Arquitectura

- `content/sesiones/<NN>-<slug>.md` — una sesión por archivo, numeradas 01-60.
- `content/examenes/<id>.json` — bancos de preguntas. Cada pregunta lleva
  explicación de por qué la correcta es correcta Y por qué cada distractor es
  tentador.
- `content/glosario/` — glosario acumulativo, término en inglés como clave.
- `backend/` — Python. Sirve contenido, corrige exámenes, gestiona el gate de
  progreso y el spaced repetition. SQLite en `data/`.
- `frontend/` — HTML + CSS + JS plano, sin build ni framework. ECharts y marked
  por CDN, igual que btc_indicators.

## Formato de cada sesión

Frontmatter con id, semana, día, tipo (teoria|lab|examen), título, duración y
conceptos que introduce. Cuerpo en markdown. Toda sesión de teoría termina con
"Fallos conocidos y dónde esto te engaña".

## Estructura semanal (bloques largos)

- Lun, Mar, Mié: teoría densa (50 min lectura + 10 min test de 10 preguntas)
- Jue: laboratorio (práctica con datos reales, simuladores o autopsia histórica)
- Vie: examen largo semanal (40 preguntas + 2-3 casos abiertos) + autopsia de
  fallos. Corte 80%. Suspender implica repetir la semana con un set distinto.
- Cada sesión abre con 5 preguntas de repaso espaciado, priorizando fallos.
