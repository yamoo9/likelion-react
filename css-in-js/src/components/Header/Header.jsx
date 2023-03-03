import classes from './Header.module.scss';
import classNames from 'classnames';
import { Container, HomeLink, Logo, Nav } from '@/components';
import { useGlobalState } from '@/contexts/GlobalState';

/* Component ---------------------------------------------------------------- */

export function Header() {
  const { logoLabel } = useGlobalState();

  return (
    <header className={classes.Header}>
      <Container
        onClick={() => console.log('this is styled component')}
        className={classNames(classes.container, 'yamoo9-style')}
      >
        <HomeLink>
          <Logo>{logoLabel}</Logo>
        </HomeLink>
        <Nav headline="서비스 내베게이션 제목" />
      </Container>
    </header>
  );
}
