import LogIn from './pages/LogIn.js';
import Browse from './pages/Browse.js';
import Home from './pages/Home.js';

class App extends React.Component {

  // 조건부 렌더링 (CSR) vs. 조건부 표시 (CSS : display, visibility, overflow, opacity)
  // React (JavaScript) vs. Vue (directives: v-if, v-show)

  // OTT (구독 === 돈!!!!)
  // 구독자 (인증, 권한)
  // 회원가입 → 로그인
  // 서비스 이용 (display: none; )

  // 선언형
  // React 처럼 생각하기
  state = {
    // 사용자가 선언해서 쓰세요.
    headline: 'React Application',
    // isDisabled: false,
    isPaid: true,
    isToggle: false,
    isLoading: !true,
    hasError: null, // { message: '서버에서 적절하지 않은 요청이 있었다는 응답이 있었습니다.' },
  };

  originalHeadline = this.state.headline;
  willUpdateHeadline = 'NEW HEADLINE! 😃';

  unknown = null;

  handleChangeHeadline = () => {

    // const { hasError: error } = this.state;

    // 1. 문
    // if (error === null || error === undefined) {
    //   console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');
    // }

    // 2. 터너리
    // (error === null || error === undefined) ? 
    //   console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.') : 
    //   null;

    // 3. null 병합 연산자
    // error ?? console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');
  
    // 옵셔널 체이닝을 사용해 조건 처리해봅니다.
    // if (error) {
    //   if (typeof error.log === 'function') {
    //     error.log();
    //   }
    // }

    // error && typeof error.log === 'function' && error.log();

    // error.log?.();

    // let error = {
    //   log() {
    //     console.log('this is logger')
    //   }
    // }


    // 조건 처리
    // 문을 사용할 것인가?
    if (this.state.isToggle) {
      this.setState({
        isToggle: false,
        headline: this.originalHeadline
      });
    } else {
      this.setState({
        isToggle: true,
        headline: this.willUpdateHeadline
      });
    }

    // 아니면 식을 사용할 것인가?

    // this.setState({
    //   headline: 'NEW HEADLINE! 😃',
    //   isDisabled: true,
    // });
  }

  render() {

    const { isToggle, isPaid, headline } = this.state;

    if (this.state.isLoading) {
      return <div role="alert">데이터 로딩 중...</div> 
    }

    if (this.state.hasError) {
      return <div role="alert">{this.state.hasError.message}</div>
    }

    return (
      <Home />
    )

    return (
      <div className="App">
        <h1>{headline}</h1>
        <button
          // disabled={this.state.isDisabled}
          type="button" 
          onClick={this.handleChangeHeadline}
        >
          { isToggle ? '오리지널 헤드라인으로 변경' : '뉴 헤드라인으로 변경' }
        </button>

        <LogIn />

        {/* 조건부 렌더링 (화면에 그리지 않음: 민감, 보안, 결제 등 요구) */}  
        { isPaid && <Browse /> }
      </div>
    );
  }
}

export default App;
