import { NextResponse } from "next/server";
import type { Lead, ApiResponse } from "@/types/lead";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { cliente, telefono, descripcion } = body;

    // Validate required fields
    if (!cliente || !telefono || !descripcion) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "Todos los campos son requeridos",
        },
        { status: 400 }
      );
    }

    // Simulate AI categorization (this would be done by your Express backend)
    const categorias = [
      "Plomería",
      "Electricidad",
      "Remodelación",
      "Sistema Contra Incendios",
      "Mantenimiento General",
    ];
    const urgencias: Lead["urgencia_ia"][] = ["baja", "media", "alta", "critica"];

    const categoriaSimulada = categorias[Math.floor(Math.random() * categorias.length)];
    const urgenciaSimulada = urgencias[Math.floor(Math.random() * urgencias.length)];

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Create lead object (this would be saved to PostgreSQL)
    const lead: Lead = {
      id: Math.floor(Math.random() * 10000),
      cliente,
      telefono,
      descripcion,
      categoria_ia: categoriaSimulada,
      urgencia_ia: urgenciaSimulada,
      fecha: new Date(),
    };

    // In production, this would save to your Express backend/PostgreSQL
    console.log("[v0] Lead created:", lead);

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: "Solicitud procesada exitosamente",
        data: lead,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[v0] Error processing lead:", error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: "Error interno del servidor",
      },
      { status: 500 }
    );
  }
}
