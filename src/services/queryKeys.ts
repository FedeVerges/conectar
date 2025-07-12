export const queryKeys = {
  campanias: ['tabmanagement', 'campanias'] as const,
  subcampanias: ['subcampanias'] as const,
  subcampaniasOptions: ['subcampaniasOptions'] as const,
  operadoresOptions: ['operadoresOptions'] as const,
  teamLeaderOptions: ['teamLeaderOptions'] as const,
  paramsBusquedaPorSubcampaña: ['paramsBusquedaPorSubcampaña'] as const,
  paramsBusquedaPorIdYFecha: ['paramsBusquedaPorIdYFecha'] as const,
  filtrosCampos: ['filtrosCampos'] as const,
  filtrosValores: ['filtrosValores'] as const,
  procesamientoCola: ['procesamientoCola'] as const,
  procesamientoLogs: ['procesamientoLogs'] as const,
  resumenDescarga: ['resumenDescarga'] as const,
  resumenSubcampanias: ['resumenSubcampanias'] as const,
  resumenCampanias: ['resumenCampanias'] as const,
  resumenGeneral: ['resumenGeneral'] as const,
  reporteEmpleados: ['reporteEmpleados'] as const,
  procesamientoEventos: ['procesamientoEventos'] as const,
  subcampaniasParametroById: ['subcampaniasParametroById'] as const,
  parametrosGeneralesById: ['parametrosGeneralesById'] as const,
};
export const comercioKeys = {
  all: ['comercios'] as const,
  list: (filters?: {
    provinciaId?: string;
    localidadId?: string;
    categoria?: string;
    nombre?: string;
  }) => [...comercioKeys.all, 'list', filters] as const,
  byId: (id: string) => [...comercioKeys.all, 'by-id', id] as const,
};
