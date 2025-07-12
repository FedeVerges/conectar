import { useQuery } from '@tanstack/react-query';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';

import { db } from '../../../firebase/firebase';
import { comercioKeys } from '../../queryKeys';
import type { Comercio } from '../../types';

interface Params {
  provinciaId: string;
  localidadId: string;
  categoria: string;
  nombre?: string;
}

export const useGetComercio = ({
  provinciaId,
  localidadId,
  categoria,
  nombre = '',
}: Params) => {
  return useQuery({
    queryKey: comercioKeys.list({
      provinciaId,
      localidadId,
      categoria,
      nombre,
    }),
    queryFn: async () => {
      const cacheId = `${provinciaId}-${localidadId}-${categoria}`;
      const cacheRef = doc(db, 'cache', cacheId);

      let comercios: Comercio[] = [];

      try {
        const cacheSnap = await getDoc(cacheRef);
        if (cacheSnap.exists()) {
          comercios = cacheSnap.data().comercios ?? [];
        } else {
          throw new Error('No cache found'); // Forzar fallback
        }
      } catch (e) {
        console.log(e)
        // Fallback a consulta real
        const q = query(
          collection(db, 'comercios'),
          where('provinciaId', '==', provinciaId),
          where('localidadId', '==', localidadId),
          where('categoria', '==', categoria)
        );
        const result = await getDocs(q);
        comercios = result.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Comercio[];

        // Guardar nuevo cache
        try {
          await setDoc(cacheRef, { comercios });
        } catch (e) {
          console.warn('Error al guardar en cache', e);
        }
      }

      if (nombre.trim() === '') return comercios;

      const nombreLower = nombre.toLowerCase();
      return comercios.filter((c) =>
        c.nombre.toLowerCase().includes(nombreLower)
      );
    },
    staleTime: 1000 * 60 * 5,
  });
};
