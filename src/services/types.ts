export interface Localidad {
  id: string;
  nombre: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  icono: string;
  localidadId: string;
}

export interface Comercio {
  id: string;
  nombre: string;
  categoria: string;
  localidadId: string;
  provinciaId: string;
  provinciaId: string;
  descripcion: string;
  detalle: string;
  telefono: string;
  web: string;
  direccion: string;
  linkMaps: string;
  imagen: string;
}
