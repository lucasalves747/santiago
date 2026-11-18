import { Link } from "wouter";
import { ArrowUpRight, Instagram, Linkedin, Youtube } from "lucide-react";
import {
  APPLY_URL,
  INSTAGRAM,
  MEDICAL_APPLY_HREF,
  LINKEDIN,
  MAIN_SITE,
  SITE_TAGLINE,
  YOUTUBE,
} from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="sv-footer">
      <div className="sv-container">
        <div className="sv-footer-top">
          <div className="sv-footer-brand">
            <span className="sv-mark" aria-hidden="true">SV</span>
            <div>
              <strong>Dr. Santiago Vecina</strong>
              <span>{SITE_TAGLINE}</span>
            </div>
          </div>
          <p className="sv-footer-statement">
            Medicina para sustentar o próximo nível — no corpo, na mente e no legado.
          </p>
          <a href={MEDICAL_APPLY_HREF} className="sv-btn sv-btn-outline">
            Aplicar para o Team Vecina <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="sv-footer-grid">
          <div>
            <h3>Tratamento</h3>
            <Link href="/tratamento/acompanhamento">Team Vecina</Link>
            <Link href="/tratamento/acompanhamento/atleta">Atletas e triatletas</Link>
            <Link href="/tratamento/acompanhamento/emagrecimento">Emagrecimento</Link>
            <Link href="/tratamento/acompanhamento/empresarios">Empresários</Link>
            <a href={APPLY_URL} target="_blank" rel="noreferrer">Aplicação executiva Legado 2036</a>
          </div>
          <div>
            <h3>Ferramentas</h3>
            <Link href="/ferramentas">Biblioteca completa</Link>
            <Link href="/ferramentas/gargalo-metabolico">Quiz do gargalo</Link>
            <Link href="/aula">Aula gratuita</Link>
          </div>
          <div>
            <h3>Institucional</h3>
            <a href={MAIN_SITE} target="_blank" rel="noreferrer">Site principal</a>
            <Link href="/privacidade">Privacidade</Link>
            <Link href="/aviso-medico">Aviso médico</Link>
            <Link href="/admin/leads">Área do médico</Link>
          </div>
          <div>
            <h3>Conecte-se</h3>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              <Instagram size={15} /> Instagram
            </a>
            <a href={YOUTUBE} target="_blank" rel="noreferrer">
              <Youtube size={15} /> YouTube
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="sv-footer-bottom">
          <p>
            © {new Date().getFullYear()} Dr. Santiago Vecina. Todos os direitos reservados.
          </p>
          <p>
            Conteúdo educativo. Não substitui avaliação médica individual. Resultados variam.
          </p>
        </div>
      </div>
    </footer>
  );
}
