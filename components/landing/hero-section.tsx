import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#1a2b4b] pt-16 md:pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#facc15]/20 text-[#facc15] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            <span>Más de 15 años de experiencia</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            Mantenimiento VASA
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#facc15] font-semibold mb-6">
            Soluciones en mantenimiento preventivo y correctivo
          </p>

          {/* Description */}
          <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
            Contamos con técnicos electricistas, plomeros, herreros, cerrajeros
            en sistemas de huellas, plantas de emergencia y sistemas contra
            incendios. Ofrecemos soluciones integrales de mantenimiento con la
            calidad y profesionalismo que su proyecto requiere.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-[#facc15] text-[#1a2b4b] hover:bg-[#facc15]/90 font-bold text-lg px-8 py-6"
            >
              <a href="#contacto">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-400 text-slate-200 hover:bg-slate-700/50 font-semibold text-lg px-8 py-6"
            >
              <a href="#servicios">Ver Servicios</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-slate-300">
              <CheckCircle className="h-5 w-5 text-[#facc15]" />
              <span className="text-sm">Técnicos Certificados</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-300">
              <Clock className="h-5 w-5 text-[#facc15]" />
              <span className="text-sm">Respuesta Rápida</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-300">
              <Shield className="h-5 w-5 text-[#facc15]" />
              <span className="text-sm">Garantía en Trabajos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
