export interface LookUp {
  id: string;
  nombre: string;
  descripcion: string;
}

export interface Province extends LookUp {}

export interface Locality extends LookUp {
  provinceId: string; // Id provincia.
}

export interface Category {
  id: string;
  nombre: string;
  icono: string;
  localidadId: string;
}

export interface Shop {
  id: string;
  nombre: string;
  categoria: string;
  localidadId: string;
  provinciaId: string;
  descripcion: string;
  detalle: string;
  telefono: string;
  web: string;
  direccion: string;
  linkMaps: string;
  imagen: string;
}
