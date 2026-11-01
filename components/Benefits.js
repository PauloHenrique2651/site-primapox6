import { beneficios, servicosTitulo } from "@/lib/content";
import { POWDER } from "@/lib/util";

export default function Benefits() {
  return (
    <section id="servicos" className="section benefits">
      <div className="wrap">
        <p className="eyebrow reveal">{servicosTitulo}</p>
        <h2 className="h2 reveal">{beneficios.titulo}</h2>
        <ul className="bgrid">
          {beneficios.itens.map((b, i) => (
            <li key={i} className="bitem reveal">
              <i style={{ background: POWDER[i % 6] }} />
              <p>{b}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
