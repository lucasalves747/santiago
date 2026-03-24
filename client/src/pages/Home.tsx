// DESIGN: "Força e Propósito" — Bold Luxury Personal Brand
// Dr. Santiago Vecina — Performance Integral
// Full page assembly of all sections

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PilarsSection from "@/components/PilarsSection";
import BooksSection from "@/components/BooksSection";
import AwardsSection from "@/components/AwardsSection";
import QuizSection from "@/components/QuizSection";
import MentoriaSection from "@/components/MentoriaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PilarsSection />
      <BooksSection />
      <AwardsSection />
      <QuizSection />
      <MentoriaSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
}
