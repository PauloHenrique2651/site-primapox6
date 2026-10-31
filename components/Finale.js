"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { anel, contato } from "@/lib/content";

const img = (n) => `/img/foto-${String(n).padStart(2, "0")}.webp`;

export default function Finale() {
  const root = useRef(null);
  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray(".ring .card");
      const yrs = root.current.querySelector(".yrs");
      const orbit = { a: -0.4, r: 0.25 };
      const place = () => {
        const W = window.innerWidth, H = window.innerHeight;
        const mobile = W < 900;
        const RX = (mobile ? 0.5 : 0.43) * W, RY = (mobile ? 0.44 : 0.42) * H;
        els.forEach((el, i) => {
          const ang = orbit.a + (i / els.length) * Math.PI * 2;
          gsap.set(el, { x: W / 2 + Math.cos(ang) * RX * orbit.r - el.offsetWidth / 2, y: H / 2 + Math.sin(ang) * RY * orbit.r - el.offsetHeight / 2, rotation: Math.cos(ang) * 6 });
        });
      };
      if (prefersReducedMotion()) {
        orbit.r = 1; orbit.a = 0.5; place();
        return;
      }
      place();
      ScrollTrigger.create({ trigger: root.current, start: "top top", end: "+=150%", pin: true, onRefresh: place });
      // animation starts while the section is still coming into view, so it never shows an empty screen
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 75%", end: "+=190%", scrub: 0.9 },
      });
      tl.fromTo(els, { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 0.35, stagger: 0.02, ease: "back.out(1.6)" }, 0);
      tl.to(orbit, { a: 1.2, r: 1, duration: 1.6, ease: "power2.out", onUpdate: place }, 0);
      tl.fromTo(".fin-title", { autoAlpha: 0, y: 80, scale: 0.94 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: "power4.out" }, 0.15);
      tl.fromTo(yrs, { textContent: 1 }, { textContent: 41, snap: { textContent: 1 }, duration: 0.6, ease: "power2.out" }, 0.15);
      tl.fromTo(".fin-line", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power4.out" }, 0.35);
      tl.fromTo([".fin-sub", ".fin-ctas"], { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.08, ease: "power3.out" }, 0.5);
      tl.fromTo(".fin-logo", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.35 }, 0.05);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="finale" ref={root}>
      <div className="ring" aria-hidden="true">
        {anel.map((n, i) => (
          <figure key={i} className="card"><img src={img(n)} alt="" /></figure>
        ))}
      </div>
      <div className="fin-center">
        <img className="fin-logo" src="/img/logo.png" alt="Primapox" />
        <h2 className="fin-title"><span className="yrs">41</span> anos</h2>
        <p className="fin-line">dando <span className="red">cor</span> ao metal</p>
        <p className="fin-sub">Pintura eletrostática a pó · desde 1985</p>
        <div className="fin-ctas">
          <a className="btn" href="#contato">Solicite um orçamento</a>
          <a className="btn btn-ghost" href={`tel:+55${contato.telefonePrincipal.replace(/\D/g, "")}`}>{contato.telefonePrincipal}</a>
        </div>
      </div>
    </section>
  );
}
