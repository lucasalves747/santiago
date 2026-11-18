import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, FileText, PlayCircle, Sparkles } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import ToolCard from "@/components/ToolCard";
import { TOOLS } from "@/content/tools";
import { MEDICAL_APPLY_HREF } from "@/content/site";

export default function Tools() {
  return (
    <>
      <PageMeta
        title="Ferramentas de Performance e Saúde | Dr. Santiago Vecina"
        description="Biblioteca gratuita de guias, checklists e quizzes sobre energia, sono, metabolismo, emagrecimento e performance esportiva e executiva."
        path="/ferramentas"
        image="/images/image-1.webp"
      />

      <section className="sv-tools-hero">
        <div className="sv-container">
          <div>
            <p className="sv-eyebrow">Biblioteca gratuita</p>
            <h1 className="sv-display sv-tools-title">
              Ferramentas para sair da teoria e olhar para o seu contexto.
            </h1>
            <p className="sv-tools-subtitle">
              Guias curtos, checklists e um quiz — todos em português — para identificar o que
              mais está drenando a sua energia, a sua recuperação ou a sua saúde metabólica.
              Materiais educativos, feitos para serem usados — não apenas baixados.
            </p>
          </div>
          <Reveal className="sv-tools-hero-actions" delay={0.1}>
            <Link href="/ferramentas/gargalo-metabolico" className="sv-btn sv-btn-gold">
              <Sparkles size={16} /> Fazer o quiz do gargalo
            </Link>
            <a href={MEDICAL_APPLY_HREF} className="sv-btn sv-btn-ghost">
              Aplicar para avaliação <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="sv-tools-section">
        <div className="sv-container">
          <div className="sv-tools-toolbar">
            <p>{TOOLS.length} guias em português + quiz e aula gratuita</p>
          </div>

          <div className="sv-tools-featured">
            <Link href="/ferramentas/gargalo-metabolico" className="sv-tool-card is-featured">
              <div className="sv-tool-card-top">
                <span className="sv-tool-icon"><Sparkles size={18} /></span>
                <span className="sv-tool-language">Interativo</span>
              </div>
              <div>
                <p className="sv-tool-audience">3 minutos · resultado na hora</p>
                <h3>Qual é o seu gargalo metabólico?</h3>
                <p className="sv-tool-subtitle">
                  Oito perguntas para identificar a frente que parece mais relevante agora — sono,
                  estresse, nutrição, treino ou metabolismo.
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
                  Uma aula para entender a diferença entre falta de condicionamento, recuperação
                  insuficiente e um gargalo clínico que o treino não resolve.
                </p>
              </div>
              <div className="sv-tool-card-bottom">
                <span>Aula · online</span>
                <span className="sv-tool-link">Acessar <ArrowUpRight size={15} /></span>
              </div>
            </Link>
          </div>

          <div className="sv-tools-grid">
            {TOOLS.map((tool, index) => (
              <Reveal key={tool.slug} delay={(index % 3) * 0.06}>
                <ToolCard tool={tool} />
              </Reveal>
            ))}
          </div>

          <Reveal className="sv-tools-note" delay={0.1}>
            <FileText size={20} />
            <div>
              <h3>Como usar esta biblioteca</h3>
              <p>
                Comece pelo material que mais se parece com o seu momento. Se estiver em dúvida,
                faça o quiz. Ele leva cerca de três minutos e aponta o gargalo que parece mais
                relevante — sem diagnóstico e sem promessa de resultado.
              </p>
            </div>
            <Link href="/ferramentas/gargalo-metabolico" className="sv-text-link">
              Abrir o quiz <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
