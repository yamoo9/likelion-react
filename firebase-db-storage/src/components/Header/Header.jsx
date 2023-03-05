import classes from './Header.module.scss';
import { Container, HomeLink, Logo, Nav } from '@/components';

/* Component ---------------------------------------------------------------- */

export function Header() {
  return (
    <header className={classes.Header}>
      <Container className={classes.container}>
        <HomeLink>
          <Logo>Firebase 서비스 (인증, 데이터베이스, 스토리지)</Logo>
        </HomeLink>
        <Nav headline="React 학습을 목적으로 하는 탐색" />
      </Container>
    </header>
  );
}
