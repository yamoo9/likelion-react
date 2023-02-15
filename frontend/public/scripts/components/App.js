var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);
  var _super = _createSuper(App);
  function App(props) {
    var _this;
    _classCallCheck(this, App);
    _this = _super.call(this, props);
    _this.state = {
      headline: 'React Application'
    };
    _this.handleChangeHeadline = _this.handleChangeHeadline.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(App, [{
    key: "handleChangeHeadline",
    value: function handleChangeHeadline() {
      this.setState({
        headline: 'NEW HEADLINE! 😃'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        "data-component": "App"
      }, /*#__PURE__*/React.createElement("h1", null, this.state.headline), /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: this.handleChangeHeadline
      }, "\uD5E4\uB4DC\uB77C\uC778 \uC5C5\uB370\uC774\uD2B8"));
    }
  }]);
  return App;
}(React.Component);
export default App;
