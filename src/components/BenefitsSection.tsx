import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  return (
    <section className="py-4 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center section-header-container mb-6 md:mb-12">
          <div className="section-separator"></div>
          <h2 className="sub-heading text-navy">
            VENTAJAS ESTRATÉGICAS PARA HYATT
          </h2>
          <div className="section-separator"></div>
        </div>

        <div className="mb-8 md:mb-16">
          <ul className="bullet-list body-text text-slate">
            <li>Una opción de club de playa "plug and play" sin necesidad de inversión, disponible para comenzar de inmediato</li>
            <li>Contacto directo con la principal tomadora de decisiones</li>
            <li>Enfoque flexible, dispuestos a adaptarnos sobre la marcha</li>
            <li>Opciones de pago flexibles para Hyatt y sus Huespedes</li>
            <li>Permiso "white label" en todas las comunicaciones de Hyatt</li>
            <li>Tarifas preferenciales en alojamiento (-30%)</li>
            <li>Convenio para empleados de Hyatt en todos los locales de Hart Hospitality (Amare Beach, Townhouse, Members Only y Blue Apple Beach)</li>
          </ul>
        </div>

        <div className="section-image w-full overflow-hidden">
          <img 
            src="/lovable-uploads/5aae2f35-f495-4955-a496-496d47a1d33d.png" 
            alt="Blue Apple Beach Club vista aérea" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;