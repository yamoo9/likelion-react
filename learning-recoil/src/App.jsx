import './App.css';
import { Suspense } from 'react';

// import AppFooter from './AppFooter';
// import AppHeader from './AppHeader';
// import PlayList, { RestPlayListButton } from './PlayList';
// import ExchangePage from './ExchangePage';
import OrderListPage from './OrderListPage';
import OrderItemPage from './OrderItemPage';
import PostsPage from './PostsPage';
import PostPage from './PostPage';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div role="alert">LOADING...</div>}>
        <PostsPage />
        <PostPage />
        <div style={{ display: 'none', flexFlow: 'column', gap: 40 }}>
          <OrderListPage />
          <OrderItemPage />
        </div>

        {/* <ExchangePage /> */}
        {/* <AppHeader /> */}
        {/* <PlayList /> */}
        {/* <AppFooter />  */}
        {/* <RestPlayListButton /> */}
      </Suspense>
    </div>
  );
}

export default App;
