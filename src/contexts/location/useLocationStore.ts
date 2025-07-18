import { create } from 'zustand';
import type { Locality, Province } from '../../services/types';

interface LocationState {
  globalProvinceSelected: Province | null;
  globalLocalitiesByProvince: Locality[];
  globalLocalitySelected: Locality | null;
  setGlobalProvinceSelected: (province: Province) => void;
  setGlobalLocalitiesByProvince: (localities: Locality[]) => void;
  setGlobalLocalitySelected: (locality: Locality) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  globalProvinceSelected: null,
  globalLocalitiesByProvince: [],
  globalLocalitySelected: null,
  setGlobalProvinceSelected: (province) =>
    set({ globalProvinceSelected: province }),
  setGlobalLocalitiesByProvince: (localities) =>
    set({ globalLocalitiesByProvince: localities }),
  setGlobalLocalitySelected: (locality) =>
    set({ globalLocalitySelected: locality }),
}));

// TODO: Crear un metodo que cuando se actualice la lista de localidades. La localidad seleccionada se limpia.
