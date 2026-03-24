// DESIGN: "Força e Propósito" — Bold Luxury
// Navbar: Transparent on top, dark with gold border on scroll
// Logo: "SV" monogram + "Dr. Santiago Vecina" in Cormorant Garamond

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Os 5 Pilares", href: "#pilares" },
  { label: "Livros", href: "#livros" },
  { label: "Premiações", href: "#premiacoes" },
  { label: "Diagnóstico", href: "#quiz" },
  { label: "Mentoria", href: "#mentoria" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.08_0.005_285/0.97)] backdrop-blur-md border-b border-[oklch(0.72_0.12_75/0.2)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 border border-[oklch(0.72_0.12_75)] flex items-center justify-center">
            <span
              className="text-gold font-bold text-lg leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              SV
            </span>
          </div>
          <div className="hidden sm:block">
            <p
              className="text-offwhite text-sm font-semibold leading-tight tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Dr. Santiago Vecina
            </p>
            <p className="text-[oklch(0.72_0.12_75)] text-[10px] tracking-[0.2em] uppercase font-semibold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Performance Integral
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 6).map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-[oklch(0.75_0.008_285)] hover:text-gold transition-colors duration-300 text-xs tracking-[0.15em] uppercase font-semibold"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Desktop */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleNavClick("#mentoria")}
            className="btn-gold text-xs"
          >
            Aplicar para Mentoria
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gold p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[oklch(0.08_0.005_285/0.98)] backdrop-blur-md border-t border-[oklch(0.72_0.12_75/0.2)] py-6">
          <div className="container flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-[oklch(0.75_0.008_285)] hover:text-gold transition-colors duration-300 text-sm tracking-[0.15em] uppercase font-semibold py-2 border-b border-[oklch(0.22_0.008_285)]"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#mentoria")}
              className="btn-gold mt-2 text-center"
            >
              Aplicar para Mentoria
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
