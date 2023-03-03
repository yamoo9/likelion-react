import PropTypes from 'prop-types';
import { Container, HomeLink, Logo, Nav } from '@/components';
import classes from './Header.module.scss';
import { useGlobalState } from '@/contexts/GlobalState';

/* Component ---------------------------------------------------------------- */

export function Header() {
  const { logoLabel } = useGlobalState();

  return (
    <header className={classes.Header}>
      <Container className={classes.container}>
        <HomeLink>
          <Logo>{logoLabel}</Logo>
        </HomeLink>
        <Nav headline="서비스 내베게이션 제목" />
      </Container>
    </header>
  );
}
