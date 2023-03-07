import './App.css';
import ReactCounter from '@/ReactCounter/Counter';
import RecoilCounter from '@/RecoilCounter/Counter';

function App() {
  return (
    <div className="App">
      <RecoilCounter />
      <ReactCounter />
    </div>
  );
}

export default App;
