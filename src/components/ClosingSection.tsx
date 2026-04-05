import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Instagram, Mail, MessageCircle } from "lucide-react";

const ClosingSection = () => {
  return (
    <section className="py-4 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center section-header-container mb-2 md:mb-4">
          <div className="section-separator"></div>
          <h2 className="sub-heading text-navy">
            Para más información
          </h2>
          <div className="section-separator"></div>
        </div>
        
        <div className="text-center pt-1">
          <p className="body-text-centered text-slate mb-2">Portia Hart</p>
          <p className="body-text-centered text-slate mb-6"><em>Fundadora Hart Hospitality</em></p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.blueapplebeach.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-navy transition-colors">
              <Globe size={24} />
            </a>
            <a href="https://www.instagram.com/blueapplebeach" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-navy transition-colors">
              <Instagram size={24} />
            </a>
            <a href="mailto:patrona@blueapplebeach.com" className="text-slate hover:text-navy transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://wa.me/19293982474" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-navy transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>
          
          <div className="section-separator"></div>
          
          <footer className="pt-6">
            <a 
              href="https://www.portiahart.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontFamily: 'Spinnaker', letterSpacing: '0.2em' }} 
              className="text-xs text-slate hover:text-navy transition-colors"
            >
              WWW.PORTIAHART.COM
            </a>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;