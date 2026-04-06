import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="space-y-6 px-4 text-center">
        <div>
          <h1 className="mb-2 text-6xl font-bold text-primary">404</h1>
          <p className="text-2xl font-semibold text-foreground">
            Página não encontrada
          </p>
        </div>

        <p className="mx-auto max-w-md text-lg text-muted-foreground">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>

        <div className="flex justify-center">
          <Link
            to="/"
            className="rounded-full bg-gold px-6 py-3 text-base font-semibold text-accent-foreground transition-colors hover:bg-gold-light"
          >
            Voltar ao início
          </Link>
        </div>

        <div className="pt-4 text-sm text-muted-foreground">
          <p>
            Caminho solicitado:{" "}
            <code className="rounded bg-muted px-2 py-1">
              {location.pathname}
            </code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
