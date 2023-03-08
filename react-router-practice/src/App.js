import './App.css';
import { lazy, Suspense, useLayoutEffect } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

/* Loader & Action ---------------------------------------------------------- */

import { loader as postListLoader } from './PostListPage';
import { loader as postDetailLoader } from './PostDetailPage';
import { atom, useRecoilState } from 'recoil';

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

const darkModeState = atom({
  key: 'darkModeState',
  default: false,
  effects: [
    ({ onSet, setSelf }) => {
      onSet((newValue) => {
        console.log('updated darkModeState atom value:', newValue);
      });
    },
  ],
});

function App() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  useLayoutEffect(() => {
    handleReadDarkMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReadDarkMode = () => {
    const darkModeLocal = localStorage.getItem('darkMode');
    if (darkModeLocal) {
      setDarkMode(JSON.parse(darkModeLocal));
      console.log(`READ: ${darkModeLocal}`);
    }
  };

  const handleToggleDarkMode = () => {
    const updateDarkMode = !darkMode;
    setDarkMode(updateDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(updateDarkMode));
    console.log(`WRITE: ${updateDarkMode}`);
  };

  return (
    <div
      className="App"
      style={{
        minHeight: '100vh',
        padding: 40,
        background: darkMode ? '#000' : '#fff',
        color: !darkMode ? '#000' : '#fff',
      }}
    >
      <h2>Theme Changer</h2>
      <button type="button" onClick={handleReadDarkMode}>
        READ DARK MODE
      </button>
      <button type="button" onClick={handleToggleDarkMode}>
        TOGGLE DARK MODE
      </button>

      {/* <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense> */}
    </div>
  );
}

function Loading() {
  return <div role="alert">로딩 중...</div>;
}

export default App;
