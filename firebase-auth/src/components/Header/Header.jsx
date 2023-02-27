import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, HomeLink, Logo, Nav } from '@/components';
import classes from './Header.module.scss';

/* Component ---------------------------------------------------------------- */

export function Header({ logoLabel, navList: initialNavList }) {
  const [navList] = useState(initialNavList);

  return (
    <header className={classes.Header}>
      <Container className={classes.container}>
        <HomeLink>
          <Logo>{logoLabel}</Logo>
        </HomeLink>
        <Nav headline="서비스 내베게이션 제목" list={navList} />
      </Container>
    </header>
  );
}

/* Props -------------------------------------------------------------------- */

Header.defaultProps = {
  navList: [],
  logoLabel: '',
};

const NavLinkType = PropTypes.exact({
  id: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
});

Header.propTypes = {
  /**
   * **내비게이션 리스트**를 설정합니다.  
   * `NavLinkType = { id: string, to: string, text: string, active: boolean }`
   * */
  navList: PropTypes.arrayOf(NavLinkType),
  /** 로고 레이블을 입력합니다. */
  logoLabel: PropTypes.string,
};
