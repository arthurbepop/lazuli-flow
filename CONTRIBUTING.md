# Contributing

Obrigado pelo interesse em contribuir para o Lazuli Pilates!

## Diretrizes

1. **Código**
   - Segua o código existente como referência
   - Use TypeScript para type safety
   - Execute `npm run lint` antes de fazer commit
   - Escreva testes para novas funcionalidades

2. **Commits**
   - Use mensagens descritivas em português ou inglês
   - Exemplo: `feat: adicionar novo componente` ou `fix: corrigir erro de layout`

3. **Pull Requests**
   - Descreva o propósito das mudanças
   - Inclua screenshots se relevante
   - Teste localmente antes de submeter

4. **Style Guide**
   - 2 espaços para indentação
   - Componentes em PascalCase
   - Funções e variáveis em camelCase
   - Use comentários em português para explicações

## Desenvolvimento

```bash
# Setup
npm install

# Desenvolvimento
npm run dev

# Linting
npm run lint

# Testes
npm run test
npm run test:watch

# Build
npm run build
```

## Estrutura do Projeto

```
src/
├── components/    # Componentes React
├── pages/        # Páginas da aplicação
├── hooks/        # Custom hooks
├── services/     # Serviços de API e lógica
├── lib/          # Utilitários e helpers
├── types/        # Tipos TypeScript compartilhados
├── assets/       # Imagens e recursos
└── test/         # Testes
```

## Precisa de Ajuda?

- Abra uma issue para bugs
- Discuta grandes mudanças antes de implementar
- Deixe comentários claros no código

Obrigado! 🙏
