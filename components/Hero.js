"use client";
import { useMemo, useRef } from "react";
import { gsap, useIsoLayoutEffect, mulberry32, POWDER, prefersReducedMotion } from "@/lib/gsap";

function makeDots(seed, count) {
  const rnd = mulberry32(seed);
  return Array.from({ length: count }, () => {
    const s = 5 + Math.pow(rnd(), 2) * 16;
    const a = rnd() * Math.PI * 2;
    const r = Math.sqrt(rnd());
    return {
      left: 2 + rnd() * 96,
      top: 3 + rnd() * 94,
      size: +s.toFixed(1),
      color: POWDER[Math.floor(rnd() * POWDER.length)],
      tx: Math.cos(a) * r, // inside logo ellipse (-1..1)
      ty: Math.sin(a) * r,
      delay: rnd() * 0.45,
      ang: rnd() * Math.PI * 2,
      dist: 0.55 + rnd() * 0.75,
    };
  });
}

export default function Hero() {
  const root = useRef(null);
  const dots = useMemo(() => makeDots(1985, 150), []);
  const burst = useMemo(() => makeDots(2026, 70), []);

  useIsoLayoutEffect(() => {
    const reduce = prefersReducedMotion();
    const ctx = gsap.context(() => {
      const stage = root.current.querySelector(".hero-stage");
      const logo = root.current.querySelector(".hero-logo");
      const els = gsap.utils.toArray(".dot");

      if (reduce) {
        gsap.set(els, { autoAlpha: 0 });
        return;
      }

      // ---------- intro: electrostatic attraction (plays on load) ----------
      const intro = gsap.timeline({ delay: 0.15 });
      const W = () => stage.clientWidth;
      const H = () => stage.clientHeight;
      const lb = () => {
        const r = logo.getBoundingClientRect();
        const s = stage.getBoundingClientRect();
        return { cx: r.left - s.left + r.width / 2, cy: r.top - s.top + r.height / 2, rx: r.width * 0.42, ry: r.height * 0.36 };
      };
      const box = lb();
      gsap.set(".hero-logo img", { autoAlpha: 0, scale: 0.55, rotation: -4 });
      gsap.set([".hero-sub", ".hero-chip", ".hero-cue"], { autoAlpha: 0, y: 24 });
      els.forEach((el, i) => {
        const d = dots[i];
        const hx = (d.left / 100) * W();
        const hy = (d.top / 100) * H();
        intro.to(el, { x: (Math.random() - 0.5) * 40, y: (Math.random() - 0.5) * 40, duration: 0.5, ease: "sine.inOut" }, 0);
        intro.to(el, { x: box.cx + d.tx * box.rx - hx, y: box.cy + d.ty * box.ry - hy, duration: 0.95, ease: "power3.in" }, 0.35 + d.delay);
        intro.to(el, { scale: 0, autoAlpha: 0, duration: 0.22, ease: "power2.in" }, 1.25 + d.delay * 0.4);
      });
      intro.to(".hero-logo img", { autoAlpha: 1, duration: 0.2 }, 1.22);
      intro.to(".hero-logo img", { scale: 1, rotation: 0, duration: 0.9, ease: "elastic.out(1, 0.55)" }, 1.22);
      intro.to(".hero-sub", { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }, 1.6);
      intro.to(".hero-chip", { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }, 1.75);
      intro.to(".hero-cue", { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }, 2.1);

      // ---------- scroll: logo leaves, powder bursts outward ----------
      const st = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top top", end: "+=120%", scrub: 0.8, pin: true },
      });
      st.to(".hero-cue", { autoAlpha: 0, duration: 0.1 }, 0);
      st.to([".hero-sub", ".hero-chip"], { autoAlpha: 0, y: -40, stagger: 0.04, duration: 0.3 }, 0.02);
      st.to(logo, { scale: 0.32, yPercent: -260, autoAlpha: 0, duration: 0.6, ease: "power2.in" }, 0.15);
      gsap.utils.toArray(".bdot").forEach((el, i) => {
        const b = burst[i];
        const dx = Math.cos(b.ang) * b.dist * W() * 0.6;
        const dy = Math.sin(b.ang) * b.dist * H() * 0.6;
        st.fromTo(el, { x: 0, y: 0, scale: 0, autoAlpha: 0 }, { x: dx, y: dy, scale: 1.4, autoAlpha: 1, duration: 0.55, ease: "power3.out" }, 0.25 + b.delay * 0.2);
        st.to(el, { autoAlpha: 0, duration: 0.2 }, 0.8);
      });
      st.fromTo(".hero-next", { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power3.out" }, 0.55);
    }, root);
    return () => ctx.revert();
  }, [dots, burst]);

  return (
    <section id="hero" className="hero" ref={root}>
      <div className="hero-stage">
        <div className="particles" aria-hidden="true">
          {dots.map((d, i) => (
            <span key={i} className="dot" style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size, marginLeft: -d.size / 2, marginTop: -d.size / 2, background: d.color }} />
          ))}
        </div>
        <div className="burst" aria-hidden="true">
          {burst.map((d, i) => (
            <span key={i} className="bdot" style={{ width: d.size, height: d.size, marginLeft: -d.size / 2, marginTop: -d.size / 2, background: d.color }} />
          ))}
        </div>
        <div className="hero-center">
          <h1 className="hero-logo">
            <img src="/img/logo.png" alt="Primapox" width="1152" height="468" />
          </h1>
          <p className="hero-sub">Pintura eletrostática com tinta em pó</p>
          <span className="chip hero-chip"><i style={{ background: "var(--red)" }} />desde 1985 · Rio de Janeiro</span>
        </div>
        <div className="hero-next">
          <p className="eyebrow">Se é metal,</p>
          <p className="display">Primapox pinta<br />e protege!</p>
        </div>
        <div className="hero-cue" aria-hidden="true"><span />Role para descobrir</div>
      </div>
    </section>
  );
}
