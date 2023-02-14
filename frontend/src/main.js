// React 컴포넌트 vs 엘리먼트
import { Group } from './learn/react.components.js';

// 함수 타입
// React 월드
// React 엘리먼트 생성 과정에서는 반드시 React.createElement API

// 사용법 1
// 웹브라우저가 인식 가능한 HTML 표준 엘리먼트 이름 (문자 값)
console.log(React.createElement('details'));
// 사용법 2
// 컴포넌트 함수 또는 클래스 참조 전달 
console.log(React.createElement(Group));
