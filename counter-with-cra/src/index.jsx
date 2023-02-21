import './styles/global.css';
import { StrictMode } from 'react';

// ReactDOM v18
import { createRoot } from 'react-dom/client';

// Webpack 모듈 번들러
// 스크립트 파일 확장자 생략 (.js, .jsx, .ts, .tsx, .json, .wasm)

import App from './app/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
