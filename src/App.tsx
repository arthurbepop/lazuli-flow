import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactNode } from "react";
import React from "react";
import { ReactLenis } from "lenis/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Application error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold">Erro</h1>
            <p className="mb-4 text-xl text-muted-foreground">
              Algo deu errado. Por favor, recarregue a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Recarregar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const lenisOptions = {
  duration: 1.15,
  smoothWheel: true,
  lerp: 0.085,
  wheelMultiplier: 0.92,
} as const;

const App = () => (
  <ErrorBoundary>
    <ReactLenis root options={lenisOptions}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  </ErrorBoundary>
);

export default App;
