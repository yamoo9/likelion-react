function EventHandling() {
  var handlePreventDefault = function handlePreventDefault(e) {
    e.preventDefault();
  };
  var handleClicker = function handleClicker(e) {
    console.log(e.target);
    console.log('handleClicker');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "React \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB9C1"), /*#__PURE__*/React.createElement("nav", {
    onClickCapture: handleClicker
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://beta.reactjs.org",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "react")))));
}
export default EventHandling;