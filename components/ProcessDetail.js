import { processo } from "@/lib/content";

export default function ProcessDetail() {
  return (
    <section className="section detail">
      <div className="wrap detail-cols">
        {processo.map((s) => (
          <article key={s.nome} className="detail-col reveal">
            <h3>{s.nome}</h3>
            {s.textos.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
            {s.antesDepois && (
              <div className="antes-depois">
                {s.antesDepois.map((f) => (
                  <figure key={f.cap}>
                    <img src={f.src} alt={f.cap} loading="lazy" decoding="async" />
                    <figcaption>{f.cap}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
