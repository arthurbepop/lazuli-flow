import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
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
  duration: 1.35,
  lerp: 0.075,
  smoothWheel: true,
  syncTouch: true,
  syncTouchLerp: 0.09,
  touchMultiplier: 0.9,
  wheelMultiplier: 0.82,
  easing: (t: number) => 1 - Math.pow(1 - t, 3.2),
} as const;

const routerBase =
  import.meta.env.BASE_URL !== "/" && import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

const shouldUseNativeScroll = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const touchPoints = navigator.maxTouchPoints > 0;

  return prefersReducedMotion || coarsePointer || touchPoints;
};

const AppRouter = () => (
  <BrowserRouter basename={routerBase}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

const App = () => {
  const [useNativeScroll, setUseNativeScroll] = useState(shouldUseNativeScroll);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const updateScrollMode = () => setUseNativeScroll(shouldUseNativeScroll());

    updateScrollMode();

    reducedMotionQuery.addEventListener?.("change", updateScrollMode);
    coarsePointerQuery.addEventListener?.("change", updateScrollMode);
    window.addEventListener("resize", updateScrollMode);
    window.addEventListener("orientationchange", updateScrollMode);

    return () => {
      reducedMotionQuery.removeEventListener?.("change", updateScrollMode);
      coarsePointerQuery.removeEventListener?.("change", updateScrollMode);
      window.removeEventListener("resize", updateScrollMode);
      window.removeEventListener("orientationchange", updateScrollMode);
    };
  }, []);

  return (
    <ErrorBoundary>
      {useNativeScroll ? (
        <AppRouter />
      ) : (
        <ReactLenis root options={lenisOptions}>
          <AppRouter />
        </ReactLenis>
      )}
    </ErrorBoundary>
  );
};

export default App;
