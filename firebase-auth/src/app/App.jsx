import classes from './App.module.scss';
import { GlobalStateProvider } from '@/contexts/GlobalState';

/* Pages -------------------------------------------------------------------- */

// import Home from '@/pages/Home/Home';
// import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';

/* Component ---------------------------------------------------------------- */

function App() {
  return (
    <GlobalStateProvider>
      <div className={classes.App}>
        <SignUp />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
