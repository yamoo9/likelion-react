import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import classes from './Counter.module.scss';
import { CountButton } from './CountButton';
import { CountOutput } from './CountOutput';

// - [x] [React hook] useMemo를 사용해 컴포넌트 기억하기
// - [x] [React HOC] React.memo를 사용해 컴포넌트 기억하기

export function CounterStateful({
  count: initialCount,
  min,
  max,
  step,
  buttonLabels,
  className,
}) {
  const [count, setCount] = useState(initialCount);

  const combineClassNames = classNames(classes.Counter, className);

  const handleIncrement = useCallback(() => {
    setCount((count) => count + step);
  }, [step]);

  const handleDecrement = useCallback(() => {
    setCount((count) => count - step);
  }, [step]);

  return (
    <div className={combineClassNames}>
      <CountButton label={buttonLabels.increment} onUpdate={handleIncrement}>
        +
      </CountButton>
      <CountOutput>{count}</CountOutput>
      <CountButton label={buttonLabels.decrement} onUpdate={handleDecrement}>
        -
      </CountButton>
    </div>
  );
}

/* Props ------------------------------------------------------------------- */

CounterStateful.defaultProps = {
  count: 1,
  min: 1,
  max: 10,
  step: 1,
  buttonLabels: {
    increment: '카운트 증가',
    decrement: '카운트 감소',
  },
  className: '',
};

CounterStateful.propTypes = {
  /** 카운트 현재 값입니다. */
  count: PropTypes.number,
  /** 카운트 최솟값입니다. */
  min: PropTypes.number,
  /** 카운트 최댓값입니다. */
  max: PropTypes.number,
  /** 카운트 변경 값입니다. */
  step: PropTypes.number,
  /** 카운트 버튼 레이블 설정입니다. */
  buttonLabels: PropTypes.shape({
    increment: PropTypes.string,
    decrement: PropTypes.string,
  }),
  /** 사용자 정의 클래스 이름입니다. */
  className: PropTypes.string,
};
