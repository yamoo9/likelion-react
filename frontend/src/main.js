const App = () => console.log('callReact');

function createElement(type, props, ...children) {
  return { type, props: { ...props, children } }
}