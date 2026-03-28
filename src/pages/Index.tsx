import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ClassesSection from "@/components/ClassesSection";
import ContactFormSection from "@/components/ContactFormSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import InstructorSection from "@/components/InstructorSection";
import LazuliFooter from "@/components/LazuliFooter";
import LazuliHeader from "@/components/LazuliHeader";
import PricingSection from "@/components/PricingSection";
import ScrollAmbient from "@/components/ScrollAmbient";
import ScrollProgress from "@/components/ScrollProgress";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <>
      <ScrollAmbient />
      <ScrollProgress />
      <LazuliHeader />
      <main className="relative z-10 min-h-screen">
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <ClassesSection />
        <InstructorSection />
        <PricingSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactFormSection />
        <LazuliFooter />
      </main>
    </>
  );
};

export default Index;
