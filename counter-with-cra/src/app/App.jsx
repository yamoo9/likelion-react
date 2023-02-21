import './App.css';
import { Counter } from '../components';

function App() {
  return (
    <div className="App">
      {/* <Counter initialCount={2} /> */}
      <Counter count={2} />
      <Counter step={3} />
    </div>
  );
}

export default App;
