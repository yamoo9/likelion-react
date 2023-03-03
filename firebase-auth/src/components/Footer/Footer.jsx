import classes from './Footer.module.scss';
import { Container } from '@/components';
import { useContext, useRef } from 'react';
import { AuthUserContext } from '@/contexts/AuthUser';

/* Component ---------------------------------------------------------------- */

export function Footer() {
  const emailRef = useRef(null);
  const { updateAuthUser } = useContext(AuthUserContext);

  const handleSignIn = () => {
    const { value } = emailRef.current;

    if (value.trim().length > 0) {
      updateAuthUser({
        displayName: 'yamoo9',
        email: value,
        emailValidataion: true,
        job: 'instructor',
      });
    }
  };

  return (
    <footer className={classes.Footer}>
      <Container>
        <input type="email" ref={emailRef} />

        <button type="button" onClick={handleSignIn}>
          로그인
        </button>

        <hr />

        <small>
          COPYRIGHT ALL RESERVED. {new Date().getFullYear()} &copy; EUID
        </small>
      </Container>
    </footer>
  );
}
