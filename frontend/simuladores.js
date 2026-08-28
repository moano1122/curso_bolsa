/* Simuladores del curso. Canvas 2D nativo, sin librerías.
   Cada simulador se declara en el markdown con un bloque ```sim:nombre``` */

const Sim = (() => {

  const COLOR = {
    fondo: '#12131a', rejilla: '#2c2f3d', texto: '#9195a6',
    acento: '#c9a227', verde: '#4a9d6a', rojo: '#c0555a', azul: '#5a80c0'
  };

  /* ---------- utilidades de dibujo ---------- */

  function lienzo(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    return { ctx, w, h };
  }

  function ejes(ctx, w, h, m, etiquetasY, etiquetasX) {
    ctx.strokeStyle = COLOR.rejilla; ctx.lineWidth = 1;
    ctx.fillStyle = COLOR.texto; ctx.font = '10px "Segoe UI",sans-serif';

    etiquetasY.forEach(([frac, txt]) => {
      const y = m.t + (1 - frac) * (h - m.t - m.b);
      ctx.beginPath(); ctx.moveTo(m.l, y); ctx.lineTo(w - m.r, y); ctx.stroke();
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      ctx.fillText(txt, m.l - 6, y);
    });

    etiquetasX.forEach(([frac, txt]) => {
      const x = m.l + frac * (w - m.l - m.r);
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.fillText(txt, x, h - m.b + 6);
    });
  }

  function serie(ctx, datos, m, w, h, min, max, color, grosor = 1.6, alfa = 1) {
    ctx.strokeStyle = color; ctx.lineWidth = grosor;
    ctx.globalAlpha = alfa; ctx.beginPath();
    const ancho = w - m.l - m.r, alto = h - m.t - m.b;
    datos.forEach((v, i) => {
      const x = m.l + (i / (datos.length - 1)) * ancho;
      const y = m.t + (1 - (v - min) / (max - min || 1)) * alto;
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    });
    ctx.stroke(); ctx.globalAlpha = 1;
  }

  const eur = n => n >= 1e6 ? (n / 1e6).toFixed(2) + ' M€'
    : n >= 1000 ? Math.round(n).toLocaleString('es-ES') + ' €'
      : n.toFixed(2) + ' €';

  /* ---------- simulador 1: juego no ergódico ---------- */

  function ergodico(caja, cfg) {
    const p = cfg.parametros;
    const controles = [
      { k: 'fraccion', lbl: 'Fracción del capital apostada', min: 5, max: 100, paso: 5, val: p.fraccion, suf: '%' },
      { k: 'tiradas', lbl: 'Tiradas por trayectoria', min: 20, max: 300, paso: 20, val: p.tiradas, suf: '' },
      { k: 'trayectorias', lbl: 'Trayectorias simuladas', min: 50, max: 2000, paso: 50, val: p.trayectorias, suf: '' }
    ];
    montar(caja, cfg, controles, (v, ctx3) => {
      const f = v.fraccion / 100, n = v.tiradas, N = v.trayectorias;
      const sube = 1 + f * (p.ganancia / 100), baja = 1 - f * (p.perdida / 100);

      const finales = [], muestras = [];
      for (let t = 0; t < N; t++) {
        let cap = 1; const camino = t < 60 ? [1] : null;
        for (let i = 0; i < n; i++) {
          cap *= Math.random() < 0.5 ? sube : baja;
          if (camino) camino.push(cap);
        }
        finales.push(cap);
        if (camino) muestras.push(camino);
      }

      finales.sort((a, b) => a - b);
      const media = finales.reduce((a, b) => a + b, 0) / N;
      const mediana = finales[Math.floor(N / 2)];
      const supervivientes = finales.filter(x => x >= 1).length / N;

      // escala logarítmica para que se vean todas las trayectorias
      const log = x => Math.log10(Math.max(x, 1e-12));
      const { ctx, w, h } = ctx3;
      const m = { l: 46, r: 12, t: 12, b: 24 };
      const min = -6, max = Math.max(1, log(finales[N - 1]));

      ejes(ctx, w, h, m,
        [[0, '10⁻⁶'], [0.5, '10⁻³'], [(0 - min) / (max - min), '1×'], [1, '10^' + max.toFixed(0)]],
        [[0, '0'], [1, n + ' tiradas']]);

      muestras.forEach(c => {
        const col = c[c.length - 1] >= 1 ? COLOR.verde : COLOR.rojo;
        serie(ctx, c.map(log), m, w, h, min, max, col, 1, 0.28);
      });

      // línea de capital inicial
      ctx.strokeStyle = COLOR.acento; ctx.setLineDash([4, 4]); ctx.lineWidth = 1;
      const y0 = m.t + (1 - (0 - min) / (max - min)) * (h - m.t - m.b);
      ctx.beginPath(); ctx.moveTo(m.l, y0); ctx.lineTo(w - m.r, y0); ctx.stroke();
      ctx.setLineDash([]);

      return [
        ['Media del conjunto', media > 1000 ? media.toExponential(1) + '×' : media.toFixed(2) + '×', media > 1 ? COLOR.verde : COLOR.rojo],
        ['Mediana (tu trayectoria)', mediana < 0.001 ? mediana.toExponential(1) + '×' : mediana.toFixed(3) + '×', mediana > 1 ? COLOR.verde : COLOR.rojo],
        ['Acaban con ganancia', (supervivientes * 100).toFixed(1) + '%', supervivientes > 0.5 ? COLOR.verde : COLOR.rojo]
      ];
    });
  }

  /* ---------- simulador 2: comisiones y composición ---------- */

  function compuesto(caja, cfg) {
    const p = cfg.parametros;
    const controles = [
      { k: 'retorno', lbl: 'Retorno bruto anual', min: 2, max: 15, paso: 0.5, val: p.retorno, suf: '%' },
      { k: 'comision', lbl: 'Comisión anual', min: 0, max: 3, paso: 0.1, val: p.comision, suf: '%' },
      { k: 'anios', lbl: 'Horizonte', min: 5, max: 50, paso: 1, val: p.anios, suf: ' años' }
    ];
    montar(caja, cfg, controles, (v, ctx3) => {
      const C = p.capital, n = v.anios;
      const bruto = [], neto = [];
      for (let i = 0; i <= n; i++) {
        bruto.push(C * Math.pow(1 + v.retorno / 100, i));
        neto.push(C * Math.pow(1 + (v.retorno - v.comision) / 100, i));
      }
      const { ctx, w, h } = ctx3;
      const m = { l: 60, r: 12, t: 12, b: 24 };
      const max = bruto[n], min = 0;

      ejes(ctx, w, h, m,
        [[0, '0'], [0.5, eur(max / 2)], [1, eur(max)]],
        [[0, 'hoy'], [1, n + ' años']]);
      serie(ctx, bruto, m, w, h, min, max, COLOR.verde, 2);
      serie(ctx, neto, m, w, h, min, max, COLOR.rojo, 2);

      const benBruto = bruto[n] - C, benNeto = neto[n] - C;
      const perdido = benBruto - benNeto;
      const pct = benBruto > 0 ? perdido / benBruto * 100 : 0;

      return [
        ['Sin comisión', eur(bruto[n]), COLOR.verde],
        ['Con comisión', eur(neto[n]), COLOR.rojo],
        ['Se lleva la comisión', eur(perdido), COLOR.rojo],
        ['% del beneficio', pct.toFixed(1) + '%', COLOR.acento]
      ];
    });
  }

  /* ---------- simulador 3: lastre de volatilidad ---------- */

  function drag(caja, cfg) {
    const p = cfg.parametros;
    const controles = [
      { k: 'retorno_medio', lbl: 'Retorno medio aritmético', min: 2, max: 25, paso: 0.5, val: p.retorno_medio, suf: '%' },
      { k: 'volatilidad', lbl: 'Volatilidad anual', min: 2, max: 70, paso: 1, val: p.volatilidad, suf: '%' },
      { k: 'anios', lbl: 'Horizonte', min: 5, max: 40, paso: 1, val: p.anios, suf: ' años' }
    ];
    montar(caja, cfg, controles, (v, ctx3) => {
      const mu = v.retorno_medio / 100, sg = v.volatilidad / 100, n = v.anios;
      const geo = mu - sg * sg / 2;
      const ingenuo = [], real = [];
      for (let i = 0; i <= n; i++) {
        ingenuo.push(100 * Math.pow(1 + mu, i));
        real.push(100 * Math.pow(1 + Math.max(geo, -0.99), i));
      }
      const { ctx, w, h } = ctx3;
      const m = { l: 56, r: 12, t: 12, b: 24 };
      const max = ingenuo[n];

      ejes(ctx, w, h, m,
        [[0, '0'], [0.5, Math.round(max / 2) + ''], [1, Math.round(max) + '']],
        [[0, 'hoy'], [1, n + ' años']]);
      serie(ctx, ingenuo, m, w, h, 0, max, COLOR.azul, 2);
      serie(ctx, real, m, w, h, 0, max, COLOR.acento, 2);

      return [
        ['Retorno medio', (mu * 100).toFixed(1) + '%', COLOR.azul],
        ['Retorno compuesto', (geo * 100).toFixed(1) + '%', COLOR.acento],
        ['Lastre (σ²/2)', (sg * sg / 2 * 100).toFixed(1) + ' pts', COLOR.rojo],
        ['Capital final real', Math.round(real[n]) + ' (vs ' + Math.round(ingenuo[n]) + ')', COLOR.acento]
      ];
    });
  }

  /* ---------- montaje común ---------- */

  function montar(caja, cfg, controles, calcular) {
    const valores = {};
    controles.forEach(c => valores[c.k] = c.val);

    caja.innerHTML = `
      <h4>${cfg.titulo}</h4>
      <p class="desc">${cfg.descripcion || ''}</p>
      <div class="controles">
        ${controles.map(c => `
          <div class="control">
            <label>${c.lbl}: <span class="val" data-v="${c.k}">${c.val}${c.suf}</span></label>
            <input type="range" data-k="${c.k}" min="${c.min}" max="${c.max}"
                   step="${c.paso}" value="${c.val}">
          </div>`).join('')}
      </div>
      <canvas></canvas>
      <div class="salida"></div>`;

    const canvas = caja.querySelector('canvas');
    const salida = caja.querySelector('.salida');

    function redibujar() {
      const res = calcular(valores, lienzo(canvas));
      salida.innerHTML = res.map(([k, v, col]) =>
        `<div><span class="k">${k}</span>
         <span class="v" style="color:${col || '#e2e3ea'}">${v}</span></div>`).join('');
    }

    caja.querySelectorAll('input[type=range]').forEach(inp => {
      inp.addEventListener('input', () => {
        const k = inp.dataset.k;
        valores[k] = parseFloat(inp.value);
        const c = controles.find(x => x.k === k);
        caja.querySelector(`[data-v="${k}"]`).textContent = inp.value + c.suf;
        redibujar();
      });
    });

    redibujar();
    window.addEventListener('resize', redibujar);
  }

  /* ---------- API ---------- */

  const registro = { ergodico, compuesto, drag };

  function renderizar(raiz) {
    raiz.querySelectorAll('code').forEach(code => {
      const txt = code.textContent.trim();
      const m = code.className.match(/language-sim:(\w+)/);
      if (!m) return;
      const cfg = parseCfg(txt);
      const caja = document.createElement('div');
      caja.className = 'sim';
      code.closest('pre').replaceWith(caja);
      const fn = registro[m[1]];
      if (fn) fn(caja, cfg);
      else caja.textContent = 'Simulador no disponible: ' + m[1];
    });
  }

  function parseCfg(txt) {
    const cfg = { parametros: {} };
    let enParams = false;
    txt.split('\n').forEach(l => {
      if (l.trim() === 'parametros:') { enParams = true; return; }
      const m = l.match(/^\s*(\w+):\s*(.*)$/);
      if (!m) return;
      const [, k, v] = m;
      if (enParams && l.startsWith('  ')) cfg.parametros[k] = parseFloat(v);
      else cfg[k] = v;
    });
    return cfg;
  }

  return { renderizar };
})();
