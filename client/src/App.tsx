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
