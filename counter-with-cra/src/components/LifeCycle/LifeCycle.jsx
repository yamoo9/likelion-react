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
    // console.log(document.querySelector('.LifeCycle')); // 안 나옵니다. - 승택 ✅
    return (
      <>
        <div>
          <div className="LifeCycle" tabIndex={0}>
            컴포넌트의 생명 주기
          </div>
          <input
            id="select-me"
            type="text"
            placeholder="위에 요소를 클릭하면 초점이 내게 와요~"
            aria-label="나를 선택하세요"
          />
        </div>
        <button
          type="button"
          onClick={() => this.setState({ message: 'updated content' })}
        >
          {this.state.message}
        </button>
      </>
    );

    // return React.createElement(
    //   'div',
    //   { className: 'LifeCycle' },
    //   '컴포넌트의 생명 주기'
    // );
  }

  /* commit 단계 ---------------------------------------------------------------- */

  // 이벤트 핸들러 (사이드 이펙트 작성 구간)
  // handleClick(e) {
  //   e.target.style.cssText = ``;
  // }

  // - 실제 DOM에 접근, 조작 (DOM 스크립트 또는 Vanilla 스크립트)

  // promise (.then, .catch)
  // async function (await, try ~ cache)
  async fetchRandomPeople(endpoint) {
    const response = await fetch(endpoint);

    if (!response.ok) {
      console.error(response.status, response.statusText);
      return;
    }

    const data = await response.json();

    console.log(data);
  }

  // 컴포넌트가 마운트 된 이후
  // 마운트 (1회)
  componentDidMount() {
    // 사이드 이펙트 2번째 스토리
    let API_ENDPOINT = 'https://randomuser.me/api/?results=5';

    // API 요청/응답
    // fetch api
    this.fetchRandomPeople(API_ENDPOINT);

    // axios library

    // console.log('여기서는 실제 DOM에 접근이 가능해요');
    // console.log(document.querySelector('.LifeCycle')); // div가 나올 거 같아요. - 승택 & 선영

    // 바닐라 프로그래밍 (React가 아닌 것 === 사이드 이펙트)
    // 명령형 프로그래밍
    const lifecycleElement = document.querySelector('.LifeCycle');
    const selectMeInput = document.getElementById('select-me');

    // click : mouse event (a11y)
    // focusable element
    lifecycleElement.addEventListener('click', (e) => {
      e.target.style.cssText = `
        background: skyblue;
        color: darkblue;
        font-size: 3rem;
        padding: 20px;
      `;

      // 문서의 input 요소를 찾아서 초점을 이동
      setTimeout(() => {
        selectMeInput.value = '나! 선택받았어~~';
        selectMeInput.select();
      }, 1500);
    });

    lifecycleElement.addEventListener('keyup', (e) => {
      if (e.key.toLowerCase().includes('enter')) {
        lifecycleElement.click();
      }
    });
  }

  // 컴포넌트가 업데이트 된 이후
  // 업데이트 (N회)
  componentDidUpdate() {
    console.log('우리 컴포넌트가 변경되었어요~');
  }
}

// 기본 내보내기
export default LifeCycle;
