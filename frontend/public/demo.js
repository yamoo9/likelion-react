/* React 컴포넌트 --------------------------------------------------------------- */

// 함수(형) 컴포넌트
function Group(props) {
  console.log(props.lang);
  console.log(props.content);

  // JSX 보간법(interpolation)
  // <element prop={value}>this is {content}</element>

  return (
    <div role="group" lang={props.lang}>
      {props.content}
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
  <React.Fragment>
    <Group lang="es" content="sit amet consectetur." />
    <Group lang="ru" content="Далеко-далеко за словесными горами." />
  </React.Fragment>
)

// reactDomRoot.render(
//   [
//     // with JSX
//     <div role="presentation" lang="ko" key="with-jsx">
//       <Logo /> 리액트
//     </div>,

//     // without JSX
//     React.createElement(
//       'div',
//       { role: 'gorup', lang: 'en', key: "without-jsx" },
//       React.createElement(Logo),
//       'React'
//     ),
//   ]
// );


// 함수의 arguments
function sum(x, y) {
  return x + y;
}

sum(10, 1000); // 1010
sum(-9, -2); // 1010

// React 컴포넌트의 Props (함수의 전달인자)
function MenuList(props) {
  // { items: [...] }
  return (
    <ul>
      <li>item 1</li>
      <li>item 2</li>
    </ul>
  )
}

// React.createElement(MenuList); // sum();

// sum(29, 103);
// React.createElement(
//   MenuList, 
//   { 
//     items: [ 
//       { id: 'menu-1', title: 'munu one'},
//       { id: 'menu-2', title: 'munu two'},
//     ]
//   }
// );


{/* <MenuList></MenuList>

const items = [ 
  { id: 'menu-1', title: 'munu one'},
  { id: 'menu-2', title: 'munu two'},
] */}

{/* <MenuList items={items}></MenuList> */}