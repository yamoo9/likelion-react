/**
 * HTML 요소 생성 유틸리티 함수
 * @param {string} type HTML 요소 이름
 * @param {{}} props HTML 속성 객체
 * @param  {...any} children 자식 요소 집합
 * @returns {HTMLElement}
 */
export function createElement(type, props, ...children) {
  const element = document.createElement(type);
  for (const [property, value] of Object.entries(props)) {
    element.setAttribute(property, value);
  }

  if (children.length > 0) {
    children.forEach((child) => {
      element.append(child);
    });
  }

  return element;
}

/**
 * 렌더링 함수
 * @param {{ headline: string; description: string; subjects: string[]}} state 상태 변수
 */
export function render(state) {
  // 초기화
  rootElement.innerHTML = '';

  // 헤드라인 요소
  // const headline = document.createElement('h1');
  // headline.textContent = state.headline;
  const headline = createElement('h1', {}, state.headline);

  // 디스크립션 요소
  // const description = document.createElement('p');
  // description.textContent = state.description;
  const description = createElement('p', {}, state.description);

  // 서브젝트 리스트 요소
  // const subjectList = document.createElement('ul');
  // state.subjects.forEach((subject) => {
  //   const subjectItem = document.createElement('li');
  //   subjectItem.textContent = subject;
  //   subjectList.append(subjectItem);
  // });
  const subjectList = createElement(
    'ul', 
    {}, 
    ...state.subjects.map(subject => 
      createElement('li', {}, subject)  
    ),
  );

  // 컨테이너 요소
  // const container = document.createElement('div');
  // container.classList.add('container', 'container--md');
  // container.append(headline, description, subjectList);
  const container = createElement(
    'div', 
    { className: 'container container--md' },
    headline,
    description,
    subjectList
  );

  // 루트 요소에 컨테이너 요소 포함
  rootElement.append(container);
}

/**
 * 업데이트 함수 
 * @param {{ headline?: string; description?: string; subjects?: string[]}} newState 업데이트 할 상태
 */
export function update(newState) {
  // 학습 주제가 문자 값인 경우
  if (typeof newState.subjects === 'string') {
    let newSubject = newState.subjects;
    newState.subjects = [newSubject];
  }

  // 상태(객체) 합성
  state = {
    ...state,
    ...newState,
    subjects: [
      ...state.subjects,
      ...(newState.subjects ? newState.subjects : []),
    ],
  };

  // Re-렌더링
  render(state);
}

// 상태 변수 ----------------------------------------------------------------------
// - 제목(headline)
// - 설명(description)
// - 학습 주제(subjects)

export let state = {
  headline: '웹브라우저 환경에서 React 라이브러리 시작하기',
  description:
    'React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.',
  subjects: [
    'React 및 ReactDOM API 활용',
    '가상(Virtual) 노드 vs. 실제(Actual) DOM 노드',
  ],
};

/* 컨테이너 DOM 요소 -------------------------------------------------------------- */

const rootElement = document.getElementById('root');
