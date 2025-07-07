import { useQuery } from '@tanstack/react-query';

import { getFiltrosCampos } from '../../apis/filtros/getFiltrosCampos';
import { queryKeys } from '../../queryKeys';
import type { FiltrosCampos } from '../../types';

export const useGetFiltrosCampos = () =>
  useQuery<FiltrosCampos[]>({
    queryKey: queryKeys.filtrosCampos,
    queryFn: getFiltrosCampos,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
