import { useMutation } from '@tanstack/react-query';

import { addComercio } from '../../apis/shops/addComercio';
import type { Shop } from '../../types';

export const useCreateComercio = () => {
  return useMutation({
    mutationFn: (data: Omit<Shop, 'id'>) => addComercio(data),
  });
};
