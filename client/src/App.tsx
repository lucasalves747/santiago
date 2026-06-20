import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";



import { useEffect } from "react";

function App() {
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8081/save-html', {
        method: 'POST',
        body: document.documentElement.outerHTML
      }).catch(e => console.error("DOM Extractor error:", e));
    }, 4500);
  }, []);

  // Rola para a âncora do hash (#quiz) de forma robusta — necessário porque,
  // no navegador interno do Instagram/ManyChat, a página tenta rolar antes do
  // React montar a seção e antes das imagens do hero carregarem, caindo no topo.
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    let attempts = 0;
    let hits = 0;
    const timer = window.setInterval(() => {
      attempts++;
      let el: Element | null = null;
      try {
        el = document.querySelector(hash);
      } catch {
        // hash inválido como seletor — aborta
        window.clearInterval(timer);
        return;
      }
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        hits++;
        // re-rola algumas vezes para compensar imagens/animações que carregam depois
        if (hits >= 8) window.clearInterval(timer);
      }
      if (attempts >= 50) window.clearInterval(timer);
    }, 150);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Home />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
