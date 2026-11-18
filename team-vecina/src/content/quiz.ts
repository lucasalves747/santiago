export type QuizCategory =
  | "energia"
  | "sono"
  | "recuperacao"
  | "nutricao"
  | "comportamento";

export type QuizOption = {
  label: string;
  points: number;
  category?: QuizCategory;
};

export type QuizQuestion = {
  id: string;
  question: string;
  helper?: string;
  options: QuizOption[];
};

export type QuizResult = {
  category: QuizCategory;
  title: string;
  description: string;
  actions: string[];
  toolSlug: string;
  toolLabel: string;
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "energia",
    question: "Como está a sua energia nas primeiras duas horas depois de acordar?",
    helper: "Pense na média dos últimos 14 dias, não no melhor dia.",
    options: [
      { label: "Acordo disposto e sustento a energia até o almoço.", points: 0, category: "energia" },
      { label: "Acordo razoável, mas preciso de café para começar.", points: 1, category: "energia" },
      { label: "Acordo cansado mesmo depois de dormir.", points: 2, category: "sono" },
      { label: "Tenho dificuldade de sair da cama quase todos os dias.", points: 3, category: "sono" },
    ],
  },
  {
    id: "sono",
    question: "Como está a qualidade do seu sono?",
    helper: "Considere dificuldade para dormir, despertares e sensação de descanso.",
    options: [
      { label: "Durmo bem e acordo descansado na maioria das noites.", points: 0, category: "sono" },
      { label: "Durmo, mas acordo pelo menos uma vez ou me sinto pouco reparado.", points: 1, category: "sono" },
      { label: "Tenho noites irregulares e acordo cansado com frequência.", points: 2, category: "sono" },
      { label: "Sono é um problema recorrente: durmo pouco, mal ou em horários trocados.", points: 3, category: "sono" },
    ],
  },
  {
    id: "recuperacao",
    question: "Como o seu corpo responde ao treino?",
    helper: "Se você não treina, pense em esforço físico, caminhada ou dias intensos de trabalho.",
    options: [
      { label: "Recupero bem e volto ao normal em um ou dois dias.", points: 0, category: "recuperacao" },
      { label: "Recupero, mas às vezes fico mais tempo cansado do que esperava.", points: 1, category: "recuperacao" },
      { label: "Demoro vários dias para recuperar e sinto dores ou fadiga persistentes.", points: 2, category: "recuperacao" },
      { label: "Sinto que meu corpo não recupera mais como antes.", points: 3, category: "recuperacao" },
    ],
  },
  {
    id: "fome",
    question: "Como está a sua fome ao longo do dia?",
    helper: "Observe especialmente o fim da tarde e a noite.",
    options: [
      { label: "Tenho fome em horários previsíveis e fico satisfeito.", points: 0, category: "nutricao" },
      { label: "Sinto fome à tarde, mas consigo lidar.", points: 1, category: "nutricao" },
      { label: "Tenho cravings fortes por doce ou carboidrato à tarde/noite.", points: 2, category: "comportamento" },
      { label: "Sinto fome constante ou como sem perceber que estou saciado.", points: 3, category: "comportamento" },
    ],
  },
  {
    id: "composicao",
    question: "O que aconteceu com o seu corpo nos últimos 12 meses?",
    helper: "Não pense só em peso; pense em massa muscular, cintura e disposição.",
    options: [
      { label: "Mantive composição estável e me sinto forte.", points: 0, category: "comportamento" },
      { label: "Ganhei um pouco de gordura, mas consigo reverter com ajustes.", points: 1, category: "comportamento" },
      { label: "Ganhei gordura abdominal e perdi força ou massa.", points: 2, category: "nutricao" },
      { label: "Tenho perdido e recuperado peso em ciclos repetidos.", points: 3, category: "comportamento" },
    ],
  },
  {
    id: "foco",
    question: "Como está o seu foco e a sua clareza mental?",
    helper: "Considere memória, decisões, produtividade e sensação de “névoa”.",
    options: [
      { label: "Consigo sustentar foco e decidir com clareza.", points: 0, category: "energia" },
      { label: "Tenho oscilações, mas nada que atrapalhe de verdade.", points: 1, category: "energia" },
      { label: "Sinto névoa mental ou queda de foco com frequência.", points: 2, category: "sono" },
      { label: "Tenho dificuldade de concentração que afeta trabalho e decisões.", points: 3, category: "sono" },
    ],
  },
  {
    id: "exames",
    question: "Você tem exames alterados ou histórico familiar relevante?",
    helper: "Glicemia, insulina, colesterol, tireoide, ferritina, vitamina D, hormônios ou histórico familiar.",
    options: [
      { label: "Meus exames estão bons e não tenho histórico relevante.", points: 0, category: "nutricao" },
      { label: "Tenho alguns exames no limite ou histórico familiar, mas nunca investiguei.", points: 1, category: "nutricao" },
      { label: "Já tive exames alterados e não sei bem o que fazer com isso.", points: 2, category: "nutricao" },
      { label: "Tenho exames alterados recorrentes ou uso medicação para metabolismo.", points: 3, category: "nutricao" },
    ],
  },
  {
    id: "rotina",
    question: "Como está a sua rotina de recuperação?",
    helper: "Pense em pausas, caminhada, lazer, respiração, sono e dias sem trabalho.",
    options: [
      { label: "Tenho pausas e dias de descanso com regularidade.", points: 0, category: "recuperacao" },
      { label: "Tento, mas minha rotina muda muito.", points: 1, category: "recuperacao" },
      { label: "Minha recuperação é rara; vivo no modo urgência.", points: 2, category: "sono" },
      { label: "Não lembro quando tive um período real de recuperação.", points: 3, category: "sono" },
    ],
  },
];

export const QUIZ_RESULTS: Record<QuizCategory, QuizResult> = {
  energia: {
    category: "energia",
    title: "Seu gargalo principal parece ser energia e recuperação",
    description:
      "Você pode estar funcionando no limite por tempo demais. Quando a energia não volta, o corpo costuma estar compensando sono, estresse, carga de treino ou uma base metabólica sobrecarregada. O primeiro passo é medir, não adivinhar.",
    actions: [
      "Mapeie sono, cafeína e horários de maior queda de energia por 7 dias.",
      "Não aumente treino ou cafeína para compensar fadiga persistente.",
      "Leve sintomas e exames recentes para uma avaliação médica.",
    ],
    toolSlug: "mapa-performance-7-dias",
    toolLabel: "Baixar o Mapa da Performance em 7 Dias",
  },
  sono: {
    category: "sono",
    title: "Seu gargalo principal parece ser sono e recuperação",
    description:
      "Sono ruim não é apenas “dormir pouco”. Ele afeta fome, humor, foco, recuperação e saúde metabólica. Se o seu sono está irregular, o restante do plano tende a render menos.",
    actions: [
      "Defina uma janela de sono realista e proteja os 60 minutos anteriores.",
      "Observe cafeína, álcool, telas e horários irregulares.",
      "Se ronco, despertares ou sonolência diurna forem frequentes, investigue com um profissional.",
    ],
    toolSlug: "mapa-performance-7-dias",
    toolLabel: "Baixar o Mapa da Performance em 7 Dias",
  },
  recuperacao: {
    category: "recuperacao",
    title: "Seu gargalo principal parece ser recuperação",
    description:
      "Você pode estar treinando ou trabalhando acima da sua capacidade de recuperar. Mais carga sem recuperação não gera adaptação; gera dívida. O ajuste começa por reduzir o ruído e medir a resposta.",
    actions: [
      "Avalie a carga total da semana, não só o treino.",
      "Inclua dias e horários reais de recuperação.",
      "Se a fadiga persistir, converse com um médico antes de aumentar volume.",
    ],
    toolSlug: "guia-atleta-amador",
    toolLabel: "Baixar o Guia do Atleta Amador",
  },
  nutricao: {
    category: "nutricao",
    title: "Seu gargalo principal parece ser nutrição e metabolismo",
    description:
      "Sintomas como fome, cansaço, gordura abdominal e exames alterados podem ter relação com a forma como o seu corpo processa energia. Restringir mais nem sempre é a resposta; entender o contexto é.",
    actions: [
      "Organize seus exames e histórico familiar antes de mudar a dieta.",
      "Priorize proteína, fibra e regularidade — sem radicalismo.",
      "Evite iniciar medicação ou suplemento sem avaliação.",
    ],
    toolSlug: "checklist-exames-40",
    toolLabel: "Baixar o Checklist de Exames Depois dos 40",
  },
  comportamento: {
    category: "comportamento",
    title: "Seu gargalo principal parece ser comportamento e ambiente",
    description:
      "O corpo não vive separado da rotina. Fome, cravings, ciclos de restrição e reganho costumam ter relação com ambiente, sono, estresse e regras alimentares rígidas demais. O plano precisa caber na vida real.",
    actions: [
      "Identifique os horários e situações de maior vulnerabilidade.",
      "Troque regras absolutas por estruturas flexíveis.",
      "Se houver episódios de compulsão ou sofrimento intenso, procure apoio especializado.",
    ],
    toolSlug: "mapa-performance-7-dias",
    toolLabel: "Baixar o Mapa da Performance em 7 Dias",
  },
};

export function calculateQuizResult(answers: Record<string, number>): {
  result: QuizResult;
  scores: Record<QuizCategory, number>;
  total: number;
} {
  const scores: Record<QuizCategory, number> = {
    energia: 0,
    sono: 0,
    recuperacao: 0,
    nutricao: 0,
    comportamento: 0,
  };

  QUIZ_QUESTIONS.forEach((question) => {
    const selected = answers[question.id];
    if (selected === undefined) return;
    const option = question.options[selected];
    if (!option) return;
    const category = option.category ?? "energia";
    scores[category] += option.points;
  });

  const sorted = (Object.entries(scores) as [QuizCategory, number][]).sort(
    (a, b) => b[1] - a[1],
  );
  const topCategory = sorted[0]?.[0] ?? "energia";
  const total = Object.values(scores).reduce((sum, value) => sum + value, 0);

  return {
    result: QUIZ_RESULTS[topCategory],
    scores,
    total,
  };
}
