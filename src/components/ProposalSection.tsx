import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const ProposalSection = () => {
  return <section className="py-2 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center section-header-container mb-6 md:mb-12">
          <div className="section-separator"></div>
          <h2 className="sub-heading text-navy">
            PROPUESTA DE COLABORACIÓN
          </h2>
          <div className="section-separator"></div>
        </div>
        <p className="body-text-centered text-slate max-w-3xl mx-auto mb-6 md:mb-12">
          Ofrecemos ser el club de playa oficial del Osh Cartagena, 
          brindando a sus huéspedes acceso exclusivo y preferencial con condiciones especiales, desde el momento de reservar:
        </p>

        <div className="section-image w-full overflow-hidden mb-8 md:mb-12">
          <img src="/lovable-uploads/4668ecef-4af9-41de-abea-de61ba227d8e.png" alt="Blue Apple Beach Club piscina" className="w-full h-full object-cover" />
        </div>
        
        <div className="space-y-6 mb-8 md:mb-16">
          <ul className="bullet-list body-text text-slate">
            <li>Reservar sin depósito, directamente en el sitio web con un código o vía Whatsapp con nuestro equipo</li>
            <li>Pagar todo al final del día en el club, o agregar a su cuenta de Osh</li>
            <li>Ahorro Total por Huésped de mínimo 130.000 COP</li>
          </ul>
          
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8 md:mt-12">
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="font-heading text-lg text-center text-navy mb-4 uppercase">OPCIÓN 
PASADÍA FLEXIBLE</h3>
              <p className="font-heading text-lg text-center text-pink mb-4 uppercase">90.000 PESOS + CONSUMOS</p>
              <ul className="bullet-list body-text text-slate">
                <li>Transporte Marítimo (ida y vuelta)</li>
                <li>Uso de instalaciones</li>
                <li>Asoleadora piscina con toalla</li>
                <li>Precio publico 200.000. 
Ahorro Osh 110.000 pesos</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-sky-50 border-sky-200">
            <CardContent className="p-6">
              <h3 className="font-heading text-lg text-center text-navy mb-4 uppercase">OPCIÓN 
PASADÍA COMPLETO</h3>
              <p className="font-heading text-lg text-center text-pink mb-4 uppercase">255.000 PESOS</p>
              <ul className="bullet-list body-text text-slate">
                <li>Transporte Marítimo (ida y vuelta)</li>
                <li>Uso de instalaciones</li>
                <li>Asoleadora piscina con toalla</li>
                <li>Coctel de bienvenido</li>
                <li>Pasaboca típica</li>
                <li>Plato fuerte</li>
                <li>Postre de helado con café (o té)</li>
                <li>Masaje de 15 minutos</li>
                <li>Producto exclusivo, no tiene disponibilidad publico</li>
                <li>Valor total de 395.000 pesos. 
Ahorro Osh 140.000 pesos</li>
              </ul>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>;
};
export default ProposalSection;