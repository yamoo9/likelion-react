import './App.css';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { countState } from '@/@store/countState';

function App() {
  const [count, setCount] = useRecoilState(countState);
  const [reactCount, setReactCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>
        리코일 카운트 = {count}
      </button>

      <button onClick={() => setReactCount((count) => count + 1)}>
        리액트 카운트 = {reactCount}
      </button>
    </div>
  );
}

export default App;
