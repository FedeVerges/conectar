import { create } from 'zustand';

interface ShopsState {
  //TODO: Agregar informacion sobre el listado, los filtros actuales (y el que se encuentra seleccionado), localidad actual.
  searchedMonth: Date | null;
  setSearchedMonth: (date: Date) => void;
}

export const useShopsStore = create<ShopsState>((set) => ({
  searchedMonth: null,
  setSearchedMonth: (date) => set({ searchedMonth: date }),
}));
