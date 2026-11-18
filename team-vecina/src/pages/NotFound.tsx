import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";
import PageMeta from "@/components/PageMeta";

const NOT_FOUND_PATH = "/404";

export default function NotFound() {
  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);

    return () => robots.remove();
  }, []);

  return (
    <>
      <PageMeta
        title="Página não encontrada | Dr. Santiago Vecina"
        description="A página que você procura não existe ou foi movida."
        path="/404"
      />
      <section className="sv-not-found">
        <div className="sv-container sv-not-found-inner">
          <span className="sv-success-icon"><Compass size={22} /></span>
          <p className="sv-eyebrow">Erro 404</p>
          <h1 className="sv-display">Esta página não existe.</h1>
          <p>
            O endereço pode ter mudado ou o link estar incompleto. Você pode voltar ao início ou
            explorar as ferramentas e os programas de acompanhamento.
          </p>
          <div className="sv-not-found-actions">
            <Link href="/tratamento/acompanhamento" className="sv-btn sv-btn-gold">
              <ArrowLeft size={15} /> Voltar ao início
            </Link>
            <Link href="/ferramentas" className="sv-btn sv-btn-ghost">
              Ver ferramentas <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
