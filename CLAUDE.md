# Site Primapox — motion no scroll

Site institucional da Primapox (pintura eletrostática com tinta em pó, desde 1985, Vigário Geral/RJ),
recriando a experiência do vídeo da hero (HyperFrames) como animação guiada pelo scroll.

## Rodar
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # produção
```

## Stack
- Next.js 14 (App Router) + React 18
- GSAP 3.12 + ScrollTrigger (cenas fixadas com `pin` + `scrub`)
- Lenis (scroll suave) — desligado quando o usuário prefere menos movimento
- Fonte Archivo local (`public/fonts`), cores e tokens em `app/globals.css`

## Onde está cada coisa
- `lib/content.js` — TODOS os textos (copiados de primapox.com: A Primapox, Serviços, Fale Conosco). Edite aqui.
- `components/` — uma seção por arquivo, na ordem do roteiro:
  1. `Hero` — canvas de partículas guiado pelo scroll: nuvem de pó flutuando (reage ao mouse) → ao rolar o pó forma o logo (pontos amostrados dos pixels do próprio `logo.png`) → logo nítido → logo explode em pó → "Se é metal, Primapox pinta e protege!". Faixas do scroll nas constantes `FORM`/`SOLID`/`BURST`.
  2. `About` — Quem Somos
  3. `Process` — deck de fotos indo e voltando + etapas 01/02/03 (fixado)
  4. `ProcessDetail` — Serviços: textos completos de cada etapa
  5. `Colors` — "Qualquer cor." com linhas de fotos indo e voltando (fixado)
  6. `Benefits`, `PaintTypes` — benefícios, tipos de tinta e ficha técnica
  7. `Works` — obras em parallax (fixado)
  8. `Applications` — Material / aplicações
  9. `Finale` — "41 anos dando cor ao metal" com anel de fotos girando (fixado)
  10. `Contact`, `Footer`
- `public/img` — 46 fotos da galeria + logo
- `video/` — projetos HyperFrames do vídeo (16:9 e 9:16) e o MP4 renderizado

## Briefing (resumo)
- Estilo claro e limpo: fundo #f5f4f0 com grade de pontos, texto grafite, vermelho do logo como destaque.
- Mensagem final: "41 anos dando cor ao metal" · "Pintura eletrostática a pó desde 1985".
- Fotos são pequenas (~480 px de altura): sempre em cartões, nunca em tela cheia.

## Pendências
- Página "Manutenção" do site antigo não foi copiada (falta o texto).
- "Quem Somos" diz "há mais de 20 anos" (texto antigo do site) e o resto do site diz 41 anos — confirmar com o cliente.
- Endereço: a página de contato diz "Praça Itapitanga 10"; o rodapé antigo dizia "Praça 10, 42" e (21) 3172-2000. Usei os dados da página de contato.
- Formulário de contato abre o e-mail (mailto). Para envio direto, criar uma rota `app/api/contato/route.js` com SMTP/Resend.
- Versão vertical do vídeo (video/hero916) está pronta mas não foi renderizada: `cd video/hero916 && npx hyperframes render`.
