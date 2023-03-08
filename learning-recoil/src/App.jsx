import './App.css';

// import AppFooter from './AppFooter';
// import AppHeader from './AppHeader';
// import PlayList, { RestPlayListButton } from './PlayList';
// import ExchangePage from './ExchangePage';
import OrderListPage from './OrderListPage';
import OrderItemPage from './OrderItemPage';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexFlow: 'column', gap: 40 }}>
        <OrderListPage />
        <OrderItemPage />
      </div>
      {/* <ExchangePage /> */}
      {/* <AppHeader /> */}
      {/* <PlayList /> */}
      {/* <AppFooter />  */}
      {/* <RestPlayListButton /> */}
    </div>
  );
}

export default App;
