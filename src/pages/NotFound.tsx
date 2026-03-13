import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="text-center space-y-6 px-4">
        <div>
          <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
          <p className="text-2xl font-semibold text-foreground">Página não encontrada</p>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="text-base">
            <a href="/">Voltar ao Início</a>
          </Button>
        </div>

        <div className="text-sm text-muted-foreground pt-4">
          <p>Caminho solicitado: <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
