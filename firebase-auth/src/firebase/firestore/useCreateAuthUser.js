import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useCallback, useMemo, useState } from 'react';
import { db } from './index';

/**
 * Firestore 인증 사용자 데이터 쓰기 훅
 * @param {string} collectionKey 콜렉션 키, 옵션(기본 값: 'users')
 * @returns {{
 *   isLoading: boolean;
 *   error: null | Error;
 *   createAuthUser: (userAuth: import('firebase/auth').UserCredential.user, additionData: {}) => void
 * }}
 */
export function useCreateAuthUser(collectionKey = 'users') {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createAuthUser = useCallback(
    async (userAuth, additionData = {}) => {
      const userDocRef = doc(db, collectionKey, userAuth.uid);

      setIsLoading(true);

      try {
        const userSnapshot = await getDoc(userDocRef);
        if (!userSnapshot.exists()) {
          const { email, displayName } = userAuth;
          const createAt = serverTimestamp();
          await setDoc(userDocRef, {
            email,
            displayName,
            createAt,
            ...additionData,
          });
        } else {
          throw new ReferenceError(
            '이미 Firestore에 가입 등록된 사용자입니다.'
          );
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
    () => ({ isLoading, error, createAuthUser }),
    [createAuthUser, error, isLoading]
  );
}
