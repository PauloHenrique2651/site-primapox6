"use client";
import { useRef } from "react";
import { gsap, useIsoLayoutEffect, mulberry32, POWDER, prefersReducedMotion } from "@/lib/gsap";

// Scroll map of the pinned hero (timeline progress 0..1)
const FORM = [0.02, 0.44]; // powder is attracted and builds the logo
const SOLID = [0.4, 0.47]; // particles hand over to the crisp logo image
const BURST = [0.6, 1]; // logo breaks back into powder and blows outward

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const range = (p, [a, b]) => clamp01((p - a) / (b - a));
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

// Reads the logo's own pixels so the powder lands on its real shape and colours.
function sampleLogo(img, width, count) {
  const height = Math.round((width * img.naturalHeight) / img.naturalWidth);
  const c = document.createElement("canvas");
  c.width = width;
  c.height = height;
  const g = c.getContext("2d", { willReadFrequently: true });
  g.drawImage(img, 0, 0, width, height);
  const data = g.getImageData(0, 0, width, height).data;
  let opaque = 0;
  for (let i = 3; i < data.length; i += 4) if (data[i] > 140) opaque++;
  const step = Math.max(2, Math.sqrt(opaque / count));
  const rnd = mulberry32(41);
  const pts = [];
  for (let y = step / 2; y < height; y += step) {
    for (let x = step / 2; x < width; x += step) {
      const k = (Math.floor(y) * width + Math.floor(x)) * 4;
      if (data[k + 3] < 140) continue;
      const rgb = [data[k], data[k + 1], data[k + 2]];
      // the white cloud is mostly background: keep it sparse so the red and blue read first
      if (rgb[0] > 225 && rgb[1] > 225 && rgb[2] > 225 && rnd() > 0.45) continue;
      pts.push({ x: x - width / 2, y: y - height / 2, rgb });
    }
  }
  return { pts, step, height };
}

export default function Hero() {
  const root = useRef(null);
  const canvasRef = useRef(null);

  useIsoLayoutEffect(() => {
    const calm = prefersReducedMotion();
    const stage = root.current.querySelector(".hero-stage");
    const logo = root.current.querySelector(".hero-logo");
    const logoImg = logo.querySelector("img");
    const canvas = canvasRef.current;
    const ctx2d = canvas.getContext("2d");
    const powder = POWDER.map(hex);
    const mouse = { x: -9999, y: -9999, on: false };
    let parts = [];
    let W = 0, H = 0, dpr = 1, born = 0, raf = 0, visible = true;
    let tl;

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = stage.clientWidth;
      H = stage.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      const r = logo.getBoundingClientRect();
      const s = stage.getBoundingClientRect();
      const cx = r.left - s.left + r.width / 2;
      const cy = r.top - s.top + r.height / 2;
      const count = W < 700 ? 900 : W < 1200 ? 1500 : 2100;
      const { pts, step } = sampleLogo(logoImg, Math.round(r.width), count);
      const rnd = mulberry32(1985);
      // gaussian sample, so the resting powder gathers in a soft cloud instead of even confetti
      const gauss = () => (rnd() + rnd() + rnd() - 1.5) / 1.5;
      parts = pts.map((t) => {
        const ang = Math.atan2(t.y, t.x) + (rnd() - 0.5) * 1.2;
        const loose = rnd() < 0.3;
        return {
          hx: loose ? rnd() * W : cx + gauss() * W * 0.55,
          hy: loose ? rnd() * H : cy + gauss() * H * 0.5,
          tx: cx + t.x,
          ty: cy + t.y,
          trgb: t.rgb,
          prgb: powder[Math.floor(rnd() * powder.length)],
          size: 1.6 + Math.pow(rnd(), 2.2) * 5,
          tsize: step * 0.62,
          delay: rnd(),
          swirl: (rnd() - 0.5) * 0.9,
          phase: rnd() * Math.PI * 2,
          speed: 0.4 + rnd() * 0.8,
          bx: Math.cos(ang) * (0.35 + rnd() * 0.9) * W * 0.75,
          by: Math.sin(ang) * (0.35 + rnd() * 0.9) * H * 0.75 - rnd() * H * 0.15,
          ox: 0,
          oy: 0,
        };
      });
    };

    const draw = (now) => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      const p = tl ? tl.progress() : 0;
      const t = now / 1000;
      const appear = clamp01((now - born) / 1400);
      const solid = range(p, SOLID);
      const burst = range(p, BURST);
      // particles hide while the real logo is on screen, and return when it breaks
      const handoff = burst > 0 ? 1 : 1 - solid;
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx2d.clearRect(0, 0, W, H);
      if (handoff <= 0.001) return;
      const form = range(p, FORM);
      const be = easeOut(burst);
      for (let i = 0; i < parts.length; i++) {
        const q = parts[i];
        // each grain starts its trip at its own moment, so the logo builds up grain by grain
        const e = easeInOut(clamp01((form - q.delay * 0.55) / 0.45));
        const drift = calm ? 0 : 1 - e;
        const fx = Math.sin(t * q.speed + q.phase) * 14 * drift;
        const fy = Math.cos(t * q.speed * 0.8 + q.phase) * 10 * drift;
        const arc = Math.sin(e * Math.PI) * q.swirl;
        let x = q.hx + (q.tx - q.hx) * e - (q.ty - q.hy) * arc + fx;
        let y = q.hy + (q.ty - q.hy) * e + (q.tx - q.hx) * arc + fy;
        if (be > 0) {
          x += q.bx * be;
          y += q.by * be + be * be * 120;
        }
        // loose powder is pushed by the cursor, like a hand passing through the spray
        if (mouse.on && drift > 0.05) {
          const dx = x + q.ox - mouse.x, dy = y + q.oy - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 22000) {
            const f = (1 - d2 / 22000) * 6 * drift;
            const d = Math.sqrt(d2) || 1;
            q.ox += (dx / d) * f;
            q.oy += (dy / d) * f;
          }
        }
        q.ox *= 0.93;
        q.oy *= 0.93;
        x += q.ox;
        y += q.oy;
        const c = clamp01(e * 1.4 - 0.3);
        const r = q.prgb[0] + (q.trgb[0] - q.prgb[0]) * c;
        const g = q.prgb[1] + (q.trgb[1] - q.prgb[1]) * c;
        const b = q.prgb[2] + (q.trgb[2] - q.prgb[2]) * c;
        const size = (q.size + (q.tsize - q.size) * e) * (1 + be * 0.6);
        const a = appear * handoff * (1 - burst * burst) * (0.55 + 0.45 * e);
        if (a <= 0.01) continue;
        ctx2d.globalAlpha = a;
        ctx2d.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`;
        ctx2d.beginPath();
        ctx2d.arc(x, y, size, 0, 6.2832);
        ctx2d.fill();
      }
      ctx2d.globalAlpha = 1;
    };

    const onMove = (e) => {
      const s = stage.getBoundingClientRect();
      mouse.x = e.clientX - s.left;
      mouse.y = e.clientY - s.top;
      mouse.on = true;
    };
    const onLeave = () => (mouse.on = false);

    const gctx = gsap.context(() => {
      gsap.set(logoImg, { autoAlpha: 0, scale: 0.97 });
      tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current, start: "top top", end: "+=240%", scrub: 0.7, pin: true,
          onRefresh: () => logoImg.complete && build(),
          onToggle: (self) => (visible = self.isActive || self.progress < 1),
        },
      });
      tl.to(".hero-cue", { autoAlpha: 0, y: 12, duration: 0.05 }, 0.01);
      tl.to(logoImg, { autoAlpha: 1, scale: 1, duration: SOLID[1] - SOLID[0], ease: "power2.out" }, SOLID[0]);
      tl.to([".hero-sub", ".hero-chip"], { autoAlpha: 0, y: -30, stagger: 0.02, duration: 0.08 }, BURST[0] - 0.04);
      tl.to(logoImg, { autoAlpha: 0, scale: 1.04, duration: 0.03 }, BURST[0]);
      tl.fromTo(".hero-next", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.16, ease: "power3.out" }, 0.72);
      tl.to({}, { duration: 0.08 }, 0.92); // hold the closing line before the page moves on
    }, root);

    const start = () => {
      build();
      born = performance.now();
      raf = requestAnimationFrame(draw);
    };
    if (logoImg.complete && logoImg.naturalWidth) start();
    else logoImg.addEventListener("load", start, { once: true });
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      logoImg.removeEventListener("load", start);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
      gctx.revert();
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={root}>
      <div className="hero-stage">
        <canvas ref={canvasRef} className="powder" aria-hidden="true" />
        <div className="hero-center">
          <h1 className="hero-logo">
            <img src="/img/logo.png" alt="Primapox" width="1152" height="468" />
          </h1>
          <p className="hero-sub">Pintura eletrostática com tinta em pó</p>
          <span className="chip hero-chip"><i style={{ background: "var(--red)" }} />Desde 1985, no Rio de Janeiro</span>
        </div>
        <div className="hero-next">
          <p className="hero-next-lead">Se é metal,</p>
          <p className="display">Primapox pinta<br />e protege!</p>
        </div>
        <div className="hero-cue" aria-hidden="true"><span />Role para pintar</div>
      </div>
    </section>
  );
}
