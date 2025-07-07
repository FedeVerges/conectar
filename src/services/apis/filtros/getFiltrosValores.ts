import type { FiltrosValores } from '../../types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getFiltrosValores = async (
  id_metadata: number
): Promise<FiltrosValores[]> => {
  const response = await fetch(
    `${BASE_URL}/filtros/valores?id_metadata=${id_metadata}`
  );

  if (!response.ok) {
    throw new Error('Error al obtener filtros valores');
  }

  const data = await response.json();
  return data;
};
