import { useState, useEffect, useMemo } from 'react';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from './index';

/* -------------------------------------------------------------------------- */

/**
 * Firebase 스토리지 다운로드 URL 훅
 * @param {string} urlPath 에셋 위치(예: 'assets/images')
 * @returns {{ isLoading, error, downloadURL }}
 */
export function useDownloadURL(urlPath) {
  const [isLoading, setIsLoading] = useState(false);
  const [downloadURL, setDownloadURL] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const assetRef = ref(storage, urlPath);

    async function getAsset() {
      setIsLoading(true);
      try {
        const url = await getDownloadURL(assetRef);
        setDownloadURL(url);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getAsset();
  }, [urlPath]);

  return useMemo(
    () => ({ isLoading, error, downloadURL }),
    [downloadURL, error, isLoading]
  );
}

/**
 * Firebase 스토리지 모든 에셋 다운로드 URL 훅
 * @param {string} urlPath 에셋 위치, 옵션 (기본값: 'assets')
 * @returns {{ isLoading, error, downloadURLList }}
 */
export function useAllDownloadURL(dirName = 'assets') {
  const [isLoading, setIsLoading] = useState(false);
  const [downloadURLList, setDownloadURLList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const assetDirRef = ref(storage, `${dirName}/`);

    async function getUrlList() {
      setIsLoading(true);

      try {
        const { items } = await listAll(assetDirRef);
        const downloadURLPromises = items.map((item) => getDownloadURL(item));
        const downloadURLList = await Promise.all(downloadURLPromises);
        setDownloadURLList(downloadURLList);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getUrlList();
  }, [dirName]);

  return useMemo(
    () => ({ isLoading, error, downloadURLList }),
    [downloadURLList, error, isLoading]
  );
}
