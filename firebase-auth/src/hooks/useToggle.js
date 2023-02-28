import { useCallback, useState } from 'react';

/**
 * 토글 상태 관리 커스텀 훅
 * @param {boolean} initialToggleState 최초의 토글 상태 값
 * @returns {{ toggle: boolean; onToggle: () => void; offToggle: () => void; }}
 */
export function useToggle(initialToggleState = false) {
  const [toggle, setToggle] = useState(initialToggleState);
  const onToggle = useCallback(() => setToggle(true), []);
  const offToggle = useCallback(() => setToggle(false), []);
  return { toggle, onToggle, offToggle };
}
