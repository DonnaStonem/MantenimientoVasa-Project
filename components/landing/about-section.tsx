import {
  Droplets,
  Zap,
  PaintBucket,
  Video,
  BatteryCharging,
  Flame,
  Hammer,
  Key,
  Shield,
  Wrench,
  Settings,
  Building,
} from "lucide-react";

const services = [
  { icon: Droplets, label: "Fugas de agua", description: "Detección y reparación" },
  { icon: Zap, label: "Sistemas eléctricos", description: "Instalación y mantenimiento" },
  { icon: PaintBucket, label: "Remodelaciones", description: "Interiores y exteriores" },
  { icon: Video, label: "Video porteros", description: "Instalación y configuración" },
  { icon: BatteryCharging, label: "Plantas de emergencia", description: "Servicio completo" },
  { icon: Flame, label: "Sistemas contra incendios", description: "Certificación y mantenimiento" },
  { icon: Hammer, label: "Herrería", description: "Fabricación y reparación" },
  { icon: Key, label: "Cerrajería en huellas", description: "Sistemas biométricos" },
  { icon: Shield, label: "Seguridad", description: "Sistemas integrados" },
  { icon: Wrench, label: "Plomería", description: "Instalación y reparación" },
  { icon: Settings, label: "Mantenimiento preventivo", description: "Programas personalizados" },
  { icon: Building, label: "Mantenimiento correctivo", description: "Soluciones inmediatas" },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#facc15]/20 text-[#1a2b4b] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Acerca de Nosotros</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] mb-4 text-balance">
              Experiencia y Profesionalismo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ofrecemos una amplia gama de servicios técnicos especializados
              para satisfacer todas sus necesidades de mantenimiento.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 md:p-6 border border-border hover:border-[#facc15] hover:shadow-lg transition-all group"
              >
                <div className="bg-[#1a2b4b] p-3 rounded-lg w-fit mb-4 group-hover:bg-[#facc15] transition-colors">
                  <service.icon className="h-5 w-5 md:h-6 md:w-6 text-[#facc15] group-hover:text-[#1a2b4b] transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                  {service.label}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
