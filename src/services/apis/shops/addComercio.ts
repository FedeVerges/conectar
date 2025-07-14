import { addDoc, collection } from 'firebase/firestore';

import { db } from '../../../firebase/firebase';
import type { Shop } from '../../types';

export const addComercio = async (comercio: Omit<Shop, 'id'>) => {
  await addDoc(collection(db, 'comercios'), comercio);
};
