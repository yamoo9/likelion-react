import classes from './App.module.scss';

/* Pages -------------------------------------------------------------------- */

// import Home from '@/pages/Home/Home';
import SignIn from '@/pages/SignIn/SignIn';
// import SignUp from '@/pages/SignUp/SignUp';

/* Component ---------------------------------------------------------------- */

function App() {
  return (
    <div className={classes.App}>
      <SignIn />
    </div>
  );
}

export default App;
