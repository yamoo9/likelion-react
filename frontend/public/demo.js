/* React 컴포넌트 --------------------------------------------------------------- */

// JSX 보간법(interpolation)
// <element prop={value}>this is {content}</element>

// 함수(형) 컴포넌트
function Group(props) {
  return (
    <div role="group" lang={props.lang}>
      {props.content}
    </div>
  )
}

// 클래스 컴포넌트
class Logo extends React.Component {

  // 생성자
  // constructor(props) {
  //   super(props);
  // }
  
  // 렌더링
  render() {

    // React는 99% JavaScript
    // 구조 분해 할당
    const { path, label } = this.props;
    
    // React 엘리먼트 반환  
    return (
      <img src={path} alt={label} />
    );
  }

}

/* React DOM 렌더 ------------------------------------------------------------- */

const reactDomRoot = ReactDOM.createRoot(document.getElementById('root'));

reactDomRoot.render(
  <React.Fragment>
    <Logo path="/assets/react-logo.svg" label="React" />
    <Group />
    <Logo
      path="https://upload.vectorlogo.zone/logos/nextjs/images/60eff509-53dd-4280-92e7-7318fa02e934.svg"
      label="Next.js"
      unknown="아무 것도 몰라요~"
    />
    <Group lang="ru" content="Далеко-далеко за словесными горами." />
  </React.Fragment>
);
