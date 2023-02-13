import { createElement as h, render } from './likeReact/index.js';

const app = h(
  // 타입(type)
  'div', 
  // 프롭스(props)
  { className: 'app', lang: 'en' }, 
  // ...칠드런(children)
  h('h1', null, 'Hello Virtual ', h('abbr', { title: 'Document Object Model' }, 'DOM')),
  h('p', null, `The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.`),
);

render(
  // 가상 DOM 요소(virtual element)
  app, 
  // 실제 DOM 요소(actual element)
  document.getElementById('root')
);