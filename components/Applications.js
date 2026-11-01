import { aplicacoes } from "@/lib/content";

export default function Applications() {
  return (
    <section className="section apps">
      <div className="wrap">
        <div className="alist">
          {aplicacoes.itens.map((a) => (
            <article key={a.nome} className="aitem reveal">
              <i className="adot" style={{ background: a.cor }} aria-hidden="true" />
              <h3>{a.nome}</h3>
              <p>{a.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
