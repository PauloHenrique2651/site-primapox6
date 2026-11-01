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
- `lib/content.js` — TODOS os textos, copiados de primapox.com página por página (Home, A Primapox, Serviços,
  Manutenção, Galeria de Fotos, Fale Conosco, rodapé). Regra do cliente: só o texto original, sem acrescentar nada;
  a única mudança foi corrigir os "?" (acentos em Windows-1252). Edite aqui.
- `components/` — uma seção por arquivo, na ordem do menu do site antigo:
  1. `Hero` (#home) — canvas guiado pelo scroll: pó flutuando → forma o logo (pontos tirados dos pixels de `logo.png`)
     → logo explode → bloco "Nossos Serviços" da home. Faixas do scroll em `FORM`/`SOLID`/`BURST`.
  2. `About` (#a-primapox) — Quem Somos
  3. Serviços (#servicos), na ordem da página original: `Benefits`, `PaintTypes` (+ ficha técnica), `Colors`
     (título "COM PRIMAPOX O METAL NÃO DÁ NA PINTA!", fixado), `Destaque`, `Works` (Material, fixado),
     `Applications`, `Process` (Pré-tratamento/Pintura/Cura, fixado), `ProcessDetail` (textos + fotos Antes/Depois)
  4. `Finale` — "Se é metal, Primapox pinta e protege!" com anel de fotos (fixado)
  5. `Manutencao` (#manutencao), `Galeria` (#galeria, 46 fotos com ampliação), `Contact` (#fale-conosco), `Footer`
- `public/img` — 46 fotos da galeria, `antes.jpg`/`depois.jpg` da página Serviços, logo
- `video/` — projetos HyperFrames do vídeo (16:9 e 9:16) e o MP4 renderizado
- Motion: as cenas guiadas pelo scroll rodam para todos (inclusive celular com "reduzir movimento");
  essa preferência só desliga o que se move sozinho (deriva do pó, loop da dica, inércia do Lenis).

## Briefing (resumo)
- Estilo claro e limpo: fundo #f5f4f0 com grade de pontos, texto grafite, vermelho do logo como destaque.
- Fotos são pequenas (~480 px de altura): sempre em cartões, nunca em tela cheia.

## Pendências
- O texto original diz "há mais de 20 anos" (Quem Somos) — mantido como está, por pedido do cliente.
- Rodapé copiado do site antigo: "Praça 10, 42" e (21) 3172-2000; a página de contato diz "Praça Itapitanga 10"
  e (21) 3448-7320. Os dois estão no site como no original — confirmar com o cliente qual vale.
- Formulário de contato abre o e-mail (mailto). Para envio direto, criar `app/api/contato/route.js` com SMTP/Resend.
- Versão vertical do vídeo (video/hero916) está pronta mas não foi renderizada: `cd video/hero916 && npx hyperframes render`.
