import classes from './Footer.module.scss';
import { Container } from '@/components';

/* Component ---------------------------------------------------------------- */

export function Footer() {
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
