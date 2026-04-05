import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  backgroundImage: string;
}

const HeroSection = ({ backgroundImage }: HeroSectionProps) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="section-image w-full overflow-hidden mb-6 md:mb-12">
          <img 
            src="/lovable-uploads/ded3a3a4-28e3-4982-bf2b-5a32c4f1cee1.png" 
            alt="Blue Apple Beach Club piscina" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center pb-4">
          <h2 className="sub-heading text-navy mb-4 md:mb-6" style={{ fontSize: '1.4375rem' }}>
            Club de playa oficial<br />
            del Hyatt Cartagena
          </h2>
          <div className="body-text-centered text-slate">
            <p className="mb-2">Propuesta dirigida a:</p>
            <p className="mb-1"><em>Francisco Hernández</em></p>
            <p className="mb-1"><em>General Manager</em></p>
            <p className="mb-2">Aug 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;