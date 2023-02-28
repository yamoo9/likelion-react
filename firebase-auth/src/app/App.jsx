import classes from './App.module.scss';

/* Pages -------------------------------------------------------------------- */

// import Home from '@/pages/Home/Home';
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import { useToggle } from '@/hooks/useToggle';

/* Component ---------------------------------------------------------------- */

function App() {
  const { toggle, onToggle, offToggle } = useToggle(true);

  return (
    <div className={classes.App}>
      <button type="button" onClick={toggle ? offToggle : onToggle}>
        TOGGLE
      </button>
      {toggle ? <SignUp /> : <SignIn />}
    </div>
  );
}

export default App;
