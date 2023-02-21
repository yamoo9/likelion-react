import { useState } from 'react';

function Counter({ min = 1, count: initialCount = 1, max = 10, step = 1 }) {
  let [count, setCount] = useState(initialCount);
  const handleIncrement = () => setCount(count + step);
  const handleDecrement = () => setCount(count - step);

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

export default Counter;
