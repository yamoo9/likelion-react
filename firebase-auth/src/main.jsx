import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/global.scss';
import App from '@/app/App';
import { app } from './firebase/app';

console.log(app);

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
);
