// import { StrictMode } from 'react';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import { RecoilLogger } from 'recoil-devtools-logger';
import { TimeTravelObserver } from './@recoilDebug';
import App from './App';
import './index.css';

const container = document.getElementById('root');

ReactDOM.createRoot(container).render(
  <>
    <RecoilRoot>
      <App />
      <RecoilLogger />
      <TimeTravelObserver />
    </RecoilRoot>
  </>
);
