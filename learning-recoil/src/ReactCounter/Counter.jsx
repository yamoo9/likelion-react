import { useState } from 'react';
import classes from './Counter.module.css';
import CountButton from './CountButton';
import Count from './Count';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.ReactCounter}>
      <Count>{count}</Count>
      <CountButton onClick={() => setCount((count) => count + 1)}>
        리액트 카운트
      </CountButton>
    </div>
  );
}

Counter.displayName = 'ReactCounter';
