// DESIGN: "Força e Propósito" — Awards & Speaking Section
// Dark background, gold trophy icons, speaking image

import { useEffect, useRef, useState } from "react";
import { Award, Mic2, Globe, Users } from "lucide-react";

const SPEAKING_IMAGE = "https://assets.cdn.filesafe.space/PMW6fmu3oCfXFYueuN2D/media/69bcb5a92f5f655c51589941.png";

const awards = [
  {
    icon: Award,
    year: "2024",
    title: "Top Mentor de Alta Performance",
    org: "Plataforma Global Miami",
    description: "Reconhecido como um dos mentores de maior impacto para empresários brasileiros nos EUA.",
  },
  {
    icon: Mic2,
    year: "2023",
    title: "Palestrante Destaque",
    org: "BR Nation Talks — Miami",
    description: "Palestra sobre Performance Integral para mais de 500 empresários brasileiros em Miami.",
  },
  {
    icon: Globe,
    year: "2023",
    title: "Líder de Ecossistema",
    org: "Ecossistema Pablo Marçal",
    description: "Reconhecido como líder e conector do ecossistema de alto nível de desenvolvimento humano.",
  },
  {
    icon: Users,
    year: "2022",
    title: "Mentor do Ano",
    org: "Comunidade Empresarial Brasileira EUA",
    description: "Premiado pela transformação de mais de 200 líderes e empresários ao longo do ano.",
  },
  {
    icon: Award,
    year: "2021",
    title: "Referência em Saúde Estratégica",
    org: "Associação Brasileira de Nutrologia",
    description: "Reconhecido por integrar a medicina com o desenvolvimento de alta performance empresarial.",
  },
  {
    icon: Mic2,
    year: "2020",
    title: "Top Speaker",
    org: "Congresso de Empreendedorismo Brasileiro",
    description: "Eleito um dos palestrantes mais impactantes do maior congresso de empreendedorismo brasileiro.",
  },
];

export default function AwardsSection() {
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
    <section id="premiacoes" ref={ref} className="overflow-hidden">
      {/* Speaking Stage Full-Width Banner */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${SPEAKING_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.05_0.005_285/0.85)] to-[oklch(0.05_0.005_285/0.6)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0.005_285/0.7)] to-transparent" />

        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <span className="section-label block mb-4">Presença de Palco</span>
            <h2
              className="text-offwhite mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
              }}
            >
              Uma Voz que
              <br />
              <span className="text-gradient-gold">Move Multidões</span>
            </h2>
            <p
              className="text-[oklch(0.75_0.008_285)] text-base leading-relaxed max-w-lg"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Dr. Santiago já palestrou para milhares de líderes e empresários no Brasil e nos EUA, levando a mensagem da Performance Integral para os maiores palcos do desenvolvimento humano.
            </p>
            <a href="https://link.salee.ai/widget/survey/9fCsSE0DZUMT31KzSScE"><button

              className="btn-outline-gold mt-6"
            >
              Contratar para Palestra
            </button></a>
          </div>
        </div>
      </div>

      {/* Awards Grid */}
      <div className="py-24 md:py-32 bg-dark">
        <div className="container">
          <div
            className={`mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="section-label block mb-4">Reconhecimentos</span>
            <h2
              className="text-offwhite"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: 700,
              }}
            >
              Premiações &
              <br />
              <span className="text-gradient-gold">Reconhecimentos</span>
            </h2>
            <span className="gold-divider mt-6 block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => {
              const Icon = award.icon;
              return (
                <div
                  key={i}
                  className={`group flex gap-5 p-6 bg-dark-2 border border-[oklch(0.22_0.008_285)] hover:border-[oklch(0.72_0.12_75/0.3)] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 border border-[oklch(0.72_0.12_75/0.3)] flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <span
                      className="text-gold text-xs tracking-[0.15em] uppercase font-semibold"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {award.year}
                    </span>
                    <h4
                      className="text-offwhite text-lg mt-1 mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                    >
                      {award.title}
                    </h4>
                    <p
                      className="text-gold/70 text-xs mb-2 italic"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {award.org}
                    </p>
                    <p
                      className="text-[oklch(0.58_0.01_285)] text-xs leading-relaxed"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {award.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
