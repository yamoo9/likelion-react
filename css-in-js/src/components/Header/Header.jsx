import { Container, HomeLink, Logo, Nav } from '@/components';
import classes from './Header.module.scss';
import { useGlobalState } from '@/contexts/GlobalState';
import { useAuthUser } from '@/contexts/AuthUser';

/* Component ---------------------------------------------------------------- */

export function Header() {
  const { logoLabel } = useGlobalState();
  const { authUser } = useAuthUser();

  return (
    <header className={classes.Header}>
      <Container className={classes.container}>
        <HomeLink>
          <Logo>{logoLabel}</Logo>
        </HomeLink>
        <Nav headline="서비스 내베게이션 제목" />
        {authUser && (
          <span>
            이름 : {authUser.displayName} / 이메일 : {authUser.email}
          </span>
        )}
      </Container>
    </header>
  );
}
