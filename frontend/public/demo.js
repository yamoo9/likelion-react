/* React 컴포넌트 --------------------------------------------------------------- */

// 함수(형) 컴포넌트
function Group() {
  return (
    <div role="group" lang="en">
      Group Element
    </div>
  )
}

// 클래스 컴포넌트
class Logo extends React.Component {
  // 렌더링
  render() {
    // React 엘리먼트 반환  
    return (
      <img src="/assets/react-logo.svg" alt="React" />
    )
  }

}



/* React DOM 렌더 ------------------------------------------------------------- */

const reactDomRoot = ReactDOM.createRoot(document.getElementById('root'));

reactDomRoot.render(
  // with JSX
  // <div role="group" lang="en">
  //   <Logo />
  // </div>

  // without JSX
  React.createElement(
    'div',
    { role: 'gorup', lang: 'en' },
    React.createElement(Logo),
  )
);