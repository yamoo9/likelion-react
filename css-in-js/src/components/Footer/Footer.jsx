import classes from './Footer.module.scss';
import { Container } from '@/components';
import { useRef } from 'react';
import { useAuthUser } from '@/contexts/AuthUser';

/* Component ---------------------------------------------------------------- */

export function Footer() {
  const emailRef = useRef(null);
  const { updateAuthUser } = useAuthUser();

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
        <input type="email" ref={emailRef} aria-label="사용자 이메일" />

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
