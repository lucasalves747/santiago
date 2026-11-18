import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Home from "./pages/Home";
import TreatmentPage from "./pages/TreatmentPage";
import Tools from "./pages/Tools";
import ToolDetail from "./pages/ToolDetail";
import QuizPage from "./pages/QuizPage";
import ClassPage from "./pages/ClassPage";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import MedicalDisclaimer from "./pages/MedicalDisclaimer";
import AdminLeads from "./pages/AdminLeads";
import { TREATMENT_PAGES } from "./content/treatment";

function Shell() {
  return (
    <>
      <SiteHeader />
      <main className="sv-main">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/tratamento/acompanhamento" component={Home} />
          <Route path="/tratamento" component={Home} />
          <Route path="/tratamento/acompanhamento/atleta">
            {() => <TreatmentPage data={TREATMENT_PAGES.atleta} />}
          </Route>
          <Route path="/tratamento/acompanhamento/emagrecimento">
            {() => <TreatmentPage data={TREATMENT_PAGES.emagrecimento} />}
          </Route>
          <Route path="/tratamento/acompanhamento/empresarios">
            {() => <TreatmentPage data={TREATMENT_PAGES.empresarios} />}
          </Route>
          <Route path="/ferramentas" component={Tools} />
          <Route path="/ferramentas/gargalo-metabolico" component={QuizPage} />
          <Route path="/ferramentas/:slug">
            {(params) => <ToolDetail slug={params.slug} />}
          </Route>
          <Route path="/aula" component={ClassPage} />
          <Route path="/obrigado" component={ThankYou} />
          <Route path="/privacidade" component={Privacy} />
          <Route path="/aviso-medico" component={MedicalDisclaimer} />
          <Route path="/admin/leads" component={AdminLeads} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <SiteFooter />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Shell />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
