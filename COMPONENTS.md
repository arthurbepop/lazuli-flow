# Component Style Guide

Guia de padrões para criação e manutenção de componentes React.

## Estrutura de Pasta

```
src/components/
├── ui/                 # Componentes reutilizáveis (shadcn-ui)
├── sections/           # Seções da página
├── layouts/            # Layouts principais
├── common/             # Componentes comuns
└── Index.tsx           # Re-exportações
```

## Padrão de Componente Funcional

```typescript
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface YourComponentProps {
  children?: ReactNode;
  className?: string;
  // ... other props
}

/**
 * YourComponent
 * Descrição do que o componente faz
 */
const YourComponent = ({
  children,
  className,
  ...props
}: YourComponentProps) => {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {children}
    </div>
  );
};

export default YourComponent;
```

## Regras

1. **Nomes**: Use PascalCase para componentes
2. **Props**: Use interfaces TypeScript sempre
3. **Docstrings**: Adicione comentários JSDoc para componentes públicos
4. **Styling**: Use Tailwind CSS com `cn()` para merge de classes
5. **Acessibilidade**: Use atributos ARIA quando necessário

## Exemplo Completo

```typescript
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  onAction?: () => void;
}

/**
 * Card Component
 * Componente de cartão com título, descrição e ação
 * @param title - Título do cartão
 * @param description - Descrição opcional
 * @param children - Conteúdo do cartão
 * @param onAction - Callback para ação principal
 */
export const Card = ({
  title,
  description,
  children,
  className,
  onAction,
}: CardProps) => {
  return (
    <div className={cn("rounded-lg border bg-card p-6 shadow", className)}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <div className="mb-6">{children}</div>

      {onAction && (
        <Button onClick={onAction} className="w-full">
          Ação
        </Button>
      )}
    </div>
  );
};

export default Card;
```

## Boas Práticas

- ✅ Componentes pequenos e focados
- ✅ Props bem tipadas
- ✅ Documentação clara
- ✅ Acessibilidade em mente
- ✅ Testável

- ❌ Props excessivas (6+)
- ❌ Lógica complexa (extrair para hooks)
- ❌ Styles inline (usar Tailwind)
- ❌ Componentes não documentados
