import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

// Mesmo projeto Supabase usado pelo diagnóstico do site principal.
// Pode ser sobrescrito por VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY.
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || "https://fclzlgizmcrrxuinsttw.supabase.co";
const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_f4lrS0pwxZUexjlvGfBL1w_CBN_V8Pf";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const leadInputSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(160),
  email: z.string().trim().email("Informe um e-mail válido.").max(320),
  phone: z.string().trim().max(40).optional(),
  locale: z.enum(["pt", "en"]).default("pt"),
  source: z.string().trim().min(1).max(120),
  interest: z.enum(["athlete", "weight_loss", "executive", "general"]).default("general"),
  quizResult: z.string().trim().max(180).optional(),
  quizAnswers: z.record(z.string(), z.number()).optional(),
  consent: z.literal(true),
});

export type LeadInput = z.input<typeof leadInputSchema>;

export type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  locale: string;
  source: string;
  interest: string;
  quiz_result: string | null;
  quiz_answers: Record<string, number> | null;
  consent: boolean;
  created_at: string;
};

/** Grava um lead na tabela public.leads (RLS permite só INSERT para visitantes). */
export async function createLead(input: LeadInput) {
  const lead = leadInputSchema.parse(input);
  const { error } = await supabase.from("leads").insert({
    name: lead.name,
    email: lead.email.toLowerCase(),
    phone: lead.phone || null,
    locale: lead.locale,
    source: lead.source,
    interest: lead.interest,
    quiz_result: lead.quizResult ?? null,
    quiz_answers: lead.quizAnswers ?? null,
    consent: lead.consent,
  });
  if (error) throw error;
  return { success: true } as const;
}
