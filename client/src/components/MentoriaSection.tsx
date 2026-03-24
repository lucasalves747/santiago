// DESIGN: "Força e Propósito" — Mentoria CTA Section
// High-impact dark section with Miami skyline background

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const MIAMI_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029042428/cVQDmS6ZUDFuSQALHtCzNX/miami_lifestyle-MTMriY6j8xzVUrEjzMwdQs.webp";

const levels = [
  {
    level: "Nível 01",
    title: "Mensagem",
    desc: "Ativação de consciência e autoridade através de conteúdo estratégico focado em alinhamento.",
    price: "Gratuito",
    cta: "Seguir no Instagram",
    url: "https://www.instagram.com/drsantiagovecina?igsh=OWh2eWpodWl2NXkx&utm_source=qr",
    highlight: false,
  },
  {
    level: "Nível 02",
    title: "Movimento",
    desc: "Ambiente de conexão e networking entre empresários que buscam o próximo nível nos EUA.",
    price: "Comunidade",
    cta: "Entrar na Comunidade",
    url: "https://chat.whatsapp.com/KBaQ1xqkOKtAy307G7I9KN?mode=gi_t",
    highlight: false,
  },
  {
    level: "Nível 03",
    title: "Programas",
    desc: "Método REI e formações estruturadas para implementação de cultura e processos de performance.",
    price: "Sob Consulta",
    cta: "Conhecer os Programas",
    url: "",
    highlight: false,
  },
  {
    level: "Nível 04",
    title: "Elite",
    desc: "Mentorias High-Ticket e Masterminds exclusivos para resultados exponenciais e legado. Para poucos.",
    price: "High-Ticket",
    cta: "Aplicar para a Elite",
    url: "https://link.salee.ai/widget/survey/Mufrh87YeRqFqFe3OS4m",
    highlight: true,
  },
];

const benefits = [
  "Diagnóstico profundo de todos os 5 pilares da sua vida",
  "Plano de ação personalizado de 90 dias",
  "Acompanhamento quinzenal com Dr. Santiago",
  "Acesso ao ecossistema de elite em Miami",
  "Introdução a investidores e parceiros estratégicos",
  "Comunidade exclusiva de líderes de alto nível",
];

export default function MentoriaSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="mentoria" ref={ref} className="overflow-hidden">
      {/* Miami Background Banner */}
      <div className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${MIAMI_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-[oklch(0.05_0.005_285/0.88)]" />

        <div className="container relative z-10 text-center">
          <span className="section-label block mb-4">O Convite</span>
          <h2
            className="text-offwhite mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.0,
            }}
          >
            Seu Próximo Nível
            <br />
            <span className="text-gradient-gold">Começa Aqui</span>
          </h2>
          <p
            className="text-[oklch(0.72_0.01_285)] text-xl max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            A Mentoria de Performance Integral não é para todos. É para os 1% que estão dispostos a fazer o trabalho que uma vida de excelência exige.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://link.salee.ai/widget/survey/Mufrh87YeRqFqFe3OS4m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              Aplicar para a Mentoria <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Ecosystem Levels */}
      <div className="py-24 bg-dark-2">
        <div className="container">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="section-label block mb-4">Jornada de Transformação</span>
            <h2
              className="text-offwhite"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
              }}
            >
              Ecossistema de Produtos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((item, i) => (
              <div
                key={item.level}
                className={`relative p-8 border transition-all duration-500 ${item.highlight
                  ? "border-gold bg-[oklch(0.72_0.12_75/0.08)] shadow-[0_0_40px_oklch(0.72_0.12_75/0.15)]"
                  : "border-[oklch(0.22_0.008_285)] bg-dark hover:border-[oklch(0.72_0.12_75/0.3)]"
                  } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                {item.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold px-4 py-1">
                    <span className="text-[oklch(0.08_0.005_285)] text-[10px] tracking-[0.2em] uppercase font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                      Exclusivo
                    </span>
                  </div>
                )}
                <p className="section-label mb-2">{item.level}</p>
                <h3
                  className={`text-2xl mb-3 ${item.highlight ? "text-gradient-gold" : "text-offwhite"}`}
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[oklch(0.60_0.01_285)] text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <span
                    className={`text-xs tracking-[0.15em] uppercase font-semibold block mb-4 ${item.highlight ? "text-gold" : "text-[oklch(0.50_0.01_285)]"}`}
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {item.price}
                  </span>
                  <a href={item.url}>
                    <button

                      className={item.highlight ? "btn-gold w-full text-center" : "btn-outline-gold w-full text-center"}
                    >
                      {item.cta}
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div
            className={`mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div>
              <span className="section-label block mb-4">O que você recebe</span>
              <h3
                className="text-offwhite mb-6 text-3xl"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
              >
                A Mentoria Elite
                <br />
                <span className="text-gradient-gold">Inclui Tudo Isso</span>
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                    <span
                      className="text-[oklch(0.72_0.01_285)] text-sm"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-dark border border-[oklch(0.72_0.12_75/0.2)] p-10 text-center">
              <p
                className="text-[oklch(0.62_0.01_285)] text-sm mb-4 italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "Não é um curso. É uma reengenharia de alto acompanhamento para líderes que decidiram sair do caos e construir uma vida de excelência."
              </p>
              <span className="gold-divider mx-auto block mb-6" />
              <p
                className="text-gold text-sm tracking-[0.1em] uppercase font-semibold mb-6"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                — Dr. Santiago Vecina
              </p>
              <a
                href="https://link.salee.ai/widget/survey/Mufrh87YeRqFqFe3OS4m"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                Quero Aplicar Agora <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
