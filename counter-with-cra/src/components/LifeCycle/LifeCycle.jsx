import React from 'react';

// Component's Life Cycle (컴포넌트의 생명주기)
// 탄생 (constructor: 1번) → (render: N번) |
// 성장
// 죽음

// 라이프 사이클 메서드
//

class LifeCycle extends React.Component {
  /* render 단계 ---------------------------------------------------------------- */

  state = {
    message: 'loading....',
  };

  render() {
    return <div className="LifeCycle">컴포넌트의 생명 주기</div>;
  }

  /* commit 단계 ---------------------------------------------------------------- */

  // - 실제 DOM에 접근, 조작 (DOM 스크립트 또는 Vanilla 스크립트)

  // 컴포넌트가 마운트 된 이후
  componentDidMount() {
    console.log('여기서는 실제 DOM에 접근이 가능해요');
  }
}

// 기본 내보내기
export default LifeCycle;
