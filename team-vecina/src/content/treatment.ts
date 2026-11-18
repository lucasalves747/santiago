export type FaqItem = { question: string; answer: string };

export type TreatmentPageData = {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  seoTitle: string;
  seoDescription: string;
  painTitle: string;
  painIntro: string;
  painPoints: string[];
  promiseTitle: string;
  promiseText: string;
  assessmentTitle: string;
  assessmentIntro: string;
  assessmentPoints: { title: string; text: string }[];
  includedTitle: string;
  includedIntro: string;
  included: { title: string; text: string }[];
  journeyTitle: string;
  journey: { phase: string; title: string; text: string }[];
  fitTitle: string;
  fit: string[];
  notFit: string[];
  faqs: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  interest: "athlete" | "weight_loss" | "executive";
};

export const HUB = {
  eyebrow: "Team Vecina · Acompanhamento Médico Avançado",
  title: "Não é uma consulta.",
  titleAccent: "É uma reengenharia da sua saúde.",
  subtitle:
    "O Team Vecina é um acompanhamento médico individualizado e contínuo, focado em resultado. Integra 8 pilares, uma consulta médica por mês com o Dr. Santiago, WhatsApp pessoal, checkpoint semanal, mentoria e área de membros — para atletas, quem quer emagrecer com saúde e líderes que precisam sustentar performance e legado.",
  heroImage:
    "/images/image-1.webp",
  heroAlt:
    "Composição editorial abstrata em preto e dourado, com um coração anatômico e uma linha de pulso",
  seoTitle: "Team Vecina | Acompanhamento Médico Avançado",
  seoDescription:
    "Team Vecina: acompanhamento médico individualizado e contínuo com o Dr. Santiago Vecina. 8 pilares, consulta mensal, WhatsApp, checkpoint semanal, mentoria e área de membros.",
  stats: [
    { value: "8", label: "pilares integrados" },
    { value: "1", label: "consulta médica por mês" },
    { value: "3", label: "trilhas de cuidado" },
  ],
  whatTitle: "O que é o Team Vecina",
  whatText:
    "A primeira coisa que você precisa saber é que o Team Vecina não é apenas uma consulta médica. É um acompanhamento individualizado e contínuo, focado no resultado, com cuidado personalizado e o apoio da equipe do Dr. Santiago Vecina. Juntos, vamos encontrar o seu equilíbrio metabólico e expandir o seu vigor físico, a sua performance mental e a sua composição corporal — para sustentar a vida que você quer.",
  whatPoints: [
    {
      title: "Não é uma consulta isolada",
      text: "É um acompanhamento contínuo com pré-consulta, consulta médica, consultas mensais e suporte ao longo do caminho. O plano não termina quando você sai do consultório.",
    },
    {
      title: "Um plano, oito pilares",
      text: "Sono, nutrição, atividade física, estresse, comportamento, exames, suplementação e rotina são olhados juntos — porque o corpo não funciona em compartimentos.",
    },
    {
      title: "Acompanhamento de verdade",
      text: "WhatsApp pessoal do Dr. Santiago, checkpoint semanal, reunião mensal com o time de mentores e área de membros para transformar orientação em execução.",
    },
  ],
  audiencesTitle: "Três trilhas. Um mesmo programa de acompanhamento.",
  audiencesIntro:
    "O Team Vecina é um só; a trilha muda a linguagem, a avaliação e os entregáveis. Escolha a porta que mais se parece com o seu momento.",
  audiences: [
    {
      slug: "atleta",
      label: "Para quem treina",
      title: "Team Vecina · Atleta",
      text: "Você treina, compete e quer evoluir — mas cansa mais do que deveria, recupera devagar ou sente que os exames “estão normais” enquanto o corpo pede atenção. O programa olha para a base clínica da sua performance de forma contínua.",
      points: ["Acompanhamento contínuo", "Performance e recuperação", "Exames e micronutrientes"],
      image:
        "/images/image-2.webp",
      imageAlt: "Triatleta correndo ao amanhecer em uma estrada costeira",
    },
    {
      slug: "emagrecimento",
      label: "Para quem quer mudar o corpo",
      title: "Team Vecina · Emagrecimento",
      text: "Você já tentou dietas, perdeu e recuperou, sente fome ou cansaço, e quer entender o que está acontecendo no seu metabolismo. O programa constrói um caminho sustentável — sem culpa e sem promessa milagrosa.",
      points: ["Acompanhamento contínuo", "Saúde metabólica", "PAPP e materiais de apoio"],
      image:
        "/images/image-3.webp",
      imageAlt: "Mesa editorial com alimentos integrais, água e detalhes dourados",
    },
    {
      slug: "empresarios",
      label: "Para quem decide",
      title: "Team Vecina · Executivo",
      text: "Você lidera, viaja, decide sob pressão e sente o custo disso no sono, na energia, no foco ou no corpo. O programa é desenhado para sustentar clareza, longevidade e legado — sem transformar sua vida em uma planilha de restrições.",
      points: ["Acompanhamento contínuo", "Clareza, sono e estresse", "Longevidade e legado"],
      image:
        "/images/image-4.webp",
      imageAlt: "Executivo de costas observando a cidade ao amanhecer",
    },
  ],
  methodTitle: "As 4 etapas do acompanhamento",
  methodIntro:
    "O Team Vecina é dividido em quatro etapas. Cada uma tem um objetivo claro e um entregável.",
  method: [
    {
      number: "01",
      title: "Pré-consulta",
      text: "Você recebe uma anamnese completa para registrar história, rotina, sintomas, dificuldades e o objetivo ao final do acompanhamento.",
      deliverable: "Anamnese + objetivo definido",
    },
    {
      number: "02",
      title: "Primeira consulta",
      text: "Dr. Santiago monta o plano de ação, passo a passo, personalizado para o seu objetivo.",
      deliverable: "Plano de ação personalizado",
    },
    {
      number: "03",
      title: "Consultas mensais",
      text: "Uma consulta médica a cada 30 dias para ajustes finos de vitaminas, minerais, plano alimentar e atividade física.",
      deliverable: "Ajustes a cada 30 dias",
    },
    {
      number: "04",
      title: "Tratamento contínuo",
      text: "Acesso ao WhatsApp pessoal, checkpoint semanal, área de membros e sessões estratégicas para sustentar a execução.",
      deliverable: "Acompanhamento + mentoria",
    },
  ],
  includedTitle: "O que você tem acesso",
  includedIntro:
    "Ao entrar para o Team Vecina, o acompanhamento combina consultas, suporte direto e uma estrutura para implementar o plano.",
  included: [
    {
      title: "Acompanhamento contínuo",
      text: "Um processo para construir, ajustar e consolidar a sua saúde — não apenas apagar um incêndio.",
    },
    {
      title: "1 consulta médica por mês",
      text: "Consulta com o Dr. Santiago a cada 30 dias, com ajustes finos de vitaminas, minerais, plano alimentar e atividade física.",
    },
    {
      title: "WhatsApp pessoal",
      text: "Acesso ao WhatsApp pessoal do Dr. Santiago para dúvidas e ajustes ao longo do programa.",
    },
    {
      title: "Checkpoint semanal",
      text: "Acompanhamento semanal da sua evolução para corrigir o caminho antes que o problema cresça.",
    },
    {
      title: "Mentoria mensal",
      text: "Reunião individual mensal com o time de mentores para acompanhar a implementação do plano de ação.",
    },
    {
      title: "Área de membros",
      text: "Aulas, cursos e livros do Dr. Santiago para aprofundar saúde, mentalidade e performance.",
    },
    {
      title: "Objetivo e ritmo",
      text: "Definição clara do objetivo e do ritmo para atingi-lo, com marcos ao longo do acompanhamento.",
    },
    {
      title: "Sessões estratégicas",
      text: "Aulas e sessões sobre saúde, mentalidade, empreendedorismo e outras áreas da vida.",
    },
  ],
  howTitle: "Como funciona",
  howSteps: [
    {
      title: "Aplicação",
      text: "Você preenche o formulário e conta o seu momento, objetivo e principal gargalo.",
    },
    {
      title: "Conversa de fit",
      text: "A equipe entende se o Team Vecina faz sentido para o seu caso e alinha expectativas.",
    },
    {
      title: "Pré-consulta",
      text: "Você recebe a anamnese completa para registrar história, rotina, sintomas e objetivos.",
    },
    {
      title: "Primeira consulta",
      text: "Dr. Santiago monta o plano de ação personalizado, passo a passo.",
    },
    {
      title: "Acompanhamento",
      text: "Consultas mensais, WhatsApp, checkpoint semanal e mentoria ao longo do acompanhamento.",
    },
  ],
  bioTitle: "Quem conduz",
  bioText:
    "Dr. Santiago Vecina é médico, nutrólogo, empresário e mentor de alta performance. Formado em 2008, combina a precisão da medicina com a visão estratégica de negócios para ajudar líderes a sustentar saúde, performance e legado.",
  bioPoints: [
    "15+ anos de experiência",
    "500+ líderes transformados",
    "1.750+ pessoas com o PAPP",
    "6 livros publicados",
    "Nutrologia e nutrologia esportiva (ABRAN)",
    "Medicina antiaging e longevidade (A4M/Cenegenics)",
  ],
  faqs: [
    {
      question: "Quanto tempo dura o programa?",
      answer:
        "O tempo de acompanhamento é definido na conversa de fit, conforme o seu objetivo, contexto clínico e momento. Não trabalhamos com um pacote rígido de duração.",
    },
    {
      question: "O que está incluído?",
      answer:
        "Acompanhamento individualizado e contínuo, 1 consulta médica por mês com o Dr. Santiago, acesso ao WhatsApp pessoal, checkpoint semanal, reunião individual mensal com o time de mentores, área de membros com aulas/cursos/livros e sessões estratégicas. Exames e suplementação são definidos conforme o caso.",
    },
    {
      question: "Qual é o investimento?",
      answer:
        "O investimento é apresentado na conversa de fit, depois de entendermos o seu caso, o escopo e o formato. Não publicamos valores fixos porque o programa é individualizado.",
    },
    {
      question: "O programa garante emagrecimento ou performance?",
      answer:
        "Não. Nenhum programa sério garante um resultado específico. O que oferecemos é avaliação criteriosa, plano individual e acompanhamento. Resultados dependem de contexto clínico, adesão e outros fatores.",
    },
    {
      question: "Preciso levar exames?",
      answer:
        "Se você já tem exames recentes, eles ajudam. Se não tiver, o médico pode solicitar os exames necessários após a avaliação. O importante é não iniciar um protocolo às cegas.",
    },
    {
      question: "O acompanhamento é presencial ou online?",
      answer:
        "O formato é definido na aplicação, conforme o seu caso e a sua localização. Quando a telemedicina é indicada, ela segue as regras do conselho e a legislação aplicável. Situações que exigem exame físico podem demandar atendimento presencial.",
    },
    {
      question: "O programa substitui meu médico ou treinador?",
      answer:
        "Não. O acompanhamento é complementar. Quando você já tem outros profissionais, o ideal é trabalhar de forma coordenada. O médico não substitui o seu clínico, seu treinador ou seu nutricionista.",
    },
    {
      question: "Meus dados ficam protegidos?",
      answer:
        "Sim. Os dados são tratados com confidencialidade e usados para contato, entrega de materiais e acompanhamento, conforme a política de privacidade. Você pode solicitar correção ou exclusão pelos canais de contato.",
    },
  ],
  ctaTitle: "O Team Vecina não é para todos.",
  ctaText:
    "É para quem está disposto a fazer o trabalho que uma vida de excelência em saúde exige. Aplique para uma conversa de fit e entenda se o programa faz sentido para o seu momento.",
};

export const TEAM_VECINA_PILLARS = [
  { name: "Sono", text: "Duração, qualidade e recuperação." },
  { name: "Nutrição", text: "Proteína, fibra, saciedade e prazer." },
  { name: "Atividade física", text: "Treino que sustenta o objetivo." },
  { name: "Estresse & ansiedade", text: "Carga mental e sistema nervoso." },
  { name: "Comportamento", text: "Ambiente, hábitos e relação com a comida." },
  { name: "Exames & mapeamento", text: "Dados para decidir, não para acumular." },
  { name: "Suplementação", text: "Quando faz sentido, com critério." },
  { name: "Rotina & hábitos", text: "O plano que cabe na vida real." },
];

export const TREATMENT_PAGES: Record<string, TreatmentPageData> = {
  atleta: {
    slug: "atleta",
    eyebrow: "Team Vecina · Para atletas amadores e triatletas",
    title: "Seu corpo é o equipamento que sustenta cada prova.",
    titleAccent: "Trate como ativo, não como custo.",
    subtitle:
      "Você treina, compete e quer evoluir. Mas cansa mais do que deveria, recupera devagar ou sente que os exames “estão normais” enquanto o corpo pede atenção. O Team Vecina é um acompanhamento individualizado e contínuo para organizar a base clínica da sua performance — com consulta mensal, WhatsApp, checkpoint semanal e mentoria.",
    heroImage:
      "/images/image-2.webp",
    heroAlt: "Triatleta correndo ao amanhecer em uma estrada costeira",
    seoTitle: "Team Vecina para atletas e triatletas | Dr. Santiago Vecina",
    seoDescription:
      "Team Vecina para atletas amadores e triatletas: acompanhamento médico individualizado e contínuo, exames, recuperação, sono, nutrição, consulta mensal e mentoria.",
    painTitle: "Quando o treino evolui, mas o corpo não acompanha",
    painIntro:
      "Treinar mais nem sempre é a resposta. Em algum momento, o limitador deixa de ser o volume de treino e passa a ser a capacidade de recuperar, dormir, absorver nutrientes e lidar com o estresse total da vida.",
    painPoints: [
      "Cansaço que não melhora com uma noite de sono.",
      "Recuperação lenta entre sessões ou provas.",
      "Exames “normais”, mas sintomas que continuam.",
      "Queda de desempenho sem explicação clara.",
      "Lesões repetidas, sono ruim ou libido baixa.",
      "Dificuldade de emagrecer ou ganhar massa sem perder performance.",
    ],
    promiseTitle: "Performance sustentável não é treinar até quebrar.",
    promiseText:
      "É construir uma base clínica que permita treinar forte, recuperar bem e chegar na prova com energia. O trabalho é integrar medicina, nutrição, sono, recuperação e carga de treino — sem transformar você em um paciente dependente de exames.",
    assessmentTitle: "O que avaliamos",
    assessmentIntro:
      "A avaliação olha para o atleta inteiro, não apenas para o exame isolado. O objetivo é encontrar o gargalo que mais limita a sua resposta ao treino.",
    assessmentPoints: [
      {
        title: "Energia e recuperação",
        text: "Sono, frequência cardíaca, percepção de esforço, dores, infecções recorrentes e tempo de recuperação entre sessões.",
      },
      {
        title: "Metabolismo e composição corporal",
        text: "Glicemia, insulina, perfil lipídico, hormônios quando indicados, massa muscular, gordura e hidratação.",
      },
      {
        title: "Micronutrientes e exames",
        text: "Ferritina, vitamina D, B12, magnésio e outros marcadores conforme sintomas, dieta e histórico.",
      },
      {
        title: "Carga total",
        text: "Treino, trabalho, viagens, sono, estresse e vida familiar. O corpo não separa “treino” de “vida”.",
      },
    ],
    includedTitle: "O que o atleta recebe",
    includedIntro:
      "O Team Vecina combina acompanhamento médico individualizado e contínuo com suporte direto e uma estrutura para implementar o plano esportivo.",
    included: [
      {
        title: "Acompanhamento contínuo",
        text: "Um ciclo completo para construir, ajustar e consolidar a base clínica da performance.",
      },
      {
        title: "1 consulta médica por mês",
        text: "Consulta com o Dr. Santiago a cada 30 dias, com ajustes de exames, micronutrientes, recuperação e carga.",
      },
      {
        title: "Leitura de exames no contexto do atleta",
        text: "Ferritina, vitamina D, B12, magnésio, hormônios e outros marcadores quando indicados.",
      },
      {
        title: "Plano de recuperação e nutrição",
        text: "Sono, hidratação, proteína, micronutrientes e interface com treino e periodização.",
      },
      {
        title: "WhatsApp pessoal",
        text: "Acesso ao WhatsApp pessoal do Dr. Santiago para dúvidas e ajustes.",
      },
      {
        title: "Checkpoint semanal",
        text: "Acompanhamento semanal da resposta ao treino, energia e recuperação.",
      },
      {
        title: "Mentoria mensal",
        text: "Reunião individual mensal com o time de mentores para acompanhar a implementação.",
      },
      {
        title: "Área de membros",
        text: "Aulas, cursos e livros sobre saúde, mentalidade e performance.",
      },
    ],
    journeyTitle: "As etapas do acompanhamento",
    journey: [
      {
        phase: "Início",
        title: "Diagnóstico e plano",
        text: "Pré-consulta, primeira consulta, exames e linha de base. Definimos o que mais limita a performance.",
      },
      {
        phase: "Construção",
        title: "Construção",
        text: "Plano de recuperação, sono, nutrição e ajustes de carga. Primeiros checkpoints e consultas mensais.",
      },
      {
        phase: "Ajuste",
        title: "Execução e ajuste",
        text: "Ajustes finos com base na resposta ao treino, energia, composição corporal e adesão.",
      },
      {
        phase: "Revisão",
        title: "Revisão e próximo ciclo",
        text: "Leitura de exames, performance e próximos passos para sustentar o resultado.",
      },
    ],
    fitTitle: "Para quem faz sentido",
    fit: [
      "Atletas amadores que treinam com regularidade e querem evoluir com saúde.",
      "Triatletas, corredores, ciclistas e praticantes de força que sentem o corpo limitar o treino.",
      "Quem quer entender exames, recuperação e nutrição sem cair em modismos.",
      "Quem está disposto a um acompanhamento contínuo, com consultas mensais.",
    ],
    notFit: [
      "Quem procura apenas um atestado ou uma receita rápida.",
      "Quem quer usar substâncias sem avaliação e acompanhamento.",
      "Quem não pretende ajustar treino, sono ou rotina.",
      "Quem está em investigação de doença aguda e precisa de atendimento de urgência.",
    ],
    faqs: [
      {
        question: "Quanto tempo dura o programa?",
        answer:
          "O tempo de acompanhamento é definido na conversa de fit, conforme o seu objetivo, contexto clínico e momento.",
      },
      {
        question: "Preciso parar de treinar durante o acompanhamento?",
        answer:
          "Não necessariamente. A ideia é ajustar a carga e a recuperação, não interromper o esporte sem motivo clínico. Se houver necessidade de pausa, isso será discutido com clareza.",
      },
      {
        question: "Vocês fazem teste de performance?",
        answer:
          "Quando indicado, o médico pode solicitar ou interpretar testes específicos. O foco é a base clínica que sustenta a performance, não substituir o seu treinador.",
      },
      {
        question: "Dá para acompanhar quem mora fora do Brasil?",
        answer:
          "Depende da licença, do estado e das regras de telemedicina aplicáveis. Isso é confirmado na aplicação antes de qualquer agendamento.",
      },
      {
        question: "Quanto tempo leva para sentir diferença?",
        answer:
          "Varia com o ponto de partida e o gargalo. Alguns sinais aparecem em poucas semanas; outros exigem um ciclo completo. Não trabalhamos com promessa de prazo.",
      },
    ],
    ctaTitle: "Sua próxima prova começa na base que você constrói agora.",
    ctaText:
      "Se você quer treinar com mais inteligência e recuperar com mais consistência, aplique para uma conversa de fit. Vamos olhar para o seu contexto antes de falar de protocolo.",
    interest: "athlete",
  },
  emagrecimento: {
    slug: "emagrecimento",
    eyebrow: "Team Vecina · Para quem quer emagrecer com saúde",
    title: "Emagrecer não é só força de vontade.",
    titleAccent: "É biologia, ambiente e método.",
    subtitle:
      "Se você já perdeu e recuperou, sente fome, cansaço ou culpa, talvez o problema não seja falta de disciplina. O Team Vecina é um acompanhamento individualizado e contínuo que investiga o que está dificultando a resposta do seu corpo e constrói um plano sustentável — com consulta mensal, WhatsApp, checkpoint semanal e mentoria.",
    heroImage:
      "/images/image-3.webp",
    heroAlt: "Mesa editorial com alimentos integrais, água e detalhes dourados",
    seoTitle: "Team Vecina Emagrecimento | Dr. Santiago Vecina",
    seoDescription:
      "Team Vecina Emagrecimento: acompanhamento médico individualizado e contínuo, avaliação metabólica, composição corporal, nutrição, comportamento, consulta mensal e mentoria.",
    painTitle: "O ciclo que se repete",
    painIntro:
      "Dietas muito restritivas podem até produzir resultado no curto prazo, mas costumam cobrar um preço: fome, queda de energia, perda de massa muscular e reganho. O problema raramente é apenas “comer menos”.",
    painPoints: [
      "Perde peso e recupera depois de pouco tempo.",
      "Sente fome ou cravings à tarde e à noite.",
      "Cansaço, sono ruim ou queda de energia.",
      "Dificuldade de manter uma rotina em viagens e eventos.",
      "Exames como glicemia, insulina ou colesterol pedindo atenção.",
      "Medo de remédios, dietas radicais ou efeito sanfona.",
    ],
    promiseTitle: "Um plano que não depende de perfeição.",
    promiseText:
      "O objetivo é construir um caminho sustentável: preservar massa muscular, melhorar a saúde metabólica, reduzir a fome desnecessária e criar uma relação mais tranquila com a comida. Emagrecimento é consequência de um processo bem conduzido — não de punição.",
    assessmentTitle: "O que avaliamos",
    assessmentIntro:
      "A avaliação procura entender por que o seu corpo está respondendo de determinada forma. Não existe um plano único para todos.",
    assessmentPoints: [
      {
        title: "Saúde metabólica",
        text: "Glicemia, insulina, hemoglobina glicada, perfil lipídico, hormônios e marcadores inflamatórios quando indicados.",
      },
      {
        title: "Composição corporal",
        text: "Peso, massa muscular, gordura, medidas e evolução ao longo do tempo — com contexto, não obsessão.",
      },
      {
        title: "Comportamento e rotina",
        text: "Fome, saciedade, horários, sono, estresse, viagens, eventos e relação com a comida.",
      },
      {
        title: "Histórico e segurança",
        text: "Tentativas anteriores, medicações, condições clínicas e sinais que exigem cuidado especializado.",
      },
    ],
    includedTitle: "O que o programa inclui",
    includedIntro:
      "O Team Vecina combina acompanhamento médico individualizado e contínuo, suporte direto e materiais de apoio no formato Brasil.",
    included: [
      {
        title: "Acompanhamento contínuo",
        text: "Um ciclo completo para construir, ajustar e consolidar a saúde metabólica e a composição corporal.",
      },
      {
        title: "1 consulta médica por mês",
        text: "Consulta com o Dr. Santiago a cada 30 dias, com ajustes de exames, nutrição, suplementação e conduta.",
      },
      {
        title: "Avaliação metabólica e composição corporal",
        text: "Glicemia, insulina, hemoglobina glicada, perfil lipídico, hormônios e marcadores inflamatórios quando indicados.",
      },
      {
        title: "Plano alimentar flexível",
        text: "Estrutura de nutrição que caiba na sua vida, com atenção a proteína, fibra, saciedade e prazer.",
      },
      {
        title: "WhatsApp pessoal",
        text: "Acesso ao WhatsApp pessoal do Dr. Santiago para dúvidas e ajustes.",
      },
      {
        title: "Checkpoint semanal",
        text: "Acompanhamento semanal da sua evolução, fome, energia e adesão.",
      },
      {
        title: "Mentoria mensal",
        text: "Reunião individual mensal com o time de mentores para acompanhar a implementação.",
      },
      {
        title: "Bônus de implementação",
        text: "No formato Brasil, inclui PAPP, Desafio do Jejum, Juventude Eterna, SAAMS e 4 e-books, conforme elegibilidade.",
      },
    ],
    journeyTitle: "As etapas do acompanhamento",
    journey: [
      {
        phase: "Início",
        title: "Diagnóstico metabólico",
        text: "Pré-consulta, primeira consulta, exames e linha de base. Entendemos o seu histórico e o que mais atrapalha a resposta.",
      },
      {
        phase: "Construção",
        title: "Construção",
        text: "Plano alimentar, rotina, sono e, quando indicado, ajuste medicamentoso. Primeiros checkpoints e consultas mensais.",
      },
      {
        phase: "Ajuste",
        title: "Consolidação",
        text: "Ajustes com base em fome, energia, composição corporal e adesão à vida real.",
      },
      {
        phase: "Revisão",
        title: "Revisão e manutenção",
        text: "Leitura de exames, evolução e plano de manutenção para o próximo ciclo.",
      },
    ],
    fitTitle: "Para quem faz sentido",
    fit: [
      "Quem quer emagrecer sem perder saúde, massa muscular ou energia.",
      "Quem já tentou dietas e quer entender o que está faltando.",
      "Quem tem exames metabólicos alterados ou histórico familiar relevante.",
      "Quem quer um plano que funcione em viagens, eventos e rotina de trabalho.",
      "Quem está disposto a um acompanhamento contínuo, com consultas mensais.",
    ],
    notFit: [
      "Quem procura apenas uma receita ou um cardápio pronto.",
      "Quem quer usar medicação sem avaliação e acompanhamento.",
      "Quem está em tratamento de transtorno alimentar sem apoio especializado.",
      "Quem busca um resultado específico em prazo garantido.",
    ],
    faqs: [
      {
        question: "Quanto tempo dura o programa?",
        answer:
          "O tempo de acompanhamento é definido na conversa de fit, conforme o seu objetivo, contexto clínico e momento.",
      },
      {
        question: "Vou precisar de medicação?",
        answer:
          "Não necessariamente. A medicação é uma possibilidade, não uma obrigação. Quando indicada, é discutida com você, com riscos, benefícios e alternativas.",
      },
      {
        question: "Preciso cortar carboidrato?",
        answer:
          "Não existe uma única estratégia. A escolha depende do seu contexto, preferências, saúde metabólica e rotina. O plano é individual.",
      },
      {
        question: "Quanto vou emagrecer?",
        answer:
          "Não trabalhamos com promessa de quilos ou prazo. O foco é saúde metabólica, composição corporal e sustentabilidade. A velocidade varia de pessoa para pessoa.",
      },
      {
        question: "O programa substitui nutricionista ou psicólogo?",
        answer:
          "Não. Quando necessário, o acompanhamento pode ser coordenado com esses profissionais. O médico não substitui cuidado especializado.",
      },
    ],
    ctaTitle: "Você não precisa recomeçar do zero outra vez.",
    ctaText:
      "Se você quer entender o que está acontecendo no seu metabolismo e construir um plano que caiba na sua vida, aplique para uma conversa de fit sobre o Team Vecina.",
    interest: "weight_loss",
  },
  empresarios: {
    slug: "empresarios",
    eyebrow: "Team Vecina · Para empresários, executivos e líderes",
    title: "Sua empresa não precisa de um líder exausto.",
    titleAccent: "Sua próxima decisão também depende do seu corpo.",
    subtitle:
      "Você lidera, viaja, decide sob pressão e sente o custo disso no sono, na energia, no foco ou no corpo. O Team Vecina é um acompanhamento individualizado e contínuo com uma camada executiva, desenhado para sustentar clareza, longevidade e legado — sem transformar sua vida em uma planilha de restrições.",
    heroImage:
      "/images/image-4.webp",
    heroAlt: "Executivo de costas observando a cidade ao amanhecer",
    seoTitle: "Team Vecina Executivo | Performance e longevidade",
    seoDescription:
      "Team Vecina Executivo: acompanhamento médico individualizado e contínuo para empresários e líderes. Sono, estresse, energia, foco, metabolismo, longevidade e legado.",
    painTitle: "O custo invisível de sustentar tudo",
    painIntro:
      "Alta performance não é apenas entregar mais. É conseguir recuperar, decidir com clareza e continuar presente ao longo dos anos. O problema é que o corpo costuma cobrar a conta antes do próximo trimestre.",
    painPoints: [
      "Sono curto, irregular ou não reparador.",
      "Cansaço que aparece mesmo sem treino intenso.",
      "Névoa mental, queda de foco ou decisões mais lentas.",
      "Aumento de peso, gordura abdominal ou perda de massa.",
      "Estresse crônico, irritabilidade ou sensação de alerta constante.",
      "Exames alterados que você vem adiando.",
    ],
    promiseTitle: "Clareza, energia e longevidade para sustentar o próximo nível.",
    promiseText:
      "O acompanhamento executivo olha para a base fisiológica da sua performance: sono, recuperação, metabolismo, composição corporal, nutrição e estresse. O plano precisa funcionar em uma agenda real — com viagens, jantares, reuniões e família.",
    assessmentTitle: "O que avaliamos",
    assessmentIntro:
      "A avaliação executiva é objetiva e discreta. O foco é identificar o que está drenando energia e o que precisa ser protegido para os próximos anos.",
    assessmentPoints: [
      {
        title: "Sono e recuperação",
        text: "Duração, qualidade, horários, viagens, cafeína, álcool e sinais de privação crônica.",
      },
      {
        title: "Estresse e sistema nervoso",
        text: "Carga mental, sintomas físicos, recuperação, respiração, pausas e limites.",
      },
      {
        title: "Metabolismo e composição corporal",
        text: "Glicemia, insulina, perfil lipídico, hormônios quando indicados, gordura visceral e massa muscular.",
      },
      {
        title: "Rotina e performance cognitiva",
        text: "Energia ao longo do dia, foco, humor, libido, treino e capacidade de desligar.",
      },
    ],
    includedTitle: "O que o executivo recebe",
    includedIntro:
      "O Team Vecina combina acompanhamento médico individualizado e contínuo com suporte direto e uma estrutura para sustentar a agenda.",
    included: [
      {
        title: "Acompanhamento contínuo",
        text: "Um ciclo completo para construir, ajustar e consolidar energia, clareza e saúde metabólica.",
      },
      {
        title: "1 consulta médica por mês",
        text: "Consulta com o Dr. Santiago a cada 30 dias, com ajustes de exames, sono, estresse e conduta.",
      },
      {
        title: "Avaliação executiva",
        text: "Sono, estresse, metabolismo, composição corporal, energia, foco e risco cardiometabólico.",
      },
      {
        title: "Plano de energia e viagem",
        text: "Ajustes para fuso, avião, jantares, cafeína, álcool e dias de alta demanda.",
      },
      {
        title: "WhatsApp pessoal",
        text: "Acesso ao WhatsApp pessoal do Dr. Santiago para dúvidas e ajustes.",
      },
      {
        title: "Checkpoint semanal",
        text: "Acompanhamento semanal da sua evolução, energia, sono e adesão.",
      },
      {
        title: "Mentoria mensal",
        text: "Reunião individual mensal com o time de mentores para acompanhar a implementação.",
      },
      {
        title: "Área de membros e sessões",
        text: "Aulas, cursos e livros sobre saúde, mentalidade, empreendedorismo e legado.",
      },
    ],
    journeyTitle: "As etapas do acompanhamento",
    journey: [
      {
        phase: "Início",
        title: "Diagnóstico executivo",
        text: "Pré-consulta, primeira consulta, exames e mapeamento de sono, estresse, rotina e prioridades.",
      },
      {
        phase: "Construção",
        title: "Construção da base",
        text: "Plano de energia, recuperação e metabolismo adaptado à agenda. Primeiros checkpoints e consultas mensais.",
      },
      {
        phase: "Ajuste",
        title: "Execução em agenda real",
        text: "Ajustes para viagens, eventos e carga de trabalho. Leitura de resposta clínica.",
      },
      {
        phase: "Revisão",
        title: "Revisão e legado",
        text: "Exames, evolução e plano de manutenção para sustentar o próximo nível.",
      },
    ],
    fitTitle: "Para quem faz sentido",
    fit: [
      "Empresários e executivos com agenda intensa e pouco espaço para recuperação.",
      "Líderes que querem longevidade sem abrir mão de performance.",
      "Quem tem exames alterados ou histórico familiar e quer um plano claro.",
      "Quem prefere uma abordagem discreta, objetiva e baseada em dados.",
      "Quem está disposto a um acompanhamento contínuo, com consultas mensais.",
    ],
    notFit: [
      "Quem procura um atestado para “aguentar mais” sem mudar nada.",
      "Quem quer uma solução mágica para burnout ou transtorno mental.",
      "Quem não está disposto a rever sono, rotina e prioridades.",
      "Quem está em crise aguda e precisa de atendimento de urgência.",
    ],
    faqs: [
      {
        question: "Quanto tempo dura o programa?",
        answer:
          "O tempo de acompanhamento é definido na conversa de fit, conforme o seu objetivo, contexto clínico e momento.",
      },
      {
        question: "Preciso contar para a empresa?",
        answer:
          "Não. O acompanhamento é privado e confidencial. Você decide o que compartilhar e com quem.",
      },
      {
        question: "Consigo fazer em viagens?",
        answer:
          "Sim, dentro das regras de telemedicina aplicáveis. O plano é desenhado para funcionar em diferentes fusos e rotinas, com ajustes específicos para viagens.",
      },
      {
        question: "É um programa de coaching?",
        answer:
          "Não. É acompanhamento médico. Quando necessário, pode haver coordenação com coaching, terapia ou treinamento, mas o núcleo é clínico.",
      },
      {
        question: "Quanto tempo por semana preciso reservar?",
        answer:
          "A carga depende do plano. A proposta é encaixar as ações na sua rotina, com o mínimo necessário para gerar resposta. O que não couber na vida real não será recomendado.",
      },
    ],
    ctaTitle: "O próximo nível pede um corpo capaz de sustentá-lo.",
    ctaText:
      "Se você quer clareza, energia e longevidade para continuar decidindo e liderando, aplique para uma conversa de fit sobre o Team Vecina Executivo.",
    interest: "executive",
  },
};
