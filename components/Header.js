"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, useIsoLayoutEffect } from "@/lib/gsap";
import { contato } from "@/lib/content";

const links = [
  ["#quem-somos", "A Primapox"],
  ["#processo", "Processo"],
  ["#servicos", "Serviços"],
  ["#aplicacoes", "Aplicações"],
  ["#contato", "Fale Conosco"],
];

export default function Header() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // header logo appears once the hero logo has burst back into powder (hero pin is 240% long)
      gsap.fromTo(
        ".hdr-logo",
        { autoAlpha: 0, y: -8 },
        {
          autoAlpha: 1, y: 0, ease: "none",
          scrollTrigger: { trigger: "#hero", start: "top+=150% top", end: "top+=185% top", scrub: true },
        }
      );
      gsap.to(ref.current, {
        backgroundColor: "rgba(245,244,240,0.86)",
        boxShadow: "0 1px 0 rgba(20,23,28,0.08)",
        scrollTrigger: { trigger: "#hero", start: "top+=5% top", end: "top+=20% top", scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <header ref={ref} className={`hdr ${open ? "is-open" : ""}`}>
      <a href="#hero" className="hdr-logo" aria-label="Primapox — início">
        <img src="/img/logo.png" alt="Primapox" />
      </a>
      <nav id="menu" className="hdr-nav" aria-label="Principal">
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <a className="btn btn-sm" href={`tel:+55${contato.telefonePrincipal.replace(/\D/g, "")}`}>
        {contato.telefonePrincipal}
      </a>
      <button
        type="button" className="hdr-toggle" aria-expanded={open} aria-controls="menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((v) => !v)}
      >
        <span /><span />
      </button>
    </header>
  );
}
