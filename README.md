# Lazuli Estúdio de Pilates

Landing page institucional do Lazuli Estúdio de Pilates, em Santa Cruz do Sul.
O projeto foi construído com Vite, React, TypeScript e Tailwind CSS, com foco em
uma experiência elegante, responsiva e orientada à conversão.

## Como rodar

```sh
npm install
npm run dev
```

O servidor local sobe em `http://localhost:8080`.

## Scripts

- `npm run dev` inicia o ambiente de desenvolvimento.
- `npm run build` gera o build de produção.
- `npm run preview` abre o build localmente.
- `npm run lint` executa o ESLint.
- `npm test` executa os testes com Vitest.

## Estrutura

```text
src/
|-- assets/
|-- components/
|-- hooks/
|-- lib/
|-- pages/
`-- test/
```

## Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis
- Vitest
- Playwright

## Observações

- O conteúdo institucional da landing está centralizado em `src/lib/constants.ts`.
- As animações compartilhadas ficam em `src/lib/motion.ts`.
- O formulário de contato abre uma conversa no WhatsApp com a mensagem já preenchida.
