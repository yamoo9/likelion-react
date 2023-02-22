import './App.css';
import { Button } from './components';

function App() {
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <div className="App">
      <h2>Button 컴포넌트(stateless)</h2>
      <Button onClick={handleClick}>Primary Button</Button>
      <Button onClick={handleClick}>Secondary Button</Button>
    </div>
  );
}

export default App;
