import { tiposDeTinta, fichaPoliester } from "@/lib/content";

export default function PaintTypes() {
  return (
    <section className="section types">
      <div className="wrap">
        <p className="eyebrow reveal">Resinas</p>
        <h2 className="h2 reveal">{tiposDeTinta.titulo}</h2>
        <div className="tgrid">
          {tiposDeTinta.itens.map((t) => (
            <article key={t.nome} className={`tcard reveal ${t.usa ? "on" : ""}`}>
              {t.usa && <span className="tbadge">Primapox usa</span>}
              <h3>{t.nome}</h3>
              <p>{t.texto}</p>
            </article>
          ))}
        </div>
        <p className="tobs reveal">{tiposDeTinta.obs}</p>

        <details className="ficha reveal">
          <summary>
            <span>Ficha técnica: {fichaPoliester.titulo}</span>
            <span className="plus" aria-hidden="true">+</span>
          </summary>
          <div className="ficha-grid">
            <div>
              <h4>Propriedades Físicas e Mecânicas</h4>
              <dl>
                {fichaPoliester.fisicas.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
            <div>
              <h4>Resistência aos Agentes Químicos</h4>
              <dl>
                {fichaPoliester.quimicos.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
          </div>
          <p className="ficha-leg">Legendas: {fichaPoliester.legendas}</p>
          <p className="ficha-leg">{fichaPoliester.fonte}</p>
        </details>
      </div>
    </section>
  );
}
