import { Link, useSearch } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  FileText,
  Sparkles,
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import { getTool } from "@/content/tools";
import { MEDICAL_APPLY_HREF } from "@/content/site";

export default function ThankYou() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const tool = getTool(params.get("tool") ?? "");

  return (
    <>
      <PageMeta
        title="Material liberado | Dr. Santiago Vecina"
        description="Seu material gratuito foi liberado. Baixe o PDF e veja os próximos passos."
        path="/obrigado" noindex
      />

      <section className="sv-thanks">
        <div className="sv-container sv-thanks-inner">
          <Reveal className="sv-thanks-card">
            <span className="sv-success-icon"><Check size={24} /></span>
            <p className="sv-eyebrow">Tudo certo</p>
            <h1 className="sv-display">Seu material está liberado.</h1>
            <p className="sv-thanks-text">
              {tool
                ? `O PDF “${tool.title}” está pronto para download. Se o botão não abrir, verifique o seu navegador ou solicite novamente.`
                : "Seu pedido foi recebido. Se o download não abrir, solicite novamente ou fale com a equipe."}
            </p>

            {tool?.pdfPath ? (
              <a href={tool.pdfPath} target="_blank" rel="noreferrer" className="sv-btn sv-btn-gold">
                <Download size={16} /> Baixar o PDF
              </a>
            ) : (
              <div className="sv-thanks-pending">
                <FileText size={18} />
                <p>
                  O arquivo está sendo preparado. Em instantes, você poderá baixá-lo por aqui.
                </p>
              </div>
            )}

            <div className="sv-thanks-next">
              <h2>Enquanto isso, dois próximos passos</h2>
              <div className="sv-thanks-next-grid">
                <Link href="/ferramentas" className="sv-thanks-next-card">
                  <Sparkles size={18} />
                  <div>
                    <h3>Explorar outras ferramentas</h3>
                    <p>Guias de sono, metabolismo, atleta e performance executiva.</p>
                  </div>
                  <ArrowRight size={16} />
                </Link>
                <a href={MEDICAL_APPLY_HREF} className="sv-thanks-next-card">
                  <ArrowUpRight size={18} />
                  <div>
                    <h3>Aplicar para avaliação</h3>
                    <p>Se quiser olhar para o seu caso com profundidade, comece pela aplicação.</p>
                  </div>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <p className="sv-thanks-note">
              Conteúdo educativo. Não substitui avaliação médica individual. Resultados variam.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
