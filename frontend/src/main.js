// React 컴포넌트 vs 엘리먼트
import { Group } from './learn/react.components.js';

// 함수 타입
// React 월드
// React 엘리먼트 생성 과정에서는 반드시 React.createElement API

// 사용법 1
// 웹브라우저가 인식 가능한 HTML 표준 엘리먼트 이름 (문자 값)
// console.log(React.createElement('details'));
// 사용법 2
// 컴포넌트 함수 또는 클래스 참조 전달 
// console.log(React.createElement(Group));

// ReactDOM이 하는 일은 React가 한 결과(가상 DOM 생성)를 
// 실제 DOM에 렌더링(마운트)하는 것입니다.

// ReactDOM의 절차
// 1. ReactDOM의 루트를 생성한다. (실제 DOM 요소를 전달)
// ReactDOM.createRoot(document.getElementById('root'));
// 2. 생성된 ReactDOM의 루트 요소(객체)를 통해 실제 DOM에 렌더링 한다.
// reactDomRoot.render();

// const React루트객체 = ReactDOM.루트요소생성하기(실제 DOM 요소)
// React루트객체.렌더링(React 엘리먼트);

const reactDomRoot = ReactDOM.createRoot(document.getElementById('root'));
reactDomRoot.render(
  // HTML, XML
  <div role="group" lang="en">Group Element</div>
  // React.createElement(Group)
);


