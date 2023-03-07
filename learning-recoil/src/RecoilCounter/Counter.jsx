import classes from './Counter.module.css';
import CountButton from './CountButton';
import Count from './Count';

import { useRecoilState } from 'recoil';
import { countState } from '@/@store/countState';

export default function Counter() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div className={classes.ReactCounter}>
      <Count>{count}</Count>
      <CountButton onClick={() => setCount((count) => count + 1)}>
        리코일 카운트
      </CountButton>
    </div>
  );
}

Counter.displayName = 'RecoilCounter';
