// DESIGN: "Força e Propósito" — Contact + Footer
// Dark footer with gold accents and social links

import { useEffect, useRef, useState } from "react";
import { Instagram, Youtube, Linkedin, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function FooterSection() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", telefone: "", subject: "", message: "" });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://services.leadconnectorhq.com/hooks/PMW6fmu3oCfXFYueuN2D/webhook-trigger/fab99221-7de8-4e04-b03a-8014d0659ee1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitted(true);
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contato" ref={ref} className="py-24 md:py-32 bg-dark-2 overflow-hidden">
        <div className="container">
          <div
            className={`mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="section-label block mb-4">Fale Comigo</span>
            <h2
              className="text-offwhite"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: 700,
              }}
            >
              Vamos Conversar
              <br />
              <span className="text-gradient-gold">Sobre o Seu Próximo Nível</span>
            </h2>
            <span className="gold-divider mt-6 block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div
              className={`transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <p
                className="text-[oklch(0.65_0.01_285)] text-base leading-relaxed mb-10"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Se você é um líder ou empresário que está pronto para o próximo nível — em saúde, negócios, família e legado — eu quero ouvir sua história. Preencha o formulário ou entre em contato diretamente.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[oklch(0.72_0.12_75/0.3)] flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="section-label mb-0.5">Localização</p>
                    <p className="text-[oklch(0.72_0.01_285)] text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                      Miami, Florida — EUA
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[oklch(0.72_0.12_75/0.3)] flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="section-label mb-0.5">WhatsApp</p>
                    <a
                      href="https://wa.me/13051234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[oklch(0.72_0.01_285)] text-sm hover:text-gold transition-colors duration-300"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      +1 (305) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[oklch(0.72_0.12_75/0.3)] flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="section-label mb-0.5">E-mail</p>
                    <a
                      href="mailto:contato@drsantiagovecina.com"
                      className="text-[oklch(0.72_0.01_285)] text-sm hover:text-gold transition-colors duration-300"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      contato@drsantiagovecina.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="section-label mb-4">Redes Sociais</p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram", href: "https://instagram.com/drsantiagovecina" },
                    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@drsantiagovecina" },
                    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/drsantiagovecina" },
                    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/13051234567" },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 border border-[oklch(0.22_0.008_285)] hover:border-gold hover:bg-gold/10 flex items-center justify-center transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <Icon size={16} className="text-[oklch(0.55_0.01_285)] group-hover:text-gold transition-colors duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="section-label block mb-2" htmlFor="c-name">Nome</label>
                      <input
                        id="c-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                        required
                        className="w-full bg-dark border border-[oklch(0.22_0.008_285)] focus:border-gold text-offwhite placeholder:text-[oklch(0.35_0.01_285)] px-4 py-3 text-sm outline-none transition-colors duration-300"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="section-label block mb-2" htmlFor="c-email">E-mail</label>
                      <input
                        id="c-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        required
                        className="w-full bg-dark border border-[oklch(0.22_0.008_285)] focus:border-gold text-offwhite placeholder:text-[oklch(0.35_0.01_285)] px-4 py-3 text-sm outline-none transition-colors duration-300"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="section-label block mb-2" htmlFor="c-telefone">Telefone</label>
                      <input
                        id="c-telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="Seu telefone"
                        required
                        className="w-full bg-dark border border-[oklch(0.22_0.008_285)] focus:border-gold text-offwhite placeholder:text-[oklch(0.35_0.01_285)] px-4 py-3 text-sm outline-none transition-colors duration-300"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="section-label block mb-2" htmlFor="c-subject">Assunto</label>
                    <select
                      id="c-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full bg-dark border border-[oklch(0.22_0.008_285)] focus:border-gold text-offwhite px-4 py-3 text-sm outline-none transition-colors duration-300"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      <option value="" disabled>Selecione o assunto</option>
                      <option value="mentoria">Mentoria de Performance Integral</option>
                      <option value="palestra">Contratar para Palestra</option>
                      <option value="livros">Sobre os Livros</option>
                      <option value="parceria">Parceria Estratégica</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="section-label block mb-2" htmlFor="c-message">Mensagem</label>
                    <textarea
                      id="c-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-me sobre você e o que você está buscando..."
                      required
                      rows={5}
                      className="w-full bg-dark border border-[oklch(0.22_0.008_285)] focus:border-gold text-offwhite placeholder:text-[oklch(0.35_0.01_285)] px-4 py-3 text-sm outline-none transition-colors duration-300 resize-none"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full">
                    Enviar Mensagem
                  </button>
                </form>
              ) : (
                <div className="text-center py-16 border border-[oklch(0.72_0.12_75/0.2)] bg-dark">
                  <div className="w-16 h-16 border-2 border-gold flex items-center justify-center mx-auto mb-6">
                    <span className="text-gold text-2xl">✓</span>
                  </div>
                  <h4
                    className="text-offwhite text-2xl mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                  >
                    Mensagem Enviada!
                  </h4>
                  <p
                    className="text-[oklch(0.62_0.01_285)] text-sm"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Responderei em até 48 horas. Obrigado pelo contato.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(0.05_0.004_285)] border-t border-[oklch(0.22_0.008_285)] py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[oklch(0.72_0.12_75)] flex items-center justify-center">
                <span
                  className="text-gold font-bold text-sm"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  SV
                </span>
              </div>
              <div>
                <p
                  className="text-offwhite text-sm font-semibold"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Dr. Santiago Vecina
                </p>
                <p
                  className="text-gold text-[10px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Performance Integral
                </p>
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {["Sobre", "Pilares", "Livros", "Premiações", "Mentoria", "Contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const el = document.querySelector(`#${item.toLowerCase().replace("ç", "c").replace("ã", "a").replace("é", "e").replace("ô", "o").replace("premiações", "premiacoes")}`);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-[oklch(0.50_0.01_285)] hover:text-gold transition-colors duration-300 text-xs tracking-[0.1em] uppercase"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Copyright */}
            <p
              className="text-[oklch(0.40_0.01_285)] text-xs text-center"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              © {new Date().getFullYear()} Dr. Santiago Vecina. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
