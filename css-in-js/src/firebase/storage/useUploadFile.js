import { useCallback, useMemo, useRef, useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './index';

/* -------------------------------------------------------------------------- */

/**
 * Firebase 스토리지 파일 업로드 훅
 * @param {{ dirName?: string; usingId?: boolean; }}
 * @returns {{ fileInputRef, uploadFiles, isLoading, error, urlList }}
 */
export function useUploadFiles({ dirName = 'assets', usingId = true } = {}) {
  const fileInputRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [urlList, setUrlList] = useState(null);

  const uploadFiles = useCallback(async () => {
    const { current: fileInput } = fileInputRef;

    if (fileInput) {
      const files = fileInput.files;

      const filesRef = Array.from(files).map((file) => {
        if (!file.name.includes('.')) {
          throw new TypeError('업로드 할 파일에 확장자가 포함되어 있지 않습니다.');
        }
        const [ fileName = '', fileExt = '' ] = file.name.split('.');
        const fileId = usingId ? `${generateId()}.` : '';
        return ref(storage, `${dirName}/${fileName}.${fileId}${fileExt}`);
      });

      setIsLoading(true);

      try {
        const uploadPromises = filesRef.map((fileRef, index) =>
          uploadBytes(fileRef, files[index])
        );

        const uploadSanpshots = await Promise.all(uploadPromises);

        const downloadURLs = uploadSanpshots.map((snapshot) =>
          getDownloadURL(snapshot.ref)
        );

        const downloadURLList = await Promise.all(downloadURLs);

        setUrlList(downloadURLList);

        fileInput.value = '';
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [dirName, usingId]);

  return useMemo(
    () => ({ fileInputRef, uploadFiles, isLoading, error, urlList }),
    [error, isLoading, uploadFiles, urlList]
  );
}

function generateId({ prefix = 'euid', digit = 9 } = {}) {
  const suffix='abcdefghijklmnopqrstuvwxyz-_+=';
  return `${prefix}-${getRandomNumber(getDigitNumber(digit))}${suffix[getRandomNumber(suffix.length - 1)][getRandomNumber(2) > 0 ? 'toUpperCase' : 'toLowerCase']()}`;
}

function getRandomNumber(n = 10) {
  return Math.floor(Math.random() * n);
}

function getDigitNumber(digit = 1) {
  return new Number(`1e${digit}`).valueOf();
}