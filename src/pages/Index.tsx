import ScrollProgress from "@/components/ScrollProgress";
import ScrollAmbient from "@/components/ScrollAmbient";
import LazuliHeader from "@/components/LazuliHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ClassesSection from "@/components/ClassesSection";
import InstructorSection from "@/components/InstructorSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import ContactFormSection from "@/components/ContactFormSection";
import LazuliFooter from "@/components/LazuliFooter";

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
        <CTASection />
        <ContactFormSection />
        <LazuliFooter />
      </main>
    </>
  );
};

export default Index;
