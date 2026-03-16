import LazuliHeader from "@/components/LazuliHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ClassesSection from "@/components/ClassesSection";
import StatsSection from "@/components/StatsSection";
import GallerySection from "@/components/GallerySection";
import LazuliFooter from "@/components/LazuliFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LazuliHeader />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ClassesSection />
      <StatsSection />
      <GallerySection />
      <LazuliFooter />
    </div>
  );
};

export default Index;
