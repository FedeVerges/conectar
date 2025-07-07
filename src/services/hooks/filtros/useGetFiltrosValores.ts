import { useQuery } from '@tanstack/react-query';

import { getFiltrosValores } from '../../apis/filtros/getFiltrosValores';
import { queryKeys } from '../../queryKeys';
import type { FiltrosValores } from '../../types';

export const useGetFiltrosValores = (id_metadata?: number) =>
  useQuery<FiltrosValores[]>({
    queryKey: [...queryKeys.filtrosValores, id_metadata],
    queryFn: () => getFiltrosValores(id_metadata!),
    staleTime: 1000 * 60 * 5,
    enabled: !!id_metadata,
    retry: false,
  });
