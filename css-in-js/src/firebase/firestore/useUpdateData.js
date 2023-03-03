import { doc, updateDoc } from 'firebase/firestore';
import { useCallback, useMemo, useState } from 'react';
import { db } from './index';

/**
 * Firestore 데이터 업데이트 훅
 * @param {string} collectionKey 콜렉션 키 (필수)
 * @returns {{
 *   isLoading: boolean;
 *   error: null | Error;
 *   updateData: (documentKey: string; data: any) => Promise<any>
 * }}
 */
export function useUpdateData(collectionKey) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = useCallback(
    async (documentKey, data) => {
      const documentRef = doc(db, collectionKey, documentKey);

      setIsLoading(true);

      try {
        await updateDoc(documentRef, data);
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
      updateData,
    }),
    [error, isLoading, updateData]
  );
}
