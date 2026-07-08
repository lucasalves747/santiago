// DESIGN: "Força e Propósito" — Testimonials + Newsletter + Legacy Section

import { useState } from "react";
import { ArrowRight } from "lucide-react";


const LEGACY_IMAGE = "https://assets.cdn.filesafe.space/PMW6fmu3oCfXFYueuN2D/media/69bcb7322f5f659fea58ce9c.jpeg";

export default function TestimonialsSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
        setSubmitted(true);
        window.location.href = "https://assets.cdn.filesafe.space/PMW6fmu3oCfXFYueuN2D/media/6a36b4391c5d711b35adf2f5.pdf";
      }
    }
  };

  return (
    <>
      {/* Legacy Section with Family Image */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${LEGACY_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.05_0.005_285/0.92)] via-[oklch(0.05_0.005_285/0.80)] to-[oklch(0.05_0.005_285/0.6)]" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="section-label block mb-4">A Razão de Tudo</span>
            <h2
              className="text-offwhite mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              No Final,
              <br />
              <span className="text-gradient-gold">É Tudo Sobre Legado</span>
            </h2>
            <p
              className="text-[oklch(0.78_0.008_285)] text-lg leading-relaxed mb-8 max-w-xl"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Negócios crescem e dinheiro vem e vai. O que fica para sempre são os valores que você transmitiu, as vidas que você tocou e a família que você construiu. Esse é o verdadeiro legado.
            </p>
            <a href="https://link.salee.ai/widget/survey/Mufrh87YeRqFqFe3OS4m"> <button
              className="btn-gold"
            >
              Começar a Construir Meu Legado
            </button></a>
          </div>
        </div>
      </section>

      {/* Newsletter / Lead Magnet */}
      <section id="guia" className="py-24 md:py-32 bg-dark overflow-hidden">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <span className="section-label block mb-4">Material Gratuito</span>
            <h2
              className="text-offwhite mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Receba o Guia dos{" "}
              <span className="text-gradient-gold">5 Pilares</span>
            </h2>
            <p
              className="text-[oklch(0.78_0.008_285)] text-base leading-relaxed mb-8"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Preencha seus dados e receba agora o material exclusivo sobre a Performance Integral.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4 text-left">
              <div>
                <label className="section-label block mb-2" htmlFor="ts-name">
                  Seu Nome
                </label>
                <input
                  id="ts-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como posso te chamar?"
                  required
                  className="w-full bg-dark-2 border border-[oklch(0.22_0.008_285)] focus:border-gold text-offwhite placeholder:text-[oklch(0.40_0.01_285)] px-4 py-3 text-sm outline-none transition-colors duration-300"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                />
              </div>
              <div>
                <label className="section-label block mb-2" htmlFor="ts-telefone">
                  Seu Telefone
                </label>
                <input
                  id="ts-telefone"
                  type="text"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="(11) 99999-9999"
                  required
                  className="w-full bg-dark-2 border border-[oklch(0.22_0.008_285)] focus:border-gold text-offwhite placeholder:text-[oklch(0.40_0.01_285)] px-4 py-3 text-sm outline-none transition-colors duration-300"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                />
              </div>
              <div>
                <label className="section-label block mb-2" htmlFor="ts-email">
                  Seu Melhor E-mail
                </label>
                <input
                  id="ts-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full bg-dark-2 border border-[oklch(0.22_0.008_285)] focus:border-gold text-offwhite placeholder:text-[oklch(0.40_0.01_285)] px-4 py-3 text-sm outline-none transition-colors duration-300"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                />
              </div>
              <button
                type="submit"
                className="btn-gold w-full flex items-center justify-center gap-2"
              >
                Receber Meu Guia Gratuito <ArrowRight size={16} />
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
      </section>

    </>
  );
}
