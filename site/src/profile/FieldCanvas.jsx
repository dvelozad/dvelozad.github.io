import React from "react";

/* FieldCanvas — the hero's phase-space trajectory field.
   Particles are advected through a smooth vector field of vortex centers
   plus gentle waviness; low-alpha repaint leaves fading trails, like sampled
   trajectories in a phase portrait. Colors are read from the live CSS theme.
   Ported from the source site; re-reads the theme on a "ds-themechange"
   window event dispatched by the Nav toggle. */
export function FieldCanvas({ style = {} }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const x = c.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w, h, dpr, parts, centers, frames = 0, running = false, TC, raf;
    const mouse = { x: -1e4, y: -1e4, on: false };

    function readTheme() {
      const cs = getComputedStyle(document.documentElement);
      const light = document.documentElement.getAttribute("data-theme") === "light";
      TC = {
        base: (cs.getPropertyValue("--canvas-base") || "#22201b").trim(),
        fade: (cs.getPropertyValue("--canvas-fade") || "rgba(34,32,27,0.075)").trim(),
        cols: light
          ? ["#b5533c", "#c98a2b", "#4e8478", "#c96b52"]
          : ["#e8a24c", "#c56b54", "#6fa292", "#f0c07c"],
      };
    }
    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      const rect = c.getBoundingClientRect();
      w = c.width = Math.max(rect.width, 320) * dpr;
      h = c.height = Math.max(rect.height, 400) * dpr;
      c.style.width = "100%"; c.style.height = "100%";
      x.fillStyle = TC.base; x.fillRect(0, 0, w, h);
    }
    function seed() {
      centers = [
        { x: 0.22, y: 0.34, s: 1.05 }, { x: 0.72, y: 0.26, s: -0.85 },
        { x: 0.55, y: 0.74, s: 0.75 }, { x: 0.86, y: 0.66, s: -0.6 },
        { x: 0.10, y: 0.82, s: 0.5 },
      ];
    }
    function spawn(p, fresh) {
      p.x = Math.random() * w; p.y = Math.random() * h;
      p.life = fresh ? Math.random() * 260 : 0;
      p.max = 200 + Math.random() * 260;
      p.spd = (0.55 + Math.random() * 1.35) * dpr;
      p.c = TC.cols[(Math.random() * TC.cols.length) | 0];
    }
    function init() {
      const n = Math.min(420, Math.floor((c.getBoundingClientRect().width || 800) * 0.34));
      parts = Array.from({ length: n }, () => { const p = {}; spawn(p, true); return p; });
    }
    function field(px, py) {
      const nx = px / w, ny = py / h; let vx = 0, vy = 0;
      for (const cc of centers) {
        const dx = nx - cc.x, dy = ny - cc.y, r2 = dx * dx + dy * dy + 0.02;
        vx += cc.s * (-dy) / r2; vy += cc.s * (dx) / r2;
      }
      vx += 0.55 * Math.sin(ny * 6.283);
      vy += 0.32 * Math.cos(nx * 6.283);
      return [vx, vy];
    }
    function step() {
      x.fillStyle = TC.fade; x.fillRect(0, 0, w, h);
      for (const p of parts) {
        let [vx, vy] = field(p.x, p.y);
        if (mouse.on) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y, R = 180 * dpr, d2 = dx * dx + dy * dy;
          if (d2 < R * R) { const d = Math.sqrt(d2) + 1e-3, f = (R - d) / R; vx += (dx / d) * f * 7; vy += (dy / d) * f * 7; }
        }
        const m = Math.hypot(vx, vy) + 1e-6;
        const nxp = p.x + vx / m * p.spd, nyp = p.y + vy / m * p.spd;
        x.strokeStyle = p.c; x.globalAlpha = 0.5; x.lineWidth = 1.1 * dpr;
        x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(nxp, nyp); x.stroke();
        x.globalAlpha = 0.85; x.fillStyle = p.c;
        x.fillRect(nxp - 0.6 * dpr, nyp - 0.6 * dpr, 1.3 * dpr, 1.3 * dpr);
        p.x = nxp; p.y = nyp; p.life++;
        if (p.x < -4 || p.x > w + 4 || p.y < -4 || p.y > h + 4 || p.life > p.max) spawn(p, false);
      }
      x.globalAlpha = 1; frames++;
      if (reduce && frames >= 260) { running = false; return; }
      raf = requestAnimationFrame(step);
    }
    function start() { if (!running) { running = true; raf = requestAnimationFrame(step); } }

    readTheme(); resize(); seed(); init(); start();

    const onResize = () => { resize(); seed(); init(); frames = 0; start(); };
    const onMove = (e) => { const r = c.getBoundingClientRect(); mouse.x = (e.clientX - r.left) * dpr; mouse.y = (e.clientY - r.top) * dpr; mouse.on = true; };
    const onLeave = () => { mouse.on = false; };
    const onThemeChange = () => { readTheme(); x.fillStyle = TC.base; x.fillRect(0, 0, w, h); frames = 0; start(); };

    addEventListener("resize", onResize);
    addEventListener("mousemove", onMove);
    addEventListener("mouseleave", onLeave);
    addEventListener("ds-themechange", onThemeChange);

    return () => {
      cancelAnimationFrame(raf); running = false;
      removeEventListener("resize", onResize);
      removeEventListener("mousemove", onMove);
      removeEventListener("mouseleave", onLeave);
      removeEventListener("ds-themechange", onThemeChange);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, ...style }}
    />
  );
}
