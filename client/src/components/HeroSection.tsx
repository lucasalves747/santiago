// DESIGN: "Força e Propósito" — Bold Luxury Hero
// Full-screen hero with dramatic overlay, large typography, gold accents
// Background: hero_main.jpg (Miami penthouse at golden hour)

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://assets.cdn.filesafe.space/PMW6fmu3oCfXFYueuN2D/media/69bcb2ef3147fd2d716e8688.png";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.05_0.005_285/0.92)] via-[oklch(0.05_0.005_285/0.75)] to-[oklch(0.05_0.005_285/0.5)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0.005_285/0.9)] via-transparent to-[oklch(0.05_0.005_285/0.3)]" />

      {/* Gold grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Pre-title label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="gold-divider" />
            <span className="section-label">Médico · Empresário · Mentor</span>
          </div>

          {/* Main title */}
          <h1
            className={`text-offwhite mb-4 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            Dr. Santiago
            <br />
            <span className="text-gradient-gold">Vecina</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-[oklch(0.75_0.008_285)] text-xl md:text-2xl mb-2 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400 }}
          >
            Performance Integral — Saúde, Negócios & Legado
          </p>

          {/* Tese Central */}
          <div
            className={`border-l-2 border-gold pl-5 my-8 max-w-2xl transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p
              className="text-offwhite/90 text-lg md:text-xl leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              "Pessoas alinhadas constroem empresas fortes. Empresas fortes sustentam famílias estruturadas. Famílias estruturadas constroem legado."
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mt-8 transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <a href="https://link.salee.ai/widget/survey/Mufrh87YeRqFqFe3OS4m"><button
              className="btn-gold"
            >
              Quero a Performance Integral
            </button></a>
            <button
              onClick={() => {
                const el = document.querySelector("#sobre");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline-gold"
            >
              Conhecer o Dr. Santiago
            </button>
          </div>

          {/* Stats bar */}
          <div
            className={`flex flex-wrap gap-8 mt-16 pt-8 border-t border-[oklch(0.72_0.12_75/0.2)] transition-all duration-1000 delay-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {[
              { number: "15+", label: "Anos de Experiência" },
              { number: "500+", label: "Líderes Transformados" },
              { number: "3", label: "Livros Publicados" },
              { number: "Miami", label: "Base de Operações" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="text-gold text-3xl md:text-4xl font-bold"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-[oklch(0.62_0.01_285)] text-xs tracking-[0.15em] uppercase mt-1"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/60 hover:text-gold transition-colors duration-300 animate-bounce"
      >
        <span className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

        </span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
