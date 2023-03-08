import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <>
    <RecoilRoot>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </RecoilRoot>
  </>
);
