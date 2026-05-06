import {
  Droplets,
  Home,
  Gauge,
  Flame,
  Building,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    icon: Droplets,
    title: "Solución a Problemas de Tuberías",
    description:
      "Detección y reparación de fugas, destape de drenajes, instalación de sistemas hidráulicos y mantenimiento preventivo de redes de agua.",
    features: ["Detección de fugas", "Destape de drenajes", "Instalación hidráulica"],
  },
  {
    icon: Home,
    title: "Remodelaciones Interiores y Exteriores",
    description:
      "Transformamos espacios con acabados de primera calidad, desde pisos y muros hasta fachadas completas con garantía de satisfacción.",
    features: ["Pisos y muros", "Acabados de calidad", "Fachadas"],
  },
  {
    icon: Gauge,
    title: "Sistemas de Bombeo",
    description:
      "Instalación, mantenimiento y reparación de bombas de agua, sistemas hidroneumáticos y equipos de presurización para todo tipo de edificios.",
    features: ["Bombas de agua", "Hidroneumáticos", "Presurización"],
  },
  {
    icon: Flame,
    title: "Sistemas Contra Incendios y Plantas de Energía",
    description:
      "Instalación y mantenimiento de sistemas de detección, alarmas, extintores, rociadores y plantas de emergencia con certificación.",
    features: ["Detección y alarmas", "Extintores", "Plantas de emergencia"],
  },
  {
    icon: Building,
    title: "Mantenimiento a Exteriores de Edificios",
    description:
      "Limpieza de fachadas, impermeabilización, pintura exterior, mantenimiento de áreas comunes y jardinería profesional.",
    features: ["Limpieza de fachadas", "Impermeabilización", "Áreas comunes"],
  },
];

export function OfferSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#facc15]/20 text-[#1a2b4b] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Nuestra Oferta</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] mb-4 text-balance">
              Servicios Especializados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Conozca en detalle cada uno de nuestros servicios especializados
              diseñados para resolver sus necesidades.
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all group ${
                  index >= 3 ? "lg:col-span-1" : ""
                }`}
              >
                {/* Card Header */}
                <div className="bg-[#1a2b4b] p-6">
                  <div className="bg-[#facc15] p-3 rounded-lg w-fit mb-4">
                    <offer.icon className="h-6 w-6 text-[#1a2b4b]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {offer.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                    {offer.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#facc15]" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full border-[#1a2b4b] text-[#1a2b4b] hover:bg-[#1a2b4b] hover:text-white group-hover:bg-[#facc15] group-hover:border-[#facc15] group-hover:text-[#1a2b4b] transition-all"
                  >
                    <a href="#contacto" className="flex items-center justify-center gap-2 w-full">
                      Saber más
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
