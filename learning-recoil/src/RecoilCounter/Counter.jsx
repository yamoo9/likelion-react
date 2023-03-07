import classes from './Counter.module.css';
import CountButton from './CountButton';
import Count from './Count';

export default function Counter() {
  return (
    <div className={classes.ReactCounter}>
      <Count />
      <CountButton>리코일 카운트</CountButton>
    </div>
  );
}

Counter.displayName = 'RecoilCounter';
