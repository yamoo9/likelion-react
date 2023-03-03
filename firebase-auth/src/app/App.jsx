import classes from './App.module.scss';

/* Pages -------------------------------------------------------------------- */

// import Home from '@/pages/Home/Home';
// import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';

/* Component ---------------------------------------------------------------- */

import { AuthUserContext } from '@/contexts/AuthUser';
import { useMemo, useState } from 'react';

function App() {
  const [authUser, setAuthUser] = useState(null);

  const authValue = useMemo(
    () => ({
      authUser, // state
      updateAuthUser: setAuthUser, // update function
    }),
    [authUser]
  );

  return (
    <AuthUserContext.Provider value={authValue}>
      <div className={classes.App}>
        <SignUp />
      </div>
    </AuthUserContext.Provider>
  );
}

export default App;
