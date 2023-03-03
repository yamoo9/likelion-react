import classes from './App.module.scss';

/* Pages -------------------------------------------------------------------- */

// import Home from '@/pages/Home/Home';
import SignIn from '@/pages/SignIn/SignIn';
// import SignUp from '@/pages/SignUp/SignUp';

/* Component ---------------------------------------------------------------- */

import { AuthUserContext } from '@/contexts/AuthUser';
import { useMemo, useState } from 'react';

function App() {
  const [authUser, setAuthUser] = useState(null);

  const value = useMemo(
    () => ({
      authUser,
      updateAuthUser: setAuthUser,
    }),
    [authUser]
  );

  return (
    <AuthUserContext.Provider value={value}>
      <div className={classes.App}>
        <SignIn />
      </div>
    </AuthUserContext.Provider>
  );
}

export default App;
