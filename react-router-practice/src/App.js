import './App.css';
import { lazy, Suspense } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

/* Pages -------------------------------------------------------------------- */

const Layout = lazy(() => import('./Layout'));
const WelcomePage = lazy(() => import('./WelcomePage'));
const PostListPage = lazy(() => import('./PostListPage'));

// Object Type: Router
let router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // 중첩 라우팅(nested routing)
    children: [
      { index: true, element: <WelcomePage /> },
      { path: '/posts', element: <PostListPage /> },
    ],
  },
]);

// React Element Type: Router
router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<WelcomePage />} />
      <Route path="posts" element={<PostListPage />} />
    </Route>
  )
);

/* App ---------------------------------------------------------------------- */

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

function Loading() {
  return <div role="alert">로딩 중...</div>;
}

export default App;
