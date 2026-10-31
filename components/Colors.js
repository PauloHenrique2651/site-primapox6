"use client";
import { useRef } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { coresLinha1, coresLinha2 } from "@/lib/content";

const img = (n) => `/img/foto-${String(n).padStart(2, "0")}.webp`;
const WORD_COLORS = ["#c90d15", "#15873a", "#b37400", "#1673b0", "#0b2a8f", "#c90d15"];

export default function Colors() {
  const root = useRef(null);
  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const r1 = root.current.querySelector(".crow.r1");
      const r2 = root.current.querySelector(".crow.r2");
      const span = () => r1.scrollWidth - window.innerWidth;
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top top", end: "+=240%", scrub: 0.9, pin: true, invalidateOnRefresh: true },
      });
      // ida…
      tl.fromTo(r1, { x: () => window.innerWidth * 0.35 }, { x: () => -span() * 0.85, ease: "power2.out", duration: 1.4 }, 0);
      tl.fromTo(r2, { x: () => -span() - window.innerWidth * 0.35 }, { x: () => -span() * 0.15, ease: "power2.out", duration: 1.4 }, 0);
      // …e volta
      tl.to(r1, { x: () => -span() * 0.35, ease: "power2.inOut", duration: 1 }, 1.4);
      tl.to(r2, { x: () => -span() * 0.65, ease: "power2.inOut", duration: 1 }, 1.4);
      tl.fromTo(".crow .card", { rotation: (i) => (i % 2 ? -4 : 4) }, { rotation: 0, stagger: 0.02, duration: 0.9, ease: "power3.out" }, 0);
      tl.to(".crow.r1 .card", { rotation: -1.5, duration: 0.5, yoyo: true, repeat: 1, ease: "sine.inOut" }, 1.4);
      tl.to(".crow.r2 .card", { rotation: 1.5, duration: 0.5, yoyo: true, repeat: 1, ease: "sine.inOut" }, 1.4);
      WORD_COLORS.forEach((c, i) => tl.to(".cor-word", { color: c, duration: 0.15, ease: "none" }, 0.2 + i * 0.42));
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cores" className="colors" ref={root}>
      <div className="wrap colors-head">
        <div className="reveal">
          <p className="eyebrow">Qualquer cor</p>
          <h2 className="display">Qualquer <span className="cor-word">cor</span>.</h2>
        </div>
        <div className="colors-copy reveal">
          <p className="colors-lead">Acabamento que dura.</p>
          <p className="muted">As cores e os efeitos podem ser brilhante ou fosco. Tudo o que é usualmente fabricado em latão, cobre, alumínio e em chapa de ferro, pode ser executado através do processo Primapox.</p>
        </div>
      </div>
      <div className="crows" aria-hidden="true">
        <div className="crow r1">
          {coresLinha1.map((n) => (
            <figure key={n} className="card"><img src={img(n)} alt="" /></figure>
          ))}
        </div>
        <div className="crow r2">
          {coresLinha2.map((n) => (
            <figure key={n} className="card"><img src={img(n)} alt="" /></figure>
          ))}
        </div>
      </div>
    </section>
  );
}
