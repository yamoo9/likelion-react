import React from 'react';
import './App.css';
import { ReactComponent as ReactLogo } from 'assets/logo.svg';
import {
  CounterFunction,
  CounterClass,
  Button,
  LifeCycle,
  API_ENDPOINT,
} from 'components';

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

// 함수 컴포넌트
// React v16.8 (2019)
// - 상태 관리 React.useState
// - 사이드 이펙트 관리 React.useEffect
function App() {
  // 관심사의 분리
  // 앱의 로딩 상태
  // 로딩 이후, 데이터 관리
  // 로딩 이후, 통신 실패 → 오류 처리

  // component state = { isLoading, error, data }
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState('');

  // 사이드 이펙트 처리 훅
  React.useEffect(() => {
    // console.log('componentDidMount');

    // fecth data
    // async function???????
    // 이펙트 함수 안에서 비동기 함수를 작성하는 건 가능하다
    async function fetchData() {
      // const data = await (await fetch(API_ENDPOINT)).json();

      try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  React.useEffect(() => {
    // 만약 여기서 네트워크 요청/응답을 처리한다면? 무슨 일이 발생할까요?
    // 데이터 요청 → 상태 업데이트 → 리-렌더링
    // console.log('componentDidMount');
    console.log('componentDidUpdate');
  });

  // -----------------------------------------------------

  // React 상태 관리 훅(Hook)
  // 상태 변수(state variable)
  const [isVisibleComponents, updateIsVisibleComponents] =
    React.useState(false);

  // 함수 안에 이벤트 핸들러 작성
  const handleToggleVisible = () => {
    updateIsVisibleComponents(!isVisibleComponents);
  };

  // class's render method
  return (
    <div className="App">
      <ReactLogo title="리액트 로고" />
      <button type="button" onClick={handleToggleVisible}>
        {isVisibleComponents.toString()}
      </button>
      <h2>라이프 사이클</h2>
      {isVisibleComponents && <LifeCycle />}
      {renderComponents(isVisibleComponents)}
    </div>
  );
}

export default App;
