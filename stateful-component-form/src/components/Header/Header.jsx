import { useState } from 'react';
import { Container, HomeLink, Logo, Nav } from '@/components';
import { getPathFromBaseUrl as baseURL } from '@/utils';
import classes from './Header.module.scss';

/* Component ---------------------------------------------------------------- */

export function Header() {
  const [navList] = useState([
    { id: 'home', to: baseURL(), text: '홈', active: false },
    { id: 'signup', to: baseURL('signup'), text: '회원가입', active: true },
    { id: 'signin', to: baseURL('signin'), text: '로그인', active: false },
    { id: 'todos', to: baseURL('todos'), text: '할 일 목록', active: false },
  ]);

  return (
    <header className={classes.Header}>
      <Container className={classes.container}>
        <HomeLink>
          <Logo>Stateful Component &amp; Form Design</Logo>
        </HomeLink>
        <Nav headline="서비스 내베게이션 제목" list={navList} />
      </Container>
    </header>
  );
}
