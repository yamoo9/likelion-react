import { deleteDoc, doc } from 'firebase/firestore';
import { useCallback, useMemo, useState } from 'react';
import { db } from './index';

/**
 * Firestore 데이터 삭제 훅
 * @param {string} collectionKey 콜렉션 키 (필수)
 * @returns {{
 *   isLoading: boolean;
 *   error: null | Error;
 *   deleteData: (documentKey: string) => void;
 * }}
 */
export function useDeleteData(collectionKey) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = useCallback(
    async (documentKey) => {
      const documentRef = doc(db, collectionKey, documentKey);

      setIsLoading(true);

      try {
        await deleteDoc(documentRef);
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
      deleteData,
    }),
    [error, isLoading, deleteData]
  );
}
