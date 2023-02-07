import { addClass, removeClass } from './classNames.js';

const { documentElement: rootElement } = document;

removeClass(rootElement, 'no-js');
addClass(rootElement, 'js');
