"use client";
import { useRef } from "react";
import { gsap, useIsoLayoutEffect } from "@/lib/gsap";
import { quemSomos } from "@/lib/content";

export default function About() {
  const root = useRef(null);
  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-photo.a", { yPercent: 12, rotation: -4 }, { yPercent: -10, rotation: -1, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } });
      gsap.fromTo(".about-photo.b", { yPercent: 30, rotation: 6 }, { yPercent: -25, rotation: 2, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="quem-somos" className="section about" ref={root}>
      <div className="wrap about-grid">
        <div>
          <p className="eyebrow reveal">A Primapox</p>
          <h2 className="h2 reveal">{quemSomos.titulo}</h2>
          <div className="about-text">
            {quemSomos.paragrafos.map((p, i) => (
              <p key={i} className={`reveal ${i === quemSomos.paragrafos.length - 1 ? "about-cta" : ""}`}>{p}</p>
            ))}
          </div>
        </div>
        <div className="about-photos" aria-hidden="true">
          <figure className="card about-photo a"><img src="/img/foto-25.webp" alt="" loading="lazy" decoding="async" /></figure>
          <figure className="card about-photo b"><img src="/img/foto-11.webp" alt="" loading="lazy" decoding="async" /></figure>
        </div>
      </div>
    </section>
  );
}
