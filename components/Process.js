"use client";
import { useRef } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/lib/gsap";
import { processo } from "@/lib/content";

const ROTS = [-3, 2.5, -2, 3, -2.5, 1.5];

export default function Process() {
  const root = useRef(null);
  const cards = processo.flatMap((s) => s.fotos);

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray(".deck .card");
      const steps = gsap.utils.toArray(".pstep");
      const mobile = window.matchMedia("(max-width: 900px)").matches;
      const back = mobile ? { x: -18, y: -26 } : { x: -70, y: -36 };

      gsap.set(els, { xPercent: 0, x: () => window.innerWidth * 0.8, y: 60, rotation: 14 });
      gsap.set(steps, { opacity: 0.35 });
      gsap.set(".pbar-fill", { scaleX: 0 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top top", end: "+=320%", scrub: 0.9, pin: true, invalidateOnRefresh: true },
        defaults: { ease: "power3.out" },
      });
      els.forEach((el, i) => {
        const t = 0.3 + Math.floor(i / 2) * 1.2 + (i % 2) * 0.55;
        tl.to(el, { x: 0, y: 0, rotation: ROTS[i], duration: 0.6, ease: "expo.out" }, t);
        for (let j = 0; j < i; j++) {
          const depth = i - j;
          tl.to(els[j], {
            x: back.x * depth, y: back.y * depth, scale: 1 - 0.07 * depth,
            rotation: ROTS[j] - depth * 2.2, autoAlpha: depth >= 3 ? 0 : 1 - depth * 0.12, duration: 0.6,
          }, t);
        }
      });
      steps.forEach((s, k) => {
        const t = 0.3 + k * 1.2;
        tl.to(s, { opacity: 1, duration: 0.3 }, t);
        if (k > 0) tl.to(steps[k - 1], { opacity: 0.35, duration: 0.3 }, t);
        tl.to(".pbar-fill", { scaleX: (k + 1) / 3, duration: 0.5 }, t);
      });
      tl.to({}, { duration: 0.6 }); // hold at the end
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="processo" className="process" ref={root}>
      <div className="wrap process-grid">
        <div className="process-left">
          <div className="process-head reveal">
            <p className="eyebrow">O processo</p>
            <h2 className="h2">Do metal bruto<br />à <span className="red">cor perfeita.</span></h2>
          </div>
          <div className="pbar"><div className="pbar-fill" /></div>
          <ol className="psteps">
            {processo.map((s) => (
              <li key={s.n} className="pstep">
                <b>{s.n}</b>
                <div>
                  <h3>{s.nome}</h3>
                  <p>{s.resumo}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="deck" aria-hidden="true">
          {cards.map((c, i) => (
            <figure key={i} className="card" style={{ zIndex: 10 + i }}>
              <img src={c.src} alt="" decoding="async" />
              <figcaption className="cap">{c.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
