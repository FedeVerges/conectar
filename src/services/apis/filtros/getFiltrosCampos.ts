import type { FiltrosCampos } from '../../types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getFiltrosCampos = async (): Promise<FiltrosCampos[]> => {
  const response = await fetch(`${BASE_URL}/filtros/campos`);

  if (!response.ok) {
    throw new Error('Error al obtener filtros campos');
  }

  const data = await response.json();
  return data;
};
