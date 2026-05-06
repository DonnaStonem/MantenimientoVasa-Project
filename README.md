# Mantenimiento VASA

Landing page profesional para **Mantenimiento VASA**, empresa especializada en soluciones de mantenimiento preventivo y correctivo para edificios, talleres, oficinas y particulares.

## Descripcion

Sitio web desarrollado con Next.js 15 y Tailwind CSS que presenta los servicios de mantenimiento de VASA, incluyendo:

- Electricidad
- Plomeria
- Herreria
- Cerrajeria
- Plantas de emergencia
- Sistemas contra incendios
- Remodelaciones
- Aires acondicionados
- Impermeabilizacion
- Pintura

## Tecnologias

- **Framework:** Next.js 15 (App Router)
- **Estilos:** Tailwind CSS 4
- **Componentes UI:** shadcn/ui
- **Iconos:** Lucide React
- **Lenguaje:** TypeScript

## Estructura del Proyecto

```
app/
├── api/
│   └── leads/
│       └── route.ts          # API para formulario de contacto
├── globals.css               # Estilos globales y tokens de diseno
├── layout.tsx                # Layout principal
└── page.tsx                  # Pagina principal

components/
└── landing/
    ├── header.tsx            # Navegacion principal
    ├── hero-section.tsx      # Seccion hero con CTA
    ├── services-section.tsx  # Servicios integrales
    ├── about-section.tsx     # Iconos de servicios
    ├── value-section.tsx     # Por que contratarnos
    ├── offer-section.tsx     # Oferta de servicios detallada
    ├── projects-carousel.tsx # Carrusel de trabajos realizados
    ├── contact-form.tsx      # Formulario de leads
    └── footer.tsx            # Pie de pagina

types/
└── lead.ts                   # Interfaces TypeScript para leads
```

## Instalacion

```bash
# Clonar el repositorio
git clone https://github.com/DonnaStonem/MantenimientoVasa-Project.git

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

## Variables de Entorno

Para conectar con el backend de Express y PostgreSQL, configura las siguientes variables:

```env
# API Backend (opcional - usa mock por defecto)
API_URL=http://localhost:3001
```

## Formulario de Leads

El formulario de contacto envia los datos a `/api/leads` con la siguiente estructura:

```typescript
interface LeadInput {
  nombre: string
  telefono: string
  correo: string
  descripcion: string
}
```

La API esta preparada para integrarse con un backend Express que categoriza los leads usando IA y los almacena en PostgreSQL.

## Paleta de Colores

| Color | Uso | Valor |
|-------|-----|-------|
| Navy | Principal | `#1a2b4b` |
| Amarillo | Acentos/CTA | `#facc15` |
| Slate-50 | Fondo | `#f8fafc` |
| Blanco | Tarjetas | `#ffffff` |

## Despliegue

El proyecto esta configurado para despliegue en Vercel:

```bash
pnpm build
```

## Licencia

Todos los derechos reservados - Mantenimiento VASA
