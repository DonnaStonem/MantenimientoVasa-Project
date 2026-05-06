import {
  Heart,
  Target,
  FileText,
  DollarSign,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compromiso",
    description:
      "Nos comprometemos con cada proyecto como si fuera propio, garantizando resultados de calidad.",
  },
  {
    icon: Target,
    title: "Soluciones Efectivas",
    description:
      "Identificamos y resolvemos problemas de manera eficiente, minimizando tiempos y costos.",
  },
  {
    icon: FileText,
    title: "Presupuestos Adaptados",
    description:
      "Ofrecemos opciones flexibles que se ajustan a las necesidades y presupuesto de cada cliente.",
  },
  {
    icon: DollarSign,
    title: "Transparencia en Costos",
    description:
      "No alteramos costos de materiales. Trabajamos con honestidad y precios justos.",
  },
  {
    icon: Users,
    title: "Técnicos Especializados",
    description:
      "Contamos con profesionales certificados y con amplia experiencia en cada área.",
  },
];

export function ValueSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#facc15]/20 text-[#1a2b4b] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Nuestro Valor</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] mb-4 text-balance">
              ¿Por qué contratarnos?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Descubra las razones por las que somos la mejor opción para sus
              necesidades de mantenimiento.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl p-6 md:p-8 border border-border hover:shadow-xl transition-all ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="bg-[#facc15] p-4 rounded-xl w-fit mb-6">
                  <value.icon className="h-6 w-6 md:h-8 md:w-8 text-[#1a2b4b]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
