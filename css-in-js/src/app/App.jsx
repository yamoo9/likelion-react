import classes from './App.module.scss';
import { Routes, Route } from 'react-router-dom';

/* Pages -------------------------------------------------------------------- */

import Home from '@/pages/Home/Home';
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';

/* Component ---------------------------------------------------------------- */

function App() {
  return (
    <div className={classes.App}>
      {/* 라우팅 (웹 브라우저 주소 창의 주소를 확인해서 페이지 컴포넌트를 변경하는 일) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
