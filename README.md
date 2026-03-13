# Lazuli Estúdio de Pilates

Website moderno e responsivo para o Lazuli Estúdio de Pilates, localizado em Santa Cruz do Sul. Construído com tecnologias modernas para oferecer a melhor experiência aos visitantes.

## 🚀 Começando

### Pré-requisitos
- Node.js 18.x ou superior
- npm ou bun

### Instalação

```sh
# Clonar o repositório
git clone <seu-repositorio>
cd lazuli-flow

# Instalar dependências
npm install
# ou
bun install
```

### Desenvolvimento

```sh
# Iniciar servidor de desenvolvimento
npm run dev

# Abrir em http://localhost:8080
```

### Build de Produção

```sh
npm run build
npm run preview
```

## 📋 Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview local do build
- `npm run lint` - Executa o linter
- `npm test` - Executa testes unitários
- `npm run test:watch` - Modo watch para testes

## 🛠️ Tecnologias

- **Vite** - Build tool rápido e moderno
- **React 18** - Biblioteca UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn-ui** - Componentes acessíveis
- **React Router** - Roteamento
- **React Hook Form** - Gerenciamento de formulários
- **React Query** - Data fetching
- **Vitest** - Testing framework
- **Playwright** - E2E testing

## 📁 Estrutura do Projeto

```
src/
├── components/       # Componentes React
│   ├── ui/          # Componentes UI reutilizáveis
│   └── *Section.tsx # Seções da página
├── pages/           # Páginas da aplicação
├── hooks/           # Custom React hooks
├── lib/             # Utilitários e helpers
├── assets/          # Imagens e recursos
└── test/            # Testes
```

## 🌐 Deployment

O projeto pode ser deployado em qualquer plataforma que suporte Node.js:

- **Vercel** - Recomendado para Next.js/Vite projects
- **Netlify** - Suporte total a Vite
- **GitHub Pages** - Com ações do GitHub
- **Docker** - Containerizar a aplicação

## 📝 Variáveis de Ambiente

Copie `.env.example` para `.env.local` e configure conforme necessário:

```bash
cp .env.example .env.local
```

## 📄 Licença

Este projeto é de uso privado do Lazuli Estúdio de Pilates.
