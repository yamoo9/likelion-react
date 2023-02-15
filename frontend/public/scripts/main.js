import App from './App.js';

// ES 구조 분해 할당
// 번들링 (트리 쉐이킹)
var _React = React,
  StrictMode = _React.StrictMode;
var _ReactDOM = ReactDOM,
  createRoot = _ReactDOM.createRoot;
var reactDomRoot = createRoot(document.getElementById('root'));
reactDomRoot.render( /*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(App, null)));