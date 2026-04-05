import HeaderSection from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ProposalSection from "@/components/ProposalSection";
import BenefitsSection from "@/components/BenefitsSection";
import OperationSection from "@/components/OperationSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  // Force refresh - all changes implemented
  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />
      <HeroSection backgroundImage="/lovable-uploads/3809b13d-f079-4273-a2b1-06479e48cdd9.png" />
      <IntroSection />
      <ProposalSection />
      <BenefitsSection />
      <OperationSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
