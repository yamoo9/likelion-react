import { useState } from 'react';
import classes from './App.module.scss';

/* Pages -------------------------------------------------------------------- */

import Home from '@/pages/Home/Home';
// import SignIn from "@/pages/SignIn/SignIn"
import SignUp from '@/pages/SignUp/SignUp';

/* Component ---------------------------------------------------------------- */

function App() {
  const [isVisible, setIsVisibile] = useState(true);
  return (
    <div className={classes.App}>
      <button type="button" onClick={() => setIsVisibile(!isVisible)}>
        뷰 토글
      </button>
      {isVisible ? <Home /> : <SignUp />}
    </div>
  );
}

export default App;
