// DESIGN: "Força e Propósito" — 5 Pillars Section
// Dark background with gold numbered pillars
// Staggered animation on scroll

import { useEffect, useRef, useState } from "react";
import { Heart, Brain, Users, TrendingUp, Star } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Heart,
    title: "Saúde Estratégica",
    subtitle: "Ativo de Negócio",
    description:
      "Fisiologia, metabolismo e energia como base para a alta performance. Um líder sem saúde não constrói nada. Aprenda a usar seu corpo como sua maior vantagem competitiva.",
    items: ["Otimização hormonal", "Biohacking para executivos", "Sono e recuperação", "Nutrição de performance"],
  },
  {
    number: "02",
    icon: Brain,
    title: "Mente e Clareza",
    subtitle: "Clareza Total",
    description:
      "Inteligência emocional e foco para decisões críticas sob pressão. Uma mente fraca não sustenta um negócio forte. Construa a mentalidade inabalável de um líder de alto nível.",
    items: ["Superação de crenças limitantes", "Disciplina e foco", "Tomada de decisão", "Resiliência mental"],
  },
  {
    number: "03",
    icon: Users,
    title: "Liderança com Propósito",
    subtitle: "Cultura Forte",
    description:
      "Formação de líderes e influência que transcende o ambiente de trabalho. Lidere a si mesmo, sua equipe e sua família com princípios, visão e impacto real.",
    items: ["Liderança servidora", "Formação de equipes", "Cultura organizacional", "Liderança familiar"],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Negócios Sustentáveis",
    subtitle: "Escala nos EUA",
    description:
      "Estrutura, processos e mentalidade para crescer no mercado americano. Construa um negócio que funcione sem você e acesse o ecossistema de alto nível em Miami.",
    items: ["Sistemas e processos", "Internacionalização EUA", "Networking de elite", "Negócio autônomo"],
  },
  {
    number: "05",
    icon: Star,
    title: "Legado e Família",
    subtitle: "Impacto Eterno",
    description:
      "Família estruturada e valores que permanecem por gerações. O sucesso sem legado é apenas um número. Construa algo que dure além de você.",
    items: ["Herança de valores", "Casamento alinhado", "Paternidade ativa", "Legado geracional"],
  },
];

export default function PilarsSection() {
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
    <section id="pilares" ref={ref} className="py-24 md:py-32 bg-dark overflow-hidden">
      <div className="container">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label block mb-4">A Estrutura da Transformação</span>
          <h2
            className="text-offwhite mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
            }}
          >
            Os 5 Pilares da
            <br />
            <span className="text-gradient-gold">Performance Integral</span>
          </h2>
          <span className="gold-divider mx-auto block mb-6" />
          <p
            className="text-[oklch(0.65_0.01_285)] max-w-2xl mx-auto text-lg"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Um sistema integrado onde cada pilar fortalece o outro, criando uma vida de crescimento exponencial e alinhamento verdadeiro.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className={`group relative bg-dark-2 border border-[oklch(0.22_0.008_285)] hover:border-[oklch(0.72_0.12_75/0.5)] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_oklch(0.72_0.12_75/0.1)] ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                {/* Number background */}
                <span
                  className="absolute top-4 right-6 text-[oklch(0.72_0.12_75/0.08)] font-bold select-none"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "5rem",
                    lineHeight: 1,
                  }}
                >
                  {pillar.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 border border-[oklch(0.72_0.12_75/0.4)] flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <Icon size={20} className="text-gold" />
                </div>

                {/* Subtitle */}
                <p className="section-label mb-2">{pillar.subtitle}</p>

                {/* Title */}
                <h3
                  className="text-offwhite mb-4 text-2xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  {pillar.title}
                </h3>

                <span className="gold-divider mb-4 block" style={{ width: "40px" }} />

                {/* Description */}
                <p
                  className="text-[oklch(0.62_0.01_285)] text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {pillar.description}
                </p>

                {/* Items */}
                <div className="space-y-2">
                  {pillar.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-gold text-[10px]">◆</span>
                      <span
                        className="text-[oklch(0.68_0.01_285)] text-xs"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-[oklch(0.65_0.01_285)] mb-6 text-lg"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Qual pilar você mais precisa fortalecer hoje?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#quiz");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gold"
          >
            Fazer Meu Diagnóstico Gratuito
          </button>
        </div>
      </div>
    </section>
  );
}
