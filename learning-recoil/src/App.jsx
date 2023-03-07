import './App.css';
import { useRecoilState } from 'recoil';
import { countState } from './@store/countState';
// import { useState } from 'react';

// console.log(countState);

function App() {
  const [count, setCount] = useRecoilState(countState);
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>
        카운트 = {count}
      </button>
    </div>
  );
}

export default App;
