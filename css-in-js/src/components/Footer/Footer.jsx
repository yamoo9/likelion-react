import classes from './Footer.module.scss';
import { Container } from '@/components';
import { useRef } from 'react';

/* Component ---------------------------------------------------------------- */

export function Footer() {
  const emailRef = useRef(null);

  return (
    <footer className={classes.Footer}>
      <Container>
        <small>
          COPYRIGHT ALL RESERVED. {new Date().getFullYear()} &copy; EUID
        </small>
      </Container>
    </footer>
  );
}
