import { useCallback, useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { Link } from "wouter";
import {
  ArrowLeft,
  Download,
  Loader2,
  Lock,
  LogOut,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import { supabase, type Lead } from "@/lib/supabase";

const CSV_COLUMNS: (keyof Lead)[] = [
  "id", "created_at", "name", "email", "phone", "locale", "source",
  "interest", "quiz_result", "quiz_answers", "consent",
];

function toCsv(rows: Lead[]) {
  const escape = (value: unknown) => {
    if (value === null || value === undefined) return "";
    const text = typeof value === "object" ? JSON.stringify(value) : String(value);
    return /[",;\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  };
  const lines = rows.map((row) => CSV_COLUMNS.map((col) => escape(row[col])).join(","));
  return "\uFEFF" + [CSV_COLUMNS.join(","), ...lines].join("\n");
}

function formatDate(value: Date | string) {
  const date = value instanceof Date ? value : new Date(value);
  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminLeads() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [leadsLoading, setLeadsLoading] = useState(false);
  const [leadsError, setLeadsError] = useState(false);
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [exporting, setExporting] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  const user = session?.user ?? null;

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, next) => setSession(next));
    return () => data.subscription.unsubscribe();
  }, []);

  const loadLeads = useCallback(async () => {
    if (!user) return;
    setLeadsLoading(true);
    setLeadsError(false);
    const admin = await supabase
      .from("lead_admins")
      .select("user_id")
      .eq("user_id", user.id)
      .maybeSingle();
    if (admin.error || !admin.data) {
      setIsAdmin(false);
      setLeadsLoading(false);
      return;
    }
    setIsAdmin(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1000);
    if (error) setLeadsError(true);
    setLeads((data as Lead[]) ?? []);
    setLeadsLoading(false);
  }, [user]);

  useEffect(() => {
    if (user) loadLeads();
    else {
      setIsAdmin(null);
      setLeads([]);
    }
  }, [user, loadLeads]);

  const logout = () => supabase.auth.signOut();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError("");
    setSigningIn(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail.trim(),
      password: loginPassword,
    });
    setSigningIn(false);
    if (error) setLoginError("E-mail ou senha incorretos.");
  };

  const sources = useMemo(
    () => Array.from(new Set(leads.map((lead) => lead.source))).sort(),
    [leads],
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return leads.filter((lead) => {
      const matchesSource = sourceFilter === "all" || lead.source === sourceFilter;
      const matchesQuery =
        !query ||
        [lead.name, lead.email, lead.phone, lead.source, lead.quiz_result]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(query));
      return matchesSource && matchesQuery;
    });
  }, [leads, search, sourceFilter]);

  const lastSevenDays = leads.filter((lead) => {
    const created = new Date(lead.created_at).getTime();
    return Date.now() - created < 7 * 24 * 60 * 60 * 1000;
  }).length;

  const quizCount = leads.filter((lead) => lead.quiz_result).length;

  const handleExport = async () => {
    setExporting(true);
    try {
      const csv = toCsv(leads);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `leads-sv-${new Date().toISOString().slice(0, 10)}.csv`;
      anchor.click();
      URL.revokeObjectURL(url);
    } finally {
      setExporting(false);
    }
  };

  if (loading) {
    return (
      <section className="sv-admin-loading">
        <Loader2 className="sv-spin" size={26} />
        <p>Verificando acesso…</p>
      </section>
    );
  }

  if (!user) {
    return (
      <>
        <PageMeta title="Área do médico | Dr. Santiago Vecina" description="Acesso restrito." path="/admin/leads" noindex />
        <section className="sv-admin-gate">
          <Reveal className="sv-admin-gate-card">
            <span className="sv-success-icon"><Lock size={22} /></span>
            <p className="sv-eyebrow">Área restrita</p>
            <h1 className="sv-display">Painel de leads</h1>
            <p>
              Este espaço é reservado para o Dr. Santiago Vecina e a equipe autorizada. Entre com
              a sua conta para visualizar e exportar os contatos.
            </p>
            <form className="sv-lead-form is-dark" onSubmit={handleLogin}>
              <label>
                <span>E-mail</span>
                <input
                  type="email"
                  autoComplete="email"
                  value={loginEmail}
                  onChange={(event) => setLoginEmail(event.target.value)}
                  required
                />
              </label>
              <label>
                <span>Senha</span>
                <input
                  type="password"
                  autoComplete="current-password"
                  value={loginPassword}
                  onChange={(event) => setLoginPassword(event.target.value)}
                  required
                />
              </label>
              {loginError && <p className="sv-form-error" role="alert">{loginError}</p>}
              <button type="submit" className="sv-btn sv-btn-gold sv-btn-block" disabled={signingIn}>
                {signingIn ? <Loader2 size={15} className="sv-spin" /> : <ShieldCheck size={16} />}
                Entrar
              </button>
            </form>
            <Link href="/tratamento/acompanhamento" className="sv-text-link">
              <ArrowLeft size={14} /> Voltar ao site
            </Link>
          </Reveal>
        </section>
      </>
    );
  }

  if (isAdmin === null) {
    return (
      <section className="sv-admin-loading">
        <Loader2 className="sv-spin" size={26} />
        <p>Verificando acesso…</p>
      </section>
    );
  }

  if (!isAdmin) {
    return (
      <>
        <PageMeta title="Área do médico | Dr. Santiago Vecina" description="Acesso restrito." path="/admin/leads" noindex />
        <section className="sv-admin-gate">
          <Reveal className="sv-admin-gate-card">
            <span className="sv-success-icon"><Lock size={22} /></span>
            <p className="sv-eyebrow">Acesso restrito</p>
            <h1 className="sv-display">Esta conta não é administradora.</h1>
            <p>
              Você está autenticado como {user.email || "usuário"}, mas não tem
              permissão para ver os leads. Saia e entre com a conta do proprietário.
            </p>
            <button type="button" className="sv-btn sv-btn-outline" onClick={() => logout()}>
              <LogOut size={15} /> Sair
            </button>
            <Link href="/tratamento/acompanhamento" className="sv-text-link">
              <ArrowLeft size={14} /> Voltar ao site
            </Link>
          </Reveal>
        </section>
      </>
    );
  }

  return (
    <>
      <PageMeta title="Leads | Dr. Santiago Vecina" description="Painel de leads." path="/admin/leads" noindex />
      <section className="sv-admin">
        <div className="sv-container">
          <div className="sv-admin-header">
            <div>
              <Link href="/tratamento/acompanhamento" className="sv-back-link">
                <ArrowLeft size={14} /> Voltar ao site
              </Link>
              <p className="sv-eyebrow">Área do médico</p>
              <h1 className="sv-display">Leads</h1>
              <p className="sv-admin-subtitle">
                Contatos capturados nas páginas de tratamento, ferramentas e quiz.
              </p>
            </div>
            <div className="sv-admin-actions">
              <button
                type="button"
                className="sv-btn sv-btn-gold"
                onClick={handleExport}
                disabled={exporting || leads.length === 0}
              >
                {exporting ? <Loader2 size={15} className="sv-spin" /> : <Download size={15} />}
                Exportar CSV
              </button>
              <button type="button" className="sv-btn sv-btn-ghost" onClick={() => logout()}>
                <LogOut size={15} /> Sair
              </button>
            </div>
          </div>

          <div className="sv-admin-stats">
            <div className="sv-admin-stat">
              <Users size={18} />
              <span>Total</span>
              <strong>{leads.length}</strong>
            </div>
            <div className="sv-admin-stat">
              <span>Últimos 7 dias</span>
              <strong>{lastSevenDays}</strong>
            </div>
            <div className="sv-admin-stat">
              <span>Concluíram o quiz</span>
              <strong>{quizCount}</strong>
            </div>
          </div>

          <div className="sv-admin-toolbar">
            <label className="sv-admin-search">
              <Search size={16} />
              <input
                type="search"
                placeholder="Buscar por nome, e-mail, telefone ou resultado…"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
            <select
              value={sourceFilter}
              onChange={(event) => setSourceFilter(event.target.value)}
              aria-label="Filtrar por origem"
            >
              <option value="all">Todas as origens</option>
              {sources.map((source) => (
                <option key={source} value={source}>{source}</option>
              ))}
            </select>
          </div>

          {leadsLoading ? (
            <div className="sv-admin-loading"><Loader2 className="sv-spin" size={22} /> Carregando leads…</div>
          ) : leadsError ? (
            <div className="sv-admin-empty">Não foi possível carregar os leads. Tente recarregar.</div>
          ) : filtered.length === 0 ? (
            <div className="sv-admin-empty">Nenhum lead encontrado com esses filtros.</div>
          ) : (
            <div className="sv-admin-table-wrap">
              <table className="sv-admin-table">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Nome</th>
                    <th>Contato</th>
                    <th>Origem</th>
                    <th>Interesse</th>
                    <th>Quiz</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((lead) => (
                    <tr key={lead.id}>
                      <td>{formatDate(lead.created_at)}</td>
                      <td><strong>{lead.name}</strong></td>
                      <td>
                        <a href={`mailto:${lead.email}`}>{lead.email}</a>
                        {lead.phone && <span className="sv-admin-phone">{lead.phone}</span>}
                      </td>
                      <td><span className="sv-admin-pill">{lead.source}</span></td>
                      <td>{lead.interest}</td>
                      <td>{lead.quiz_result || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
