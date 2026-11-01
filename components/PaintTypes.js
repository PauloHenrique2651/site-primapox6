import { tiposDeTinta, fichaPoliester } from "@/lib/content";

export default function PaintTypes() {
  return (
    <section className="section types">
      <div className="wrap">
        <h2 className="h2 reveal">{tiposDeTinta.titulo}</h2>
        <div className="tgrid">
          {tiposDeTinta.itens.map((t) => (
            <article key={t.nome} className={`tcard reveal ${t.usa ? "on" : ""}`}>
              <h3>{t.nome}</h3>
              <p>{t.texto}</p>
            </article>
          ))}
        </div>
        <p className="tobs reveal">{tiposDeTinta.obs}</p>

        <details className="ficha reveal">
          <summary>
            <span>{fichaPoliester.titulo}</span>
            <span className="plus" aria-hidden="true">+</span>
          </summary>
          <div className="ficha-grid">
            <div>
              <h4>{fichaPoliester.fisicasTitulo}</h4>
              <dl>
                {fichaPoliester.fisicas.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
            <div>
              <h4>{fichaPoliester.quimicosTitulo}</h4>
              <dl>
                {fichaPoliester.quimicos.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
          </div>
          <p className="ficha-leg"><strong>{fichaPoliester.legendasTitulo}</strong></p>
          <ul className="ficha-legendas">
            {fichaPoliester.legendas.map((l) => <li key={l}>{l}</li>)}
          </ul>
          <p className="ficha-leg">{fichaPoliester.fonte}</p>
        </details>
      </div>
    </section>
  );
}
