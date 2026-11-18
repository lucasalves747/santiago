import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  Check,
  Clock,
  MonitorPlay,
  ShieldCheck,
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import FaqList from "@/components/FaqList";
import { DISCLAIMER } from "@/content/site";

const lessons = [
  {
    title: "Por que o cansaço não é falta de força de vontade",
    text: "A diferença entre fadiga aguda, privação de sono e depleção crônica — e por que “dormir mais” nem sempre resolve.",
  },
  {
    title: "Os três gargalos que mais sabotam a energia",
    text: "Metabolismo, recuperação e carga total. Como identificar qual deles merece atenção primeiro.",
  },
  {
    title: "O que fazer nos próximos sete dias",
    text: "Ações de baixo atrito para sair do modo urgência e começar a medir a resposta do seu corpo.",
  },
];

const faqs = [
  {
    question: "A aula é ao vivo ou gravada?",
    answer:
      "A próxima edição será ao vivo, com espaço para perguntas. Ao entrar na lista, você recebe a data, o horário e o link de acesso antes da aula.",
  },
  {
    question: "Preciso pagar para participar?",
    answer:
      "Não. A aula é gratuita. O material complementar também é gratuito. O acompanhamento médico é um programa separado, com aplicação e avaliação.",
  },
  {
    question: "A aula substitui uma consulta?",
    answer:
      "Não. A aula é educativa e genérica. Ela não avalia o seu caso, não prescreve e não substitui uma consulta médica.",
  },
];

export default function ClassPage() {
  return (
    <>
      <PageMeta
        title="Aula gratuita: energia, recuperação e performance | Dr. Santiago Vecina"
        description="Entre na lista da próxima aula gratuita sobre energia, recuperação e performance. Conteúdo educativo do Dr. Santiago Vecina."
        path="/aula"
        image="/images/image-1.webp"
      />

      <section className="sv-class-hero">
        <div className="sv-container">
          <div>
            <Link href="/ferramentas" className="sv-back-link">
              <ArrowLeft size={14} /> Biblioteca de ferramentas
            </Link>
            <p className="sv-eyebrow">Aula gratuita · próxima turma</p>
            <h1 className="sv-display sv-class-title">
              Por que você cansa mesmo treinando, dormindo e “fazendo tudo certo”.
            </h1>
            <p className="sv-class-subtitle">
              Uma aula para entender o que está por trás da fadiga que não passa, da recuperação
              lenta e da queda de foco — e o que você pode começar a medir antes de mudar mais uma
              dieta ou aumentar o treino.
            </p>
            <div className="sv-class-meta">
              <span><MonitorPlay size={15} /> Ao vivo, online</span>
              <span><Clock size={15} /> 45–60 minutos</span>
              <span><CalendarClock size={15} /> Data enviada por e-mail</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sv-class-content">
        <div className="sv-container sv-class-grid">
          <Reveal className="sv-class-lessons">
            <p className="sv-eyebrow">O que você vai aprender</p>
            <h2 className="sv-display sv-subsection-title">Três ideias que mudam a forma de olhar para o cansaço.</h2>
            <div className="sv-class-lesson-list">
              {lessons.map((lesson, index) => (
                <div key={lesson.title} className="sv-class-lesson">
                  <span className="sv-card-number">0{index + 1}</span>
                  <div>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="sv-class-note">
              <ShieldCheck size={18} />
              <p>
                A aula é educativa. Não há diagnóstico, prescrição ou promessa de resultado.
                Situações individuais precisam de avaliação médica.
              </p>
            </div>
          </Reveal>

          <Reveal className="sv-class-form" delay={0.08}>
            <LeadForm
              source="aula-gratuita-lista"
              title="Entrar na lista da aula"
              subtitle="Receba a data, o link de acesso e o material complementar."
              buttonLabel="Quero participar"
              requirePhone={false}
            />
            <div className="sv-class-form-footer">
              <p><Check size={14} /> Sem custo</p>
              <p><Check size={14} /> Sem spam</p>
              <p><Check size={14} /> Cancele quando quiser</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sv-faq-section">
        <div className="sv-container">
          <p className="sv-eyebrow">Perguntas frequentes</p>
          <h2 className="sv-display sv-subsection-title">Antes de entrar na lista.</h2>
          <FaqList items={faqs} dark={false} />
          <p className="sv-legal-note">{DISCLAIMER}</p>
        </div>
      </section>

      <section className="sv-class-bottom">
        <div className="sv-container">
          <Reveal>
            <p className="sv-eyebrow">Enquanto isso</p>
            <h2 className="sv-display">Baixe o Mapa da Performance em 7 Dias.</h2>
            <p>
              Um material para começar a mapear sono, energia, estresse e recuperação antes da
              aula.
            </p>
            <Link href="/ferramentas/mapa-performance-7-dias" className="sv-btn sv-btn-gold">
              Acessar o material <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
