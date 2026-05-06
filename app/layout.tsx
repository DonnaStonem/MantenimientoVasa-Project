import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Mantenimiento VASA | Soluciones en Mantenimiento Preventivo y Correctivo',
  description: 'Técnicos especializados en electricidad, plomería, herrería, cerrajería, plantas de emergencia y sistemas contra incendios. Atendemos edificios, talleres, oficinas y particulares.',
  keywords: ['mantenimiento', 'electricistas', 'plomeros', 'herreros', 'cerrajeros', 'sistemas contra incendios', 'plantas de emergencia'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
