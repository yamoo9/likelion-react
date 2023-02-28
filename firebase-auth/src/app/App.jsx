import classes from './App.module.scss';

/* Pages -------------------------------------------------------------------- */

// import Home from '@/pages/Home/Home';
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import { useToggle } from '@/hooks/useToggle';
import { getPathFromBaseUrl as baseURL } from '@/utils';
import { useState } from 'react';

/* Component ---------------------------------------------------------------- */

function App() {
  const { toggle, onToggle, offToggle } = useToggle(true);

  const [logoLabel] = useState('Stateful Component & Form Design');
  const [navList] = useState([
    { id: 'home', to: baseURL(), text: '홈', active: false },
    { id: 'signup', to: baseURL('signup'), text: '회원가입', active: true },
    { id: 'signin', to: baseURL('signin'), text: '로그인', active: false },
    { id: 'todos', to: baseURL('todos'), text: '할 일 목록', active: false },
  ]);

  return (
    <div className={classes.App}>
      <button type="button" onClick={toggle ? offToggle : onToggle}>
        TOGGLE
      </button>
      {toggle ? <SignUp logoLabel={logoLabel} navList={navList} /> : <SignIn />}
    </div>
  );
}

export default App;
