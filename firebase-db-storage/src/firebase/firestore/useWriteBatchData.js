import { collection, doc, writeBatch } from 'firebase/firestore';
import { useCallback, useMemo, useState } from 'react';
import { db } from './index';

/**
 * Firestore 데이터 일괄 쓰기 훅
 * @param {string} collectionKey 콜렉션 키
 * @param {string} documentKey 도큐멘트 키, 옵션(기본 값: 'key')
 * @returns {{
 *   isLoading: boolean;
 *   error: boolean;
 *   writeBatchData: (dataList) => void
 * }}
 */
export function useWriteBatchData(collectionKey, documentKey = 'key') {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const writeBatchData = useCallback(
    async (dataList) => {
      const collectionRef = collection(db, collectionKey);
      const batch = writeBatch(db);

      dataList.forEach((data) => {
        const docRef = doc(collectionRef, data[documentKey].toLowerCase());
        batch.set(docRef, data);
      });

      setIsLoading(true);

      try {
        await batch.commit();
        console.log('콜렉션 생성 및 도큐멘트 생성 일괄 처리가 완료되었습니다.');
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [collectionKey, documentKey]
  );

  return useMemo(
    () => ({ isLoading, error, writeBatchData }),
    [error, isLoading, writeBatchData]
  );
}
