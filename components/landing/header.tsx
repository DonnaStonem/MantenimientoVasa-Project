"use client";

import { useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2b4b]/95 backdrop-blur-sm border-b border-[#1a2b4b]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="bg-[#facc15] p-2 rounded-lg">
              <Wrench className="h-5 w-5 md:h-6 md:w-6 text-[#1a2b4b]" />
            </div>
            <span className="text-lg md:text-xl font-bold text-white">
              Mantenimiento VASA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-200 hover:text-[#facc15] transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-[#facc15] text-[#1a2b4b] hover:bg-[#facc15]/90 font-semibold"
            >
              <a href="#contacto">Solicitar Presupuesto</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-700 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-200 hover:text-[#facc15] transition-colors py-2 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-[#facc15] text-[#1a2b4b] hover:bg-[#facc15]/90 font-semibold mt-2"
              >
                <a href="#contacto" onClick={() => setIsMenuOpen(false)}>
                  Solicitar Presupuesto
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
