import './App.css';

// 이미지 에셋 불러오기
import logo from '../assets/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React" />
        <p>
          <code>src/App.js</code> 파일을 수정하면{' '}
          <abbr title="Hot Module Replacement">HMR</abbr>, Live Reload 됩니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React 배우러 가즈아~~~
        </a>
      </header>
    </div>
  );
}

export default App;
