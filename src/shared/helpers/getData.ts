import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { collection, getDocs, limit, query, startAfter } from 'firebase/firestore';

import { db } from '@/integations/firebase';

export const getAllFirestoreData = async <T extends DocumentData>(
  path: string,
  queryLimit: number,
  lastRefKey?: number
): Promise<T[] | null> => {
  const collectionRef = collection(db, path);

  if (lastRefKey) {
    const q = query(collectionRef, startAfter(lastRefKey), limit(queryLimit));
    const querySnapshot = await getDocs(q);
    const products: T[] = [];

    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      products.push(doc.data() as T);
    });
    return products;
  } else {
    const q = query(collectionRef, limit(queryLimit));
    const querySnapshot = await getDocs(q);
    const products: T[] = [];

    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      products.push(doc.data() as T);
    });
    return products;
  }
};
