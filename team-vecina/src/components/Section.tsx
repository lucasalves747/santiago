import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  tone?: "dark" | "cream" | "ink";
  className?: string;
  align?: "left" | "center";
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "dark",
  className = "",
  align = "left",
}: SectionProps) {
  return (
    <section id={id} className={`sv-section sv-section-${tone} ${className}`}>
      <div className="sv-container">
        {(eyebrow || title || intro) && (
          <div className={`sv-section-heading ${align === "center" ? "is-center" : ""}`}>
            {eyebrow && <p className="sv-eyebrow">{eyebrow}</p>}
            {title && <h2 className="sv-display sv-section-title">{title}</h2>}
            {intro && <p className="sv-section-intro">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
