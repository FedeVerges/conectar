import type { PickerValue } from '@mui/x-date-pickers/internals';

import type { OperadoresOptions, TeamleadersOptions } from '../services/types';

export interface FormFields {
  subcampana: string;
  teamLeader: TeamleadersOptions[];
  tipoLlamada: string;
  porcentaje: string;
  tabulacion: string;
  nombreTabulacion: string;
  fechaInicio: PickerValue | null;
  fechaFin: PickerValue | null;
  duracionMin: string;
  duracionMax: string;
  agentes: OperadoresOptions[];
}

export interface TabulacionItem {
  tabulacion: string;
  nombreTabulacion: string;
}

export interface FormState {
  formFields: FormFields;
  tabulacionesExtra: TabulacionItem[];
  errors: Partial<Record<keyof FormFields, string>>;
  currentStep: number;
  setField: (name: keyof FormFields, value: any) => void;
  setAllFields: (fields: Partial<FormFields>) => void;
  setErrors: (errors: Partial<Record<keyof FormFields, string>>) => void;
  resetForm: () => void;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  addTabulacion: () => void;
  removeTabulacion: (index: number) => void;
  updateTabulacionField: (
    index: number,
    field: keyof TabulacionItem,
    value: string
  ) => void;
}

export interface GroupProps {
  openNewTab: boolean;
  setopenNewTab: (openNewTab: boolean) => void;
}
