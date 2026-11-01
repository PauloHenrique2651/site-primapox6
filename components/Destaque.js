import { destaque } from "@/lib/content";

// Os dois parágrafos que seguem "COM PRIMAPOX O METAL NÃO DÁ NA PINTA!" (título fica na cena de cores)
export default function Destaque() {
  return (
    <section className="section destaque">
      <div className="wrap destaque-grid">
        {destaque.paragrafos.map((p, i) => (
          <p key={i} className="reveal">{p}</p>
        ))}
      </div>
    </section>
  );
}
