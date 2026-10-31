import { aplicacoes } from "@/lib/content";

export default function Applications() {
  return (
    <section id="aplicacoes" className="section apps">
      <div className="wrap">
        <p className="eyebrow reveal">{aplicacoes.titulo}</p>
        <h2 className="h2 reveal">{aplicacoes.intro}</h2>
        <div className="alist">
          {aplicacoes.itens.map((a, i) => (
            <article key={a.nome} className="aitem reveal">
              <span className="an" style={{ color: a.cor }}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{a.nome}</h3>
              <p>{a.texto}</p>
            </article>
          ))}
        </div>
        <p className="slogan reveal">{aplicacoes.slogan}</p>
      </div>
    </section>
  );
}
