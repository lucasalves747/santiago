# Função `generate-pdf` — Relatório do Diagnóstico

Gera o PDF de 8 páginas enviado ao lead depois do quiz dos 5 Pilares.

| Página | Conteúdo |
| --- | --- |
| 1 | Capa: nome, data, score geral, perfil |
| 2 | Resumo executivo: radar, barras por pilar, "onde focar primeiro", "maior alavanca" |
| 3–7 | Uma página por pilar: as 5 respostas com nota, interpretação, 3 ações de 90 dias, custo de não agir × ganho em 90 dias |
| 8 | Plano de ação por prioridade, 4 passos e CTA da sessão estratégica |

## Onde está publicada

Projeto **Site santiago** (`fclzlgizmcrrxuinsttw`):

- Função: `https://fclzlgizmcrrxuinsttw.supabase.co/functions/v1/generate-pdf`
- Bucket público: `diagnosticos`

A URL e a chave publishable estão como padrão em `QuizSection.tsx` e podem ser
sobrescritas por `VITE_PDF_ENDPOINT` / `VITE_PDF_ANON_KEY` sem mexer no código.

Ao republicar pelo painel, confira que o **slug** da função é `generate-pdf` —
o dashboard gera um slug aleatório quando o campo não é preenchido antes do
deploy, e a URL usa o slug, não o nome exibido.

`SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` já existem por padrão no ambiente
das Edge Functions; não precisam ser configuradas.

## Testar local

```sh
deno run -A functions/generate-pdf/index.ts   # precisa das env vars do Supabase
```

Para testar só a geração do PDF, sem storage, substitua o `upload` por
`Deno.writeFile` e chame a função com o mesmo payload que o site envia
(veja `submitForm` em `client/src/components/QuizSection.tsx`).
