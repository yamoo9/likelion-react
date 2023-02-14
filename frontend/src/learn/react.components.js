/* -------------------------------------------------------------------------- */
/* React Component Types                                                      */
/* -------------------------------------------------------------------------- */

// Component vs. Element
// 엘리먼트 Element → <div></div>
// 컴포넌트(구성요소) Component → HTMLDivElement class

// React 컴포넌트의 역할
// - 재사용
// - React 엘리먼트 생성 (React.createElement)
// - 생성된 React 엘리먼트 반환(return)

// 1. functional Component
// 함수 문법을 사용해 React 요소를 여러 번 생성할 수 있는 컴포넌트 설계
export function Group() {
  return React.createElement(
    'div', 
    { role: 'group', lang: 'en' },
    [
      'Group Element',
      'Sectioning content',
    ]
  );
}

// 2. class Component
// 클래스 문법을 사용해 React 요소를 여러 번 생성할 수 있는 컴포넌트 설계
// class {

// }