import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { MAIN_SITE, MEDICAL_APPLY_HREF, NAV_LINKS, SITE_TAGLINE, TREATMENT_HUB } from "@/content/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`sv-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="sv-container sv-header-inner">
        <Link href={TREATMENT_HUB} className="sv-brand" aria-label="Dr. Santiago Vecina — início">
          <span className="sv-mark" aria-hidden="true">SV</span>
          <span className="sv-brand-copy">
            <strong>Dr. Santiago Vecina</strong>
            <small>{SITE_TAGLINE}</small>
          </span>
        </Link>

        <nav className="sv-nav-desktop" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={location === link.href ? "is-active" : ""}
            >
              {link.label}
            </Link>
          ))}
          <a href={MAIN_SITE} target="_blank" rel="noreferrer" className="sv-nav-site">
            Site principal <ArrowUpRight size={13} />
          </a>
        </nav>

        <div className="sv-header-actions">
          <a href={MEDICAL_APPLY_HREF} className="sv-btn sv-btn-gold sv-btn-sm">
            Aplicar para o Team Vecina <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            className="sv-menu-button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="sv-mobile-menu">
          <nav aria-label="Navegação mobile">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
                <ArrowUpRight size={18} />
              </Link>
            ))}
            <a href={MAIN_SITE} target="_blank" rel="noreferrer">
              Site principal <ArrowUpRight size={18} />
            </a>
          </nav>
          <a href={MEDICAL_APPLY_HREF} className="sv-btn sv-btn-gold sv-btn-block">
            Aplicar para o Team Vecina <ArrowUpRight size={16} />
          </a>
          <p className="sv-mobile-note">
            Performance Integral · Saúde, negócios e legado
          </p>
        </div>
      )}
    </header>
  );
}
