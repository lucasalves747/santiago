/**
 * generate-pdf — Relatório completo do Diagnóstico dos 5 Pilares
 * Design: Bold Luxury — Preto profundo + Dourado (#C9A84C) + Off-white
 * Gera um PDF de 8 páginas (capa, resumo, 5 pilares, plano de ação),
 * salva no bucket "diagnosticos" e devolve a URL pública.
 */

import { PDFDocument, PDFFont, PDFPage, StandardFonts, rgb } from "npm:pdf-lib@1.17.1";
import { createClient } from "npm:@supabase/supabase-js@2";

// ─── Tipos ───────────────────────────────────────────────────────────────────

type PilarId = "saude" | "mente" | "lideranca" | "negocios" | "legado";

interface Pergunta {
  pilar: PilarId;
  texto: string;
  resposta: string;
  pontos: number;
}

interface Payload {
  nome: string;
  email?: string;
  telefone?: string;
  resultados: Record<PilarId, number>;
  pilarFraco?: PilarId;
  scoreGeral: number;
  tituloPerfil: string;
  descricaoPerfil: string;
  perguntas?: Pergunta[];
}

// ─── Cores ───────────────────────────────────────────────────────────────────

const hex = (h: string) => {
  const n = parseInt(h.slice(1), 16);
  return rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
};

const C = {
  bg: hex("#0D0A07"),
  bg2: hex("#1A1410"),
  card: hex("#15100C"),
  gold: hex("#C9A84C"),
  goldSoft: hex("#E2C97E"),
  cream: hex("#F5F0E8"),
  muted: hex("#9A9288"),
  faint: hex("#4A423A"),
  line: hex("#2E271F"),
  white: hex("#FFFFFF"),
};

// ─── Conteúdo ────────────────────────────────────────────────────────────────

const PILARES: Record<PilarId, {
  numero: string;
  nome: string;
  subtitulo: string;
  curto: string;
  descricao: string;
  interpretacao: Record<string, string>;
  custo: string;
  ganho: string;
  acoes: { baixo: string[]; medio: string[]; alto: string[] };
}> = {
  saude: {
    numero: "01",
    nome: "Saúde Estratégica",
    subtitulo: "Ativo de Negócio",
    curto: "Saúde",
    descricao: "Fisiologia, metabolismo e energia como base para a alta performance.",
    interpretacao: {
      "Crítico": "Seu corpo está pagando a conta da sua agenda. Energia baixa, sono negligenciado e ausência de acompanhamento médico formam um risco real — não só para a saúde, mas para a qualidade de cada decisão que você toma. Este é o pilar que sustenta todos os outros.",
      "Frágil": "Você funciona, mas à custa de reservas que estão acabando. Oscilações de energia e sono irregular já reduzem sua capacidade cognitiva sem que você perceba. Pequenas mudanças estruturais aqui geram retorno imediato.",
      "Em Desenvolvimento": "Há consciência e algum cuidado, mas ainda falta consistência. Nos períodos de pressão a saúde é a primeira coisa sacrificada — exatamente quando você mais precisa dela. O próximo passo é transformar cuidado em sistema.",
      "Sólido": "Você já trata a saúde como ativo. Sono, alimentação e movimento estão razoavelmente estruturados. O refinamento agora é otimização: dados, protocolo individualizado e recuperação estratégica.",
      "Excelente": "Sua fisiologia é uma vantagem competitiva. Energia consistente, sono protegido e acompanhamento proativo. Use este pilar como alavanca para sustentar os demais e como exemplo para quem você lidera.",
    },
    custo: "Energia instável e decisões tomadas em déficit cognitivo. O custo não aparece no balanço — aparece nas oportunidades que você não enxergou e nas reuniões em que você não estava inteiro.",
    ganho: "Energia previsível do primeiro ao último compromisso do dia, clareza para decidir à tarde como você decide pela manhã, e a segurança de que o corpo não será o gargalo do próximo ciclo.",
    acoes: {
      baixo: [
        "Agende um check-up completo nos próximos 15 dias, com exames hormonais e metabólicos.",
        "Defina um horário fixo de dormir e proteja 7 horas de sono por 21 dias seguidos.",
        "Substitua o segundo café da tarde por uma caminhada de 15 minutos.",
      ],
      medio: [
        "Bloqueie 3 treinos semanais na agenda como compromissos inegociáveis.",
        "Planeje as refeições da semana de trabalho com antecedência para eliminar a improvisação.",
        "Monitore sono e energia por 30 dias e identifique o que derruba sua performance.",
      ],
      alto: [
        "Implemente um protocolo individualizado com base em exames e biomarcadores.",
        "Estruture ciclos de recuperação: pausas reais a cada trimestre, sem exceção.",
        "Transforme sua rotina de saúde em cultura: leve o exemplo para equipe e família.",
      ],
    },
  },
  mente: {
    numero: "02",
    nome: "Mente e Clareza",
    subtitulo: "Clareza Total",
    curto: "Mente",
    descricao: "Inteligência emocional e foco para decisões críticas sob pressão.",
    interpretacao: {
      "Crítico": "A pressão está decidindo por você. Decisões impulsivas ou paralisia, foco fragmentado e emoções que dominam situações críticas comprometem tudo que você constrói. Sem clareza mental, o resto da estratégia não se sustenta.",
      "Frágil": "Você decide, mas carrega ansiedade e insegurança em cada escolha importante. Crenças limitantes ainda sabotam oportunidades e o foco se perde com facilidade. Este pilar precisa de método, não de mais esforço.",
      "Em Desenvolvimento": "Há clareza na maior parte do tempo, mas a pressão intensa ainda desequilibra. Suas práticas de desenvolvimento mental existem, porém sem sistema. Consistência é o que separa você do próximo nível.",
      "Sólido": "Você tem método para decidir e inteligência emocional para sustentar o processo. Os blocos de foco funcionam. O refinamento é blindar a atenção e antecipar cenários de alta pressão.",
      "Excelente": "Sua mente é um instrumento afiado: clareza, foco profundo e equilíbrio emocional mesmo sob pressão extrema. Use isso para formar outros líderes e para tomar as decisões que definem legado.",
    },
    custo: "Decisões caras tomadas sob pressão, oportunidades perdidas por insegurança e um desgaste emocional que contamina equipe e família sem que ninguém diga em voz alta.",
    ganho: "Método para decidir com confiança, foco protegido para o trabalho que só você pode fazer e uma estabilidade emocional que a equipe percebe, respeita e imita.",
    acoes: {
      baixo: [
        "Adote uma regra de 24 horas antes de qualquer decisão irreversível.",
        "Comece uma prática diária de 10 minutos de silêncio, oração ou meditação.",
        "Busque acompanhamento profissional (terapia ou mentoria) para as crenças que travam você.",
      ],
      medio: [
        "Bloqueie 2 horas diárias de foco profundo, sem celular e sem interrupções.",
        "Escreva seus critérios de decisão antes de cada escolha estratégica.",
        "Mantenha um diário semanal de decisões e revise o que a pressão mudou.",
      ],
      alto: [
        "Simule cenários de crise com antecedência e defina respostas pré-decididas.",
        "Ensine seu método de decisão para a equipe e para os líderes que você forma.",
        "Proteja a atenção como ativo: audite semanalmente onde ela está sendo gasta.",
      ],
    },
  },
  lideranca: {
    numero: "03",
    nome: "Liderança com Propósito",
    subtitulo: "Cultura Forte",
    curto: "Liderança",
    descricao: "Formação de líderes e influência que transcende o ambiente de trabalho.",
    interpretacao: {
      "Crítico": "Sua equipe trabalha por obrigação e tudo passa por você. Sem valores claros, sem delegação e sem sucessores, a empresa é refém da sua presença — e sua família recebe o que sobra. Liderança hoje é reação, não direção.",
      "Frágil": "Existe algum engajamento, mas ele depende de você estar presente. A delegação gera ansiedade e os valores não guiam decisões de forma consistente. É hora de definir o que você representa e comunicar isso.",
      "Em Desenvolvimento": "Você inspira, delega na maior parte dos casos e tem valores claros — mas ainda microgerencia em algumas áreas e o desenvolvimento de líderes não é estruturado. Falta sistematizar o que já funciona por instinto.",
      "Sólido": "Sua equipe é engajada, os valores são vividos e você forma líderes. A presença em casa também é intencional. O próximo passo é criar um processo replicável de multiplicação de liderança.",
      "Excelente": "Você lidera por propósito dentro e fora da empresa. Time autônomo, cultura forte e sucessores em formação. Sua influência já transcende o cargo — o desafio agora é ampliar o alcance dela.",
    },
    custo: "Uma empresa que não cresce além da sua capacidade pessoal de supervisionar, equipe desengajada e uma família que recebe apenas a sobra da sua energia.",
    ganho: "Um time que decide sem você, cultura que se sustenta na sua ausência e liderança reconhecida dentro de casa — não apenas no trabalho.",
    acoes: {
      baixo: [
        "Escreva os 3 valores inegociáveis da sua liderança e compartilhe com a equipe.",
        "Delegue uma responsabilidade completa nos próximos 30 dias, com autonomia real.",
        "Reserve um momento fixo por semana de presença total com a família, sem trabalho.",
      ],
      medio: [
        "Identifique 2 pessoas com potencial e crie um plano de desenvolvimento para cada uma.",
        "Elimine uma área de microgerenciamento por mês, com critérios claros de entrega.",
        "Faça reuniões individuais quinzenais com foco em propósito, não só em resultado.",
      ],
      alto: [
        "Estruture um programa formal de formação de líderes com etapas e indicadores.",
        "Defina seu sucessor e comece a transferência gradual de decisões estratégicas.",
        "Leve sua liderança para fora: mentorias, comunidade e impacto além da empresa.",
      ],
    },
  },
  negocios: {
    numero: "04",
    nome: "Negócios Sustentáveis",
    subtitulo: "Escala nos EUA",
    curto: "Negócios",
    descricao: "Estrutura, processos e mentalidade para crescer no mercado americano.",
    interpretacao: {
      "Crítico": "O negócio para quando você para. Tudo está na sua cabeça, a receita não é previsível e não há plano de expansão. Você não tem uma empresa — tem um emprego que depende de você. Estrutura é urgência.",
      "Frágil": "Existem processos, mas informais. A empresa funciona na sua ausência com dificuldade e a margem é apertada. A expansão é um desejo, não um plano. O foco agora é documentar e previsibilizar.",
      "Em Desenvolvimento": "Há processos razoáveis, saúde financeira e um plano inicial de expansão. Mas a operação ainda perde qualidade sem você e depende de poucos clientes. É hora de robustecer sistemas e diversificar.",
      "Sólido": "Seu negócio opera com sistemas, previsibilidade e reservas. A estratégia de expansão existe e está em execução. O refinamento é a escala: crescer sem aumentar sua carga pessoal.",
      "Excelente": "Você construiu uma empresa autônoma, previsível e em expansão ativa, com um ecossistema de alto nível ao redor. O desafio agora é o próximo mercado — e garantir que o crescimento não custe o legado.",
    },
    custo: "Um negócio que vale menos justamente porque depende de você, receita imprevisível e a impossibilidade prática de tirar férias, adoecer ou vender.",
    ganho: "Operação que funciona sem a sua presença diária, receita previsível e um ativo real — que pode escalar, ser vendido ou herdado.",
    acoes: {
      baixo: [
        "Documente os 5 processos mais críticos da operação nos próximos 30 dias.",
        "Monte um painel financeiro simples: receita, custos, margem e caixa, atualizado semanalmente.",
        "Programe uma semana longe da operação e registre tudo que travou.",
      ],
      medio: [
        "Reduza a dependência de clientes-chave: nenhum deve representar mais de 20% da receita.",
        "Transforme o plano de expansão em 3 marcos com datas e responsáveis.",
        "Cultive 5 conexões estratégicas de alto nível com contato mensal.",
      ],
      alto: [
        "Estruture a operação internacional: entidade, compliance e time local nos EUA.",
        "Construa reserva equivalente a 6 meses de custo fixo antes da próxima expansão.",
        "Crie um conselho consultivo com empresários que já escalaram no mercado-alvo.",
      ],
    },
  },
  legado: {
    numero: "05",
    nome: "Legado e Família",
    subtitulo: "Impacto Eterno",
    curto: "Legado",
    descricao: "Família estruturada e valores que permanecem por gerações.",
    interpretacao: {
      "Crítico": "O trabalho criou distância de quem mais importa. Não há clareza sobre o legado, o relacionamento está tensionado e a ausência pesa. Todo o sucesso profissional está sendo construído sem fundação.",
      "Frágil": "Há boa convivência, mas sem parceria estratégica. O legado é uma ideia vaga e a presença com os filhos é passiva. Você tem tempo de mudar isso — mas só se for intencional a partir de agora.",
      "Em Desenvolvimento": "Você tem clareza sobre o que quer deixar e valores que comunica. Relacionamento bom, presença intencional — mas ainda inconsistente e sem estrutura. É hora de tornar o legado um projeto, não uma intenção.",
      "Sólido": "Legado definido, casamento alinhado e paternidade ativa. Você já toma decisões com base no que quer deixar. O refinamento é formalizar: governança familiar, rituais e transmissão de valores.",
      "Excelente": "Você vive um legado. Parceria conjugal em valores e visão, formação intencional dos filhos e impacto que já ultrapassa o dinheiro. Seu papel agora é multiplicar isso por gerações.",
    },
    custo: "Construir patrimônio enquanto perde as pessoas para quem ele foi construído. É o arrependimento mais comum entre líderes — e o único que não tem correção posterior.",
    ganho: "Casamento alinhado, filhos formados com intenção e valores que continuam operando mesmo quando você não estiver na sala.",
    acoes: {
      baixo: [
        "Escreva em uma página o que você quer que fique de você além do dinheiro.",
        "Marque uma conversa de alinhamento com seu cônjuge sobre visão de vida e prioridades.",
        "Crie um ritual semanal de presença real com os filhos, sem telas e sem trabalho.",
      ],
      medio: [
        "Defina os 5 valores que sua família representa e como cada um é vivido no dia a dia.",
        "Estabeleça um planejamento familiar anual: metas, viagens e momentos inegociáveis.",
        "Envolva a família nas decisões que afetam o futuro de todos.",
      ],
      alto: [
        "Formalize a governança familiar: acordos, sucessão e propósito documentados.",
        "Estruture projetos de impacto que carreguem o nome e os valores da família.",
        "Mentore outras famílias de líderes — legado se multiplica quando é compartilhado.",
      ],
    },
  },
};

const ORDEM: PilarId[] = ["saude", "mente", "lideranca", "negocios", "legado"];

function getNivel(score: number) {
  const pct = (score / 20) * 100;
  if (pct <= 30) return { label: "Crítico", cor: hex("#E05C5C"), band: "baixo" as const };
  if (pct <= 50) return { label: "Frágil", cor: hex("#E8A87C"), band: "baixo" as const };
  if (pct <= 70) return { label: "Em Desenvolvimento", cor: hex("#C9A84C"), band: "medio" as const };
  if (pct <= 85) return { label: "Sólido", cor: hex("#7EB8A4"), band: "alto" as const };
  return { label: "Excelente", cor: hex("#A8C9E8"), band: "alto" as const };
}

function corResposta(pontos: number) {
  if (pontos <= 1) return hex("#E05C5C");
  if (pontos === 2) return hex("#E8A87C");
  if (pontos === 3) return hex("#C9A84C");
  return hex("#7EB8A4");
}

// ─── Renderizador ────────────────────────────────────────────────────────────

const W = 595.28, H = 841.89, M = 48;

// Remove caracteres fora do WinAnsi (emojis, símbolos) que as fontes padrão não codificam
function clean(s: string) {
  return (s ?? "").replace(/[^\u0000-ÿ–—‘’“”•…]/g, "").replace(/\s+/g, " ").trim();
}

class Renderer {
  page!: PDFPage;
  pageNum = 0;
  constructor(
    public doc: PDFDocument,
    public serif: PDFFont,
    public serifBold: PDFFont,
    public sans: PDFFont,
    public sansBold: PDFFont,
    public total: number,
    public nome: string,
  ) {}

  newPage(withFooter = true) {
    this.page = this.doc.addPage([W, H]);
    this.pageNum++;
    this.page.drawRectangle({ x: 0, y: 0, width: W, height: H, color: C.bg });
    if (withFooter) {
      this.page.drawLine({ start: { x: M, y: 40 }, end: { x: W - M, y: 40 }, thickness: 0.5, color: C.line });
      this.text(`DR. SANTIAGO VECINA  ·  DIAGNÓSTICO DOS 5 PILARES  ·  ${this.nome.toUpperCase()}`, M, 26, { size: 7, color: C.muted, font: this.sansBold, spacing: 1 });
      this.text(`${this.pageNum} / ${this.total}`, W - M, 26, { size: 7, color: C.muted, font: this.sansBold, align: "right" });
    }
    return this.page;
  }

  width(t: string, font: PDFFont, size: number, spacing = 0) {
    return font.widthOfTextAtSize(t, size) + spacing * Math.max(0, t.length - 1);
  }

  text(t: string, x: number, y: number, o: { size?: number; color?: ReturnType<typeof rgb>; font?: PDFFont; align?: "left" | "center" | "right"; spacing?: number } = {}) {
    const size = o.size ?? 10, font = o.font ?? this.sans, spacing = o.spacing ?? 0;
    const s = clean(t);
    const w = this.width(s, font, size, spacing);
    let px = x;
    if (o.align === "center") px = x - w / 2;
    if (o.align === "right") px = x - w;
    if (spacing) {
      let cx = px;
      for (const ch of s) {
        this.page.drawText(ch, { x: cx, y, size, font, color: o.color ?? C.cream });
        cx += font.widthOfTextAtSize(ch, size) + spacing;
      }
    } else {
      this.page.drawText(s, { x: px, y, size, font, color: o.color ?? C.cream });
    }
    return w;
  }

  wrap(t: string, font: PDFFont, size: number, maxW: number) {
    const words = clean(t).split(" ");
    const lines: string[] = [];
    let cur = "";
    for (const w of words) {
      const test = cur ? `${cur} ${w}` : w;
      if (font.widthOfTextAtSize(test, size) <= maxW) cur = test;
      else { if (cur) lines.push(cur); cur = w; }
    }
    if (cur) lines.push(cur);
    return lines;
  }

  // Desenha parágrafo e devolve o Y após a última linha
  para(t: string, x: number, y: number, maxW: number, o: { size?: number; color?: ReturnType<typeof rgb>; font?: PDFFont; lh?: number; align?: "left" | "center" } = {}) {
    const size = o.size ?? 10, font = o.font ?? this.sans, lh = o.lh ?? size * 1.5;
    const lines = this.wrap(t, font, size, maxW);
    let cy = y;
    for (const l of lines) {
      this.text(l, o.align === "center" ? x + maxW / 2 : x, cy, { size, font, color: o.color, align: o.align === "center" ? "center" : "left" });
      cy -= lh;
    }
    return cy;
  }

  label(t: string, x: number, y: number, align: "left" | "center" | "right" = "left", color = C.gold) {
    this.text(t.toUpperCase(), x, y, { size: 7.5, font: this.sansBold, color, spacing: 2.2, align });
  }

  hr(x1: number, x2: number, y: number, color = C.line, thickness = 0.6) {
    this.page.drawLine({ start: { x: x1, y }, end: { x: x2, y }, thickness, color });
  }

  ornament(y: number, cx = W / 2, half = 120) {
    this.hr(cx - half, cx - 10, y, C.gold, 0.8);
    this.hr(cx + 10, cx + half, y, C.gold, 0.8);
    this.page.drawRectangle({ x: cx - 2.5, y: y - 2.5, width: 5, height: 5, color: C.gold, rotate: { type: "degrees" as any, angle: 45 } as any });
  }

  card(x: number, y: number, w: number, h: number, accent?: ReturnType<typeof rgb>) {
    this.page.drawRectangle({ x, y, width: w, height: h, color: C.card, borderColor: C.line, borderWidth: 0.6 });
    if (accent) this.page.drawRectangle({ x, y, width: 2.5, height: h, color: accent });
  }

  bar(x: number, y: number, w: number, pct: number, color: ReturnType<typeof rgb>, h = 5) {
    this.page.drawRectangle({ x, y, width: w, height: h, color: C.line });
    if (pct > 0) this.page.drawRectangle({ x, y, width: Math.max(h, w * Math.min(1, pct)), height: h, color });
  }

  sectionHeader(kicker: string, title: string, y: number) {
    this.label(kicker, M, y);
    this.text(title, M, y - 26, { size: 26, font: this.serifBold, color: C.cream });
    this.hr(M, M + 44, y - 36, C.gold, 1.2);
    return y - 62;
  }

  radar(cx: number, cy: number, r: number, scores: Record<PilarId, number>) {
    const n = ORDEM.length;
    const ang = (i: number) => (i * 2 * Math.PI) / n - Math.PI / 2;
    const pt = (i: number, rad: number) => ({ x: cx + rad * Math.cos(ang(i)), y: cy - rad * Math.sin(ang(i)) });
    for (const lvl of [0.25, 0.5, 0.75, 1]) {
      for (let i = 0; i < n; i++) {
        const a = pt(i, r * lvl), b = pt((i + 1) % n, r * lvl);
        this.page.drawLine({ start: a, end: b, thickness: 0.6, color: lvl === 1 ? C.faint : C.line });
      }
    }
    for (let i = 0; i < n; i++) this.page.drawLine({ start: { x: cx, y: cy }, end: pt(i, r), thickness: 0.6, color: C.line });
    const pts = ORDEM.map((id, i) => pt(i, r * Math.min(1, scores[id] / 20)));
    // drawSvgPath usa eixo Y invertido (SVG): desenha a partir do topo da página
    const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${H - p.y}`).join(" ") + " Z";
    this.page.drawSvgPath(path, { x: 0, y: H, color: C.gold, opacity: 0.18, borderColor: C.gold, borderWidth: 1.6 });
    pts.forEach((p) => this.page.drawCircle({ x: p.x, y: p.y, size: 3.2, color: C.gold, borderColor: C.bg, borderWidth: 1.2 }));
    ORDEM.forEach((id, i) => {
      const p = pt(i, r + 18);
      const pct = Math.round((scores[id] / 20) * 100);
      this.text(PILARES[id].curto, p.x, p.y + 2, { size: 8, font: this.sansBold, color: C.cream, align: "center" });
      this.text(`${pct}%`, p.x, p.y - 8, { size: 7.5, font: this.sans, color: C.gold, align: "center" });
    });
  }
}

// ─── Páginas ─────────────────────────────────────────────────────────────────

function dataHoje() {
  const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const d = new Date();
  return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}

function paginaCapa(r: Renderer, p: Payload) {
  r.newPage(false);
  const pg = r.page;
  pg.drawRectangle({ x: 0, y: H - 6, width: W, height: 6, color: C.gold });
  pg.drawRectangle({ x: 0, y: 0, width: W, height: 3, color: C.gold });
  // moldura fina
  pg.drawRectangle({ x: M - 12, y: M, width: W - 2 * (M - 12), height: H - 2 * M, borderColor: C.line, borderWidth: 0.8 });

  r.label("Dr. Santiago Vecina", W / 2, H - 110, "center");
  r.text("PERFORMANCE INTEGRAL", W / 2, H - 126, { size: 7, font: r.sans, color: C.muted, spacing: 3, align: "center" });

  r.ornament(H - 200);
  r.label("Diagnóstico dos 5 Pilares", W / 2, H - 240, "center", C.muted);
  r.text(p.nome, W / 2, H - 290, { size: 34, font: r.serifBold, color: C.cream, align: "center" });
  r.text(dataHoje(), W / 2, H - 312, { size: 9, color: C.muted, align: "center" });

  // círculo com score
  const cx = W / 2, cy = H - 440, rad = 62;
  pg.drawCircle({ x: cx, y: cy, size: rad, borderColor: C.line, borderWidth: 1 });
  pg.drawCircle({ x: cx, y: cy, size: rad - 6, borderColor: C.gold, borderWidth: 2 });
  r.text(`${p.scoreGeral}%`, cx, cy - 10, { size: 40, font: r.serifBold, color: C.gold, align: "center" });
  r.text("SCORE GERAL", cx, cy - 32, { size: 6.5, font: r.sansBold, color: C.muted, spacing: 2, align: "center" });

  r.label("Seu perfil", W / 2, cy - 100, "center", C.muted);
  r.text(p.tituloPerfil, W / 2, cy - 132, { size: 28, font: r.serifBold, color: C.cream, align: "center" });
  r.para(p.descricaoPerfil, M + 50, cy - 162, W - 2 * M - 100, { size: 10.5, color: C.muted, align: "center", lh: 16 });

  r.ornament(150);
  r.para("“Você não sobe ao nível das suas metas. Você cai ao nível dos seus sistemas.”", M + 60, 122, W - 2 * M - 120, { size: 10, font: r.serif, color: C.muted, align: "center", lh: 15 });
  r.text("RELATÓRIO CONFIDENCIAL", W / 2, 70, { size: 6.5, font: r.sansBold, color: C.faint, spacing: 3, align: "center" });
}

function paginaResumo(r: Renderer, p: Payload) {
  r.newPage();
  let y = r.sectionHeader("Visão geral", "Resumo Executivo", H - 70);

  // Card perfil
  r.card(M, y - 70, W - 2 * M, 70, C.gold);
  r.label("Perfil identificado", M + 18, y - 22, "left", C.muted);
  r.text(p.tituloPerfil, M + 18, y - 48, { size: 18, font: r.serifBold, color: C.gold });
  r.label("Pontuação geral", W - M - 18, y - 22, "right", C.muted);
  r.text(`${p.scoreGeral}%`, W - M - 18, y - 52, { size: 24, font: r.serifBold, color: C.cream, align: "right" });
  y -= 88;
  y = r.para(p.descricaoPerfil, M, y, W - 2 * M, { size: 10, color: C.muted, lh: 15 }) - 14;

  // Radar + barras
  const colW = (W - 2 * M - 16) / 2;
  const boxH = 300;
  r.card(M, y - boxH, colW, boxH);
  r.label("Mapa dos pilares", M + colW / 2, y - 22, "center");
  r.radar(M + colW / 2, y - boxH / 2 - 14, 88, p.resultados);

  const bx = M + colW + 16;
  r.card(bx, y - boxH, colW, boxH);
  r.label("Pontuação por pilar", bx + 18, y - 22);
  let by = y - 50;
  for (const id of ORDEM) {
    const s = p.resultados[id], pct = Math.round((s / 20) * 100), n = getNivel(s);
    r.text(PILARES[id].nome, bx + 18, by, { size: 9.5, font: r.sansBold, color: C.cream });
    r.text(`${pct}%`, bx + colW - 18, by, { size: 11, font: r.serifBold, color: n.cor, align: "right" });
    r.text(n.label.toUpperCase(), bx + colW - 18, by - 10, { size: 6, font: r.sansBold, color: n.cor, spacing: 1, align: "right" });
    r.bar(bx + 18, by - 20, colW - 36 - 70, pct / 100, n.cor);
    by -= 50;
  }
  y -= boxH + 18;

  // Onde focar / maior alavanca
  const ordenados = [...ORDEM].sort((a, b) => p.resultados[a] - p.resultados[b]);
  const fracos = ordenados.slice(0, 2), forte = ordenados[ordenados.length - 1];
  const h2 = 96;
  r.card(M, y - h2, colW, h2, hex("#E8A87C"));
  r.label("Onde focar primeiro", M + 18, y - 22);
  r.para(`Os pilares que mais limitam seu teto hoje são ${PILARES[fracos[0]].nome} (${Math.round(p.resultados[fracos[0]] / 20 * 100)}%) e ${PILARES[fracos[1]].nome} (${Math.round(p.resultados[fracos[1]] / 20 * 100)}%). É por eles que o plano de ação começa.`, M + 18, y - 42, colW - 36, { size: 9, color: C.muted, lh: 13.5 });
  r.card(bx, y - h2, colW, h2, hex("#7EB8A4"));
  r.label("Sua maior alavanca", bx + 18, y - 22);
  r.para(`${PILARES[forte].nome} é seu pilar mais forte (${Math.round(p.resultados[forte] / 20 * 100)}%). Use a disciplina que você já construiu aqui como modelo para estruturar os pilares mais frágeis.`, bx + 18, y - 42, colW - 36, { size: 9, color: C.muted, lh: 13.5 });
}

function paginaPilar(r: Renderer, p: Payload, id: PilarId) {
  r.newPage();
  const P = PILARES[id];
  const s = p.resultados[id], pct = Math.round((s / 20) * 100), n = getNivel(s);
  let y = r.sectionHeader(`Pilar ${P.numero}  ·  ${P.subtitulo}`, P.nome, H - 70);

  // Card score
  r.card(M, y - 78, W - 2 * M, 78, n.cor);
  r.text(`${pct}%`, M + 20, y - 50, { size: 34, font: r.serifBold, color: n.cor });
  const wPct = r.width(`${pct}%`, r.serifBold, 34);
  r.text(`${s} de 20 pontos`, M + 28 + wPct, y - 44, { size: 9, color: C.muted });
  r.text(n.label.toUpperCase(), W - M - 20, y - 36, { size: 10, font: r.sansBold, color: n.cor, spacing: 2, align: "right" });
  r.bar(W - M - 20 - 160, y - 56, 160, pct / 100, n.cor, 4);
  y -= 96;
  y = r.para(P.descricao, M, y, W - 2 * M, { size: 9.5, font: r.serif, color: C.muted, lh: 14 }) - 10;

  // Respostas
  const perguntas = (p.perguntas ?? []).filter((q) => q.pilar === id);
  if (perguntas.length) {
    r.label("Suas respostas", M, y);
    y -= 20;
    for (const q of perguntas) {
      const cor = corResposta(q.pontos);
      const qLines = r.wrap(q.texto, r.sansBold, 9, W - 2 * M - 60);
      const aLines = r.wrap(q.resposta, r.sans, 8.5, W - 2 * M - 60);
      const blockH = qLines.length * 12 + aLines.length * 12 + 18;
      r.page.drawRectangle({ x: M, y: y - blockH + 8, width: 2, height: blockH - 4, color: cor });
      let cy = y;
      for (const l of qLines) { r.text(l, M + 12, cy, { size: 9, font: r.sansBold, color: C.cream }); cy -= 12; }
      for (const l of aLines) { r.text(l, M + 12, cy, { size: 8.5, color: C.muted }); cy -= 12; }
      r.text(`${q.pontos}/4`, W - M, y, { size: 10, font: r.serifBold, color: cor, align: "right" });
      r.bar(W - M - 44, y - 12, 44, q.pontos / 4, cor, 3);
      y -= blockH;
    }
    y -= 4;
  }

  // Interpretação
  r.label("O que isso significa", M, y);
  const interp = P.interpretacao[n.label];
  const iLines = r.wrap(interp, r.sans, 9.5, W - 2 * M - 36);
  const iH = iLines.length * 14 + 30;
  r.card(M, y - 12 - iH, W - 2 * M, iH);
  r.para(interp, M + 18, y - 32, W - 2 * M - 36, { size: 9.5, color: C.cream, lh: 14 });
  y -= iH + 30;

  // Ações
  r.label("Ações para os próximos 90 dias", M, y);
  y -= 20;
  P.acoes[n.band].forEach((a, i) => {
    r.page.drawCircle({ x: M + 6, y: y + 3, size: 6, borderColor: C.gold, borderWidth: 0.8 });
    r.text(String(i + 1), M + 6, y, { size: 7, font: r.sansBold, color: C.gold, align: "center" });
    y = r.para(a, M + 20, y, W - 2 * M - 20, { size: 9.5, color: C.cream, lh: 14 }) - 6;
  });

  // Custo x ganho — lado a lado, ancorados acima do rodapé
  const colW = (W - 2 * M - 12) / 2;
  const hBox = 104;
  const yBox = Math.min(y - 10, 96 + hBox);
  r.card(M, yBox - hBox, colW, hBox, hex("#E05C5C"));
  r.label("O custo de não agir", M + 16, yBox - 22);
  r.para(P.custo, M + 16, yBox - 42, colW - 32, { size: 8.5, color: C.muted, lh: 12.5 });
  r.card(M + colW + 12, yBox - hBox, colW, hBox, hex("#7EB8A4"));
  r.label("O que muda em 90 dias", M + colW + 28, yBox - 22);
  r.para(P.ganho, M + colW + 28, yBox - 42, colW - 32, { size: 8.5, color: C.muted, lh: 12.5 });
}

function paginaPlano(r: Renderer, p: Payload) {
  r.newPage();
  let y = r.sectionHeader("Como avançar", "Plano de Ação e Próximos Passos", H - 70);
  y = r.para(`${p.nome.split(" ")[0]}, este diagnóstico mostrou onde você está hoje e o que está limitando seu próximo nível. O perfil “${p.tituloPerfil}” indica um caminho específico: executar as prioridades certas, na ordem certa, sem sacrificar os pilares que já funcionam.`, M, y, W - 2 * M, { size: 10, color: C.muted, lh: 15 }) - 12;

  r.label("Ordem de prioridade", M, y);
  y -= 22;
  const ordenados = [...ORDEM].sort((a, b) => p.resultados[a] - p.resultados[b]);
  ordenados.forEach((id, i) => {
    const s = p.resultados[id], pct = Math.round((s / 20) * 100), n = getNivel(s);
    const acao = PILARES[id].acoes[n.band][0];
    const aLines = r.wrap(acao, r.sans, 9, W - 2 * M - 70);
    const h = 42 + aLines.length * 13;
    r.card(M, y - h, W - 2 * M, h, n.cor);
    r.text(`${i + 1}.`, M + 16, y - 20, { size: 14, font: r.serifBold, color: C.gold });
    r.text(PILARES[id].nome, M + 36, y - 19, { size: 10.5, font: r.sansBold, color: C.cream });
    r.text(`${pct}%  ·  ${n.label.toUpperCase()}`, W - M - 16, y - 19, { size: 7, font: r.sansBold, color: n.cor, spacing: 1, align: "right" });
    r.para(`Primeiro passo: ${acao}`, M + 36, y - 36, W - 2 * M - 70, { size: 9, color: C.muted, lh: 13 });
    y -= h + 8;
  });

  y -= 10;
  r.label("Como transformar isso em resultado", M, y);
  y -= 22;
  const passos = [
    ["Escolha uma prioridade", "Comece pelo pilar nº 1 da lista. Uma frente bem executada vale mais que cinco iniciadas."],
    ["Defina prazos e responsáveis", "Cada ação precisa de uma data. Sem isso, o plano vira intenção."],
    ["Meça a cada 30 dias", "Refaça o diagnóstico mensalmente e compare os percentuais por pilar."],
    ["Busque uma leitura externa", "Um olhar de fora acelera o processo e evita meses de tentativa e erro."],
  ];
  const colW = (W - 2 * M - 12) / 2;
  passos.forEach((s, i) => {
    const x = M + (i % 2) * (colW + 12);
    const yy = y - Math.floor(i / 2) * 66;
    r.card(x, yy - 58, colW, 58);
    r.text(`${i + 1}. ${s[0]}`, x + 14, yy - 20, { size: 9.5, font: r.sansBold, color: C.cream });
    r.para(s[1], x + 14, yy - 35, colW - 28, { size: 8.5, color: C.muted, lh: 12 });
  });
  y -= 66 * 2 + 6;

  // CTA
  const ctaH = 92;
  r.page.drawRectangle({ x: M, y: y - ctaH, width: W - 2 * M, height: ctaH, color: C.gold });
  r.text("Sessão Estratégica com o Dr. Santiago Vecina", W / 2, y - 30, { size: 15, font: r.serifBold, color: C.bg, align: "center" });
  r.para("Converse com o Dr. Santiago para transformar este diagnóstico em um plano executável para a sua vida e o seu negócio.", M + 40, y - 50, W - 2 * M - 80, { size: 9, color: C.bg, align: "center", lh: 13 });
  r.text("drsantiagovecina.com", W / 2, y - ctaH + 14, { size: 8, font: r.sansBold, color: C.bg, align: "center", spacing: 1.5 });
}

// ─── Geração ─────────────────────────────────────────────────────────────────

async function gerarPDF(p: Payload) {
  const doc = await PDFDocument.create();
  doc.setTitle(`Diagnóstico dos 5 Pilares — ${p.nome}`);
  doc.setAuthor("Dr. Santiago Vecina");
  const [serif, serifBold, sans, sansBold] = await Promise.all([
    doc.embedFont(StandardFonts.TimesRoman),
    doc.embedFont(StandardFonts.TimesRomanBold),
    doc.embedFont(StandardFonts.Helvetica),
    doc.embedFont(StandardFonts.HelveticaBold),
  ]);
  const r = new Renderer(doc, serif, serifBold, sans, sansBold, 8, p.nome);
  paginaCapa(r, p);
  paginaResumo(r, p);
  for (const id of ORDEM) paginaPilar(r, p, id);
  paginaPlano(r, p);
  return await doc.save();
}

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const body = (await req.json()) as Payload;
    if (!body?.nome || !body?.resultados) {
      return new Response(JSON.stringify({ success: false, error: "nome e resultados são obrigatórios" }), { status: 400, headers: { ...cors, "Content-Type": "application/json" } });
    }
    const pdf = await gerarPDF(body);

    const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const slug = body.nome.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase();
    const path = `${Date.now()}_diagnostico-${slug}.pdf`;
    const { error } = await supabase.storage.from("diagnosticos").upload(path, pdf, { contentType: "application/pdf", upsert: false });
    if (error) throw error;
    const { data } = supabase.storage.from("diagnosticos").getPublicUrl(path);

    return new Response(JSON.stringify({ success: true, url: data.publicUrl }), { headers: { ...cors, "Content-Type": "application/json" } });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ success: false, error: String(e?.message ?? e) }), { status: 500, headers: { ...cors, "Content-Type": "application/json" } });
  }
});
