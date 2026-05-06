import { Building2, Factory, Briefcase, Home, Building } from "lucide-react";

const clientTypes = [
  { icon: Building2, label: "Edificios" },
  { icon: Factory, label: "Talleres" },
  { icon: Briefcase, label: "Oficinas" },
  { icon: Home, label: "Particulares" },
  { icon: Building, label: "Administraciones" },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 bg-[#facc15]/20 text-[#1a2b4b] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>Nuestros Servicios</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] mb-6 text-balance">
            Servicios Integrales
          </h2>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto text-pretty">
            Servicios de mantenimiento con técnicos para cada servicio que el
            cliente solicite. Nuestro equipo de profesionales está capacitado
            para resolver cualquier necesidad de mantenimiento, desde pequeñas
            reparaciones hasta proyectos de gran escala.
          </p>

          {/* Client Types */}
          <div className="bg-[#1a2b4b] rounded-2xl p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-8">
              Atendemos:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {clientTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="bg-[#facc15]/10 p-4 rounded-xl group-hover:bg-[#facc15]/20 transition-colors">
                    <type.icon className="h-8 w-8 text-[#facc15]" />
                  </div>
                  <span className="text-slate-200 font-medium text-sm">
                    {type.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
