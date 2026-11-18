import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Brain,
  Briefcase,
  Check,
  Compass,
  Dumbbell,
  FileText,
  HeartPulse,
  ShieldCheck,
  PlayCircle,
  Sparkles,
  Target,
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import FaqList from "@/components/FaqList";
import { HUB, TEAM_VECINA_PILLARS } from "@/content/treatment";
import { DISCLAIMER, MAIN_SITE } from "@/content/site";

const audienceIcons = [Dumbbell, HeartPulse, Briefcase];

export default function Home() {
  return (
    <>
      <PageMeta
        title={HUB.seoTitle}
        description={HUB.seoDescription}
        path="/tratamento/acompanhamento"
        image={HUB.heroImage}
      />

      <section className="sv-hero sv-hero-home">
        <div className="sv-hero-grain" aria-hidden="true" />
        <div className="sv-container sv-hero-grid">
          <div className="sv-hero-copy">
            <p className="sv-eyebrow">{HUB.eyebrow}</p>
            <h1 className="sv-display sv-hero-title">
              {HUB.title}
              <span>{HUB.titleAccent}</span>
            </h1>
            <p className="sv-hero-subtitle">{HUB.subtitle}</p>
            <div className="sv-hero-actions">
              <a href="#aplicar" className="sv-btn sv-btn-gold">
                Aplicar para avaliação <ArrowRight size={16} />
              </a>
              <a href="#programas" className="sv-btn sv-btn-ghost">
                Ver os três programas <ArrowRight size={16} />
              </a>
            </div>
            <div className="sv-hero-stats">
              {HUB.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <Reveal className="sv-hero-visual" delay={0.12}>
            <div className="sv-hero-image-wrap">
              <img src={HUB.heroImage} alt={HUB.heroAlt} className="sv-hero-image" />
              <div className="sv-hero-image-overlay" />
              <div className="sv-hero-floating-card">
                <span className="sv-floating-icon"><Activity size={18} /></span>
                <div>
                  <strong>Pré-consulta. Consulta. Acompanhamento.</strong>
                  <span>Um acompanhamento contínuo, não uma consulta isolada.</span>
                </div>
              </div>
            </div>
            <p className="sv-hero-caption">
              Team Vecina: medicina de performance com contexto e acompanhamento.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="sv-marquee" aria-label="Áreas de atuação">
        <div className="sv-marquee-track">
          {["Performance esportiva", "Saúde metabólica", "Sono e recuperação", "Longevidade executiva", "Composição corporal", "Clareza mental", "Performance esportiva", "Saúde metabólica", "Sono e recuperação", "Longevidade executiva", "Composição corporal", "Clareza mental"].map(
            (item, index) => (
              <span key={`${item}-${index}`}>
                {item} <span aria-hidden="true">✦</span>
              </span>
            ),
          )}
        </div>
      </div>

      <Section
        eyebrow="O programa"
        title="O que muda quando o cuidado é contínuo."
        intro={HUB.whatText}
        tone="cream"
      >
        <div className="sv-what-grid">
          {HUB.whatPoints.map((point, index) => (
            <Reveal key={point.title} className="sv-what-card" delay={index * 0.08}>
              <span className="sv-card-number">0{index + 1}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="sv-what-note" delay={0.1}>
          <ShieldCheck size={18} />
          <p>
            O escopo é definido após avaliação. Não prescrevemos protocolos sem contexto, não
            prometemos resultados e não substituímos o seu médico de referência.
          </p>
        </Reveal>
      </Section>

      <Section
        id="programas"
        eyebrow="Para quem é"
        title={HUB.audiencesTitle}
        intro={HUB.audiencesIntro}
        tone="dark"
      >
        <div className="sv-audience-grid">
          {HUB.audiences.map((audience, index) => {
            const Icon = audienceIcons[index];
            return (
              <Reveal key={audience.slug} className="sv-audience-card" delay={index * 0.08}>
                <div className="sv-audience-image">
                  <img src={audience.image} alt={audience.imageAlt} loading="lazy" />
                  <span className="sv-audience-label">{audience.label}</span>
                </div>
                <div className="sv-audience-body">
                  <span className="sv-audience-icon"><Icon size={18} /></span>
                  <h3>{audience.title}</h3>
                  <p>{audience.text}</p>
                  <ul>
                    {audience.points.map((point) => (
                      <li key={point}><Check size={14} /> {point}</li>
                    ))}
                  </ul>
                  <Link href={`/tratamento/acompanhamento/${audience.slug}`} className="sv-text-link">
                    Conhecer este programa <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="O método"
        title={HUB.methodTitle}
        intro={HUB.methodIntro}
        tone="cream"
      >
        <div className="sv-method-grid">
          {HUB.method.map((step, index) => (
            <Reveal key={step.number} className="sv-method-card" delay={index * 0.07}>
              <div className="sv-method-top">
                <span>{step.number}</span>
                <span className="sv-method-line" aria-hidden="true" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <div className="sv-method-deliverable">
                <FileText size={14} />
                <span>{step.deliverable}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Os 8 pilares"
        title="O corpo não funciona em compartimentos."
        intro="O Team Vecina olha para oito frentes ao mesmo tempo. O peso clínico de cada uma muda conforme o seu caso, mas nenhuma é tratada como detalhe."
        tone="cream"
      >
        <div className="sv-pillars-grid">
          {TEAM_VECINA_PILLARS.map((pillar, index) => (
            <Reveal key={pillar.name} className="sv-pillar-card" delay={index * 0.04}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.name}</h3>
              <p>{pillar.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Entregáveis"
        title={HUB.includedTitle}
        intro={HUB.includedIntro}
        tone="ink"
      >
        <div className="sv-included-grid">
          {HUB.included.map((item, index) => (
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
        eyebrow="Como funciona"
        title={HUB.howTitle}
        intro="Da aplicação à revisão, cada etapa tem um objetivo. Você sabe onde está e o que vem depois."
        tone="cream"
      >
        <div className="sv-steps">
          {HUB.howSteps.map((step, index) => (
            <Reveal key={step.title} className="sv-step" delay={index * 0.06}>
              <span className="sv-step-number">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Ferramentas"
        title="Comece por uma ferramenta."
        intro="Materiais gratuitos para entender o seu momento antes de qualquer decisão. Todos em português."
        tone="cream"
      >
        <div className="sv-tools-grid">
          <Link href="/ferramentas" className="sv-tool-card">
            <div className="sv-tool-card-top">
              <span className="sv-tool-icon"><FileText size={18} /></span>
              <span className="sv-tool-language">Biblioteca</span>
            </div>
            <div>
              <p className="sv-tool-audience">8 guias gratuitos</p>
              <h3>Biblioteca de ferramentas</h3>
              <p className="sv-tool-subtitle">
                Mapas, checklists e guias sobre energia, metabolismo, atletas e executivos.
              </p>
            </div>
            <div className="sv-tool-card-bottom">
              <span>PDF · português</span>
              <span className="sv-tool-link">Acessar <ArrowUpRight size={15} /></span>
            </div>
          </Link>
          <Link href="/ferramentas/gargalo-metabolico" className="sv-tool-card is-featured">
            <div className="sv-tool-card-top">
              <span className="sv-tool-icon"><Sparkles size={18} /></span>
              <span className="sv-tool-language">Interativo</span>
            </div>
            <div>
              <p className="sv-tool-audience">3 minutos · resultado na hora</p>
              <h3>Qual é o seu gargalo metabólico?</h3>
              <p className="sv-tool-subtitle">
                Oito perguntas para identificar a frente que parece mais relevante agora.
              </p>
            </div>
            <div className="sv-tool-card-bottom">
              <span>Quiz · online</span>
              <span className="sv-tool-link">Acessar <ArrowUpRight size={15} /></span>
            </div>
          </Link>
          <Link href="/aula" className="sv-tool-card">
            <div className="sv-tool-card-top">
              <span className="sv-tool-icon"><PlayCircle size={18} /></span>
              <span className="sv-tool-language">Aula gratuita</span>
            </div>
            <div>
              <p className="sv-tool-audience">Para quem cansa mesmo treinando</p>
              <h3>Por que você cansa mesmo treinando?</h3>
              <p className="sv-tool-subtitle">
                A diferença entre falta de condicionamento, recuperação insuficiente e um gargalo clínico.
              </p>
            </div>
            <div className="sv-tool-card-bottom">
              <span>Aula · online</span>
              <span className="sv-tool-link">Acessar <ArrowUpRight size={15} /></span>
            </div>
          </Link>
        </div>
      </Section>

      <section className="sv-bio-section">
        <div className="sv-container sv-bio-grid">
          <Reveal className="sv-bio-mark">
            <span className="sv-mark sv-mark-large">SV</span>
            <p>Performance Integral</p>
          </Reveal>
          <Reveal className="sv-bio-copy" delay={0.08}>
            <p className="sv-eyebrow">{HUB.bioTitle}</p>
            <h2 className="sv-display">{HUB.bioText}</h2>
            <div className="sv-bio-points">
              {HUB.bioPoints.map((point) => (
                <span key={point}><Sparkles size={14} /> {point}</span>
              ))}
            </div>
            <a href={MAIN_SITE} target="_blank" rel="noreferrer" className="sv-text-link">
              Conhecer a trajetória completa <ArrowUpRight size={15} />
            </a>
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow="Perguntas frequentes"
        title="Antes de aplicar, talvez você queira saber."
        tone="cream"
      >
        <FaqList items={HUB.faqs} dark={false} />
        <p className="sv-legal-note">{DISCLAIMER}</p>
      </Section>

      <section className="sv-cta-section" id="aplicar">
        <div className="sv-container sv-cta-grid">
          <Reveal className="sv-cta-copy">
            <p className="sv-eyebrow">Próximo passo</p>
            <h2 className="sv-display">{HUB.ctaTitle}</h2>
            <p>{HUB.ctaText}</p>
            <div className="sv-cta-list">
              <span><Compass size={16} /> Aplicação sem compromisso</span>
              <span><Target size={16} /> Avaliação do seu contexto</span>
              <span><Brain size={16} /> Plano com critério clínico</span>
            </div>
          </Reveal>
          <Reveal className="sv-cta-form" delay={0.1}>
            <LeadForm
              source="hub-acompanhamento"
              interest="general"
              requirePhone
              title="Aplicar para avaliação"
              subtitle="Conte o básico. A equipe entra em contato para entender o seu momento."
              buttonLabel="Enviar aplicação"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
