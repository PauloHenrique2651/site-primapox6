"use client";
import { useState } from "react";
import { contato as c, home } from "@/lib/content";

const VAZIO = { nome: "", telefone: "", email: "", assunto: "", mensagem: "" };

export default function Contact() {
  const [f, setF] = useState(VAZIO);
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const body = `${c.campos.nome} ${f.nome}\n${c.campos.telefone} ${f.telefone}\n${c.campos.email} ${f.email}\n\n${f.mensagem}`;
    window.location.href = `mailto:${c.email}?subject=${encodeURIComponent(f.assunto)}&body=${encodeURIComponent(body)}`;
  };
  const mapQ = encodeURIComponent(`${c.endereco}, ${c.cidade}`);
  const mapLink = `https://maps.google.com.br/maps?q=${mapQ}`;

  return (
    <section id="fale-conosco" className="section contact">
      <div className="wrap">
        <h2 className="h2 reveal">{c.titulo}</h2>
        <p className="contact-lead reveal">{c.chamada}</p>
        <div className="contact-grid">
          <form className="cform reveal" onSubmit={submit} onReset={() => setF(VAZIO)}>
            <label>{c.campos.nome}<input required value={f.nome} onChange={on("nome")} autoComplete="name" /></label>
            <div className="row2">
              <label>{c.campos.telefone}<input value={f.telefone} onChange={on("telefone")} autoComplete="tel" inputMode="tel" /></label>
              <label>{c.campos.email}<input type="email" required value={f.email} onChange={on("email")} autoComplete="email" /></label>
            </div>
            <label>{c.campos.assunto}<input value={f.assunto} onChange={on("assunto")} /></label>
            <label>{c.campos.mensagem}<textarea required rows={6} value={f.mensagem} onChange={on("mensagem")} /></label>
            <div className="cform-btns">
              <button className="btn btn-ghost" type="reset">{c.limpar}</button>
              <button className="btn" type="submit">{c.enviar}</button>
            </div>
          </form>
          <aside className="cinfo reveal">
            <h3>{c.empresa}</h3>
            <p>{c.endereco}<br />{c.cidade}</p>
            <p>
              {c.telefonesLinhas[0]}<br />{c.telefonesLinhas[1]}<br />
              <a href={`mailto:${c.email}`}>{c.email}</a>
            </p>
            <h4>{c.localizacao}</h4>
            <p>{home.localizacaoTexto}</p>
            <iframe
              title={c.localizacao}
              src={`https://www.google.com/maps?q=${mapQ}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a className="btn btn-sm cinfo-mais" href={mapLink} target="_blank" rel="noopener noreferrer">{home.saibaMais}</a>
          </aside>
        </div>
      </div>
    </section>
  );
}
