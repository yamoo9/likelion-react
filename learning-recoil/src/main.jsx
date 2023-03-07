import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </>
);
