# Guia de Setup do Projeto

Instruções detalhadas para configurar o ambiente de desenvolvimento local.

## Pré-requisitos

- **Node.js**: 18.17.0+ (use [nvm](https://github.com/nvm-sh/nvm) para gerenciar versões)
- **npm**: 9.6.0+ ou **bun**: 1.0.0+
- **Git**: Para controle de versão

## Instalação Inicial

### 1. Clone o Repositório

```bash
git clone <seu-repositorio>
cd lazuli-flow
```

### 2. Use a Versão Correta do Node

```bash
# Com nvm (recomendado)
nvm install
nvm use

# Ou instale manualmente: Node 18.17.0+
node --version  # Verifique
```

### 3. Instale as Dependências

```bash
# Com npm
npm install

# Ou com bun (mais rápido)
bun install
```

### 4. Configure Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Abra e edite .env.local com seus valores
# Exemplo:
# VITE_API_URL=https://api.example.com
# VITE_API_KEY=your_key_here
```

## Desenvolvimento

### Iniciar Servidor Local

```bash
npm run dev
```

Acesse: **http://localhost:8080**

### Comandos Úteis

```bash
# Verificar código (lint e type-check)
npm run lint

# Executar testes
npm run test

# Modo watch para testes
npm run test:watch

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Configuração do VS Code (Recomendado)

### Extensões Recomendadas

Instale estas extensões para melhor desenvolvimento:

1. **Prettier** - Formatação automática
2. **ESLint** - Linting
3. **Volar** - Suporte Vue/React
4. **Tailwind CSS IntelliSense** - Auto-complete do Tailwind
5. **Thunder Client** ou **REST Client** - Testar APIs

### Arquivo `.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### Arquivo `.vscode/extensions.json`

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "vue.volar",
    "bradlc.vscode-tailwindcss"
  ]
}
```

## Build e Deploy

### Build para Produção

```bash
npm run build
```

Isso gera a pasta `dist/` pronta para upload.

### Preview Local do Build

```bash
npm run preview
```

## Troubleshooting

### Problema: "Module not found"

**Solução:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problema: Porta 8080 já está em uso

**Solução:** Altere a porta em `vite.config.ts`:
```typescript
server: {
  port: 3000,  // Ou outra porta
}
```

### Problema: TypeScript errors

**Solução:**
```bash
# Reinicie o servidor TS do VS Code
Ctrl+Shift+P > TypeScript: Restart TS Server
```

### Problema: Prettier/ESLint não funciona

**Solução:**
```bash
npm install
npm run lint
```

## Git Workflow

```bash
# Criar nova branch
git checkout -b feature/sua-feature

# Fazer commits
git add .
git commit -m "feat: descrição da mudança"

# Push
git push origin feature/sua-feature

# Criar Pull Request
```

## Recursos

- [Documentação Vite](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn-ui](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Suporte

Para dúvidas ou problemas:
1. Verifique a aba Issues do repositório
2. Abra uma nova Issue detalhando o problema
3. Envie um Pull Request com a solução

---

**Status do Projeto**: ✅ Pronto para desenvolvimento

Boa sorte! 🚀
