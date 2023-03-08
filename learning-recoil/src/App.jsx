import './App.css';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import PlayList, { RestPlayListButton } from './PlayList';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <PlayList />
      <AppFooter />
      <RestPlayListButton />
    </div>
  );
}

export default App;
