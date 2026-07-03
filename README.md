# Portfólio — Jhon

Portfólio pessoal construído com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

## Como rodar localmente

```powershell
npm install
npm run dev
```

Acesse http://localhost:3000

## Como adicionar um novo projeto

Edite o arquivo `lib/projetos.ts` e adicione um novo objeto ao array `projetos`, seguindo
o mesmo formato dos existentes (slug, titulo, cliente, categoria, problema, solucao,
resultado, metricas, stack, cor). O card na home e a página de detalhe em
`/projetos/[slug]` são gerados automaticamente — não precisa criar nenhum arquivo novo.

## Antes de publicar

1. Em `components/ContatoBotoes.tsx`, troque os links de WhatsApp, e-mail, LinkedIn e
   GitHub pelos seus reais (estão com placeholders).
2. Revise os textos de cada projeto em `lib/projetos.ts` (problema/solução/resultado),
   ajustando qualquer detalhe que eu tenha inferido errado.
3. `npm run build` antes de subir pro Vercel, pra garantir que builda limpo.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animações)
- lucide-react (ícones)
- Fontes: Fraunces (display) + Inter (corpo) + JetBrains Mono (terminal/código)

## Deploy

Recomendado: GitHub + Vercel (mesmo fluxo que você já usa nos outros projetos).
