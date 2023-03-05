import { useMemo, useState, createContext, useContext } from 'react';

const AuthUserContext = createContext();

AuthUserContext.displayName = 'AuthUserContext';

/* Provider Wrapper Component ----------------------------------------------- */

export function AuthUserProvider(props) {
  const [authUser, setAuthUser] = useState(null);

  const value = useMemo(
    () => ({
      authUser,
      updateAuthUser: setAuthUser,
    }),
    [authUser]
  );

  return <AuthUserContext.Provider value={value} {...props} />;
}

/* Custom Hook -------------------------------------------------------------- */

export function useAuthUser() {
  const authUserValue = useContext(AuthUserContext);

  if (!authUserValue) {
    throw new ReferenceError(
      'useAuthUser 훅은 AuthUser 컨텍스트 내부에서만 사용해야 합니다.'
    );
  }

  return authUserValue;
}
