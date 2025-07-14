import type { Category } from '../../types';
import { categoryMock } from './mock/mockCategory';

// const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getCategoriaes = async () // month: string
: Promise<Category[]> => {
  // const response = await fetch(`${BASE_URL}/reporte/empleado?mes=${month}`);

  // if (!response.ok) {
  //   throw new Error('Error al obtener el reporte de los empleados');
  // }

  // const data = await response.json();
  // return data;
  await new Promise((res) => setTimeout(res, 1000));
  return categoryMock;
};
