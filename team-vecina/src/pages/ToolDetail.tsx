import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  FileText,
  ShieldCheck,
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import NotFound from "@/pages/NotFound";
import { getTool, TOOLS } from "@/content/tools";
import { DISCLAIMER } from "@/content/site";

type ToolDetailProps = {
  slug: string;
};

export default function ToolDetail({ slug }: ToolDetailProps) {
  const tool = getTool(slug);

  if (!tool) {
    return <NotFound />;
  }

  const related = TOOLS.filter(
    (item) => item.slug !== tool.slug && item.language === tool.language,
  ).slice(0, 3);

  return (
    <>
      <PageMeta
        title={tool.seoTitle}
        description={tool.seoDescription}
        path={`/ferramentas/${tool.slug}`}
        image="/images/image-1.webp"
      />

      <section className="sv-tool-hero">
        <div className="sv-container">
          <Reveal>
            <Link href="/ferramentas" className="sv-back-link">
              <ArrowLeft size={14} /> Biblioteca de ferramentas
            </Link>
          </Reveal>
          <div className="sv-tool-hero-grid">
            <div className="sv-tool-hero-copy">
              <div className="sv-tool-meta-row">
                <span className="sv-tool-language">Guia gratuito</span>
                <span>{tool.format}</span>
              </div>
              <h1 className="sv-display sv-tool-title">{tool.title}</h1>
              <p className="sv-tool-subtitle-large">{tool.subtitle}</p>
              <p className="sv-tool-description">{tool.description}</p>
              <div className="sv-tool-hero-actions">
                <a href="#baixar" className="sv-btn sv-btn-gold">
                  Baixar gratuitamente <Download size={16} />
                </a>
                <Link href="/ferramentas" className="sv-btn sv-btn-ghost">
                  Ver outros materiais <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <Reveal className="sv-tool-cover-wrap" delay={0.1}>
              <div className="sv-tool-cover">
                <div className="sv-tool-cover-top">
                  <span className="sv-mark">SV</span>
                  <span>Guia gratuito</span>
                </div>
                <div className="sv-tool-cover-middle">
                  <p>Performance Integral</p>
                  <h2>{tool.shortTitle}</h2>
                  <span className="sv-tool-cover-rule" />
                  <p className="sv-tool-cover-sub">{tool.subtitle}</p>
                </div>
                <div className="sv-tool-cover-bottom">
                  <span>Dr. Santiago Vecina</span>
                  <span>{tool.pages} páginas</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sv-tool-content">
        <div className="sv-container">
          <div className="sv-tool-content-grid">
            <Reveal>
              <p className="sv-eyebrow">O que você vai encontrar</p>
              <h2 className="sv-display sv-subsection-title">Conteúdo direto, sem enrolação.</h2>
              <ul className="sv-check-list">
                {tool.bullets.map((bullet) => (
                  <li key={bullet}><Check size={16} /> {bullet}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="sv-eyebrow">Para quem é</p>
              <h2 className="sv-display sv-subsection-title">Talvez seja para você se…</h2>
              <ul className="sv-check-list sv-check-list-soft">
                {tool.forWhom.map((item) => (
                  <li key={item}><span className="sv-dot" /> {item}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="sv-tool-inside">
            <Reveal>
              <p className="sv-eyebrow">Dentro do material</p>
            </Reveal>
            <div className="sv-tool-inside-grid">
              {tool.inside.map((item, index) => (
                <Reveal key={item} className="sv-tool-inside-card" delay={index * 0.05}>
                  <span className="sv-card-number">0{index + 1}</span>
                  <FileText size={18} />
                  <h3>{item}</h3>
                </Reveal>
              ))}
            </div>
          </div>

          <section className="sv-tool-form-section" id="baixar">
            <Reveal className="sv-tool-form-copy">
              <p className="sv-eyebrow">Acesso gratuito</p>
              <h2 className="sv-display">Receba o material no seu e-mail.</h2>
              <p>
                Preencha o formulário para liberar o PDF. Você também pode receber conteúdos
                pontuais sobre performance, metabolismo e recuperação. Sem spam.
              </p>
              <div className="sv-tool-form-points">
                <span><Download size={15} /> Download imediato</span>
                <span><ShieldCheck size={15} /> Dados tratados com confidencialidade</span>
                <span><FileText size={15} /> Material educativo</span>
              </div>
            </Reveal>
            <Reveal className="sv-tool-form-wrap" delay={0.08}>
              <LeadForm
                source={`ferramenta-${tool.slug}`}
                locale="pt"
                interest={
                  tool.slug.includes("atleta") || tool.slug.includes("triathlon")
                    ? "athlete"
                    : tool.slug.includes("emagrecimento") || tool.slug.includes("metabolic")
                      ? "weight_loss"
                      : tool.slug.includes("executive") || tool.slug.includes("performance")
                        ? "executive"
                        : "general"
                }
                redirectTo={`/obrigado?tool=${tool.slug}`}
                title="Receber o guia"
                subtitle="Preencha seus dados para liberar o PDF."
                buttonLabel="Baixar o guia"
              />
            </Reveal>
          </section>

          <p className="sv-legal-note">{DISCLAIMER}</p>

          {related.length > 0 && (
            <div className="sv-related">
              <div className="sv-related-heading">
                <p className="sv-eyebrow">Continue explorando</p>
                <Link href="/ferramentas" className="sv-text-link">
                  Ver biblioteca completa <ArrowUpRight size={15} />
                </Link>
              </div>
              <div className="sv-related-grid">
                {related.map((item) => (
                  <Link key={item.slug} href={`/ferramentas/${item.slug}`} className="sv-related-card">
                    <span>{item.format}</span>
                    <h3>{item.shortTitle}</h3>
                    <p>{item.subtitle}</p>
                    <span className="sv-text-link">Acessar <ArrowRight size={14} /></span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
