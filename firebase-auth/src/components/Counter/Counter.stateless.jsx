import classes from './Counter.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export function CounterStateless({
  count,
  min,
  max,
  step,
  onIncrement,
  onDecrement,
  buttonLabels,
  className,
}) {
  const combineClassNames = classNames(classes.Counter, className);

  return (
    <div className={combineClassNames}>
      <button
        type="button"
        onClick={onIncrement}
        aria-label={buttonLabels.increment}
      >
        +
      </button>

      <output>{count}</output>

      <button
        type="button"
        onClick={onDecrement}
        aria-label={buttonLabels.decrement}
      >
        -
      </button>
    </div>
  );
}

/* Props ------------------------------------------------------------------- */

CounterStateless.defaultProps = {
  count: 1,
  min: 1,
  max: 10,
  step: 1,
  buttonLabels: {
    increment: '카운트 증가',
    decrement: '카운트 감소',
  },
  className: '',
  onIncrement: null,
  onDecrement: null,
};

CounterStateless.propTypes = {
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
  /** 카운트 증가 함수를 설정합니다. */
  onIncrement: PropTypes.func,
  /** 카운트 감소 함수를 설정합니다. */
  onDecrement: PropTypes.func,
};
