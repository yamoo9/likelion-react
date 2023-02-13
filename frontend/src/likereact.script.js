import { createElement as h, render } from './likeReact/index.js';

const app = h('div', {
  className: 'app'
}, h('h1', null, 'Hello Virtual DOM'));

render(app, document.getElementById('root'));