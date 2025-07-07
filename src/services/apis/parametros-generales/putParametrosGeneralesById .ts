import type { ParametrosGeneralesPayload } from '../../types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const putParametrosGeneralesById = async (
  id: number,
  payload: ParametrosGeneralesPayload
): Promise<void> => {
  const response = await fetch(`${BASE_URL}/parametros-generales/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Error al actualizar los parámetros generales.');
  }
};
