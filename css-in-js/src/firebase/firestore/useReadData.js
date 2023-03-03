import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useCallback, useMemo, useState } from 'react';
import { db } from './index';

/**
 * Firestore 데이터 읽기 훅
 * @param {string} collectionKey 콜렉션 키 (필수)
 * @param {string} documentKey 도큐멘트 키 (옵션): 특정 도큐멘트만 가져올 경우 설정
 * @returns {{
 *   isLoading: boolean;
 *   error: null | Error;
 *   data: null | any[];
 *   readData: (documentKey: string) => void;
 * }}
 */
export function useReadData(collectionKey) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const readData = useCallback(
    async (documentKey) => {
      setIsLoading(true);

      try {
        if (!documentKey) {
          const collectionRef = collection(db, collectionKey);
          const { docs } = await getDocs(collectionRef);

          const docsData = docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setData(docsData);
        } else {
          const documentRef = doc(db, collectionKey, documentKey);
          const docSnapshot = await getDoc(documentRef);

          if (docSnapshot.exists()) {
            let docData = {
              id: docSnapshot.id,
              ...docSnapshot.data(),
            };

            setData(docData);
          }
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [collectionKey]
  );

  return useMemo(
    () => ({
      isLoading,
      error,
      data,
      readData,
    }),
    [readData, error, isLoading, data]
  );
}
