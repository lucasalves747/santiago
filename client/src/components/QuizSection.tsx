/**
 * QuizSection — Diagnóstico dos 5 Pilares da Performance Integral
 * Design: Bold Luxury — Preto profundo + Dourado (#C9A84C) + Off-white
 * Fonte: Cormorant Garamond (títulos) + Nunito Sans (corpo)
 * 25 perguntas (5 por pilar), escala 1-4, resultado com radar visual por pilar
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Dados ───────────────────────────────────────────────────────────────────

const PILARES = [
  {
    id: "saude",
    numero: "01",
    nome: "Saúde Estratégica",
    subtitulo: "Ativo de Negócio",
    cor: "#C9A84C",
    icone: "⚡",
    descricao: "Fisiologia, metabolismo e energia como base para a alta performance.",
    topicos: ["Otimização hormonal", "Biohacking para executivos", "Sono e recuperação", "Nutrição de performance"],
  },
  {
    id: "mente",
    numero: "02",
    nome: "Mente e Clareza",
    subtitulo: "Clareza Total",
    cor: "#B8A9C9",
    icone: "🧠",
    descricao: "Inteligência emocional e foco para decisões críticas sob pressão.",
    topicos: ["Superação de crenças limitantes", "Disciplina e foco", "Tomada de decisão", "Resiliência mental"],
  },
  {
    id: "lideranca",
    numero: "03",
    nome: "Liderança com Propósito",
    subtitulo: "Cultura Forte",
    cor: "#7EB8A4",
    icone: "👑",
    descricao: "Formação de líderes e influência que transcende o ambiente de trabalho.",
    topicos: ["Liderança servidora", "Formação de equipes", "Cultura organizacional", "Liderança familiar"],
  },
  {
    id: "negocios",
    numero: "04",
    nome: "Negócios Sustentáveis",
    subtitulo: "Escala nos EUA",
    cor: "#E8A87C",
    icone: "🏛️",
    descricao: "Estrutura, processos e mentalidade para crescer no mercado americano.",
    topicos: ["Sistemas e processos", "Internacionalização EUA", "Networking de elite", "Negócio autônomo"],
  },
  {
    id: "legado",
    numero: "05",
    nome: "Legado e Família",
    subtitulo: "Impacto Eterno",
    cor: "#A8C9E8",
    icone: "🌿",
    descricao: "Família estruturada e valores que permanecem por gerações.",
    topicos: ["Herança de valores", "Casamento alinhado", "Paternidade ativa", "Legado geracional"],
  },
];

const PERGUNTAS = [
  // PILAR 1 — SAÚDE ESTRATÉGICA
  {
    pilar: "saude",
    texto: "Como você avalia seu nível de energia ao longo do dia de trabalho?",
    opcoes: [
      { texto: "Estou exausto na maior parte do tempo, dependo de café ou estimulantes.", pontos: 1 },
      { texto: "Tenho energia pela manhã, mas caio no período da tarde.", pontos: 2 },
      { texto: "Mantenho boa energia, com algumas oscilações ocasionais.", pontos: 3 },
      { texto: "Tenho energia consistente e estratégica ao longo de todo o dia.", pontos: 4 },
    ],
  },
  {
    pilar: "saude",
    texto: "Com que frequência você prioriza o sono como parte da sua estratégia de performance?",
    opcoes: [
      { texto: "Raramente — durmo pouco e vejo isso como sinal de dedicação.", pontos: 1 },
      { texto: "Às vezes, quando não tenho outra opção.", pontos: 2 },
      { texto: "Na maioria das vezes, mas ainda sacrifico o sono em períodos de pressão.", pontos: 3 },
      { texto: "Sempre — o sono é um ativo estratégico inegociável para mim.", pontos: 4 },
    ],
  },
  {
    pilar: "saude",
    texto: "Como está sua alimentação em relação à sua performance cognitiva e física?",
    opcoes: [
      { texto: "Como de forma irregular e sem estratégia — o que aparecer.", pontos: 1 },
      { texto: "Tenho algum cuidado, mas não é consistente.", pontos: 2 },
      { texto: "Me alimento bem na maioria dos dias, com algumas exceções.", pontos: 3 },
      { texto: "Minha alimentação é planejada para sustentar alta performance.", pontos: 4 },
    ],
  },
  {
    pilar: "saude",
    texto: "Você realiza check-ups preventivos e acompanhamento médico regularmente?",
    opcoes: [
      { texto: "Não — só vou ao médico quando estou doente.", pontos: 1 },
      { texto: "Raramente, de forma esporádica.", pontos: 2 },
      { texto: "Faço check-ups anuais, mas sem acompanhamento contínuo.", pontos: 3 },
      { texto: "Tenho acompanhamento regular e proativo da minha saúde.", pontos: 4 },
    ],
  },
  {
    pilar: "saude",
    texto: "Como você lida com o exercício físico dentro da sua rotina de liderança?",
    opcoes: [
      { texto: "Não pratico — não tenho tempo ou não é prioridade.", pontos: 1 },
      { texto: "Pratico esporadicamente, sem regularidade.", pontos: 2 },
      { texto: "Pratico com alguma regularidade, mas sem consistência total.", pontos: 3 },
      { texto: "O exercício é parte estrutural da minha rotina de alta performance.", pontos: 4 },
    ],
  },
  // PILAR 2 — MENTE E CLAREZA
  {
    pilar: "mente",
    texto: "Como você toma decisões importantes sob pressão?",
    opcoes: [
      { texto: "Fico paralisado ou tomo decisões impulsivas que depois me arrependo.", pontos: 1 },
      { texto: "Decido, mas com muita ansiedade e insegurança.", pontos: 2 },
      { texto: "Consigo decidir bem na maioria das vezes, mas a pressão me afeta.", pontos: 3 },
      { texto: "Tenho clareza e método para decidir com confiança mesmo sob pressão.", pontos: 4 },
    ],
  },
  {
    pilar: "mente",
    texto: "Com que frequência crenças limitantes ou o medo do fracasso travam seu avanço?",
    opcoes: [
      { texto: "Frequentemente — o medo me paralisa em decisões importantes.", pontos: 1 },
      { texto: "Às vezes me pego sabotando oportunidades por insegurança.", pontos: 2 },
      { texto: "Raramente, mas ainda acontece em situações de grande risco.", pontos: 3 },
      { texto: "Reconheço e supero crenças limitantes de forma consciente e rápida.", pontos: 4 },
    ],
  },
  {
    pilar: "mente",
    texto: "Qual é o seu nível de foco e concentração durante o trabalho?",
    opcoes: [
      { texto: "Sou constantemente interrompido e não consigo manter foco por mais de 15 minutos.", pontos: 1 },
      { texto: "Tenho foco razoável, mas me distraio com frequência.", pontos: 2 },
      { texto: "Consigo focar bem, com algumas distrações ocasionais.", pontos: 3 },
      { texto: "Tenho blocos de foco profundo e protejo minha atenção estrategicamente.", pontos: 4 },
    ],
  },
  {
    pilar: "mente",
    texto: "Como você gerencia suas emoções em situações de conflito ou alta pressão?",
    opcoes: [
      { texto: "Perco o controle com frequência — raiva, ansiedade ou frustração dominam.", pontos: 1 },
      { texto: "Consigo me controlar, mas fico abalado por horas ou dias.", pontos: 2 },
      { texto: "Gerencio bem, mas situações muito intensas ainda me desequilibram.", pontos: 3 },
      { texto: "Tenho inteligência emocional sólida — processo e respondo com equilíbrio.", pontos: 4 },
    ],
  },
  {
    pilar: "mente",
    texto: "Você tem uma prática regular de desenvolvimento mental (meditação, leitura, terapia, coaching)?",
    opcoes: [
      { texto: "Não — nunca priorizei isso.", pontos: 1 },
      { texto: "Já tentei, mas não mantive consistência.", pontos: 2 },
      { texto: "Tenho algumas práticas, mas não são sistemáticas.", pontos: 3 },
      { texto: "Tenho um sistema consistente de desenvolvimento mental.", pontos: 4 },
    ],
  },
  // PILAR 3 — LIDERANÇA COM PROPÓSITO
  {
    pilar: "lideranca",
    texto: "Como você avalia sua capacidade de inspirar e engajar sua equipe?",
    opcoes: [
      { texto: "Minha equipe trabalha por obrigação — não há engajamento real.", pontos: 1 },
      { texto: "Há algum engajamento, mas a equipe não está verdadeiramente motivada.", pontos: 2 },
      { texto: "A maioria da equipe está engajada, mas ainda há resistências.", pontos: 3 },
      { texto: "Minha equipe é altamente engajada e motivada por propósito.", pontos: 4 },
    ],
  },
  {
    pilar: "lideranca",
    texto: "Você consegue delegar responsabilidades com confiança e eficácia?",
    opcoes: [
      { texto: "Não consigo delegar — preciso controlar tudo para funcionar.", pontos: 1 },
      { texto: "Delego pouco e fico ansioso quando não estou supervisionando.", pontos: 2 },
      { texto: "Delego bem na maioria dos casos, mas ainda microgerencio em algumas áreas.", pontos: 3 },
      { texto: "Delego com confiança e tenho um time que opera de forma autônoma.", pontos: 4 },
    ],
  },
  {
    pilar: "lideranca",
    texto: "Sua liderança é guiada por valores e propósito claros?",
    opcoes: [
      { texto: "Não tenho valores definidos — lidero por reação às situações.", pontos: 1 },
      { texto: "Tenho alguns valores, mas eles não guiam minhas decisões de forma consistente.", pontos: 2 },
      { texto: "Meus valores são claros, mas nem sempre os comunico bem à equipe.", pontos: 3 },
      { texto: "Lidero com propósito e valores que são vividos e reconhecidos por todos.", pontos: 4 },
    ],
  },
  {
    pilar: "lideranca",
    texto: "Como você exerce sua liderança dentro de casa — com sua família?",
    opcoes: [
      { texto: "Sou ausente ou distante — o trabalho consome todo meu tempo e energia.", pontos: 1 },
      { texto: "Estou presente fisicamente, mas emocionalmente distante.", pontos: 2 },
      { texto: "Sou presente, mas poderia ser mais intencional na liderança familiar.", pontos: 3 },
      { texto: "Lidero minha família com intenção, presença e valores sólidos.", pontos: 4 },
    ],
  },
  {
    pilar: "lideranca",
    texto: "Você está desenvolvendo outros líderes ao seu redor?",
    opcoes: [
      { texto: "Não — sou o único líder e não há sucessores ou multiplicadores.", pontos: 1 },
      { texto: "Tenho algumas pessoas em desenvolvimento, mas sem sistematização.", pontos: 2 },
      { texto: "Desenvolvo líderes, mas o processo ainda não é estruturado.", pontos: 3 },
      { texto: "Tenho um processo claro de formação e multiplicação de líderes.", pontos: 4 },
    ],
  },
  // PILAR 4 — NEGÓCIOS SUSTENTÁVEIS
  {
    pilar: "negocios",
    texto: "O que acontece com o seu negócio quando você tira férias ou fica doente?",
    opcoes: [
      { texto: "Para completamente — tudo depende de mim.", pontos: 1 },
      { texto: "Funciona com dificuldade e acumula problemas para eu resolver.", pontos: 2 },
      { texto: "Funciona razoavelmente, mas com perda de qualidade ou eficiência.", pontos: 3 },
      { texto: "Opera com total autonomia — minha ausência não impacta os resultados.", pontos: 4 },
    ],
  },
  {
    pilar: "negocios",
    texto: "Você tem processos e sistemas documentados que permitem escalar sem você?",
    opcoes: [
      { texto: "Não — tudo está na minha cabeça.", pontos: 1 },
      { texto: "Tenho alguns processos, mas são informais e inconsistentes.", pontos: 2 },
      { texto: "Tenho processos razoavelmente documentados, mas ainda incompletos.", pontos: 3 },
      { texto: "Tenho sistemas robustos que permitem escalar com previsibilidade.", pontos: 4 },
    ],
  },
  {
    pilar: "negocios",
    texto: "Como está a saúde financeira e a previsibilidade de receita do seu negócio?",
    opcoes: [
      { texto: "Vivo de mês em mês, sem previsibilidade ou reservas.", pontos: 1 },
      { texto: "Tenho alguma previsibilidade, mas a margem é apertada.", pontos: 2 },
      { texto: "Boa saúde financeira, mas ainda dependente de poucos clientes ou produtos.", pontos: 3 },
      { texto: "Receita previsível, margens saudáveis e reservas estratégicas.", pontos: 4 },
    ],
  },
  {
    pilar: "negocios",
    texto: "Você tem uma estratégia clara de expansão ou internacionalização?",
    opcoes: [
      { texto: "Não — estou focado apenas em sobreviver no mercado atual.", pontos: 1 },
      { texto: "Penso nisso, mas não tenho plano concreto.", pontos: 2 },
      { texto: "Tenho um plano inicial, mas ainda não comecei a executar.", pontos: 3 },
      { texto: "Tenho estratégia definida e estou em processo ativo de expansão.", pontos: 4 },
    ],
  },
  {
    pilar: "negocios",
    texto: "Qual é a qualidade do seu networking e das conexões estratégicas de alto nível?",
    opcoes: [
      { texto: "Minha rede é limitada e não abre portas relevantes.", pontos: 1 },
      { texto: "Tenho alguns contatos bons, mas não cultivo relacionamentos estratégicos.", pontos: 2 },
      { texto: "Tenho uma rede razoável, mas poderia ser mais estratégico nas conexões.", pontos: 3 },
      { texto: "Tenho um ecossistema de alto nível que gera oportunidades constantemente.", pontos: 4 },
    ],
  },
  // PILAR 5 — LEGADO E FAMÍLIA
  {
    pilar: "legado",
    texto: "Você tem clareza sobre o legado que quer deixar para as próximas gerações?",
    opcoes: [
      { texto: "Não penso nisso — estou focado apenas no presente.", pontos: 1 },
      { texto: "Tenho uma ideia vaga, mas nunca formalizei ou trabalhei nisso.", pontos: 2 },
      { texto: "Tenho clareza sobre meu legado, mas ainda não agi de forma estruturada.", pontos: 3 },
      { texto: "Tenho um legado definido e tomo decisões alinhadas a ele diariamente.", pontos: 4 },
    ],
  },
  {
    pilar: "legado",
    texto: "Como está o alinhamento e a qualidade do seu relacionamento conjugal?",
    opcoes: [
      { texto: "Há tensão constante — o trabalho criou uma distância significativa.", pontos: 1 },
      { texto: "Nos damos bem, mas não somos parceiros estratégicos na vida.", pontos: 2 },
      { texto: "Temos um bom relacionamento, mas poderíamos estar mais alinhados.", pontos: 3 },
      { texto: "Somos parceiros alinhados em valores, visão e propósito de vida.", pontos: 4 },
    ],
  },
  {
    pilar: "legado",
    texto: "Você está presente e ativo na formação dos seus filhos ou das pessoas que dependem de você?",
    opcoes: [
      { texto: "Não — minha ausência é uma realidade que me pesa.", pontos: 1 },
      { texto: "Estou presente, mas de forma passiva — não há intenção pedagógica.", pontos: 2 },
      { texto: "Sou presente e intencional, mas poderia ser mais consistente.", pontos: 3 },
      { texto: "Sou um pai/mentor ativo, presente e intencional na formação de quem amo.", pontos: 4 },
    ],
  },
  {
    pilar: "legado",
    texto: "Você transmite valores claros e intencionais para sua família?",
    opcoes: [
      { texto: "Não — nunca pensei em transmissão de valores de forma consciente.", pontos: 1 },
      { texto: "Tento, mas não de forma sistemática ou consistente.", pontos: 2 },
      { texto: "Tenho valores claros e os comunico, mas poderia ser mais intencional.", pontos: 3 },
      { texto: "Tenho um sistema de transmissão de valores que é vivido e celebrado.", pontos: 4 },
    ],
  },
  {
    pilar: "legado",
    texto: "Se você parasse de trabalhar hoje, o que ficaria de você além do dinheiro?",
    opcoes: [
      { texto: "Honestamente, não sei — nunca pensei nisso.", pontos: 1 },
      { texto: "Algumas memórias, mas nada estruturado ou duradouro.", pontos: 2 },
      { texto: "Algumas iniciativas e valores, mas ainda em construção.", pontos: 3 },
      { texto: "Um legado vivo — pessoas transformadas, valores transmitidos, impacto real.", pontos: 4 },
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function calcularResultados(respostas: Record<number, number>) {
  const scores: Record<string, number> = { saude: 0, mente: 0, lideranca: 0, negocios: 0, legado: 0 };
  PERGUNTAS.forEach((p, i) => {
    if (respostas[i] !== undefined) {
      scores[p.pilar] += respostas[i];
    }
  });
  return scores;
}

function getNivel(score: number): { label: string; cor: string; descricao: string } {
  const pct = (score / 20) * 100;
  if (pct <= 30) return { label: "Crítico", cor: "#E05C5C", descricao: "Este pilar está comprometendo sua performance. Ação imediata necessária." };
  if (pct <= 50) return { label: "Frágil", cor: "#E8A87C", descricao: "Há vulnerabilidades sérias. Este pilar precisa de atenção prioritária." };
  if (pct <= 70) return { label: "Em Desenvolvimento", cor: "#C9A84C", descricao: "Você está no caminho certo, mas há espaço significativo para crescer." };
  if (pct <= 85) return { label: "Sólido", cor: "#7EB8A4", descricao: "Boa base construída. Refinamentos estratégicos elevarão ao próximo nível." };
  return { label: "Excelente", cor: "#A8C9E8", descricao: "Pilar de alta performance. Mantenha e use como alavanca para os demais." };
}

function getPilarPrincipal(scores: Record<string, number>) {
  return Object.entries(scores).sort((a, b) => a[1] - b[1])[0][0];
}

// ─── Barra de Progresso do Pilar ─────────────────────────────────────────────

function BarraPilar({ pilar, score }: { pilar: typeof PILARES[0]; score: number }) {
  const pct = Math.round((score / 20) * 100);
  const nivel = getNivel(score);
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{pilar.icone}</span>
          <div>
            <p className="text-sm font-bold text-[#F5F0E8] tracking-wide">{pilar.nome}</p>
            <p className="text-xs text-[#C9A84C] tracking-widest uppercase">{pilar.subtitulo}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold" style={{ color: nivel.cor, fontFamily: "'Cormorant Garamond', serif" }}>{pct}%</span>
          <p className="text-xs font-semibold tracking-wider uppercase" style={{ color: nivel.cor }}>{nivel.label}</p>
        </div>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${nivel.cor}88, ${nivel.cor})` }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
      <p className="text-xs text-[#F5F0E8]/50 mt-1">{nivel.descricao}</p>
    </div>
  );
}

// ─── Radar SVG ────────────────────────────────────────────────────────────────

function RadarChart({ scores }: { scores: Record<string, number> }) {
  const cx = 150, cy = 150, r = 110;
  const labels = ["saude", "mente", "lideranca", "negocios", "legado"];
  const angles = labels.map((_, i) => (i * 2 * Math.PI) / 5 - Math.PI / 2);

  const toXY = (angle: number, radius: number) => ({
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  });

  const gridLevels = [0.25, 0.5, 0.75, 1];
  const pilarNomes = ["Saúde", "Mente", "Liderança", "Negócios", "Legado"];

  const dataPoints = labels.map((l, i) => {
    const pct = scores[l] / 20;
    return toXY(angles[i], r * pct);
  });

  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-full max-w-xs mx-auto">
      {/* Grid */}
      {gridLevels.map((level) => {
        const pts = angles.map((a) => toXY(a, r * level));
        const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z";
        return <path key={level} d={path} fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="1" />;
      })}
      {/* Axes */}
      {angles.map((a, i) => {
        const end = toXY(a, r);
        return <line key={i} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke="rgba(201,168,76,0.2)" strokeWidth="1" />;
      })}
      {/* Data area */}
      <path d={dataPath} fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="2" />
      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="5" fill="#C9A84C" stroke="#1A1410" strokeWidth="2" />
      ))}
      {/* Labels */}
      {angles.map((a, i) => {
        const pos = toXY(a, r + 22);
        return (
          <text key={i} x={pos.x} y={pos.y} textAnchor="middle" dominantBaseline="middle"
            fill="rgba(245,240,232,0.7)" fontSize="10" fontFamily="Nunito Sans, sans-serif" fontWeight="600">
            {pilarNomes[i]}
          </text>
        );
      })}
    </svg>
  );
}

// ─── Componente Principal ─────────────────────────────────────────────────────

export default function QuizSection() {
  const [etapa, setEtapa] = useState<"intro" | "quiz" | "captura_cta" | "captura_form" | "resultado">("intro");
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<number, number>>({});
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const topRef = useRef<HTMLDivElement>(null);
  const [gerandoPDF, setGerandoPDF] = useState(false);
  const [loading, setLoading] = useState(false);


  const totalPerguntas = PERGUNTAS.length;
  const progresso = Math.round((perguntaAtual / totalPerguntas) * 100);
  const pilarAtual = PILARES.find((p) => p.id === PERGUNTAS[perguntaAtual]?.pilar);

  function scrollTop() {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function responder(pontos: number) {
    const novas = { ...respostas, [perguntaAtual]: pontos };
    setRespostas(novas);
    if (perguntaAtual < totalPerguntas - 1) {
      setPerguntaAtual(perguntaAtual + 1);
      scrollTop();
    } else {
      setEtapa("captura_cta");
      scrollTop();
    }
  }

  async function submitForm() {
    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    setLoading(true);

    const finalScores = calcularResultados(respostas);
    const finalPilarFraco = getPilarPrincipal(finalScores);
    const totalScore = Object.values(finalScores).reduce((a, b) => a + b, 0);
    const totalPct = Math.round((totalScore / 100) * 100);

    const perfilQuiz = getPerfilGeral(totalPct);
    const statusGeral = getNivel(totalScore / 5).label;

    const chartConfig = {
      type: 'radar',
      data: {
        labels: ['Saúde', 'Mente', 'Liderança', 'Negócios', 'Legado'],
        datasets: [{
          label: 'Performance',
          data: [
            (finalScores.saude / 20) * 100,
            (finalScores.mente / 20) * 100,
            (finalScores.lideranca / 20) * 100,
            (finalScores.negocios / 20) * 100,
            (finalScores.legado / 20) * 100
          ],
          backgroundColor: 'rgba(201,168,76,0.2)',
          borderColor: '#C9A84C',
          pointBackgroundColor: '#C9A84C'
        }]
      },
      options: {
        scale: { ticks: { min: 0, max: 100, display: false } }
      }
    };
    const radarImageUrl = `https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify(chartConfig))}`;

    const radarDinamico = {
      saude: { pct: (finalScores.saude / 20) * 100, status: getNivel(finalScores.saude).label },
      mente: { pct: (finalScores.mente / 20) * 100, status: getNivel(finalScores.mente).label },
      lideranca: { pct: (finalScores.lideranca / 20) * 100, status: getNivel(finalScores.lideranca).label },
      negocios: { pct: (finalScores.negocios / 20) * 100, status: getNivel(finalScores.negocios).label },
      legado: { pct: (finalScores.legado / 20) * 100, status: getNivel(finalScores.legado).label },
    };
    try {
      const response = await fetch("https://zfmjeheozxmkibhoarlb.supabase.co/functions/v1/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json", "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmbWplaGVvenhta2liaG9hcmxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MDY0OTQsImV4cCI6MjA5MDE4MjQ5NH0.UeUDEnJdWI6W6BGuyKCeGg9_fuabb7R2RzGsjAU3Q6g" },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          resultados: finalScores,
          pilarFraco: finalPilarFraco,
          scoreGeral: totalPct,
          tituloPerfil: perfilQuiz.titulo,
          descricaoPerfil: perfilQuiz.descricao,
          statusGeral: statusGeral,
          radarDinamico: radarDinamico,
          radarImageUrl: radarImageUrl
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();

      console.log("Resposta completa:", data);
      console.log("Success:", data.success);
      console.log("URL do PDF:", data.url);

      try {
        fetch("https://services.leadconnectorhq.com/hooks/PMW6fmu3oCfXFYueuN2D/webhook-trigger/7968aee5-4503-417d-bc5f-0ed63afd3078", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome,
            email,
            telefone,
            resultados: finalScores,
            pilarFraco: finalPilarFraco,
            scoreGeral: totalPct,
            tituloPerfil: perfilQuiz.titulo,
            descricaoPerfil: perfilQuiz.descricao,
            statusGeral: statusGeral,
            radarDinamico: radarDinamico,
            radarImageUrl: radarImageUrl,
            pdfUrl: data.url
          }),
        });
      } catch (error) {
        console.error("Erro ao enviar webhook do quiz:", error);
      }

    } catch (error) {
      console.error("Erro ao enviar webhook do quiz:", error);
    }

    setLoading(false);
    // 🔥 REDIRECIONA
    window.location.href = "/pos-quiz.html";
    scrollTop();
  }

  function reiniciar() {
    setEtapa("intro");
    setPerguntaAtual(0);
    setRespostas({});
    setNome("");
    setEmail("");
    setTelefone("");
    scrollTop();
  }

  const scores = calcularResultados(respostas);
  const pilarFraco = getPilarPrincipal(scores);
  const pilarFracoInfo = PILARES.find((p) => p.id === pilarFraco)!;
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const totalPct = Math.round((totalScore / 100) * 100);

  function getPerfilGeral(pct: number) {
    if (pct <= 35) return { titulo: "Líder em Crise Silenciosa", descricao: "Você está construindo sobre areia. Seus resultados externos escondem vulnerabilidades internas que, se não tratadas, podem comprometer tudo que você construiu. O momento de agir é agora." };
    if (pct <= 55) return { titulo: "Líder com Potencial Bloqueado", descricao: "Você tem capacidade acima da média, mas pilares críticos estão limitando seu teto de crescimento. Com os ajustes certos, seu próximo nível está muito mais próximo do que imagina." };
    if (pct <= 70) return { titulo: "Líder em Transição", descricao: "Você está no caminho certo. Tem uma base sólida, mas ainda há lacunas que impedem a performance integral. O refinamento estratégico vai multiplicar seus resultados." };
    if (pct <= 85) return { titulo: "Líder de Alta Performance", descricao: "Você construiu uma base sólida em múltiplos pilares. O próximo nível é a integração total — quando todos os pilares se potencializam mutuamente." };
    return { titulo: "Líder Integral", descricao: "Você é raro. Construiu performance em todas as dimensões. Seu papel agora é multiplicar — formar outros líderes e deixar um legado que transcende você." };
  }

  const perfil = getPerfilGeral(totalPct);

  return (
    <section
      id="quiz"
      ref={topRef}
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D0A07 0%, #1A1410 50%, #0D0A07 100%)" }}
    >
      {/* Decoração de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent via-[#C9A84C]/30 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <AnimatePresence mode="wait">

          {/* ── INTRO ── */}
          {etapa === "intro" && (
            <motion.div key="intro" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
              {/* Header */}
              <div className="text-center mb-12">
                <p className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-4">Diagnóstico Gratuito</p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4 leading-tight">
                  Qual Pilar Está<br />
                  <span className="text-[#C9A84C]">Limitando Seu Teto?</span>
                </h2>
                <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
                <p className="text-[#F5F0E8]/65 text-lg leading-relaxed max-w-xl mx-auto">
                  25 perguntas. 5 minutos. Um diagnóstico honesto dos seus 5 Pilares de Performance Integral — e um plano claro para o seu próximo nível.
                </p>
              </div>

              {/* Pilares preview */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-10">
                {PILARES.map((p) => (
                  <div key={p.id} className="text-center p-4 border border-[#C9A84C]/15 rounded-sm" style={{ background: "rgba(201,168,76,0.04)" }}>
                    <div className="text-2xl mb-2">{p.icone}</div>
                    <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-1">{p.numero}</p>
                    <p className="text-[#F5F0E8] text-xs font-semibold leading-tight">{p.nome}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setEtapa("quiz");
                  }}
                  className="group relative inline-flex items-center gap-3 px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E2C97E)", color: "#0D0A07" }}
                >
                  <span>Iniciar Meu Diagnóstico</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                <p className="text-[#F5F0E8]/30 text-xs mt-4">25 perguntas · ~5 minutos · 100% gratuito</p>
              </div>
            </motion.div>
          )}

          {/* ── QUIZ ── */}
          {etapa === "quiz" && (
            <motion.div key={`quiz-${perguntaAtual}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
              {/* Barra de progresso */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">{pilarAtual?.subtitulo}</span>
                    <span className="text-[#F5F0E8]/20 text-xs">·</span>
                    <span className="text-[#F5F0E8]/40 text-xs">{pilarAtual?.nome}</span>
                  </div>
                  <span className="text-[#F5F0E8]/40 text-xs font-semibold">{perguntaAtual + 1} / {totalPerguntas}</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #C9A84C, #E2C97E)" }}
                    animate={{ width: `${progresso}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Número da pergunta */}
              <div className="flex items-center gap-4 mb-6">
                <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(201,168,76,0.2)", fontSize: "80px", lineHeight: 1, fontWeight: 700 }}>
                  {String(perguntaAtual + 1).padStart(2, "0")}
                </span>
                <div className="w-px h-16 bg-[#C9A84C]/20" />
                <div>
                  <p className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase mb-1">{pilarAtual?.icone} {pilarAtual?.nome}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl md:text-3xl font-bold text-[#F5F0E8] leading-tight">
                    {PERGUNTAS[perguntaAtual].texto}
                  </h3>
                </div>
              </div>

              {/* Opções */}
              <div className="space-y-3">
                {PERGUNTAS[perguntaAtual].opcoes.map((opcao, i) => (
                  <motion.button
                    key={i}
                    onClick={() => responder(opcao.pontos)}
                    className="w-full text-left p-5 border transition-all duration-200 group"
                    style={{ background: "rgba(201,168,76,0.03)", borderColor: "rgba(201,168,76,0.15)" }}
                    whileHover={{ borderColor: "rgba(201,168,76,0.5)", backgroundColor: "rgba(201,168,76,0.08)" }}
                    whileTap={{ scale: 0.99 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-7 h-7 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] text-xs font-bold group-hover:bg-[#C9A84C]/20 transition-colors">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <p className="text-[#F5F0E8]/75 text-sm leading-relaxed group-hover:text-[#F5F0E8] transition-colors">{opcao.texto}</p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Voltar */}
              {perguntaAtual > 0 && (
                <button
                  onClick={() => { setPerguntaAtual(perguntaAtual - 1); scrollTop(); }}
                  className="mt-6 text-[#F5F0E8]/30 text-xs tracking-widest uppercase hover:text-[#C9A84C] transition-colors"
                >
                  ← Voltar
                </button>
              )}
            </motion.div>
          )}

          {/* ── CAPTURA CTA ── */}
          {etapa === "captura_cta" && (
            <motion.div key="captura_cta" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center py-20">
              <p className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-4">Finalizado</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-8 leading-tight">
                Seu diagnóstico está pronto!
              </h2>
              <button
                onClick={() => { setEtapa("captura_form"); scrollTop(); }}
                className="group relative inline-flex items-center gap-3 px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-[#C9A84C]/10"
                style={{ background: "linear-gradient(135deg, #C9A84C, #E2C97E)", color: "#0D0A07" }}
              >
                <span>Baixe seu PDF completo agora</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </motion.div>
          )}

          {/* ── CAPTURA FORM ── */}
          {etapa === "captura_form" && (
            <motion.div key="captura_form" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="max-w-md mx-auto py-10">
              <div className="border border-[#C9A84C]/20 p-8 shadow-2xl" style={{ background: "rgba(201,168,76,0.03)" }}>
                <p className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase mb-4 text-center">Para liberar seu PDF,</p>
                <h3 className="text-2xl font-bold text-[#F5F0E8] text-center mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Preencha seus dados
                </h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-[#F5F0E8]/50 text-xs tracking-widest uppercase mb-2">Seu Nome</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full bg-transparent border border-[#C9A84C]/25 text-[#F5F0E8] placeholder-[#F5F0E8]/25 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[#F5F0E8]/50 text-xs tracking-widest uppercase mb-2">Seu E-mail</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border border-[#C9A84C]/25 text-[#F5F0E8] placeholder-[#F5F0E8]/25 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[#F5F0E8]/50 text-xs tracking-widest uppercase mb-2">Telefone / WhatsApp</label>
                    <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="w-full bg-transparent border border-[#C9A84C]/25 text-[#F5F0E8] placeholder-[#F5F0E8]/25 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors" />
                  </div>
                </div>
                <button
                  onClick={submitForm}
                  disabled={loading}
                  className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E2C97E)", color: "#0D0A07" }}
                >
                  {loading ? (
                    <>
                      {/* 🔥 Spinner */}
                      <span className="w-5 h-5 border-2 border-[#0D0A07] border-t-transparent rounded-full animate-spin"></span>
                      <span>Gerando PDF...</span>
                    </>
                  ) : (
                    <>
                      <span>Receber Meu Diagnóstico</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {/* ── RESULTADO ── */}
          {/* RESULTADO INVISÍVEL (USADO SÓ PARA PDF) */}
          <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
            <div id="resultado-quiz" className="p-4">

              {/* Header */}
              <div className="text-center mb-12">
                <p className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
                  {nome ? `Diagnóstico de ${nome}` : "Seu Diagnóstico"}
                </p>

                <h2
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-2 leading-tight"
                >
                  {perfil.titulo}
                </h2>

                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-16 h-px bg-[#C9A84C]/40" />
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#C9A84C",
                      fontSize: "48px",
                      fontWeight: 700,
                    }}
                  >
                    {totalPct}%
                  </span>
                  <div className="w-16 h-px bg-[#C9A84C]/40" />
                </div>

                <p className="text-[#F5F0E8]/60 text-base leading-relaxed max-w-xl mx-auto">
                  {perfil.descricao}
                </p>
              </div>

              {/* Radar + Barras */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div
                  className="border border-[#C9A84C]/15 p-6"
                  style={{ background: "rgba(201,168,76,0.03)" }}
                >
                  <p className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase mb-4 text-center">
                    Mapa dos Pilares
                  </p>
                  <RadarChart scores={scores} />
                </div>

                <div
                  className="border border-[#C9A84C]/15 p-6"
                  style={{ background: "rgba(201,168,76,0.03)" }}
                >
                  <p className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase mb-6">
                    Pontuação por Pilar
                  </p>

                  {PILARES.map((p) => (
                    <BarraPilar key={p.id} pilar={p} score={scores[p.id]} />
                  ))}
                </div>
              </div>

              {/* Pilar mais fraco */}
              <div className="border-l-2 border-[#C9A84C] pl-6 mb-12 py-4">
                <p className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase mb-2">
                  Atenção Prioritária
                </p>

                <h3
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-2xl font-bold text-[#F5F0E8] mb-2"
                >
                  {pilarFracoInfo.icone} {pilarFracoInfo.nome}
                </h3>

                <p className="text-[#F5F0E8]/60 text-sm leading-relaxed mb-3">
                  {pilarFracoInfo.descricao}
                </p>

                <div className="flex flex-wrap gap-2">
                  {pilarFracoInfo.topicos.map((t) => (
                    <span
                      key={t}
                      className="text-xs border border-[#C9A84C]/30 text-[#C9A84C]/80 px-3 py-1"
                    >
                      ◆ {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
