export type ToolLanguage = "pt";

export type Tool = {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  language: ToolLanguage;
  audience: string;
  format: string;
  pages: number;
  pdfPath: string;
  bullets: string[];
  forWhom: string[];
  inside: string[];
  seoTitle: string;
  seoDescription: string;
};

export const TOOLS: Tool[] = [
  {
    slug: "mapa-performance-7-dias",
    title: "Mapa da Performance em 7 Dias",
    shortTitle: "Mapa da Performance",
    subtitle: "Um roteiro simples para descobrir onde a sua energia está vazando.",
    description:
      "Sete dias, sete perguntas e um mapa para identificar os gargalos que mais limitam a sua energia, o seu foco e a sua recuperação. Um material para quem quer sair do “estou cansado” e começar a agir com critério.",
    language: "pt",
    audience: "Executivos, empresários e profissionais de alta demanda",
    format: "PDF · guia prático",
    pages: 7,
    pdfPath: "/downloads/mapa-performance-7-dias.pdf",
    bullets: [
      "Um diagnóstico de 7 dimensões: sono, energia, estresse, treino, nutrição, recuperação e propósito.",
      "O erro de tentar mudar tudo ao mesmo tempo — e como priorizar uma frente por semana.",
      "Um plano de 7 dias com ações de baixo atrito.",
      "Perguntas para levar à sua próxima consulta.",
    ],
    forWhom: [
      "Você acorda cansado mesmo depois de dormir.",
      "Sente queda de foco no meio da tarde.",
      "Treina, mas não recupera bem.",
      "Quer um ponto de partida antes de investir em um acompanhamento.",
    ],
    inside: [
      "O mapa das 7 dimensões",
      "Autoavaliação guiada",
      "Plano de ação de 7 dias",
      "Checklist de exames e hábitos",
    ],
    seoTitle: "Mapa da Performance em 7 Dias | Dr. Santiago Vecina",
    seoDescription:
      "Guia gratuito para identificar os gargalos de energia, sono, recuperação e foco em sete dias. Material educativo do Dr. Santiago Vecina.",
  },
  {
    slug: "checklist-exames-40",
    title: "Checklist de Exames Depois dos 40",
    shortTitle: "Exames Depois dos 40",
    subtitle: "O que olhar além do “check-up básico”.",
    description:
      "Um checklist para organizar a conversa com o seu médico sobre os exames que podem fazer diferença depois dos 40 — sem transformar prevenção em ansiedade ou em uma lista infinita de testes.",
    language: "pt",
    audience: "Adultos 40+ que querem envelhecer com performance",
    format: "PDF · checklist",
    pages: 7,
    pdfPath: "/downloads/checklist-exames-40.pdf",
    bullets: [
      "Os blocos de avaliação: metabólico, cardiovascular, hormonal, nutricional e composição corporal.",
      "Perguntas para fazer ao médico antes de pedir exames.",
      "Sinais de que vale investigar sintomas em vez de “esperar passar”.",
      "Como organizar histórico familiar e medicações em uma página.",
    ],
    forWhom: [
      "Você está entrando ou passando dos 40.",
      "Tem histórico familiar de diabetes, hipertensão ou doença cardiovascular.",
      "Sente cansaço, ganho de peso, queda de libido ou sono pior.",
      "Quer chegar na consulta com perguntas melhores.",
    ],
    inside: [
      "Checklist por sistema",
      "Perguntas para a consulta",
      "Mapa de histórico familiar",
      "Sinais de atenção",
    ],
    seoTitle: "Checklist de Exames Depois dos 40 | Dr. Santiago Vecina",
    seoDescription:
      "Checklist gratuito de exames e perguntas para organizar o seu check-up depois dos 40 com mais critério. Conteúdo educativo.",
  },
  {
    slug: "guia-atleta-amador",
    title: "Guia do Atleta Amador",
    shortTitle: "Guia do Atleta Amador",
    subtitle: "Como treinar forte sem sabotar a recuperação.",
    description:
      "Um guia para quem treina por paixão e quer continuar evoluindo sem viver machucado ou exausto. Base clínica, recuperação, exames e sinais de que o corpo está pedindo ajuste.",
    language: "pt",
    audience: "Corredores, triatletas, ciclistas e praticantes de força",
    format: "PDF · guia",
    pages: 7,
    pdfPath: "/downloads/guia-atleta-amador.pdf",
    bullets: [
      "Os quatro pilares da performance sustentável: carga, recuperação, combustível e saúde clínica.",
      "Sinais de overreaching que passam despercebidos.",
      "Exames que merecem contexto no atleta — não apenas “dentro da faixa”.",
      "Um checklist pré-prova e um plano de 7 dias para recuperar.",
    ],
    forWhom: [
      "Você treina para provas ou desafios pessoais.",
      "Sente cansaço persistente ou recuperação lenta.",
      "Já teve lesões repetidas ou quedas de performance.",
      "Quer entender como exames e nutrição se conectam ao treino.",
    ],
    inside: [
      "Os 4 pilares da performance",
      "Sinais de alerta",
      "Exames e contexto",
      "Checklist pré-prova",
    ],
    seoTitle: "Guia do Atleta Amador | Dr. Santiago Vecina",
    seoDescription:
      "Guia gratuito de performance sustentável para atletas amadores: recuperação, exames, nutrição e sinais de alerta. Conteúdo educativo.",
  },
  {
    slug: "guia-brasileiro-eua",
    title: "Guia do Brasileiro nos EUA",
    shortTitle: "Guia do Brasileiro nos EUA",
    subtitle: "Saúde, rotina e performance longe de casa.",
    description:
      "Um guia para brasileiros que vivem ou passam temporadas nos EUA e querem cuidar da saúde sem perder a cultura, a comida e a rotina. Inclui perguntas sobre licença, telemedicina e continuidade do cuidado.",
    language: "pt",
    audience: "Brasileiros nos EUA e famílias em transição",
    format: "PDF · guia",
    pages: 7,
    pdfPath: "/downloads/guia-brasileiro-eua.pdf",
    bullets: [
      "Como organizar exames e histórico médico entre Brasil e EUA.",
      "Perguntas sobre licença médica, telemedicina e seguro.",
      "Ajustes de rotina para fuso, viagens e alimentação fora de casa.",
      "Um checklist de continuidade do cuidado.",
    ],
    forWhom: [
      "Você mora nos EUA ou viaja com frequência.",
      "Quer manter acompanhamento em português.",
      "Tem exames e medicações em dois países.",
      "Precisa entender o que é permitido em cada estado.",
    ],
    inside: [
      "Mapa de continuidade",
      "Perguntas de licença e telemedicina",
      "Rotina em viagem",
      "Checklist de documentos",
    ],
    seoTitle: "Guia do Brasileiro nos EUA | Dr. Santiago Vecina",
    seoDescription:
      "Guia gratuito para brasileiros nos EUA: saúde, exames, telemedicina, rotina e continuidade do cuidado. Conteúdo educativo.",
  },
  {
    slug: "performance-blueprint",
    title: "Blueprint de Performance",
    shortTitle: "Blueprint de Performance",
    subtitle: "O sistema por trás de energia, foco e decisões sustentáveis.",
    description:
      "Um guia mais profundo para quem já entendeu que café e força de vontade não resolvem. Organiza as sete dimensões da performance, mostra por que mudar tudo ao mesmo tempo costuma falhar e propõe um caminho de sete dias para construir a base.",
    language: "pt",
    audience: "Executivos, founders e profissionais de alta demanda",
    format: "PDF · guia",
    pages: 7,
    pdfPath: "/downloads/performance-blueprint.pdf",
    bullets: [
      "As sete dimensões que sustentam energia, foco e recuperação.",
      "A diferença entre fadiga aguda e depleção crônica.",
      "Por que tentar mudar tudo ao mesmo tempo costuma falhar.",
      "Um plano de sete dias com ações de baixo atrito.",
    ],
    forWhom: [
      "Você entrega resultado, mas sente que está sempre no limite.",
      "Depende de cafeína para atravessar a tarde.",
      "Já tentou mudar sono, treino e alimentação de uma vez.",
      "Quer um sistema antes de investir em um acompanhamento.",
    ],
    inside: [
      "As 7 dimensões",
      "Mapa de relações",
      "Autoauditoria",
      "Plano de 7 dias",
    ],
    seoTitle: "Blueprint de Performance | Dr. Santiago Vecina",
    seoDescription:
      "Guia gratuito para organizar energia, foco e recuperação a partir de sete dimensões da performance. Conteúdo educativo.",
  },
  {
    slug: "metabolic-health-checklist",
    title: "Checklist de Saúde Metabólica",
    shortTitle: "Saúde Metabólica",
    subtitle: "O que olhar além do peso e do check-up básico.",
    description:
      "Um checklist para quem quer emagrecer com saúde sem repetir ciclos de restrição. Organiza os principais marcadores metabólicos, o papel do sono, do estresse e do músculo, e as perguntas que valem levar para a consulta.",
    language: "pt",
    audience: "Adultos que querem emagrecer com saúde e envelhecer com energia",
    format: "PDF · checklist",
    pages: 7,
    pdfPath: "/downloads/metabolic-health-checklist.pdf",
    bullets: [
      "Glicemia, hemoglobina glicada, insulina e perfil lipídico.",
      "Como sono, estresse e massa muscular influenciam o metabolismo.",
      "Perguntas para fazer antes de iniciar mais uma dieta.",
      "Um mapa de histórico pessoal em uma página.",
    ],
    forWhom: [
      "Você já perdeu e recuperou peso mais de uma vez.",
      "Sente fome, cansaço ou névoa mental depois das refeições.",
      "Tem histórico familiar de diabetes ou doença cardiovascular.",
      "Quer entender o que está por trás da dificuldade de emagrecer.",
    ],
    inside: [
      "Marcadores metabólicos",
      "Contexto de composição corporal",
      "Perguntas para o médico",
      "Mapa de histórico",
    ],
    seoTitle: "Checklist de Saúde Metabólica | Dr. Santiago Vecina",
    seoDescription:
      "Checklist gratuito de saúde metabólica: glicemia, insulina, lipídios, composição corporal, sono e próximos passos. Conteúdo educativo.",
  },
  {
    slug: "executive-energy-audit",
    title: "Auditoria de Energia Executiva",
    shortTitle: "Auditoria de Energia",
    subtitle: "Um diagnóstico discreto do que está drenando a sua performance.",
    description:
      "Uma autoauditoria para líderes que precisam proteger clareza, energia e longevidade em agendas exigentes. Ajuda a diferenciar fadiga aguda de depleção crônica e a montar um protocolo mínimo para viagens e dias de alta demanda.",
    language: "pt",
    audience: "Executivos, founders e líderes",
    format: "PDF · auditoria",
    pages: 7,
    pdfPath: "/downloads/executive-energy-audit.pdf",
    bullets: [
      "Uma auditoria de 10 perguntas sobre sono, estresse, recuperação, nutrição e carga mental.",
      "A diferença entre fadiga aguda e depleção crônica.",
      "Protocolos para viagens, reuniões e dias de alta demanda.",
      "Um plano de sete dias que cabe em uma agenda real.",
    ],
    forWhom: [
      "Sua agenda está cheia e a recuperação é opcional.",
      "Você viaja com frequência e sente o custo fisiológico.",
      "Depende de cafeína para atravessar o dia.",
      "Quer performar por décadas, não apenas neste trimestre.",
    ],
    inside: [
      "Auditoria de 10 perguntas",
      "Mapa de drenos",
      "Protocolo de viagem",
      "Reset de 7 dias",
    ],
    seoTitle: "Auditoria de Energia Executiva | Dr. Santiago Vecina",
    seoDescription:
      "Auditoria gratuita de energia para líderes: sono, estresse, recuperação, nutrição e carga mental. Conteúdo educativo.",
  },
  {
    slug: "triathlon-readiness-guide",
    title: "Guia de Prontidão para o Triathlon",
    shortTitle: "Prontidão para o Triathlon",
    subtitle: "Construa a base clínica que sustenta a sua prova.",
    description:
      "Um guia para triatletas amadores que querem treinar com mais inteligência e recuperar com mais consistência. Cobre carga, recuperação, combustível, exames no contexto do atleta e sinais de alerta.",
    language: "pt",
    audience: "Triatletas amadores e atletas de endurance",
    format: "PDF · guia",
    pages: 7,
    pdfPath: "/downloads/triathlon-readiness-guide.pdf",
    bullets: [
      "Os quatro pilares da resistência sustentável.",
      "Sinais de recuperação que passam despercebidos.",
      "Como interpretar exames no contexto do treino.",
      "Checklist pré-prova e plano de recuperação de sete dias.",
    ],
    forWhom: [
      "Você treina para sprint, olímpico, 70.3 ou distância completa.",
      "Sente uma fadiga que não combina com a carga de treino.",
      "Já teve lesões repetidas ou recuperação inconsistente.",
      "Quer conectar acompanhamento médico e planilha de treino.",
    ],
    inside: [
      "Os 4 pilares",
      "Sinais de alerta",
      "Exames e contexto",
      "Checklist pré-prova",
    ],
    seoTitle: "Guia de Prontidão para o Triathlon | Dr. Santiago Vecina",
    seoDescription:
      "Guia gratuito de prontidão para triatletas amadores: carga, recuperação, combustível, exames e sinais de alerta. Conteúdo educativo.",
  },
];

export const getTool = (slug: string) => TOOLS.find((tool) => tool.slug === slug);
