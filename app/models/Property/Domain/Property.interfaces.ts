export interface Unidad {
  id: number;
  tipo_inmueble: string;
  precio_minimo: string;
  plazo_entrega: string;
  valor_separacion: string;
  porcentaje_fin: number;
  valor_estimado_anual: number;
  estado: string;
  renta_corta: boolean;
}

export interface PropertyCard {
  nombre: string;
  descripcion: string;
  constructora: string;
  ubicacion:string;
  unidades: Unidad[]; 
}