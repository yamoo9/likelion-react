import classes from './App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BaseLayout } from '@/components';

/* Pages -------------------------------------------------------------------- */

// 랜딩 페이지의 번들 크기가 매우 크다면 사용자는 오래 기다려야 합니다.
// SPA의 약점: 코드 스플릿팅 (최적화) React.lazy / <Suspense />

import HomePage from '@/pages/Home/HomePage';
import SignInPage from '@/pages/SignIn/SignInPage';
import SignUpPage from '@/pages/SignUp/SignUpPage';
import TodoListPage from '@/pages/TodoList/TodoListPage';
import UploadFilesPage from '@/pages/UploadFiles/UploadFilesPage';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';

/* Component ---------------------------------------------------------------- */

function App() {
  return (
    <Router>
      <div className={classes.App}>
        {/* Client Side Routing → Single Page Application */}
        <BaseLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/todolist" element={<TodoListPage />} />
            <Route path="/storage" element={<UploadFilesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BaseLayout>
      </div>
    </Router>
  );
}

export default App;
