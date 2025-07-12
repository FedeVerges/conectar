import { useMutation } from '@tanstack/react-query';

import { addComercio } from '../../apis/shops/addComercio';
import type { Comercio } from '../../types';

export const useCreateComercio = () => {
  return useMutation({
    mutationFn: (data: Omit<Comercio, 'id'>) => addComercio(data),
  });
};
