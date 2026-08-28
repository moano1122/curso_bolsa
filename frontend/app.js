/* Curso de bolsa — cliente. Sin framework. */

const api = async (ruta, opciones) => {
  const r = await fetch(ruta, opciones);
  return { ok: r.ok, datos: await r.json() };
};
const post = (ruta, cuerpo) => api(ruta, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(cuerpo)
});

const $ = s => document.querySelector(s);
const contenido = $('#contenido');
const navegacion = $('#navegacion');

let CURSO = { sesiones: [], stats: {} };
let vistaActual = null;

/* ---------- navegación ---------- */

async function cargarCurso() {
  const { datos } = await api('/api/curso');
  CURSO = datos;
  pintarNav();
}

function pintarNav() {
  const semanas = {};
  CURSO.sesiones.forEach(s => (semanas[s.semana] ||= []).push(s));

  navegacion.innerHTML = Object.entries(semanas).map(([sem, lista]) => `
    <div class="semana-tit">Semana ${sem}</div>
    ${lista.map(s => {
      const marca = s.estado === 'aprobada' ? '<span class="marca ok">✓</span>'
        : s.estado === 'suspendida' ? '<span class="marca ko">✕</span>'
          : !s.desbloqueada ? '<span class="marca lock">🔒</span>' : '';
      return `<button class="item ${s.desbloqueada ? '' : 'bloqueada'}
                     ${vistaActual === s.id ? 'activa' : ''}"
                     data-sesion="${s.id}" ${s.desbloqueada ? '' : 'disabled'}>
                <span class="num">${s.id}</span>
                <span>${s.titulo}</span>${marca}
              </button>`;
    }).join('')}`).join('');

  navegacion.querySelectorAll('[data-sesion]').forEach(b =>
    b.addEventListener('click', () => abrirSesion(b.dataset.sesion)));
}

document.querySelectorAll('[data-vista]').forEach(b =>
  b.addEventListener('click', () => {
    vistaActual = null;
    b.dataset.vista === 'glosario' ? verGlosario() : verStats();
  }));

/* ---------- sesión ---------- */

async function abrirSesion(id) {
  const { ok, datos } = await api('/api/sesion/' + id);
  if (!ok) return;

  vistaActual = id;
  pintarNav();

  const meta = CURSO.sesiones.find(s => s.id === id);
  const repaso = await api('/api/repaso');
  const hayRepaso = repaso.datos.preguntas.length > 0;

  contenido.innerHTML = `
    <div class="cabecera-sesion">
      <div class="etiqueta">Semana ${datos.semana} · Día ${datos.dia} ·
        ${datos.tipo === 'lab' ? 'Laboratorio' : datos.tipo === 'examen' ? 'Examen' : 'Teoría'}</div>
      <h1>${datos.titulo}</h1>
      <p class="subtitulo">${datos.subtitulo || ''}</p>
      <div class="meta">${datos.duracion_min} min${meta && meta.nota != null
      ? ' · mejor nota: ' + Math.round(meta.nota * 100) + '%' : ''}</div>
    </div>
    ${hayRepaso && datos.tipo !== 'examen' ? `
      <div class="repaso">
        <h3>Repaso espaciado pendiente</h3>
        <p>Tienes ${repaso.datos.preguntas.length} pregunta(s) de días anteriores
        esperando. Aparecerán al principio del test de hoy, priorizando lo que fallaste.</p>
      </div>` : ''}
    <div class="lectura" id="cuerpo"></div>
    <div class="acciones">
      <button class="btn" id="ir-test">
        ${datos.tipo === 'examen' ? 'Empezar el examen' : 'Hacer el test de hoy'}
      </button>
      <span style="color:#9195a6;font-size:13px">Corte 80% · sin aprobar no se desbloquea la siguiente</span>
    </div>`;

  const cuerpo = $('#cuerpo');
  cuerpo.innerHTML = marked.parse(datos.cuerpo || '');
  Sim.renderizar(cuerpo);

  $('#ir-test').addEventListener('click', () => abrirTest(meta.examen_id, id));
  $('#principal').scrollTop = 0;
}

/* ---------- test ---------- */

async function abrirTest(examenId, sesionId) {
  const { datos } = await api('/api/test/' + examenId);
  const repaso = await api('/api/repaso');

  const idsTest = new Set(datos.preguntas.map(p => p.id));
  const extra = repaso.datos.preguntas.filter(p => !idsTest.has(p.id));
  const todas = [...extra, ...datos.preguntas];

  contenido.innerHTML = `
    <div class="cabecera-sesion">
      <div class="etiqueta">${datos.tipo === 'semanal' ? 'Examen semanal' : 'Test diario'}</div>
      <h1>${datos.titulo}</h1>
      <p class="subtitulo">${todas.length} preguntas · corte ${Math.round(datos.corte * 100)}%${extra.length ? ` · incluye ${extra.length} de repaso` : ''}</p>
    </div>
    <div id="preguntas">
      ${todas.map((p, i) => `
        <div class="pregunta" data-id="${p.id}">
          <div class="n">Pregunta ${i + 1}${p.fallos_previos ? ' · repaso' : ''}</div>
          <div class="txt">${p.enunciado}</div>
          ${p.opciones.map((o, j) => `
            <label class="opcion">
              <input type="radio" name="q-${p.id}" value="${j}">
              <span>${o}</span>
            </label>`).join('')}
        </div>`).join('')}
    </div>
    ${(datos.casos || []).length ? `<h2 style="margin-top:44px">Casos abiertos</h2>
      ${datos.casos.map(c => `
        <div class="caso" data-caso="${c.id}">
          <h3>${c.titulo}</h3>
          <div class="enun">${c.enunciado}</div>
          <textarea placeholder="Tu respuesta. Escríbela entera antes de ver la rúbrica."></textarea>
        </div>`).join('')}` : ''}
    <div class="acciones">
      <button class="btn" id="enviar">Corregir</button>
      <span id="contador" style="color:#9195a6;font-size:13px"></span>
    </div>`;

  const total = todas.length;
  const actualizar = () => {
    const n = contenido.querySelectorAll('input[type=radio]:checked').length;
    $('#contador').textContent = `${n} de ${total} respondidas`;
    $('#enviar').disabled = n < total;
  };
  contenido.querySelectorAll('.opcion').forEach(op => {
    op.addEventListener('click', () => {
      op.closest('.pregunta').querySelectorAll('.opcion')
        .forEach(o => o.classList.remove('sel'));
      op.classList.add('sel');
      setTimeout(actualizar, 0);
    });
  });
  actualizar();

  $('#enviar').addEventListener('click', async () => {
    const respuestas = {};
    contenido.querySelectorAll('.pregunta').forEach(p => {
      const sel = p.querySelector('input:checked');
      if (sel) respuestas[p.dataset.id] = parseInt(sel.value, 10);
    });

    for (const caso of contenido.querySelectorAll('.caso')) {
      await post('/api/caso', {
        examen_id: examenId, caso_id: caso.dataset.caso,
        respuesta: caso.querySelector('textarea').value, autonota: null
      });
    }

    const { datos: res } = await post('/api/enviar', {
      examen_id: examenId, sesion_id: sesionId, respuestas
    });
    await cargarCurso();
    mostrarResultado(res, datos, sesionId, examenId);
  });

  $('#principal').scrollTop = 0;
}

/* ---------- resultado ---------- */

function mostrarResultado(res, examen, sesionId, examenId) {
  const pct = Math.round(res.nota * 100);
  const siguiente = CURSO.sesiones.find(s => parseInt(s.id) === parseInt(sesionId) + 1);

  contenido.innerHTML = `
    <div class="resultado ${res.aprobado ? 'ok' : 'ko'}">
      <div class="nota">${pct}%</div>
      <div class="veredicto">${res.aprobado ? 'Aprobado' : 'Suspendido'}</div>
      <div class="detalle">${res.aciertos} de ${res.total} · corte ${Math.round(res.corte * 100)}% · intento ${res.intentos}</div>
    </div>

    ${res.semana_reiniciada ? `<div class="aviso">
      <strong>Semana ${res.semana_reiniciada} reiniciada.</strong> El progreso de las
      sesiones de esta semana se ha borrado y tienes que repetirlas. En el próximo
      intento el examen priorizará preguntas que no has visto, así que no sirve
      memorizar respuestas. No es un castigo: es lo que hace que aprobar signifique algo.
    </div>` : ''}

    ${(examen.casos || []).length ? `
      <h2>Rúbricas de los casos</h2>
      <p style="color:#9195a6;font-size:14px;line-height:1.6">
        Corrígete tú. Si un punto no está <em>explícitamente</em> en lo que escribiste,
        no cuenta. Escribirlo ahora no vale.</p>
      ${examen.casos.map(c => `
        <div class="caso">
          <h3>${c.titulo} · ${c.puntos} puntos</h3>
          <div class="rubrica"><ul>${c.rubrica.map(r => `<li>${r}</li>`).join('')}</ul></div>
        </div>`).join('')}` : ''}

    <h2>Corrección${res.detalle.some(d => !d.acierto) ? ' · fallos primero' : ''}</h2>
    ${res.detalle.map(d => `
      <div class="pregunta">
        <div class="n">${d.concepto}</div>
        <div class="txt">${d.enunciado}</div>
        ${d.opciones.map((o, j) => `
          <div class="opcion ${j === d.correcta ? 'acierto' : j === d.elegida ? 'fallo' : ''}">
            <span>${j === d.correcta ? '✓' : j === d.elegida ? '✕' : '·'}</span>
            <span>${o}</span>
          </div>`).join('')}
        <div class="corr">
          <span class="lbl">Por qué</span>${d.explicacion}
          ${!d.acierto && d.por_que_tienta
      ? `<div class="tienta"><span class="lbl">Por qué te tentó tu respuesta</span>${d.por_que_tienta}</div>`
      : ''}
        </div>
      </div>`).join('')}

    <div class="acciones">
      ${res.aprobado && siguiente
      ? `<button class="btn" id="siguiente">Siguiente: ${siguiente.titulo}</button>`
      : `<button class="btn" id="reintentar">Repasar y reintentar</button>`}
      <button class="btn sec" id="volver">Volver a la sesión</button>
    </div>`;

  const btnSig = $('#siguiente');
  if (btnSig) btnSig.addEventListener('click', () => abrirSesion(siguiente.id));
  const btnRe = $('#reintentar');
  if (btnRe) btnRe.addEventListener('click', () => abrirSesion(
    res.semana_reiniciada ? CURSO.sesiones.find(s => s.semana === res.semana_reiniciada).id : sesionId));
  $('#volver').addEventListener('click', () => abrirSesion(sesionId));
  $('#principal').scrollTop = 0;
}

/* ---------- glosario y progreso ---------- */

async function verGlosario() {
  const { datos } = await api('/api/glosario');
  pintarNav();
  contenido.innerHTML = `
    <div class="cabecera-sesion">
      <div class="etiqueta">Glosario vivo</div>
      <h1>Términos</h1>
      <p class="subtitulo">${datos.terminos.length} términos introducidos hasta ahora</p>
    </div>
    ${datos.terminos.length ? `<div class="gloss">
      ${datos.terminos.map(t => `<div>
        <div class="t">${t.termino}</div>
        <div class="s">Sesión ${t.sesion} · ${t.titulo_sesion}</div>
      </div>`).join('')}</div>`
      : '<p class="vacio">Aún no hay términos. Aparecen conforme avanzas.</p>'}`;
}

async function verStats() {
  const { datos } = await api('/api/stats');
  pintarNav();
  const aprobadas = CURSO.sesiones.filter(s => s.estado === 'aprobada').length;
  contenido.innerHTML = `
    <div class="cabecera-sesion">
      <div class="etiqueta">Progreso</div>
      <h1>Dónde vas</h1>
    </div>
    <div class="tarjetas">
      <div class="tarjeta"><div class="k">Sesiones aprobadas</div>
        <div class="v">${aprobadas} / ${CURSO.sesiones.length}</div></div>
      <div class="tarjeta"><div class="k">Preguntas respondidas</div>
        <div class="v">${datos.respuestas_totales}</div></div>
      <div class="tarjeta"><div class="k">Tasa de acierto</div>
        <div class="v">${datos.tasa != null ? Math.round(datos.tasa * 100) + '%' : '—'}</div></div>
      <div class="tarjeta"><div class="k">Repasos pendientes</div>
        <div class="v">${datos.repasos_pendientes}</div></div>
    </div>
    <h2>Puntos débiles</h2>
    ${datos.puntos_debiles.length ? `<div class="gloss">
      ${datos.puntos_debiles.map(p => `<div>
        <div class="t">${p.pregunta_id}</div>
        <div class="s">${p.fallos} fallo(s) · ${p.aciertos} acierto(s)</div>
      </div>`).join('')}</div>`
      : '<p class="vacio">Nada fallado todavía. Aparecerán aquí las preguntas que se te resistan, y el repaso espaciado las traerá de vuelta.</p>'}`;
}

/* ---------- arranque ---------- */

(async function () {
  await cargarCurso();
  const primera = CURSO.sesiones.find(s => s.desbloqueada && s.estado !== 'aprobada')
    || CURSO.sesiones[0];
  if (primera) abrirSesion(primera.id);
})();
