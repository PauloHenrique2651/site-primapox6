import { processo, destaque } from "@/lib/content";

export default function ProcessDetail() {
  return (
    <section id="servicos" className="section detail">
      <div className="wrap">
        <p className="eyebrow reveal">Serviços</p>
        <h2 className="h2 reveal">{destaque.titulo}</h2>
        <div className="detail-intro">
          {destaque.paragrafos.map((p, i) => (
            <p key={i} className="reveal">{p}</p>
          ))}
        </div>
        <div className="detail-cols">
          {processo.map((s) => (
            <article key={s.n} className="detail-col reveal">
              <span className="detail-n">{s.n}</span>
              <h3>{s.nome}</h3>
              {s.textos.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
