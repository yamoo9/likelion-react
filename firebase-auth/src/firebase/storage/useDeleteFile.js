import { useState, useMemo, useCallback } from 'react';
import { deleteObject, ref } from 'firebase/storage';
import { storage } from './index';

/**
 * Firebase 스토리지 파일 삭제 훅
 * @returns {{
 *   isLoading: boolean;
 *   error: null | Error;
 *   deleteFile: (urlPath: string) => void;
 * }}
 */
export function useDeleteFile() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteFile = useCallback(async (urlPath) => {
    const assetRef = ref(storage, urlPath);

    setIsLoading(true);

    try {
      await deleteObject(assetRef);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return useMemo(
    () => ({ isLoading, error, deleteFile }),
    [deleteFile, error, isLoading]
  );
}
