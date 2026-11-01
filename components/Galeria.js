"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, useIsoLayoutEffect } from "@/lib/gsap";
import { galeria } from "@/lib/content";

export default function Galeria() {
  const root = useRef(null);
  const dlg = useRef(null);
  const [atual, setAtual] = useState(-1);
  const total = galeria.fotos.length;

  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // each column drifts at its own speed while the grid scrolls past
      gsap.utils.toArray(".gcol").forEach((col, i) => {
        gsap.fromTo(col, { yPercent: [6, -4, 9, -2][i % 4] }, {
          yPercent: [-6, 4, -9, 2][i % 4], ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const d = dlg.current;
    if (atual >= 0 && !d.open) d.showModal();
    if (atual < 0 && d.open) d.close();
  }, [atual]);

  useEffect(() => {
    if (atual < 0) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") setAtual((a) => (a + 1) % total);
      if (e.key === "ArrowLeft") setAtual((a) => (a - 1 + total) % total);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [atual, total]);

  // four columns, photos dealt in order so the sequence still reads left to right
  const cols = [0, 1, 2, 3].map((c) => galeria.fotos.map((src, i) => [src, i]).filter(([, i]) => i % 4 === c));

  return (
    <section id="galeria" className="section galeria" ref={root}>
      <div className="wrap">
        <h2 className="h2 reveal">{galeria.titulo}</h2>
        <div className="ggrid">
          {cols.map((col, c) => (
            <div key={c} className="gcol">
              {col.map(([src, i]) => (
                <button key={src} type="button" className="gitem" onClick={() => setAtual(i)} aria-label={`${galeria.titulo} ${i + 1}/${total}`}>
                  <img src={src} alt="" loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <dialog ref={dlg} className="glight" onClose={() => setAtual(-1)} onClick={(e) => e.target === dlg.current && setAtual(-1)}>
        {atual >= 0 && (
          <>
            <img src={galeria.fotos[atual]} alt={`${galeria.titulo} ${atual + 1}/${total}`} />
            <button type="button" className="gl-btn gl-x" onClick={() => setAtual(-1)} aria-label="Fechar">×</button>
            <button type="button" className="gl-btn gl-prev" onClick={() => setAtual((atual - 1 + total) % total)} aria-label="Anterior">‹</button>
            <button type="button" className="gl-btn gl-next" onClick={() => setAtual((atual + 1) % total)} aria-label="Próxima">›</button>
            <span className="gl-n">{atual + 1} / {total}</span>
          </>
        )}
      </dialog>
    </section>
  );
}
