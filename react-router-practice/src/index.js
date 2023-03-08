import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </>
);
