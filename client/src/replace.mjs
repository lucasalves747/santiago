import fs from 'fs';

const path = 'c:/Users/134lu/OneDrive/Documentos/drsantiagovecina/client/src/components/QuizSection.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  'const [email, setEmail] = useState("");',
  'const [email, setEmail] = useState("");\n  const [telefone, setTelefone] = useState("");'
);

content = content.replace(
  'const [etapa, setEtapa] = useState<"intro" | "quiz" | "resultado">("intro");',
  'const [etapa, setEtapa] = useState<"intro" | "quiz" | "captura_cta" | "captura_form" | "resultado">("intro");'
);

// 3. Update intro screen (remove form)
let parts = content.split('              {/* Formulário */}');
if (parts.length > 1) {
  let afterFormulario = parts[1].split('              <div className="text-center">');
  content = parts[0] + '              <div className="text-center">' + afterFormulario[1];
}

content = content.replace(
  \`onClick={() => {
                    if (!nome.trim() || !email.trim()) {
                      alert("Por favor, preencha seu nome e e-mail para iniciar o diagnóstico.");
                      return;
                    }
                    setEtapa("quiz");
                  }}\`,
  \`onClick={() => {
                    setEtapa("quiz");
                  }}\`
);

content = content.replace(
  \`  async function responder(pontos: number) {
    const novas = { ...respostas, [perguntaAtual]: pontos };
    setRespostas(novas);
    if (perguntaAtual < totalPerguntas - 1) {
      setPerguntaAtual(perguntaAtual + 1);
      scrollTop();
    } else {
      const finalScores = calcularResultados(novas);
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
      const radarImageUrl = \\\`https://quickchart.io/chart?c=\\${encodeURIComponent(JSON.stringify(chartConfig))}\\\`;

      const radarDinamico = {
        saude: { pct: (finalScores.saude / 20) * 100, status: getNivel(finalScores.saude).label },
        mente: { pct: (finalScores.mente / 20) * 100, status: getNivel(finalScores.mente).label },
        lideranca: { pct: (finalScores.lideranca / 20) * 100, status: getNivel(finalScores.lideranca).label },
        negocios: { pct: (finalScores.negocios / 20) * 100, status: getNivel(finalScores.negocios).label },
        legado: { pct: (finalScores.legado / 20) * 100, status: getNivel(finalScores.legado).label },
      };

      try {
        fetch("https://services.leadconnectorhq.com/hooks/PMW6fmu3oCfXFYueuN2D/webhook-trigger/7968aee5-4503-417d-bc5f-0ed63afd3078", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome,
            email,
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
      } catch (error) {
        console.error("Erro ao enviar webhook do quiz:", error);
      }

      setEtapa("resultado");
      scrollTop();
    }
  }\`,
  \`  async function responder(pontos: number) {
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
      alert("Por favor, preencha todos os campos reais.");
      return;
    }

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
    const radarImageUrl = \\\`https://quickchart.io/chart?c=\\${encodeURIComponent(JSON.stringify(chartConfig))}\\\`;

    const radarDinamico = {
      saude: { pct: (finalScores.saude / 20) * 100, status: getNivel(finalScores.saude).label },
      mente: { pct: (finalScores.mente / 20) * 100, status: getNivel(finalScores.mente).label },
      lideranca: { pct: (finalScores.lideranca / 20) * 100, status: getNivel(finalScores.lideranca).label },
      negocios: { pct: (finalScores.negocios / 20) * 100, status: getNivel(finalScores.negocios).label },
      legado: { pct: (finalScores.legado / 20) * 100, status: getNivel(finalScores.legado).label },
    };

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
          radarImageUrl: radarImageUrl
        }),
      });
    } catch (error) {
      console.error("Erro ao enviar webhook do quiz:", error);
    }

    setEtapa("resultado");
    scrollTop();
  }\`
);

content = content.replace(
  \`setNome("");\\n    setEmail("");\`,
  \`setNome("");\\n    setEmail("");\\n    setTelefone("");\`
);

const screensToAdd = \`
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
                  Preencha seus dados reais
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
                    <label className="block text-[#F5F0E8]/50 text-xs tracking-widest uppercase mb-2">WhatsApp</label>
                    <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="w-full bg-transparent border border-[#C9A84C]/25 text-[#F5F0E8] placeholder-[#F5F0E8]/25 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors" />
                  </div>
                </div>
                <button onClick={submitForm} className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300" style={{ background: "linear-gradient(135deg, #C9A84C, #E2C97E)", color: "#0D0A07" }}>
                  <span>Receber Meu Diagnóstico</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* ── RESULTADO ── */\`;
          
content = content.replace('{/* ── RESULTADO ── */}', screensToAdd);

const oldCTA = \`              {/* CTA */}
              <div className="text-center border border-[#C9A84C]/20 p-10" style={{ background: "rgba(201,168,76,0.04)" }}>
                <p className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-4">Próximo Passo</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl font-bold text-[#F5F0E8] mb-4">
                  Transforme Este Diagnóstico<br />em um Plano de Ação Real
                </h3>
                <p className="text-[#F5F0E8]/55 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                  Agende uma sessão de diagnóstico aprofundado com o Dr. Santiago Vecina e descubra exatamente o que está limitando seu próximo nível.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300"
                    style={{ background: "linear-gradient(135deg, #C9A84C, #E2C97E)", color: "#0D0A07" }}
                  >
                    Quero Meu Plano de Ação →
                  </a>
                  <button
                    onClick={gerarPDF}
                    disabled={gerandoPDF}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {gerandoPDF ? "Gerando PDF..." : "Baixar PDF"}
                  </button>
                  <button
                    onClick={reiniciar}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase border border-[#C9A84C]/30 text-[#C9A84C]/70 hover:border-[#C9A84C]/60 hover:text-[#C9A84C] transition-all duration-300"
                  >
                    Refazer Diagnóstico
                  </button>
                </div>
              </div>\`;

const newCTA = \`              {/* CTA Oferta */}
              <div className="text-center border border-[#C9A84C]/20 p-10 mt-6 shadow-2xl" style={{ background: "rgba(201,168,76,0.04)" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl md:text-4xl font-bold text-[#F5F0E8] mb-8">
                  Quer entender como aplicar isso na prática?
                </h3>
                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                  <a
                    href="#video"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 w-full"
                    style={{ background: "linear-gradient(135deg, #C9A84C, #E2C97E)", color: "#0D0A07" }}
                  >
                    Sim, quero ver
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511999999999&text=Quero%20receber%20meu%20PDF%20e%20entender%20melhor%20minha%20situa%C3%A7%C3%A3o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 w-full"
                  >
                    Não, prefiro receber no WhatsApp
                  </a>
                </div>
              </div>\`;

content = content.replace(oldCTA, newCTA);

fs.writeFileSync(path, content, 'utf8');
console.log('File successfully updated with the new flow.');
