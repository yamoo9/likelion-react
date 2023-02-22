import React from 'react';
import styles from './LifeCycle.module.css';
import { ReactComponent as Spinner } from '../../assets/atom-spinner.svg';

const API_ENDPOINT = 'https://randomuser.me/api/?results=5';

class LifeCycle extends React.Component {
  /* 
  클래스 필드 ------------------------------------------------------------------- */

  // this.clearId
  clearId = -1;

  /* 
  render 단계 ---------------------------------------------------------------- */

  state = {
    isLoading: false,
    data: [],
    error: null,
    hasError: false,
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div
          role="alert"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <Spinner title="로딩 중..." />
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <button
          type="button"
          onClick={() => this.fetchRandomPeople(API_ENDPOINT)}
        >
          다양한 사람들을 보고 싶어요!
        </button>

        {/* <ul>
          <li></li>
        </ul> */}
      </div>
    );
  }

  /* 
  commit 단계 ---------------------------------------------------------------- */

  // Random User API 서버에 요청
  async fetchRandomPeople(endpoint) {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      this.setState({
        data: data.results,
      });
    } catch (error) {
      this.setState({
        error: {
          message: error.message,
        },
        hasError: true,
      });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  // 이벤트 구독(subscription)
  componentDidMount() {
    // 3번째 사이드 이펙트
    // 이벤트 구독/취소
    // 예) 접속 중인 친구의 온라인 상태 여부 감지하는 이벤트 함수 연결(구독)
    //    접속 중인 친구의 온라인 상태 여부 감지하는 이벤트 함수 연결 해제(취소)

    // 타이머(특정 주기마다 확인하는 이벤트 함수 시뮬레이션)
    this.clearId = setInterval(() => {
      console.log('친구야 접속 중이니?');
    }, 1500);

    // this.fetchRandomPeople(API_ENDPOINT);

    const lifecycleElement = document.querySelector('.LifeCycle');
    const selectMeInput = document.getElementById('select-me');

    if (lifecycleElement) {
      lifecycleElement.addEventListener('click', (e) => {
        e.target.style.cssText = `
        background: skyblue;
        color: darkblue;
        font-size: 3rem;
        padding: 20px;
      `;

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
  }

  componentDidUpdate() {
    console.log('우리 컴포넌트가 변경되었어요~');
  }

  // 구독 중인 이벤트 취소(unsubscription)
  componentWillUnmount() {
    console.log('컴포넌트 언마운트 전에 실행됩니다.');

    clearInterval(this.clearId);
    console.log('구독 중인 친구 접속 감지 이벤트를 해제했습니다.');
  }
}

export default LifeCycle;
