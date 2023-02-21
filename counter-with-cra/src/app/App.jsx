import React from 'react';
import './App.css';
import {
  CounterFunction,
  CounterClass,
  Button,
  LifeCycle,
} from '../components';

function renderComponents(isVisible) {
  if (isVisible) {
    return (
      <>
        <h2>함수 컴포넌트</h2>
        <CounterFunction count={2} />
        <h2>클래스 컴포넌트</h2>
        <CounterClass step={3} />
        <h2>버튼 컴포넌트</h2>
        <Button />
      </>
    );
  } else {
    return null;
  }
}

function App() {
  // 상태 변수(state variable)
  const [isVisibleComponents] = React.useState(false);

  return (
    <div className="App">
      <h2>라이프 사이클</h2>
      <LifeCycle />
      {renderComponents(isVisibleComponents)}
    </div>
  );
}

export default App;
