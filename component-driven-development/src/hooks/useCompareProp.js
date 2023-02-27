import { useEffect, useRef } from 'react';

export function useCompareProp(prop, alwaysPrint = false) {
  const onUpdateRef = useRef({ prevProp: null });

  useEffect(
    () => {
      console.log(
        `이전 prop과 현재 prop은 동일하다.`,
        Object.is(onUpdateRef.current.prevProp, prop)
      );

      if (!onUpdateRef.current.prevProp) {
        onUpdateRef.current.prevProp = prop;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    !alwaysPrint ? [prop] : undefined
  );
}
