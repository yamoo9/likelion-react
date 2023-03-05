import { collection, onSnapshot, query, doc } from 'firebase/firestore';
import { useLayoutEffect, useMemo, useState } from 'react';
import { db } from './index';

export function useDataState(collectionKey, documentKey) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  if (collectionKey.includes('/') && !documentKey) {
    const collectionAndDocumentKey = collectionKey.split('/');
    collectionKey = collectionAndDocumentKey[0];
    documentKey = collectionAndDocumentKey[1];
  }

  useLayoutEffect(() => {
    let unsubscribe;

    if (documentKey) {
      const q = query(doc(db, collectionKey, documentKey));

      unsubscribe = onSnapshot(
        q,
        (doc) => {
          setData(doc.data());
        },
        (error) => {
          setError(error);
        }
      );
    } else {
      const q = query(collection(db, collectionKey));

      unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          setData(data);
        },
        (error) => {
          setError(error);
        }
      );
    }

    return unsubscribe;
  }, [collectionKey, documentKey]);

  return useMemo(() => ({ data, error }), [data, error]);
}
