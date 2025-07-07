import { mockShop } from './mock/mockShop';
import type { Comercio } from '../../types';

// const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getComercioes = async () // month: string
: Promise<Comercio[]> => {
  // const response = await fetch(`${BASE_URL}/reporte/empleado?mes=${month}`);

  // if (!response.ok) {
  //   throw new Error('Error al obtener el reporte de los empleados');
  // }

  // const data = await response.json();
  // return data;
  await new Promise((res) => setTimeout(res, 1000));
  return mockShop;
};
