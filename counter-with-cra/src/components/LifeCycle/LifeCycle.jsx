import React from 'react';
import styles from './LifeCycle.module.css';
import { ReactComponent as Spinner } from '../../assets/atom-spinner.svg';

const API_ENDPOINT = 'https://randomuser.me/api/?results=5';

class LifeCycle extends React.Component {
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
      console.log(error);
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

  componentDidMount() {
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
}

export default LifeCycle;
