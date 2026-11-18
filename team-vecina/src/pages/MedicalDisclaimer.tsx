import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import { DISCLAIMER, MAIN_SITE } from "@/content/site";

export default function MedicalDisclaimer() {
  return (
    <>
      <PageMeta
        title="Aviso Médico | Dr. Santiago Vecina"
        description="Aviso educativo e limites do conteúdo apresentado neste site."
        path="/aviso-medico"
      />
      <section className="sv-legal-page">
        <div className="sv-container sv-legal-inner">
          <Reveal>
            <p className="sv-eyebrow">Institucional</p>
            <h1 className="sv-display">Aviso Médico</h1>
            <p className="sv-legal-updated">Última atualização: novembro de 2026.</p>

            <h2>Conteúdo educativo</h2>
            <p>{DISCLAIMER}</p>

            <h2>Não é diagnóstico</h2>
            <p>
              Textos, quizzes, guias e checklists deste site são materiais educativos. Eles não
              diagnosticam doenças, não definem tratamento individual e não substituem uma consulta
              com profissional habilitado.
            </p>

            <h2>Resultados variam</h2>
            <p>
              Não garantimos emagrecimento, ganho de performance, cura, melhora de exames ou
              qualquer resultado específico. Respostas clínicas dependem do contexto, da adesão e
              de fatores individuais.
            </p>

            <h2>Emergências</h2>
            <p>
              Em caso de dor no peito, falta de ar, desmaio, sintomas neurológicos agudos, ideação
              suicida ou outras situações de urgência, procure imediatamente um serviço de
              emergência local.
            </p>

            <h2>Medicações e suplementos</h2>
            <p>
              Não inicie, suspenda ou altere medicações por conta própria. Suplementos e protocolos
              devem ser avaliados considerando histórico, exames, contraindicações e interações.
            </p>

            <h2>Telemedicina e licença</h2>
            <p>
              O formato do atendimento depende da licença do médico, do estado ou país do paciente
              e das regras aplicáveis. A equipe confirma essas condições antes de qualquer
              agendamento.
            </p>

            <h2>Contato</h2>
            <p>
              Para dúvidas sobre este aviso, use os canais oficiais em{" "}
              <a href={MAIN_SITE} target="_blank" rel="noreferrer">{MAIN_SITE}</a>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
