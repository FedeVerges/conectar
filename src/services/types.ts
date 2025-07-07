export interface Campania {
  id: number;
  nombre: string;
}

export interface ParametrosSubcampanias {
  id_param_gen: number;
  id_sub_campania: number;
  mes: string;
  descripcion: string;
  cantidad_operadores: number;
  porcentaje_asignado: number;
  minutos_asignados: number;
  duracion_prom_audio: number;
  alerta_supera: true;
  bloquear_supera: true;
  generado_auto: true;
  creado_por: number;
  creado_en: string;
  id_param_sub: number;
}

interface filtrosSubcampañas {
  id_metadata: number;
  valor_seleccionado: string;
}

export interface ParametrosSubcampañasMesId {
  id_param_sub: number;
  fecha_vigencia_desde: string;
  fecha_vigencia_hasta: string;
  es_descarga_unica: boolean;
  porcentaje_objetivo: number;
  activo: boolean;
  observaciones: null;
  filtros: filtrosSubcampañas[];
}

interface FiltrosParametrosBusqueda {
  id_metadata: number;
  valor_seleccionado: string;
  porcentaje_objetivo: number;
  duracion_minima: number;
  duracion_maxima: number;
}

export interface ParametrosBusquedaSubcampaña {
  id_param_sub: number;
  fecha_vigencia_desde: string;
  fecha_vigencia_hasta: string;
  es_descarga_unica: true;
  porcentaje_objetivo: number;
  activo: true;
  observaciones: string;
  filtros: FiltrosParametrosBusqueda[];
}

export interface FiltrosCampos {
  id_campo_filtro: number;
  codigo_busqueda: string;
  nombre_cat: string;
  tipo_dato: string;
}

export interface FiltrosValores {
  id_valor: number;
  id_campo_filtro: number;
  valor: string;
  etiqueta: string;
}

export interface SubcampaniasOptions {
  id: number;
  descripcion: string;
}

export interface TeamleadersOptions {
  id: number;
  nombre: string;
}

export interface OperadoresOptions {
  idEmpleado: number;
  legajo: string;
  nombres: string;
  apellidos: string;
  dni: string;
  usuario: string;
}

export interface Tabulacion {
  id_campo_filtro: number;
  valor_seleccionado: string;
}

export interface ParametrosBusquedaPayload {
  id_param_sub: number;
  tipo_llamada: string;
  duracion_min: number;
  duracion_max: number;
  filtros: Tabulacion[];
  porcentaje_objetivo: number | null;
  es_descarga_unica: boolean;
  fecha_desde: string;
  fecha_hasta: string;
  id_teamleader: number[] | null;
  lista_agentes: number[];
}

export type Status =
  | 'EN_COLA'
  | 'DESCARGANDO'
  | 'DESCARGA_COMPLETADA'
  | 'PROCESANDO'
  | 'COMPLETADO'
  | 'REINTENTAR'
  | 'ERROR';

export interface ProcesamientoCola {
  id_proceso: number;
  id_param_busqueda: number;
  id_subcampania: number;
  fecha_inicio_busqueda: string;
  fecha_fin_busqueda: string;
  reintento_manual: boolean;
  subcampania: string;
  tipo: string;
  estado: Status;
  creado_en: string;
  actualizado_en: string;
}

export interface ProcesamientoLogs {
  id_log: number;
  id_proceso: number;
  mensaje: string;
  nivel: string;
  timestamp: string;
}

export interface ProcesamientoEventos {
  id_evento: number;
  tipo: string;
  id_param_busqueda: number;
  mensaje: string;
  creado_en: string;
  destinado_a: number;
}

export interface ResumenCampañas {
  campania: string;
  total_minutos_asignados: number;
  total_minutos_descargados: number;
  total_minutos_procesados: number;
  tasa_descarte: number;
}

export interface ResumenGeneral {
  mes: string;
  total_minutos: number;
  total_minutos_procesados: number;
  total_audios_procesados: number;
  porcentaje_cumplimiento: number;
  tasa_descarte: number;
}

export interface ResumenDescargas {
  dia: string;
  sum_total_audios_descargados: number;
  sum_total_audios_procesados: number;
  sum_total_minutos_descargados: number;
  sum_total_minutos_procesados: number;
  total_minutos_requeridos: number;
  sum_usuarios_no_encontrados: number;
  sum_audios_sin_mp3: number;
  sum_audios_vacios: number;
  sum_audios_multiples: number;
  sum_audios_sin_usuario: number;
  tasa_error_interno: number;
  tasa_error_externo: number;
  tasa_exito: number;
}

export interface ResumenSubcampañas {
  campania: string;
  subcampania: string;
  cont_agentes_sin_audio: number;
  total_minutos_asignados: number;
  total_minutos_descargados: number;
  total_minutos_procesados: number;
  tasa_error_interno: number;
  tasa_error_externo: number;
  tasa_descarte: number;
  minutos_asignados: number;
  porcentaje_cumplimiento: number;
}

export interface ReporteEmpleados {
  nombre: string;
  apellido: string;
  suma_minutos: number;
  count_audios: number;
}

export interface SubcampaniasById {
  id_sub_campania_habilitada: number;
  id_sub_campania: number;
  id_param_gen: number;
  habilitado: boolean;
  nombre: string;
}

export interface ParametrosGeneralesPayload {
  id_cliente: number;
  mes: string;
  minutos_totales: number;
  minutos_minimos_audio: number;
  minutos_maximos_audio: number;
  usuario: string;
  password: string;
}

export interface ParametrosGenerales {
  id_cliente: number;
  mes: string;
  minutos_totales: number;
  minutos_minimos_audio: number;
  minutos_maximos_audio: number;
  usuario: string;
  password: string;
  id_param_gen: number;
  creado_por: number;
  creado_en: string;
  subcampanias: [
    {
      id_sub_campania_habilitada: number;
      id_sub_campania: number;
      id_param_gen: number;
      habilitado: boolean;
      nombre: string;
    },
  ];
}
