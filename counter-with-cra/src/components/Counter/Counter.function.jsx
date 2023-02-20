import { useState } from 'react';

function Counter(props) {
  // 함수 안에 지역 변수 선언
  // let count = 1;
  // let defaultProps = {
  //   count: 1,
  //   min: 1,
  //   max: 10,
  //   step: 1,
  // };

  // React Hook
  // 상태 관리 React.useState()
  // 객체 { prop1, prop2 }
  // 배열 [ state, setStaet ]
  let [count, setCount] = useState(props.count);

  // 함수 안에 이벤트 청취 함수를 작성합니다.
  const handleIncrement = () => {
    // console.log('카운트 값 증가');
    // count++; // 수정(mutation)
    setCount(count + props.step);
  };

  // only class component
  // lifecycle methods

  const handleDecrement = () => {
    // console.log('카운트 값 감소');
    // count--;
    setCount(count - props.step);
  };

  return (
    <div className="Counter">
      <button type="button" onClick={handleIncrement}>
        +
      </button>
      <output>{count}</output>
      {/* <output>{count}</output> */}
      <button type="button" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}

// like class's static member
Counter.defaultProps = {
  count: 1,
  min: 1,
  max: 10,
  step: 1,
};

export default Counter;
