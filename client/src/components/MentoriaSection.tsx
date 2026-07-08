// DESIGN: "Força e Propósito" — Mentoria CTA Section
// High-impact dark section with Miami skyline background

import { useEffect, useRef, useState } from "react";

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}
