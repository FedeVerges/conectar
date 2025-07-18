import type { Locality } from '../../types';
import { locationMock } from './mock/mockLocation';

// const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getLocalilitiesByProvince = async (
  provinceId: string // month: string
): Promise<Locality[]> => {
  // const response = await fetch(`${BASE_URL}/reporte/empleado?mes=${month}`);

  // if (!response.ok) {
  //   throw new Error('Error al obtener el reporte de los empleados');
  // }

  // const data = await response.json();
  // return data;
  debugger;
  await new Promise((res) => setTimeout(res, 1000));
  return locationMock.filter((loc) => loc.provinceId === provinceId);
};
