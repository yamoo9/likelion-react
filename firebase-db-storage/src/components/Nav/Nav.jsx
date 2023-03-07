import { string, oneOf, exact } from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './Nav.module.scss';
import { A11yHidden } from '@/components';
import { getPathFromBaseUrl as baseURL } from '@/utils';
import { useAuthState } from '@/firebase/auth';

/* Component ---------------------------------------------------------------- */

export function Nav({ as, headline, ...restProps }) {
  const list = [
    { id: 'home', to: baseURL(), text: '홈' },
    { id: 'signin', to: baseURL('signin'), text: '로그인' },
    { id: 'todolist', to: baseURL('todolist'), text: '할 일 목록' },
    { id: 'storage', to: baseURL('storage'), text: '업로드' },
    { id: 'database', to: baseURL('database'), text: '데이터베이스' },
  ];

  const { user } = useAuthState();

  return (
    <nav className={classes.Nav} {...restProps}>
      <A11yHidden as={as}>{headline}</A11yHidden>
      <ul>
        {list.map((item) => {
          if (!item.id.includes('todolist') || user) {
            return <Nav.Item key={item.id} item={item} />;
          }
        })}
      </ul>
    </nav>
  );
}

/* Type & Props ------------------------------------------------------------ */

const HeadlineAsType = oneOf(['h2', 'h3', 'h4', 'h5', 'h6']);

const HeadlineType = string.isRequired;

Nav.defaultProps = {
  as: 'h2',
};

Nav.propTypes = {
  as: HeadlineAsType,
  headline: HeadlineType,
};

/* Compound Component ------------------------------------------------------- */

Nav.Item = function NavItem({ item }) {
  return (
    <li>
      <NavLink
        to={item.to}
        className={({ isActive }) => (isActive ? classes.active : null)}
      >
        {item.text}
      </NavLink>
    </li>
  );
};

Nav.Item.propTypes = {
  item: exact({
    id: string,
    to: string,
    text: string,
  }),
};
