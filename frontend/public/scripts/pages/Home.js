function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { likeLionMembers } from '../data/likeLionMembers.js';
var Home = /*#__PURE__*/function (_React$Component) {
  _inherits(Home, _React$Component);
  var _super = _createSuper(Home);
  function Home() {
    var _this;
    _classCallCheck(this, Home);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      // 모든 것을 상태로 설정하는 것은 적절하지 않다.
      members: likeLionMembers
    });
    _defineProperty(_assertThisInitialized(_this), "initialMembers", likeLionMembers);
    _defineProperty(_assertThisInitialized(_this), "handleFilterLab", function (labNumber) {
      _this.setState({
        members: _this.initialMembers.filter(function (member) {
          return member.lab === labNumber;
        })
      });
    });
    return _this;
  }
  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _this2 = this,
        _this$state;
      console.log(this);
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "\uBA4B\uC7C1\uC774 \uC0AC\uC790\uCC98\uB7FC \uD504\uB860\uD2B8\uC5D4\uB4DC \uC2A4\uCFE8 4\uAE30 \uBA64\uBC84"), /*#__PURE__*/React.createElement("div", {
        role: "group",
        style: {
          display: 'flex',
          gap: 8
        }
      }, Array(11).fill().map(function (_, index /* 0, 1, 2, ..., 10 */) {
        var labIndex = index + 1; // 1, 2, 3, 4, ..., 11
        return /*#__PURE__*/React.createElement(LabButton, {
          key: "lab-button-".concat(index),
          onFilter: function onFilter() {
            return _this2.handleFilterLab(labIndex);
          }
        }, "LAB ", labIndex);
      })), /*#__PURE__*/React.createElement("ul", null, (_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.members.map(function (_ref) {
        var id = _ref.id,
          lab = _ref.lab,
          name = _ref.name,
          gender = _ref.gender;
        return /*#__PURE__*/React.createElement("li", {
          key: id
        }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, lab), " ", /*#__PURE__*/React.createElement("span", null, gender !== null && gender !== void 0 && gender.includes('여성') ? '🙆🏻‍♀️' : '🙆🏻‍♂️'), " ", name));
      })));
    }
  }]);
  return Home;
}(React.Component);
function LabButton(props /* { children, onFilter } */) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      marginBottom: 20
    },
    onClick: props.onFilter
  }, props.children);
}
export default Home;