import { beneficios } from "@/lib/content";
import { POWDER } from "@/lib/util";

export default function Benefits() {
  return (
    <section className="section benefits">
      <div className="wrap">
        <p className="eyebrow reveal">Por que tinta em pó</p>
        <h2 className="h2 reveal">{beneficios.titulo}</h2>
        <ul className="bgrid">
          {beneficios.itens.map((b, i) => (
            <li key={i} className="bitem reveal">
              <i style={{ background: POWDER[i % 6] }} />
              <span className="bn">{String(i + 1).padStart(2, "0")}</span>
              <p>{b}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
