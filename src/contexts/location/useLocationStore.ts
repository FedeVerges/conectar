import { create } from 'zustand';
import type { Locality, Province } from '../../services/types';

interface LocationState {
  provinceSelected: Province | null;
  localities: Locality[];
  localitySelected: Locality | null;
  setProvinceSelected: (province: Province) => void;
  setLocalities: (localities: Locality[]) => void;
  setLocalitySelected: (locality: Locality) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  provinceSelected: null,
  localities: [],
  localitySelected: null,
  setProvinceSelected: (province) => set({ provinceSelected: province }),
  setLocalities: (localities) => set({ localities }),
  setLocalitySelected: (locality) => set({ localitySelected: locality }),
}));
