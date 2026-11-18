import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowRight, Check, Loader2, ShieldCheck } from "lucide-react";
import { createLead } from "@/lib/supabase";

type Interest = "athlete" | "weight_loss" | "executive" | "general";

type LeadFormProps = {
  source: string;
  interest?: Interest;
  locale?: "pt" | "en";
  requirePhone?: boolean;
  redirectTo?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  compact?: boolean;
  dark?: boolean;
  quizResult?: string;
  quizAnswers?: Record<string, number>;
};

export default function LeadForm({
  source,
  interest = "general",
  locale = "pt",
  requirePhone = false,
  redirectTo,
  title,
  subtitle,
  buttonLabel,
  compact = false,
  dark = true,
  quizResult,
  quizAnswers,
}: LeadFormProps) {
  const [, navigate] = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [localError, setLocalError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [pending, setPending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const copy = locale === "en"
    ? {
        name: "Your name",
        email: "Your best email",
        phone: "WhatsApp (optional)",
        phoneRequired: "WhatsApp",
        consent:
          "I agree to receive the material and occasional communication from Dr. Santiago Vecina. My data will not be sold.",
        button: buttonLabel ?? "Send me the guide",
        successTitle: "You are in.",
        successText:
          "Your request was received. Check your inbox and the next steps below.",
        privacy: "Your data is treated with confidentiality.",
        error: "Please check your name, email and consent.",
      }
    : {
        name: "Seu nome",
        email: "Seu melhor e-mail",
        phone: "Seu WhatsApp (opcional)",
        phoneRequired: "Seu WhatsApp",
        consent:
          "Concordo em receber o material e comunicações pontuais do Dr. Santiago Vecina. Meus dados não serão vendidos.",
        button: buttonLabel ?? "Quero receber o material",
        successTitle: "Recebido.",
        successText:
          "Seu pedido chegou. Confira o material e os próximos passos abaixo.",
        privacy: "Seus dados são tratados com confidencialidade.",
        error: "Confira nome, e-mail e consentimento.",
      };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocalError("");

    if (!name.trim() || !email.trim() || !consent || (requirePhone && !phone.trim())) {
      setLocalError(copy.error);
      return;
    }

    setPending(true);
    setSendError(false);
    createLead({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      locale,
      source,
      interest,
      consent: true,
      quizResult,
      quizAnswers,
    })
      .then(() => {
        if (redirectTo) {
          navigate(redirectTo);
        } else {
          setSubmitted(true);
        }
      })
      .catch((error) => {
        console.error("[lead] erro ao salvar no Supabase", error);
        setSendError(true);
      })
      .finally(() => setPending(false));
  };

  if (submitted) {
    return (
      <div className={`sv-form-success ${dark ? "is-dark" : "is-light"}`}>
        <span className="sv-success-icon"><Check size={22} /></span>
        <h3>{copy.successTitle}</h3>
        <p>{copy.successText}</p>
        <a href="/ferramentas" className="sv-btn sv-btn-gold">
          {locale === "en" ? "Explore other tools" : "Ver outras ferramentas"} <ArrowRight size={15} />
        </a>
      </div>
    );
  }

  return (
    <form
      className={`sv-lead-form ${compact ? "is-compact" : ""} ${dark ? "is-dark" : "is-light"}`}
      onSubmit={handleSubmit}
      noValidate
    >
      {(title || subtitle) && (
        <div className="sv-form-heading">
          {title && <h3>{title}</h3>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}

      <div className="sv-form-grid">
        <label>
          <span>{copy.name}</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={locale === "en" ? "First and last name" : "Nome e sobrenome"}
            required
          />
        </label>
        <label>
          <span>{copy.email}</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="voce@email.com"
            required
          />
        </label>
      </div>

      <label>
        <span>{requirePhone ? copy.phoneRequired : copy.phone}</span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder={locale === "en" ? "+1 (305) 000-0000" : "+55 (11) 90000-0000"}
          required={requirePhone}
        />
      </label>

      <label className="sv-consent">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
        />
        <span>{copy.consent}</span>
      </label>

      {localError && <p className="sv-form-error" role="alert">{localError}</p>}
      {sendError && (
        <p className="sv-form-error" role="alert">
          {locale === "en"
            ? "We could not send your request. Please try again."
            : "Não foi possível enviar agora. Tente novamente em instantes."}
        </p>
      )}

      <button
        type="submit"
        className="sv-btn sv-btn-gold sv-btn-block"
        disabled={pending}
      >
        {pending ? (
          <>
            <Loader2 size={16} className="sv-spin" /> {locale === "en" ? "Sending..." : "Enviando..."}
          </>
        ) : (
          <>
            {copy.button} <ArrowRight size={16} />
          </>
        )}
      </button>

      <p className="sv-form-privacy">
        <ShieldCheck size={14} /> {copy.privacy}{" "}
        <a href="/privacidade">{locale === "en" ? "Privacy" : "Política de privacidade"}</a>
      </p>
    </form>
  );
}
