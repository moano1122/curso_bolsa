/* Componentes de lectura: ideas clave, anécdotas y gráficas estáticas.
   Se declaran en el markdown con bloques cercados. Canvas 2D nativo. */

const Comp = (() => {

  const COLOR = {
    rejilla: '#2c2f3d', texto: '#9195a6', acento: '#c9a227',
    verde: '#4a9d6a', rojo: '#c0555a', azul: '#5a80c0', violeta: '#8a72b8'
  };
  const PALETA = [COLOR.acento, COLOR.azul, COLOR.verde, COLOR.rojo, COLOR.violeta];

  const inline = t => t
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>');

  /* ---------- idea clave y anécdota ---------- */

  function bloqueTexto(code, clase, icono, etiqueta) {
    const lineas = code.textContent.replace(/\s+$/, '').split('\n');
    const titulo = lineas.shift().trim();
    const cuerpo = lineas.join('\n').trim();
    const caja = document.createElement('div');
    caja.className = clase;
    caja.innerHTML = `
      <div class="cab"><span class="ico">${icono}</span><span class="et">${etiqueta}</span></div>
      <div class="tit">${inline(titulo)}</div>
      ${cuerpo ? `<div class="cue">${cuerpo.split(/\n\s*\n/)
        .map(p => `<p>${inline(p.replace(/\n/g, ' '))}</p>`).join('')}</div>` : ''}`;
    code.closest('pre').replaceWith(caja);
  }

  /* ---------- gráficas ---------- */

  function lienzo(canvas, alto) {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth, h = alto;
    canvas.style.height = h + 'px';
    canvas.width = w * dpr; canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    return { ctx, w, h };
  }

  const fmt = (v, f) => f === '%' ? v.toFixed(1) + '%'
    : f === 'x' ? v.toFixed(1) + '×'
      : f === 'eur' ? (Math.abs(v) >= 1000 ? Math.round(v).toLocaleString('es-ES') : v.toFixed(0)) + ' €'
        : Number.isInteger(v) ? v + '' : v.toFixed(1);

  function barras(caja, cfg) {
    const canvas = caja.querySelector('canvas');
    const dibujar = () => {
      const { ctx, w, h } = lienzo(canvas, 230);
      const etiquetas = cfg.etiquetas, valores = cfg.valores;
      const m = { l: 54, r: 14, t: 14, b: 46 };
      const hayNeg = valores.some(v => v < 0);
      const max = Math.max(...valores, 0), min = hayNeg ? Math.min(...valores) : 0;
      const rango = (max - min) || 1;
      const alto = h - m.t - m.b, ancho = w - m.l - m.r;
      const yDe = v => m.t + (1 - (v - min) / rango) * alto;

      ctx.strokeStyle = COLOR.rejilla; ctx.lineWidth = 1;
      ctx.fillStyle = COLOR.texto; ctx.font = '10px "Segoe UI",sans-serif';
      [0, 0.5, 1].forEach(f => {
        const v = min + f * rango, y = yDe(v);
        ctx.beginPath(); ctx.moveTo(m.l, y); ctx.lineTo(w - m.r, y); ctx.stroke();
        ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
        ctx.fillText(fmt(v, cfg.formato), m.l - 7, y);
      });

      const paso = ancho / valores.length, grosor = Math.min(52, paso * 0.6);
      valores.forEach((v, i) => {
        const x = m.l + paso * i + (paso - grosor) / 2;
        const y0 = yDe(0), y1 = yDe(v);
        ctx.fillStyle = cfg.resaltar === i ? COLOR.acento
          : v < 0 ? COLOR.rojo : PALETA[i % PALETA.length];
        ctx.globalAlpha = cfg.resaltar != null && cfg.resaltar !== i ? 0.45 : 1;
        ctx.fillRect(x, Math.min(y0, y1), grosor, Math.abs(y1 - y0) || 1);
        ctx.globalAlpha = 1;

        ctx.fillStyle = '#e2e3ea'; ctx.font = '600 11px "Segoe UI",sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = v < 0 ? 'top' : 'bottom';
        ctx.fillText(fmt(v, cfg.formato), x + grosor / 2, v < 0 ? y1 + 4 : y1 - 5);

        ctx.fillStyle = COLOR.texto; ctx.font = '10.5px "Segoe UI",sans-serif';
        ctx.textBaseline = 'top';
        String(etiquetas[i]).split(' / ').forEach((ln, k) =>
          ctx.fillText(ln, x + grosor / 2, h - m.b + 8 + k * 13));
      });
    };
    dibujar(); window.addEventListener('resize', dibujar);
  }

  function lineas(caja, cfg) {
    const canvas = caja.querySelector('canvas');
    const dibujar = () => {
      const { ctx, w, h } = lienzo(canvas, 250);
      const m = { l: 56, r: 14, t: 14, b: 44 };
      const todos = cfg.series.flatMap(s => s.datos);
      const max = Math.max(...todos), min = Math.min(...todos, 0);
      const rango = (max - min) || 1;
      const alto = h - m.t - m.b, ancho = w - m.l - m.r;

      ctx.strokeStyle = COLOR.rejilla; ctx.lineWidth = 1;
      ctx.fillStyle = COLOR.texto; ctx.font = '10px "Segoe UI",sans-serif';
      [0, 0.5, 1].forEach(f => {
        const v = min + f * rango, y = m.t + (1 - f) * alto;
        ctx.beginPath(); ctx.moveTo(m.l, y); ctx.lineTo(w - m.r, y); ctx.stroke();
        ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
        ctx.fillText(fmt(v, cfg.formato), m.l - 7, y);
      });

      const n = cfg.x.length;
      cfg.x.forEach((etq, i) => {
        if (n > 8 && i % Math.ceil(n / 7) !== 0 && i !== n - 1) return;
        const x = m.l + (i / (n - 1)) * ancho;
        ctx.textAlign = 'center'; ctx.textBaseline = 'top';
        ctx.fillText(etq, x, h - m.b + 8);
      });

      cfg.series.forEach((s, k) => {
        const col = PALETA[k % PALETA.length];
        ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.beginPath();
        s.datos.forEach((v, i) => {
          const x = m.l + (i / (n - 1)) * ancho;
          const y = m.t + (1 - (v - min) / rango) * alto;
          i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        });
        ctx.stroke();
        // etiqueta al final de la serie
        const yUlt = m.t + (1 - (s.datos[n - 1] - min) / rango) * alto;
        ctx.fillStyle = col; ctx.font = '600 11px "Segoe UI",sans-serif';
        ctx.textAlign = 'right'; ctx.textBaseline = 'bottom';
        ctx.fillText(s.nombre, w - m.r - 2, yUlt - 6);
      });

      if (cfg.etiqueta_x) {
        ctx.fillStyle = COLOR.texto; ctx.font = '10px "Segoe UI",sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
        ctx.fillText(cfg.etiqueta_x, m.l + ancho / 2, h - 4);
      }
    };
    dibujar(); window.addEventListener('resize', dibujar);
  }

  function grafico(code) {
    const cfg = parseGrafico(code.textContent);
    const caja = document.createElement('figure');
    caja.className = 'grafico';
    caja.innerHTML = `
      ${cfg.titulo ? `<figcaption class="tit">${inline(cfg.titulo)}</figcaption>` : ''}
      <canvas></canvas>
      ${cfg.nota ? `<figcaption class="nota">${inline(cfg.nota)}</figcaption>` : ''}`;
    code.closest('pre').replaceWith(caja);
    (cfg.tipo === 'lineas' ? lineas : barras)(caja, cfg);
  }

  function parseGrafico(txt) {
    const cfg = { tipo: 'barras', series: [], formato: '' };
    txt.split('\n').forEach(l => {
      const m = l.match(/^\s*(\w+):\s*(.*)$/);
      if (!m) return;
      const [, k, v] = m;
      if (k === 'serie') {
        const [nombre, datos] = v.split('|');
        cfg.series.push({
          nombre: nombre.trim(),
          datos: datos.split(',').map(x => parseFloat(x))
        });
      } else if (k === 'valores') {
        cfg.valores = v.split(',').map(x => parseFloat(x));
      } else if (k === 'etiquetas' || k === 'x') {
        cfg[k] = v.split(',').map(x => x.trim());
      } else if (k === 'resaltar') {
        cfg.resaltar = parseInt(v, 10);
      } else {
        cfg[k] = v.trim();
      }
    });
    return cfg;
  }

  /* ---------- API ---------- */

  function renderizar(raiz) {
    raiz.querySelectorAll('code').forEach(code => {
      const c = code.className;
      if (/language-clave\b/.test(c)) bloqueTexto(code, 'clave', '💡', 'Idea clave');
      else if (/language-anecdota\b/.test(c)) bloqueTexto(code, 'anecdota', '📖', 'Del parqué');
      else if (/language-grafico\b/.test(c)) grafico(code);
    });
  }

  return { renderizar };
})();
