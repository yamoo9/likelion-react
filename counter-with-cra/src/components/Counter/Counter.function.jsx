import { useState } from 'react';

function Counter(props) {
  let [count, setCount] = useState(props.count);
  const handleIncrement = () => setCount(count + props.step);
  const handleDecrement = () => setCount(count - props.step);

  return (
    <div className="Counter">
      <button
        type="button"
        aria-label="카운트 1 증가"
        onClick={handleIncrement}
      >
        +
      </button>
      <output>{count}</output>
      <button
        type="button"
        aria-label="카운트 1 감소"
        onClick={handleDecrement}
      >
        -
      </button>
    </div>
  );
}

Counter.defaultProps = {
  count: 1,
  min: 1,
  max: 10,
  step: 1,
};

export default Counter;
