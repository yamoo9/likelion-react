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
    console.log(document.querySelector('.LifeCycle')); // 안 나옵니다. - 승택 ✅
    return (
      <>
        <div className="LifeCycle">컴포넌트의 생명 주기</div>
        <input
          type="text"
          placeholder="위에 요소를 클릭하면 초점이 내게 와요~"
        />
      </>
    );

    // return React.createElement(
    //   'div',
    //   { className: 'LifeCycle' },
    //   '컴포넌트의 생명 주기'
    // );
  }

  /* commit 단계 ---------------------------------------------------------------- */

  // - 실제 DOM에 접근, 조작 (DOM 스크립트 또는 Vanilla 스크립트)

  // 컴포넌트가 마운트 된 이후
  componentDidMount() {
    console.log('여기서는 실제 DOM에 접근이 가능해요');
    // console.log(document.querySelector('.LifeCycle')); // div가 나올 거 같아요. - 승택 & 선영

    // 바닐라 프로그래밍 (React가 아닌 것 === 사이드 이펙트)
    // 명령형 프로그래밍
    const lifecycleElement = document.querySelector('.LifeCycle');

    lifecycleElement.addEventListener('click', (e) => {
      e.target.style.cssText = `
        background: skyblue;
        color: darkblue;
        font-size: 3rem;
        padding: 20px;
      `;
    });
  }
}

// 기본 내보내기
export default LifeCycle;
