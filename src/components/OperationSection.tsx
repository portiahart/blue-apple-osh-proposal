import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const OperationSection = () => {
  return (
    <section className="py-4 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center section-header-container mb-6 md:mb-12">
          <div className="section-separator"></div>
          <h2 className="sub-heading text-navy">
            INSTALACIONES E INFORMACIÓN OPERATIVA
          </h2>
          <div className="section-separator"></div>
        </div>

        <div className="mb-8 md:mb-16 max-w-2xl mx-auto">
          <ul className="bullet-list body-text text-slate text-left">
            <li>Salidas desde Muelle de La Bodeguita: 10:00 y 11:30</li>
            <li>Regreso a Cartagena: 16:00 y 17:30</li>
            <li>Lancha nueva (Agosto 2025)</li>
            <li>Piscina</li>
            <li>Restaurante y Bar con servicio completo</li>
            <li>Voleibol de playa</li>
            <li>SUP</li>
            <li>Gimnasio al aire libre</li>
            <li>DJ 1pm - 5pm los sábados. Música caribeña (no reggaeton)</li>
            <li>Pet and child friendly (recomendado mayores de 12 años los sábados)</li>
            <li>Cabalgatas guiadas por la isla y paseos a caballo en la playa</li>
          </ul>
        </div>

        <div className="section-image w-full overflow-hidden mb-8 md:mb-16">
          <img 
            src="/lovable-uploads/d4fbb0da-e1cf-403d-8b6e-7e6dcef6c3b4.png" 
            alt="Blue Apple Beach Club transporte" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="operation-image-grid mb-8 md:mb-16">
          <div className="operation-image-item">
            <img 
              src="/lovable-uploads/d98b554b-0631-458c-85e0-158daebd462a.png" 
              alt="Blue Apple Beach Club comida" 
            />
          </div>
          <div className="operation-image-item">
            <img 
              src="/lovable-uploads/86ad4118-ef8d-4ab5-9f00-330325efc04b.png" 
              alt="Blue Apple Beach Club cabanas" 
            />
          </div>
          <div className="operation-image-item">
            <img 
              src="/lovable-uploads/05e8d460-7197-4578-a2ca-8f603f10dc41.png" 
              alt="Blue Apple Beach Club volleyball" 
            />
          </div>
          <div className="operation-image-item">
            <img 
              src="/lovable-uploads/31dec4df-97ac-4da8-99d3-ff0b90e8ad79.png" 
              alt="Blue Apple Beach Club caballos" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationSection;