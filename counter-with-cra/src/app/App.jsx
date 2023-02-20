import './App.css';
import { Counter } from '../components';

function App() {
  return (
    <div className="App">
      <Counter count={2} />
      <Counter step={3} />
    </div>
  );
}

export default App;
