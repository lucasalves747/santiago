-- Leads do site Team Vecina (/tratamento, /ferramentas, /aula, quiz).
-- Substitui a tabela MySQL `leads` do projeto Manus.
-- Rodar uma vez no SQL Editor do projeto Supabase "Site santiago" (fclzlgizmcrrxuinsttw).

create table if not exists public.leads (
  id            bigint generated always as identity primary key,
  name          varchar(160) not null,
  email         varchar(320) not null,
  phone         varchar(40),
  locale        varchar(8)   not null default 'pt',
  source        varchar(120) not null,
  interest      varchar(32)  not null default 'general'
                check (interest in ('athlete', 'weight_loss', 'executive', 'general')),
  quiz_result   varchar(180),
  quiz_answers  jsonb,
  consent       boolean      not null default false,
  created_at    timestamptz  not null default now()
);

create index if not exists leads_email_idx   on public.leads (email);
create index if not exists leads_source_idx  on public.leads (source);
create index if not exists leads_created_idx on public.leads (created_at desc);

-- Quem pode ver o painel /admin/leads (usuários do Supabase Auth).
create table if not exists public.lead_admins (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.leads       enable row level security;
alter table public.lead_admins enable row level security;

-- Visitantes (anon) e logados podem APENAS inserir, e só com consentimento.
drop policy if exists "leads_insert_publico" on public.leads;
create policy "leads_insert_publico" on public.leads
  for insert to anon, authenticated
  with check (consent = true);

-- Só administradores leem os leads.
drop policy if exists "leads_select_admin" on public.leads;
create policy "leads_select_admin" on public.leads
  for select to authenticated
  using (exists (select 1 from public.lead_admins a where a.user_id = (select auth.uid())));

-- Cada usuário logado só enxerga a própria linha em lead_admins (para o site saber se é admin).
drop policy if exists "lead_admins_select_self" on public.lead_admins;
create policy "lead_admins_select_self" on public.lead_admins
  for select to authenticated
  using (user_id = (select auth.uid()));

grant insert on public.leads to anon, authenticated;
grant select on public.leads to authenticated;
grant select on public.lead_admins to authenticated;

-- =====================================================================
-- DEPOIS: criar o login do painel
-- 1) Authentication > Users > "Add user" (e-mail + senha, marque Auto Confirm)
-- 2) Rodar, trocando o e-mail:
--    insert into public.lead_admins (user_id)
--    select id from auth.users where email = 'EMAIL_DO_ADMIN@exemplo.com';
-- =====================================================================
