// DESIGN: "Força e Propósito" — Testimonials + Newsletter + Legacy Section

import { useEffect, useRef, useState } from "react";
import { Quote, Mail, ArrowRight } from "lucide-react";
import guidePdf from "../assets/5_pilares_performance_integral.pdf";

const LEGACY_IMAGE = "https://assets.cdn.filesafe.space/PMW6fmu3oCfXFYueuN2D/media/69bcb7322f5f659fea58ce9c.jpeg";

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "CEO, Construtora Almeida Group — Miami",
    text: "O Dr. Santiago não é apenas um mentor. Ele é um arquiteto de vidas. Em 6 meses de mentoria, triplicamos o faturamento, mas o mais importante: recuperei minha saúde, meu casamento e minha paz interior. Isso não tem preço.",
    initials: "RA",
  },
  {
    name: "Fernanda Costa",
    role: "Empresária, Setor de Tecnologia — Orlando",
    text: "Cheguei para a mentoria do Dr. Santiago no limite. Negócio crescendo, mas eu destruindo minha saúde e família para sustentar esse crescimento. Ele me mostrou que existe outro caminho. Hoje tenho os dois.",
    initials: "FC",
  },
  {
    name: "Marcos Oliveira",
    role: "Fundador, Rede de Restaurantes — Fort Lauderdale",
    text: "A metodologia dos 5 Pilares mudou completamente minha visão de sucesso. Antes eu achava que sucesso era só dinheiro. Hoje entendo que sucesso é uma vida alinhada. Minha equipe, minha família e meu negócio nunca estiveram tão bem.",
    initials: "MO",
  },
  {
    name: "Patricia Souza",
    role: "Médica e Empresária — Boca Raton",
    text: "Como médica, eu achava que sabia tudo sobre saúde. O Dr. Santiago me mostrou que saber e aplicar são coisas completamente diferentes. Sua abordagem de Performance Integral é revolucionária e transformadora.",
    initials: "PS",
  },
  {
    name: "Eduardo Lima",
    role: "Investidor Imobiliário — Miami Beach",
    text: "Investi em muitos cursos e mentorias ao longo da vida. A mentoria do Dr. Santiago é a única que gerou ROI em todas as áreas: financeiro, saúde, relacionamento e legado. É o investimento mais inteligente que já fiz.",
    initials: "EL",
  },
  {
    name: "Ana Beatriz Ferreira",
    role: "Diretora Executiva, Grupo Ferreira — Tampa",
    text: "O que mais me impressionou foi a profundidade do diagnóstico inicial. Dr. Santiago enxergou padrões na minha vida que eu nunca tinha percebido. A clareza que ele trouxe foi o que eu precisava para dar o próximo salto.",
    initials: "AF",
  },
];

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      try {
        await fetch("https://services.leadconnectorhq.com/hooks/PMW6fmu3oCfXFYueuN2D/webhook-trigger/e0cb8c17-fb7f-4ad7-ab1d-383735e96013", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        });
      } catch (error) {
        console.error("Error submitting newsletter form:", error);
      } finally {
        setSubmitted(true);
        const link = document.createElement("a");
        link.href = guidePdf;
        link.download = "5_pilares_performance_integral.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  return (
    <>
      {/* Testimonials */}
      <section ref={ref} className="py-24 md:py-32 bg-dark-2 overflow-hidden">
        <div className="container">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="section-label block mb-4">Resultados Reais</span>
            <h2
              className="text-offwhite"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: 700,
              }}
            >
              Vidas que Foram
              <br />
              <span className="text-gradient-gold">Transformadas</span>
            </h2>
            <span className="gold-divider mx-auto block mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-dark border border-[oklch(0.22_0.008_285)] hover:border-[oklch(0.72_0.12_75/0.3)] p-8 transition-all duration-500 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <Quote size={24} className="text-gold/40 mb-4" />
                <p
                  className="text-[oklch(0.70_0.01_285)] text-sm leading-relaxed mb-6 italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[oklch(0.22_0.008_285)]">
                  <div className="w-10 h-10 bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-gold text-sm font-bold"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-offwhite text-sm font-semibold"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-gold/70 text-xs italic"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section id="newsletter" className="py-24 bg-dark overflow-hidden">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div
              className={`bg-dark-2 border border-[oklch(0.72_0.12_75/0.2)] p-10 md:p-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {!submitted ? (
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
              ) : (
                <div className="text-center py-8 px-4 max-w-3xl mx-auto">
                  <h4
                    className="text-offwhite text-3xl md:text-4xl mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                  >
                    Parabéns! Seu guia está a caminho.
                  </h4>
                  <p
                    className="text-[oklch(0.70_0.01_285)] text-lg mb-8"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    O material <strong className="text-gold">"Os 5 Pilares da Performance Integral"</strong> já começou a ser baixado no seu dispositivo.
                    <br />
                    Se não iniciar automaticamente, verifique seus downloads.
                  </p>
                  
                  <div className="bg-dark/50 border border-[oklch(0.72_0.12_75/0.2)] p-8 md:p-12 text-left">
                    <p className="text-[oklch(0.85_0.01_285)] text-lg mb-6 leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                      Você já pode começar a aplicar hoje mesmo.<br /><br />
                      Mas antes… <strong className="text-gold font-bold">não feche esta página.</strong>
                      <br /><br />
                      O que você recebeu agora é apenas a base.
                      <br /><br />
                      Se você realmente quer destravar mais energia, foco e performance em nível máximo, precisa entender como aplicar isso de forma completa e estratégica.
                      <br /><br />
                      Por isso, preparei um conteúdo rápido e direto ao ponto:
                      <br /><br />
                      Uma apresentação onde eu te mostro como transformar esses 5 pilares em um sistema prático que gera resultado real no seu dia a dia.
                      <br /><br />
                      <span className="italic text-gold">Sem teoria. Sem enrolação. Apenas o que funciona.</span>
                    </p>

                    <div className="text-center mt-10">
                      <div className="text-3xl mb-4 animate-bounce">👇</div>
                      <p className="text-offwhite font-bold mb-6 text-lg" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                        Clique abaixo e assista agora:
                      </p>
                      <a 
                        href="https://link.salee.ai/widget/survey/Mufrh87YeRqFqFe3OS4m" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold w-full md:w-auto inline-flex items-center justify-center gap-2 text-sm md:text-base py-4"
                      >
                        👉 SIM, QUERO VER COMO APLICAR OS 5 PILARES NA PRÁTICA
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
