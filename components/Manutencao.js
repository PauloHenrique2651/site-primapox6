"use client";
import { useRef } from "react";
import { gsap, useIsoLayoutEffect } from "@/lib/gsap";
import { manutencao as m } from "@/lib/content";

export default function Manutencao() {
  const root = useRef(null);
  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // the cleaning intervals fill like a gauge as the table scrolls through the view
      gsap.fromTo(".mint-bar i", { scaleX: 0 }, {
        scaleX: 1, ease: "none", stagger: 0.15,
        scrollTrigger: { trigger: ".mint", start: "top 85%", end: "bottom 55%", scrub: 0.6 },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="manutencao" className="section manut" ref={root}>
      <div className="wrap">
        <h2 className="h2 reveal">{m.titulo}</h2>
        <div className="manut-grid">
          <div>
            <p className="manut-p reveal">{m.intro}</p>
            <ul className="manut-list reveal">
              {m.fatores.map((f) => <li key={f}>{f}</li>)}
            </ul>
            {m.paragrafos.map((p) => <p key={p} className="manut-p reveal">{p}</p>)}
          </div>
          <div className="manut-side">
            <h3 className="manut-h3 reveal">{m.intervaloTitulo}</h3>
            <p className="manut-p reveal">{m.intervaloIntro}</p>
            <ul className="mint">
              {m.intervalos.map(([zona, freq], i) => (
                <li key={zona} className="reveal">
                  <span>{zona}</span>
                  <b>{freq}</b>
                  <span className="mint-bar" aria-hidden="true"><i style={{ width: `${[100, 66, 18][i]}%` }} /></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="manut-h3 reveal">{m.ambientaisTitulo}</h3>
        <div className="manut-amb">
          {m.ambientais.map(([t, p]) => (
            <article key={t} className="manut-card reveal">
              <h4>{t}</h4>
              <p>{p}</p>
            </article>
          ))}
        </div>

        <div className="manut-grid">
          <div>
            <p className="manut-p manut-strong reveal">{m.requisitosTitulo}</p>
            <ul className="manut-list reveal">
              {m.requisitos.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>
          <div>
            {m.extras.map(([t, p]) => (
              <div key={t} className="reveal manut-extra">
                <h3 className="manut-h3">{t}</h3>
                <p className="manut-p">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
