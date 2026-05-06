"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Placeholder projects - these would come from your backend/CMS
const projects = [
  {
    id: 1,
    title: "Remodelación de Oficinas Corporativas",
    description: "Renovación completa de espacios de trabajo para empresa líder",
    category: "Remodelación",
  },
  {
    id: 2,
    title: "Sistema Contra Incendios - Edificio Residencial",
    description: "Instalación de sistema completo con certificación",
    category: "Seguridad",
  },
  {
    id: 3,
    title: "Mantenimiento Industrial - Planta de Producción",
    description: "Servicio integral de mantenimiento preventivo y correctivo",
    category: "Industrial",
  },
  {
    id: 4,
    title: "Instalación de Planta de Emergencia",
    description: "Sistema de respaldo eléctrico para centro comercial",
    category: "Eléctrico",
  },
  {
    id: 5,
    title: "Reparación de Sistema Hidráulico",
    description: "Solución a problemas de bombeo en edificio de 20 pisos",
    category: "Plomería",
  },
];

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const visibleProjects = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      result.push(projects[index]);
    }
    return result;
  };

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-[#1a2b4b]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#facc15]/20 text-[#facc15] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Nuestro Portafolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Trabajos Realizados
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto text-pretty">
              Explore algunos de nuestros proyectos más destacados y vea la
              calidad de nuestro trabajo.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20 hidden md:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20 hidden md:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-0 md:px-8">
              {visibleProjects().map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="bg-slate-800 rounded-2xl overflow-hidden group"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-slate-700 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent" />
                    <ImageIcon className="h-12 w-12 text-slate-500" />
                    <span className="absolute top-3 right-3 bg-[#facc15] text-[#1a2b4b] text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center gap-4 mt-6 md:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-[#facc15]"
                      : "w-2 bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
