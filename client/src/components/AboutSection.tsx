// DESIGN: "Força e Propósito" — About Section
// Asymmetric layout: photo left, text right
// Dark background with gold accents

import { useEffect, useRef, useState } from "react";

const ABOUT_IMAGE = "https://assets.cdn.filesafe.space/PMW6fmu3oCfXFYueuN2D/media/69bcb3d77e33efa90585354a.jpg";

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={ref} className="py-24 md:py-32 bg-dark-2 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            {/* Gold frame accent */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-gold z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-gold z-10" />

            {/* Photo */}
            <div className="relative overflow-hidden">
              <img
                src={ABOUT_IMAGE}
                alt="Dr. Santiago Vecina"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "600px", objectPosition: "top" }}
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[oklch(0.11_0.006_285)] to-transparent" />
            </div>

            {/* Floating credential badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-[oklch(0.08_0.005_285/0.9)] backdrop-blur-sm border border-[oklch(0.72_0.12_75/0.3)] p-4">
              <p className="section-label mb-1">Posicionamento</p>
              <p
                className="text-offwhite text-base leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                "Arquiteto da Performance Integral para líderes que se recusam a viver abaixo do seu potencial."
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div
            className={`transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <span className="section-label block mb-4">Quem é</span>
            <h2
              className="text-offwhite mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              O Médico que
              <br />
              <span className="text-gradient-gold">Transforma Líderes</span>
            </h2>

            <span className="gold-divider mb-8 block" />

            <div className="space-y-5 text-[oklch(0.72_0.01_285)] leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "1rem" }}>
              <p>
                Dr. Santiago Vecina é médico, nutrólogo, empresário e mentor de alta performance. Sua trajetória única combina a precisão da ciência médica com a visão estratégica de quem construiu e reconstruiu negócios, e a sabedoria de quem passou pelo fundo do poço e emergiu transformado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
