import classes from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BaseLayout } from '@/components';

/* Pages -------------------------------------------------------------------- */

import HomePage from '@/pages/Home/HomePage';
import SignInPage from '@/pages/SignIn/SignInPage';
import SignUpPage from '@/pages/SignUp/SignUpPage';
import TodoListPage from '@/pages/TodoList/TodoListPage';

/* Component ---------------------------------------------------------------- */

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/todolist" element={<TodoListPage />} />
          </Routes>
        </BaseLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
