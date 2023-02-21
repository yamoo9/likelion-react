import './App.css';
import { CounterFunction, CounterClass, Button } from '../components';

function App() {
  return (
    <div className="App">
      <h2>함수 컴포넌트</h2>
      <CounterFunction count={2} />
      <h2>클래스 컴포넌트</h2>
      <CounterClass step={3} />
      <h2>버튼 컴포넌트</h2>
      <Button />
    </div>
  );
}

export default App;
