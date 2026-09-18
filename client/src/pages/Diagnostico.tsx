// Página dedicada ao Diagnóstico dos 5 Pilares.
// Reusa exatamente o mesmo componente da home (QuizSection), sem navbar/seções
// extras — a pessoa cai direto no diagnóstico (tráfego pago / bio / ManyChat).

import QuizSection from "@/components/QuizSection";
import FooterSection from "@/components/FooterSection";

export default function Diagnostico() {
  return (
    <div className="min-h-screen bg-dark">
      <QuizSection />
      <FooterSection />
    </div>
  );
}
