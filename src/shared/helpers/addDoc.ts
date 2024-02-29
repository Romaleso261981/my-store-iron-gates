import { doc, type DocumentData, type DocumentReference, setDoc } from 'firebase/firestore';

import { db } from '../../integations/firebase';

export const setFirestoreData = async <T extends DocumentData>(
  path: string,
  id: string,
  data: T
): Promise<DocumentReference<T>> => {
  const docRef = doc(db, path, id) as DocumentReference<T>;

  await setDoc(docRef, data);

  return docRef;
};
