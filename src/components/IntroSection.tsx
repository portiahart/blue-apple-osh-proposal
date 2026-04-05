import { Badge } from "@/components/ui/badge";

const IntroSection = () => {
  return (
    <section className="py-4 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center section-header-container mb-6 md:mb-12">
          <div className="section-separator"></div>
          <h2 className="sub-heading text-navy">
            INTRODUCCIÓN
          </h2>
          <div className="section-separator"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-stretch mb-8 md:mb-16">
          <div className="section-image w-full overflow-hidden">
            <img 
              src="/lovable-uploads/d0df15cc-88b5-41cf-9951-0413a1421efa.png" 
              alt="Blue Apple Beach Club piscina con huésped" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <p className="body-text-centered text-slate md:text-left">
              Blue Apple Beach es un club de playa y hotel boutique de inspiración mediterránea en la isla de Tierra Bomba, a solo 20 minutos en lancha desde Cartagena. Aquí, el lujo no es rígido: es relajado y lleno de vida caribeña. Nuestros días fluyen entre gastronomía excepcional, buena música y un equilibrio entre sofisticación y naturaleza que alimenta el alma.
            </p>
            <p className="body-text-centered text-slate md:text-left">
              No somos un club de playa cualquiera. Somos pioneros, no solo los primeros en esta isla, sino también el primer resort isleño del mundo certificado como B-Corp. Nuestra pasión es ofrecer hospitalidad isleña de alto nivel mientras cuidamos el planeta y a nuestra comunidad.
            </p>
            <p className="body-text-centered text-slate md:text-left">
              Estamos emocionados de ser considerados como el Club de Playa oficial para huéspedes de Osh Cartagena.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center section-header-container mb-6 md:mb-8">
            <div className="section-separator"></div>
            <h3 className="sub-heading text-navy">
              DESTACADOS
            </h3>
            <div className="section-separator"></div>
          </div>
          <ul className="bullet-list destacados-spacing body-text text-slate">
            <li>Mencionado en la guía Michelin de hoteles</li>
            <li>#9 mejores hoteles de Sudamérica - Condé Nast Traveller Readers Choice Awards 2024</li>
            <li>Certified B Corp</li>
            <li>Top 10% hoteles mundial - TripAdvisor</li>
            <li>9 años de operación (primer club de playa de lujo en Tierra Bomba)</li>
            <li>Solo 25 minutos desde Cartagena</li>
            <li>Valores compartidos con Osh Group, con enfoque en calidad, gastronomía y sostenibilidad</li>
            <li>Un equipo de gerencia multilingüe con experiencia internacional en hospitalidad de lujo (Yachting, Belmond Group, cocinas Michelin en Nueva York)</li>
          </ul>
        </div>
        
        <div className="mt-8 md:mt-16">
          <div className="section-image w-full overflow-hidden">
            <img 
              src="/lovable-uploads/1adc3d98-cdab-486b-b664-5dc12c6e0b94.png" 
              alt="Blue Apple Beach Club vista completa" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;