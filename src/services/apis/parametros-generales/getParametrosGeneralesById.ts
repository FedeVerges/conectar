import type { ParametrosGenerales } from '../../types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getParametrosGeneralesById = async (
  id: number
): Promise<ParametrosGenerales> => {
  const response = await fetch(`${BASE_URL}/parametros-generales/${id}`);

  if (!response.ok) {
    throw new Error('Error al obtener los parametros generales.');
  }

  const data = await response.json();
  return data;
};
