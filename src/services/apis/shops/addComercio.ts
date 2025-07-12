import { addDoc,collection } from 'firebase/firestore';

import { db } from '../../../firebase/firebase';
import type { Comercio } from '../../types';

export const addComercio = async (comercio: Omit<Comercio, 'id'>) => {
  await addDoc(collection(db, 'comercios'), comercio);
};
