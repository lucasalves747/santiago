// DESIGN: "Força e Propósito" — Books Section
// Dark section with gold book cards and hover effects

import { useEffect, useRef, useState } from "react";
import { BookOpen, ExternalLink } from "lucide-react";

const books = [
  {
    number: "I",
    title: "Vida Alinhada",
    subtitle: "O Método para Prosperar Sem Destruir Sua Saúde e Família",
    description:
      "O livro que apresenta a tese central da Performance Integral. Um guia prático e profundo para líderes que querem construir sucesso real — com saúde, família e propósito alinhados.",
    tags: ["Performance", "Saúde", "Propósito"],
    available: true,
  },
  {
    number: "II",
    title: "O Líder Integral",
    subtitle: "Como Liderar a Si Mesmo Antes de Liderar Qualquer Empresa",
    description:
      "Uma obra sobre a jornada interior da liderança. Dr. Santiago revela os princípios que transformam profissionais de sucesso em líderes de legado, capazes de influenciar gerações.",
    tags: ["Liderança", "Mentalidade", "Legado"],
    available: true,
  },
  {
    number: "III",
    title: "Negócios nos EUA",
    subtitle: "O Guia do Empresário Brasileiro para Prosperar no Mercado Americano",
    description:
      "O manual definitivo para brasileiros que querem expandir seus negócios para os EUA. Estratégia, networking, cultura e os bastidores do ecossistema de alto nível em Miami.",
    tags: ["Negócios", "EUA", "Internacionalização"],
    available: false,
  },
];

export default function BooksSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="livros" ref={ref} className="py-24 md:py-32 bg-dark-2 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label block mb-4">Conhecimento que Transforma</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-offwhite"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: 700,
              }}
            >
              Os Livros do
              <br />
              <span className="text-gradient-gold">Dr. Santiago</span>
            </h2>
            <p
              className="text-[oklch(0.62_0.01_285)] max-w-sm text-base"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Obras que condensam décadas de experiência clínica, empresarial e de desenvolvimento humano em um método aplicável.
            </p>
          </div>
          <span className="gold-divider mt-6 block" />
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book, i) => (
            <div
              key={book.number}
              className={`group relative bg-dark border border-[oklch(0.22_0.008_285)] hover:border-[oklch(0.72_0.12_75/0.4)] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_oklch(0.72_0.12_75/0.08)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Roman numeral */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-gold/30 font-bold select-none"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "4rem",
                    lineHeight: 1,
                  }}
                >
                  {book.number}
                </span>
                <div className="w-10 h-10 border border-[oklch(0.72_0.12_75/0.3)] flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <BookOpen size={16} className="text-gold" />
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-offwhite text-2xl mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
              >
                {book.title}
              </h3>

              {/* Subtitle */}
              <p
                className="text-gold text-sm mb-4 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                {book.subtitle}
              </p>

              <span className="gold-divider mb-4 block" style={{ width: "30px" }} />

              {/* Description */}
              <p
                className="text-[oklch(0.60_0.01_285)] text-sm leading-relaxed mb-6"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {book.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.15em] uppercase px-2 py-1 border border-[oklch(0.72_0.12_75/0.3)] text-gold/70"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              {book.available ? (
                <button className="flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase font-semibold hover:gap-3 transition-all duration-300 group-hover:text-gold-light" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  Adquirir o Livro <ExternalLink size={14} />
                </button>
              ) : (
                <span className="text-[oklch(0.50_0.01_285)] text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  Em breve
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
