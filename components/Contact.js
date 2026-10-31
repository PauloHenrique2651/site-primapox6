"use client";
import { useState } from "react";
import { contato } from "@/lib/content";

export default function Contact() {
  const [f, setF] = useState({ nome: "", telefone: "", email: "", assunto: "", mensagem: "" });
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const body = `Nome: ${f.nome}\nTelefone: ${f.telefone}\nE-mail: ${f.email}\n\n${f.mensagem}`;
    window.location.href = `mailto:${contato.email}?subject=${encodeURIComponent(f.assunto || "Contato pelo site")}&body=${encodeURIComponent(body)}`;
  };
  const mapQ = encodeURIComponent(`${contato.endereco}, ${contato.cidade}`);

  return (
    <section id="contato" className="section contact">
      <div className="wrap">
        <p className="eyebrow reveal">Fale Conosco</p>
        <h2 className="h2 reveal">Contato</h2>
        <p className="contact-lead reveal">{contato.chamada}</p>
        <div className="contact-grid">
          <form className="cform reveal" onSubmit={submit}>
            <label>Nome:<input required value={f.nome} onChange={on("nome")} autoComplete="name" /></label>
            <div className="row2">
              <label>Telefone:<input value={f.telefone} onChange={on("telefone")} autoComplete="tel" inputMode="tel" /></label>
              <label>E-mail:<input type="email" required value={f.email} onChange={on("email")} autoComplete="email" /></label>
            </div>
            <label>Assunto:<input value={f.assunto} onChange={on("assunto")} /></label>
            <label>Mensagem:<textarea required rows={5} value={f.mensagem} onChange={on("mensagem")} /></label>
            <button className="btn" type="submit">Enviar mensagem</button>
          </form>
          <aside className="cinfo reveal">
            <h3>Primapox</h3>
            <p>{contato.endereco}<br />{contato.cidade}</p>
            <p>Tels.: {contato.telefones.join(" / ")}</p>
            <p><a href={`mailto:${contato.email}`}>{contato.email}</a></p>
            <h4>Localização</h4>
            <iframe
              title="Mapa: Primapox"
              src={`https://www.google.com/maps?q=${mapQ}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
