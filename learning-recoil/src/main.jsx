// import { StrictMode } from 'react';
import { RecoilRoot, RecoilEnv } from 'recoil';
import ReactDOM from 'react-dom/client';
import { RecoilLogger } from 'recoil-devtools-logger';
import { TimeTravelObserver } from './@recoilDebug';
import App from './App';
import './index.css';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

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
