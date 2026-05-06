// Interface para el objeto Lead que coincide con PostgreSQL
export interface Lead {
  id?: number;
  cliente: string;
  telefono: string;
  descripcion: string;
  categoria_ia?: string;
  urgencia_ia?: 'baja' | 'media' | 'alta' | 'critica';
  fecha?: Date;
}

export interface LeadFormData {
  nombre: string;
  telefono: string;
  descripcion_problema: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: Lead;
}
