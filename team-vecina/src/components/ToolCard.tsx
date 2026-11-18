import { Link } from "wouter";
import { ArrowUpRight, FileText } from "lucide-react";
import type { Tool } from "@/content/tools";

type ToolCardProps = {
  tool: Tool;
  featured?: boolean;
};

export default function ToolCard({ tool, featured = false }: ToolCardProps) {
  return (
    <Link
      href={`/ferramentas/${tool.slug}`}
      className={`sv-tool-card ${featured ? "is-featured" : ""}`}
    >
      <div className="sv-tool-card-top">
        <span className="sv-tool-icon"><FileText size={18} /></span>
        <span className="sv-tool-language">PDF gratuito</span>
      </div>
      <div>
        <p className="sv-tool-audience">{tool.audience}</p>
        <h3>{tool.shortTitle}</h3>
        <p className="sv-tool-subtitle">{tool.subtitle}</p>
      </div>
      <div className="sv-tool-card-bottom">
        <span>{tool.format}</span>
        <span className="sv-tool-link">
          Acessar <ArrowUpRight size={15} />
        </span>
      </div>
    </Link>
  );
}
