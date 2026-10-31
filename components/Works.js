"use client";
import { useRef } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { obras, aplicacoes } from "@/lib/content";

const img = (n) => `/img/foto-${String(n).padStart(2, "0")}.webp`;

function Layer({ name, items }) {
  return (
    <div className={`wlayer ${name}`}>
      {items.map((c) => (
        <figure key={c.n} className="card" style={{ left: `${c.x}%`, top: `${c.y}%`, width: `${c.w}%` }}>
          <img src={img(c.n)} alt="" />
          {c.cap && <figcaption className="cap">{c.cap}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export default function Works() {
  const root = useRef(null);
  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top top", end: "+=220%", scrub: 0.9, pin: true },
        defaults: { ease: "none" },
      });
      tl.fromTo(".wlayer.perto", { xPercent: 70 }, { xPercent: -28, duration: 1 }, 0);
      tl.fromTo(".wlayer.meio", { xPercent: 45 }, { xPercent: -18, duration: 1 }, 0);
      tl.fromTo(".wlayer.longe", { xPercent: 25 }, { xPercent: -10, duration: 1 }, 0);
      tl.fromTo(".wlayer.perto .card", { rotation: 6, scale: 0.9 }, { rotation: (i) => [-2, 2, -1.5][i], scale: 1, duration: 0.5, ease: "power3.out", stagger: 0.06 }, 0);
      tl.fromTo(".wchips .chip", { autoAlpha: 0, y: 24, scale: 0.9 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.25, ease: "back.out(2)", stagger: 0.05 }, 0.12);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="obras" className="works" ref={root}>
      <div className="wstage" aria-hidden="true">
        <Layer name="longe" items={obras.longe} />
        <Layer name="meio" items={obras.meio} />
        <Layer name="perto" items={obras.perto} />
      </div>
      <div className="wfade" aria-hidden="true" />
      <div className="wrap wtext">
        <p className="eyebrow">Na sua obra</p>
        <h2 className="display">Do galpão<br />à fachada.</h2>
        <div className="wchips">
          {aplicacoes.itens.map((a) => (
            <span key={a.nome} className="chip"><i style={{ background: a.cor }} />{a.nome.replace("Na ", "")}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
