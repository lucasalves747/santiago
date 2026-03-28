// DESIGN: "Força e Propósito" — Books Section
// Dark section with gold book cards and hover effects

import { useEffect, useRef, useState } from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import { Mail, ArrowRight } from "lucide-react";

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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);


  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name && telefone) {
      try {
        await fetch("https://services.leadconnectorhq.com/hooks/PMW6fmu3oCfXFYueuN2D/webhook-trigger/e0cb8c17-fb7f-4ad7-ab1d-383735e96013", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, telefone }),
        });
      } catch (error) {
        console.error("Error submitting newsletter form:", error);
      } finally {

        window.location.href = "/pos-quiz.html";
      }
    }
  };

  return (<>


    <section id="livros" ref={ref} className="py-24 md:py-32 bg-dark-2 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 text-center ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label block mb-4">Conhecimento que Transforma</span>
          <div className="flex flex-col items-center gap-6">
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
              className="text-[oklch(0.62_0.01_285)] max-w-sm text-base mx-auto"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Obras que condensam décadas de experiência clínica, empresarial e de desenvolvimento humano em um método aplicável.
            </p>
          </div>
          <span className="gold-divider mt-6 mx-auto block" />
        </div>
        <div
          className={`bg-dark-2 border border-[oklch(0.72_0.12_75/0.2)] mb-10 p-10 md:p-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 border border-gold flex items-center justify-center mb-6">
                <Mail size={20} className="text-gold" />
              </div>
              <span className="section-label block mb-4">Isca Digital Gratuita</span>
              <h3
                className="text-offwhite mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                }}
              >
                Receba o Guia
                <br />
                <span className="text-gradient-gold">"Os 5 Pilares da Performance Integral"</span>
              </h3>
              <p
                className="text-[oklch(0.62_0.01_285)] text-sm leading-relaxed"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Um guia completo e gratuito com o método que já transformou centenas de líderes e empresários. Descubra em qual pilar você está mais vulnerável e como corrigir isso agora.
              </p>
              <div className="mt-6 space-y-2">
                {[
                  "Diagnóstico dos 5 Pilares (PDF exclusivo)",
                  "Checklist de Performance Integral",
                  "Acesso à newsletter semanal com insights de alto nível",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-gold text-xs">◆</span>
                    <span className="text-[oklch(0.68_0.01_285)] text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <label
                    className="section-label block mb-2"
                    htmlFor="nl-name"
                  >
                    Seu Nome
                  </label>
                  <input
                    id="nl-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como posso te chamar?"
                    required
                    className="w-full bg-dark border border-[oklch(0.22_0.008_285)] focus:border-gold text-offwhite placeholder:text-[oklch(0.40_0.01_285)] px-4 py-3 text-sm outline-none transition-colors duration-300"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="section-label block mb-2"
                    htmlFor="nl-telefone"
                  >
                    Seu Telefone
                  </label>
                  <input
                    id="nl-telefone"
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    required
                    className="w-full bg-dark border border-[oklch(0.22_0.008_285)] focus:border-gold text-offwhite placeholder:text-[oklch(0.40_0.01_285)] px-4 py-3 text-sm outline-none transition-colors duration-300"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="section-label block mb-2"
                    htmlFor="nl-email"
                  >
                    Seu Melhor E-mail
                  </label>
                  <input
                    id="nl-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="w-full bg-dark border border-[oklch(0.22_0.008_285)] focus:border-gold text-offwhite placeholder:text-[oklch(0.40_0.01_285)] px-4 py-3 text-sm outline-none transition-colors duration-300"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  Quero o Guia Gratuito <ArrowRight size={16} />
                </button>
                <p
                  className="text-[oklch(0.45_0.01_285)] text-[10px] text-center"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Seus dados estão seguros. Sem spam, apenas conteúdo de alto valor.
                </p>
              </form>
            </div>
          </div>


        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book, i) => (
            <div
              key={book.number}
              className={`group relative bg-dark border border-[oklch(0.22_0.008_285)] hover:border-[oklch(0.72_0.12_75/0.4)] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_oklch(0.72_0.12_75/0.08)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
  </>
  );
}
