"use strict";

var _App = _interopRequireDefault(require("./components/App.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var reactDomRoot = ReactDOM.createRoot(document.getElementById('root'));
reactDomRoot.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(_App.default, null)));