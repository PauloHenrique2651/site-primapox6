import { contato } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <img src="/img/logo.png" alt="Primapox" className="ftr-logo" />
        <div>
          <p><strong>Primapox - Todos os Direitos Reservados</strong></p>
          <p>{contato.endereco} - {contato.cidade}</p>
          <p>{contato.telefonePrincipal} - {contato.email}</p>
        </div>
      </div>
    </footer>
  );
}
