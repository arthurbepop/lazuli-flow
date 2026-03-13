# API Documentation

Este documento descreve como integrar e usar serviços de API no projeto.

## Configuração

### Variáveis de Ambiente

Configure no arquivo `.env.local`:

```env
VITE_API_URL=https://your-api-domain.com
VITE_API_KEY=your_api_key_here
```

## Uso Básico

### Imports

```typescript
import { api } from "@/services/api";
// ou use o hook
import { useApi } from "@/hooks";
```

### Fazer uma Request GET

```typescript
// Direct API call
const data = await api.get("/endpoint");

// Com hook
const { data, isLoading, error } = useApi();
const fetchData = async () => {
  await data.request("/endpoint");
};
```

### POST Request

```typescript
const response = await api.post("/endpoint", {
  name: "John",
  email: "john@example.com"
});
```

### PUT Request

```typescript
const response = await api.put("/endpoint/123", {
  name: "Updated Name"
});
```

### DELETE Request

```typescript
const response = await api.delete("/endpoint/123");
```

## Criar um Novo Serviço

1. Crie um novo arquivo em `src/services/`:

```typescript
// src/services/exampleService.ts
import { api } from "./api";

interface ExampleData {
  id: string;
  name: string;
}

class ExampleService {
  async getExample(id: string): Promise<ExampleData> {
    return api.get(`/example/${id}`);
  }

  async createExample(data: Partial<ExampleData>): Promise<ExampleData> {
    return api.post("/example", data);
  }
}

export const exampleService = new ExampleService();
```

2. Exporte em `src/services/index.ts`:

```typescript
export { exampleService } from "./exampleService";
```

3. Use no seu componente:

```typescript
import { exampleService } from "@/services";

const MyComponent = () => {
  const handleFetch = async () => {
    const data = await exampleService.getExample("1");
    console.log(data);
  };

  return <button onClick={handleFetch}>Fetch Data</button>;
};
```

## Error Handling

Os erros são automaticamente capturados e logados:

```typescript
try {
  const data = await api.get("/endpoint");
} catch (error) {
  console.error("Request failed:", error);
}
```

## Interceptors (Future)

Para adicionar interceptors no futuro:

1. Modifique `src/services/api.ts`
2. Adicione lógica antes/depois de requisições
3. Implemente retry logic, tokens refresh, etc.
