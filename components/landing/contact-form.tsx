"use client";

import { useState } from "react";
import { Send, Loader2, Phone, Mail, MapPin, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { LeadFormData } from "@/types/lead";

export function ContactForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    nombre: "",
    telefono: "",
    descripcion_problema: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Simulated API call - replace with actual fetch to Express backend
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cliente: formData.nombre,
          telefono: formData.telefono,
          descripcion: formData.descripcion_problema,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar la solicitud");
      }

      setIsSuccess(true);
      setFormData({ nombre: "", telefono: "", descripcion_problema: "" });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error. Por favor intente nuevamente."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#facc15]/20 text-[#1a2b4b] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>Contacto</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] mb-4 text-balance">
                Solicite su Presupuesto
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                Complete el formulario y nuestro equipo se pondrá en contacto
                con usted a la brevedad para ofrecerle una solución
                personalizada.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1a2b4b] p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-[#facc15]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Teléfono</p>
                    <p className="font-semibold text-foreground">
                      +52 (55) 1234-5678
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#1a2b4b] p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-[#facc15]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">
                      contacto@mantenimientovasa.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#1a2b4b] p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-[#facc15]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-semibold text-foreground">
                      Ciudad de México, México
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Badge */}
              <div className="bg-[#1a2b4b]/5 border border-[#1a2b4b]/10 rounded-xl p-4 flex items-start gap-3">
                <div className="bg-[#facc15] p-2 rounded-lg">
                  <Bot className="h-5 w-5 text-[#1a2b4b]" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    Clasificación Inteligente
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Nuestra IA categorizará su solicitud automáticamente para
                    conectarlo con el técnico especializado más adecuado.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nombre completo
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Juan Pérez"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="h-12"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Teléfono
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    placeholder="+52 (55) 1234-5678"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="h-12"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="descripcion_problema"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Descripción del problema
                  </label>
                  <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                    <Bot className="h-3 w-3" />
                    Describe tu necesidad para que nuestra IA categorice tu
                    solicitud
                  </p>
                  <Textarea
                    id="descripcion_problema"
                    name="descripcion_problema"
                    required
                    placeholder="Describa su necesidad de mantenimiento con el mayor detalle posible..."
                    value={formData.descripcion_problema}
                    onChange={handleChange}
                    rows={5}
                    className="resize-none"
                    disabled={isLoading}
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg">
                    {error}
                  </div>
                )}

                {/* Success Message */}
                {isSuccess && (
                  <div className="bg-green-100 text-green-800 text-sm p-3 rounded-lg">
                    ¡Solicitud enviada exitosamente! Nos pondremos en contacto
                    pronto.
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-[#facc15] text-[#1a2b4b] hover:bg-[#facc15]/90 font-bold text-base"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Procesando con IA...
                    </>
                  ) : (
                    <>
                      Enviar Solicitud
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Al enviar este formulario acepta nuestros términos de servicio
                  y política de privacidad.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
