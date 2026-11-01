import { rodape } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <img src="/img/logo.png" alt="Primapox" className="ftr-logo" />
        <div>
          <p><strong>{rodape.direitos}</strong></p>
          <p>{rodape.endereco}</p>
          <p>{rodape.contato}</p>
        </div>
      </div>
    </footer>
  );
}
