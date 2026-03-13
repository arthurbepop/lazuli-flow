import LazuliHeader from "@/components/LazuliHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import GallerySection from "@/components/GallerySection";
import LazuliFooter from "@/components/LazuliFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LazuliHeader />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <GallerySection />
      <LazuliFooter />
    </div>
  );
};

export default Index;
