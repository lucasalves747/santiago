import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import { MAIN_SITE } from "@/content/site";

export default function Privacy() {
  return (
    <>
      <PageMeta
        title="Política de Privacidade | Dr. Santiago Vecina"
        description="Como o Dr. Santiago Vecina coleta, usa e protege os dados enviados neste site."
        path="/privacidade"
      />
      <section className="sv-legal-page">
        <div className="sv-container sv-legal-inner">
          <Reveal>
            <p className="sv-eyebrow">Institucional</p>
            <h1 className="sv-display">Política de Privacidade</h1>
            <p className="sv-legal-updated">Última atualização: novembro de 2026.</p>

            <h2>1. Quem somos</h2>
            <p>
              Este site é operado pelo Dr. Santiago Vecina. Ele apresenta o acompanhamento médico,
              materiais educativos e canais de aplicação. A página principal do médico está em{" "}
              <a href={MAIN_SITE} target="_blank" rel="noreferrer">{MAIN_SITE}</a>.
            </p>

            <h2>2. Quais dados coletamos</h2>
            <p>
              Coletamos os dados que você informa nos formulários: nome, e-mail, WhatsApp, idioma,
              interesse, origem da página e, quando você faz o quiz, o resultado e as respostas
              selecionadas. Também podemos registrar informações técnicas básicas de acesso, como
              data, navegador e página de origem.
            </p>

            <h2>3. Para que usamos os dados</h2>
            <p>
              Usamos os dados para entregar o material solicitado, responder à sua aplicação,
              organizar o contato da equipe, enviar comunicações que você consentiu e melhorar a
              experiência do site. Não vendemos dados pessoais.
            </p>

            <h2>4. Base legal e consentimento</h2>
            <p>
              O tratamento é baseado no seu consentimento e no legítimo interesse de responder a
              solicitações e organizar o atendimento. Você pode retirar o consentimento a qualquer
              momento, sem afetar a legalidade do tratamento já realizado.
            </p>

            <h2>5. Compartilhamento</h2>
            <p>
              Podemos usar fornecedores de hospedagem, e-mail, agendamento e análise que tratam
              dados em nosso nome. Quando o atendimento médico é iniciado, dados clínicos podem ser
              registrados em sistemas próprios, com acesso restrito à equipe autorizada.
            </p>

            <h2>6. Retenção e segurança</h2>
            <p>
              Mantemos os dados pelo tempo necessário para as finalidades acima, para cumprir
              obrigações legais ou para exercer direitos. Adotamos medidas técnicas e
              organizacionais razoáveis para proteger as informações, mas nenhum sistema é
              completamente imune a incidentes.
            </p>

            <h2>7. Seus direitos</h2>
            <p>
              Você pode solicitar confirmação de tratamento, acesso, correção, anonimização,
              bloqueio, eliminação, portabilidade e informações sobre compartilhamento. Para
              exercer esses direitos, entre em contato pelos canais oficiais do médico.
            </p>

            <h2>8. Cookies e tecnologias</h2>
            <p>
              O site pode usar cookies necessários ao funcionamento e ferramentas de análise para
              entender o uso das páginas. Você pode gerenciar cookies nas configurações do seu
              navegador.
            </p>

            <h2>9. Contato</h2>
            <p>
              Para dúvidas sobre privacidade, use os canais oficiais em{" "}
              <a href={MAIN_SITE} target="_blank" rel="noreferrer">{MAIN_SITE}</a>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
