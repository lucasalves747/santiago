import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  ShieldCheck,
  X,
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import FaqList from "@/components/FaqList";
import type { TreatmentPageData } from "@/content/treatment";
import { APPLY_URL, DISCLAIMER, TREATMENT_HUB } from "@/content/site";

type TreatmentPageProps = {
  data: TreatmentPageData;
};

export default function TreatmentPage({ data }: TreatmentPageProps) {
  return (
    <>
      <PageMeta
        title={data.seoTitle}
        description={data.seoDescription}
        path={`/tratamento/acompanhamento/${data.slug}`}
        image={data.heroImage}
      />

      <section className="sv-page-hero">
        <div className="sv-container">
          <Reveal>
            <Link href={TREATMENT_HUB} className="sv-back-link">
              <ArrowLeft size={14} /> Tratamento e acompanhamento
            </Link>
          </Reveal>
          <div className="sv-page-hero-grid">
            <div className="sv-page-hero-copy">
              <p className="sv-eyebrow">{data.eyebrow}</p>
              <h1 className="sv-display sv-page-title">
                {data.title}
                <span>{data.titleAccent}</span>
              </h1>
              <p className="sv-page-subtitle">{data.subtitle}</p>
              <div className="sv-hero-actions">
                <a href="#aplicar" className="sv-btn sv-btn-gold">
                  Aplicar para avaliação <ArrowRight size={16} />
                </a>
                <a href="#entregaveis" className="sv-btn sv-btn-ghost">
                  Ver o que está incluído <ArrowRight size={16} />
                </a>
              </div>
              <div className="sv-page-hero-meta">
                <span><Clock size={14} /> Acompanhamento individualizado</span>
                <span><ShieldCheck size={14} /> 1 consulta médica por mês</span>
                <span><Check size={14} /> WhatsApp + checkpoint semanal</span>
              </div>
              <Link href={TREATMENT_HUB} className="sv-text-link">
                Ver os 8 pilares e a estrutura completa <ArrowRight size={15} />
              </Link>
            </div>
            <Reveal className="sv-page-hero-image" delay={0.1}>
              <img src={data.heroImage} alt={data.heroAlt} />
              <div className="sv-page-image-frame" aria-hidden="true" />
            </Reveal>
          </div>
        </div>
      </section>

      <Section eyebrow="O problema" title={data.painTitle} intro={data.painIntro} tone="cream">
        <div className="sv-pain-grid">
          <div className="sv-pain-list">
            {data.painPoints.map((point, index) => (
              <Reveal key={point} className="sv-pain-item" delay={index * 0.05}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{point}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="sv-pain-aside" delay={0.08}>
            <p className="sv-eyebrow">O que muda</p>
            <h3>{data.promiseTitle}</h3>
            <p>{data.promiseText}</p>
            <div className="sv-quote-line" aria-hidden="true" />
            <p className="sv-aside-note">
              O objetivo não é perfeição. É consistência com critério.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Avaliação"
        title={data.assessmentTitle}
        intro={data.assessmentIntro}
        tone="dark"
      >
        <div className="sv-assessment-grid">
          {data.assessmentPoints.map((point, index) => (
            <Reveal key={point.title} className="sv-assessment-card" delay={index * 0.07}>
              <span className="sv-card-number">0{index + 1}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="entregaveis"
        eyebrow="Entregáveis"
        title={data.includedTitle}
        intro={data.includedIntro}
        tone="cream"
      >
        <div className="sv-included-grid sv-included-grid-light">
          {data.included.map((item, index) => (
            <Reveal key={item.title} className="sv-included-card" delay={index * 0.05}>
              <span className="sv-check"><Check size={15} /></span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Etapas"
        title={data.journeyTitle}
        intro="Um acompanhamento com marcos claros. O ritmo exato é definido na conversa de fit e ajustado ao seu contexto clínico."
        tone="ink"
      >
        <div className="sv-journey">
          {data.journey.map((step, index) => (
            <Reveal key={step.phase} className="sv-journey-step" delay={index * 0.07}>
              <span className="sv-journey-phase">{step.phase}</span>
              <div className="sv-journey-dot" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Fit" title={data.fitTitle} tone="cream">
        <div className="sv-fit-grid">
          <Reveal className="sv-fit-card is-fit">
            <h3>Faz sentido para você se…</h3>
            <ul>
              {data.fit.map((item) => (
                <li key={item}><Check size={16} /> {item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="sv-fit-card is-not-fit" delay={0.08}>
            <h3>Talvez não seja o momento se…</h3>
            <ul>
              {data.notFit.map((item) => (
                <li key={item}><X size={16} /> {item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Dúvidas antes de aplicar." tone="dark">
        <FaqList items={data.faqs} dark />
        <p className="sv-legal-note is-dark">{DISCLAIMER}</p>
      </Section>

      <section className="sv-cta-section" id="aplicar">
        <div className="sv-container sv-cta-grid">
          <Reveal className="sv-cta-copy">
            <p className="sv-eyebrow">Próximo passo</p>
            <h2 className="sv-display">{data.ctaTitle}</h2>
            <p>{data.ctaText}</p>
            <div className="sv-cta-list">
              <span><Clock size={16} /> Acompanhamento individualizado</span>
              <span><ShieldCheck size={16} /> Avaliação individual</span>
              <span><ArrowRight size={16} /> Aplicação sem compromisso</span>
              {data.slug === "empresarios" && (
                <a href={APPLY_URL} target="_blank" rel="noreferrer" className="sv-text-link">
                  Aplicação executiva Legado 2036 <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </Reveal>
          <Reveal className="sv-cta-form" delay={0.1}>
            <LeadForm
              source={`tratamento-${data.slug}`}
              interest={data.interest}
              requirePhone
              title="Aplicar para avaliação"
              subtitle="Preencha o básico. A equipe entra em contato para entender se o programa faz sentido para você."
              buttonLabel="Enviar aplicação"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
