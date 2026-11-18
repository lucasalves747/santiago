import { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  RotateCcw,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { getTool } from "@/content/tools";
import { calculateQuizResult, QUIZ_QUESTIONS } from "@/content/quiz";
import { DISCLAIMER, MEDICAL_APPLY_HREF } from "@/content/site";

export default function QuizPage() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);

  const current = QUIZ_QUESTIONS[step];
  const selected = current ? answers[current.id] : undefined;
  const progress = ((step + (selected !== undefined ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100;

  const outcome = useMemo(() => calculateQuizResult(answers), [answers]);
  const recommendedTool = outcome.result ? getTool(outcome.result.toolSlug) : undefined;

  const handleSelect = (index: number) => {
    setAnswers((prev) => ({ ...prev, [current.id]: index }));
  };

  const handleNext = () => {
    if (selected === undefined) return;
    if (step === QUIZ_QUESTIONS.length - 1) {
      setFinished(true);
      return;
    }
    setStep((value) => value + 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setStarted(false);
    setFinished(false);
  };

  return (
    <>
      <PageMeta
        title="Quiz: qual é o seu gargalo metabólico? | Dr. Santiago Vecina"
        description="Quiz gratuito de 8 perguntas para identificar se o seu principal gargalo está em energia, sono, recuperação, nutrição ou comportamento."
        path="/ferramentas/gargalo-metabolico"
        image="/images/image-1.webp"
      />

      <section className="sv-quiz-hero">
        <div className="sv-container">
          <div>
            <Link href="/ferramentas" className="sv-back-link">
              <ArrowLeft size={14} /> Biblioteca de ferramentas
            </Link>
            <p className="sv-eyebrow">Diagnóstico educativo · 3 minutos</p>
            <h1 className="sv-display sv-quiz-title">
              Qual é o seu gargalo metabólico?
            </h1>
            <p className="sv-quiz-subtitle">
              Oito perguntas para organizar o que você está sentindo. O resultado não é um
              diagnóstico médico — é um ponto de partida para olhar para a área que mais parece
              estar limitando a sua energia e a sua recuperação.
            </p>
          </div>
        </div>
      </section>

      <section className="sv-quiz-section">
        <div className="sv-container sv-quiz-container">
          {!started && !finished && (
            <Reveal className="sv-quiz-intro-card">
              <div className="sv-quiz-intro-icon"><Sparkles size={24} /></div>
              <h2 className="sv-display">Antes de começar</h2>
              <p>
                Responda pensando na média das últimas duas semanas. Não existe resposta certa ou
                errada. O objetivo é identificar padrões, não se autodiagnosticar.
              </p>
              <ul className="sv-check-list">
                <li><Check size={16} /> 8 perguntas objetivas</li>
                <li><Check size={16} /> Resultado com 3 ações práticas</li>
                <li><Check size={16} /> Recomendação de material complementar</li>
              </ul>
              <button type="button" className="sv-btn sv-btn-gold" onClick={() => setStarted(true)}>
                Começar o quiz <ArrowRight size={16} />
              </button>
              <p className="sv-quiz-disclaimer">
                Este quiz é educativo e não substitui avaliação médica individual.
              </p>
            </Reveal>
          )}

          {started && !finished && current && (
            <Reveal className="sv-quiz-card">
              <div className="sv-quiz-progress">
                <div>
                  <span>Pergunta {step + 1} de {QUIZ_QUESTIONS.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="sv-quiz-progress-track">
                  <span style={{ width: `${progress}%` }} />
                </div>
              </div>

              <p className="sv-quiz-question">{current.question}</p>
              {current.helper && <p className="sv-quiz-helper">{current.helper}</p>}

              <div className="sv-quiz-options">
                {current.options.map((option, index) => (
                  <button
                    key={option.label}
                    type="button"
                    className={`sv-quiz-option ${selected === index ? "is-selected" : ""}`}
                    onClick={() => handleSelect(index)}
                  >
                    <span className="sv-quiz-option-letter">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option.label}</span>
                    <span className="sv-quiz-option-check">
                      {selected === index && <Check size={16} />}
                    </span>
                  </button>
                ))}
              </div>

              <div className="sv-quiz-actions">
                <button
                  type="button"
                  className="sv-btn sv-btn-ghost"
                  onClick={() => setStep((value) => Math.max(0, value - 1))}
                  disabled={step === 0}
                >
                  <ArrowLeft size={15} /> Voltar
                </button>
                <button
                  type="button"
                  className="sv-btn sv-btn-gold"
                  onClick={handleNext}
                  disabled={selected === undefined}
                >
                  {step === QUIZ_QUESTIONS.length - 1 ? "Ver resultado" : "Continuar"}
                  <ArrowRight size={15} />
                </button>
              </div>
            </Reveal>
          )}

          {finished && (
            <div className="sv-quiz-result">
              <Reveal className="sv-quiz-result-main">
                <p className="sv-eyebrow">Seu resultado</p>
                <h2 className="sv-display">{outcome.result.title}</h2>
                <p className="sv-quiz-result-description">{outcome.result.description}</p>

                <div className="sv-quiz-score-grid">
                  {Object.entries(outcome.scores).map(([category, score]) => (
                    <div key={category} className="sv-quiz-score">
                      <div>
                        <span>{category}</span>
                        <strong>{score}</strong>
                      </div>
                      <div className="sv-quiz-score-track">
                        <span style={{ width: `${Math.min(100, (score / 9) * 100)}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="sv-quiz-actions-title">Três ações para começar</h3>
                <ul className="sv-check-list">
                  {outcome.result.actions.map((action) => (
                    <li key={action}><Check size={16} /> {action}</li>
                  ))}
                </ul>

                <div className="sv-quiz-result-actions">
                  {recommendedTool && (
                    <Link href={`/ferramentas/${recommendedTool.slug}`} className="sv-btn sv-btn-gold">
                      {outcome.result.toolLabel} <ArrowRight size={16} />
                    </Link>
                  )}
                  <button type="button" className="sv-btn sv-btn-ghost" onClick={reset}>
                    <RotateCcw size={15} /> Refazer
                  </button>
                </div>
                <p className="sv-legal-note">{DISCLAIMER}</p>
              </Reveal>

              <Reveal className="sv-quiz-result-form" delay={0.1}>
                <LeadForm
                  source="quiz-gargalo-metabolico"
                  title="Receba o seu resultado por e-mail"
                  subtitle="Além do resultado, você recebe uma cópia das ações e o material recomendado."
                  buttonLabel="Receber meu resultado"
                  quizResult={outcome.result.title}
                  quizAnswers={answers}
                  compact
                />
                <div className="sv-quiz-cta-box">
                  <p>
                    Quer entender como isso se aplica ao seu caso? A aplicação é o próximo passo.
                  </p>
                  <a href={MEDICAL_APPLY_HREF} className="sv-text-link">
                    Aplicar para avaliação <ArrowUpRight size={15} />
                  </a>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
