import { createContext, useContext } from 'react';
import { tokens } from './tokens';

const ThemeContext = createContext(tokens);

// 공급자(Provider) ❌
// 안 만듬

// 테마를 꺼내 사용하기
// 커스텀 훅
export function useTheme() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new ReferenceError(
      'useTheme은 ThemeContext 내부에서만 사용해야 합니다.'
    );
  }

  return theme;
}
