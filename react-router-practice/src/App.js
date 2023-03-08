import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import Layout from './Layout';

// Sync (Bundle)
// import WelcomePage from './WelcomePage';

// Async (Code Splilting)
// Dynamic Import
// React.lazy + React.Suspense
const WelcomePage = lazy(() => import('./WelcomePage'));
const PostListPage = lazy(() => import('./PostListPage'));

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/posts', element: <PostListPage /> },
]);

function App() {
  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </Layout>
    </div>
  );
}

function Loading() {
  return <div role="alert">로딩 중...</div>;
}

export default App;
