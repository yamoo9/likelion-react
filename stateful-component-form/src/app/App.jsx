import classes from './App.module.scss';

/* Pages -------------------------------------------------------------------- */

// import Home from "@/pages/Home/Home"
// import SignIn from "@/pages/SignIn/SignIn"
import SignUp from '@/pages/SignUp/SignUp';
import { useEffect } from 'react';
import { StateDemo } from '@/demo/stateDemo';

/* Component ---------------------------------------------------------------- */

function App() {
  console.time('앱 로딩');

  useEffect(() => {
    console.log('앱이 로딩 됨');
    console.timeEnd('앱 로딩');
  });

  return (
    <div className={classes.App}>
      <StateDemo />
      <SignUp />
    </div>
  );
}

export default App;
