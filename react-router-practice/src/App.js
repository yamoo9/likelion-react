import './App.css';
import { lazy, Suspense } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

/* Loader & Action ---------------------------------------------------------- */

import { loader as postListLoader } from './PostListPage';
import { loader as postDetailLoader } from './PostDetailPage';

/* Pages -------------------------------------------------------------------- */

const Layout = lazy(() => import('./Layout'));
const WelcomePage = lazy(() => import('./WelcomePage'));
const PostListPage = lazy(() => import('./PostListPage'));
const PostDetailPage = lazy(() => import('./PostDetailPage'));

// Object Type: Router
let router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // 중첩 라우팅(nested routing)
    children: [
      { index: true, element: <WelcomePage /> },
      { path: 'posts', element: <PostListPage />, loader: postListLoader },
      {
        path: 'post/:id',
        element: <PostDetailPage />,
        loader: postDetailLoader,
      },
    ],
  },
]);

// React Element Type: Router
router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<div role="alert">오류가 발생했어요.</div>}
    >
      <Route index element={<WelcomePage />} />
      <Route path="posts" element={<PostListPage />} loader={postListLoader} />
      <Route
        path="post/:id"
        element={<PostDetailPage />}
        loader={postDetailLoader}
      />
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
