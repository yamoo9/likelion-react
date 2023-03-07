import { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';
import { countState } from '@/@store/countState';

export default function CountButton({ children }) {
  const setCount = useSetRecoilState(countState); // 쓰기(SET)

  useEffect(() => {
    console.log('Recoil: Update CountButton');
  });

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      {children}
    </button>
  );
}
