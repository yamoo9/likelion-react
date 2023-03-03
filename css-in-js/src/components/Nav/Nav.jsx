import { string, oneOf, bool, exact } from 'prop-types';
import { A11yHidden } from '@/components';
import classes from './Nav.module.scss';
import { useGlobalState } from '@/contexts/GlobalState';

/* Types -------------------------------------------------------------------- */

const HeadlineAsType = oneOf(['h2', 'h3', 'h4', 'h5', 'h6']);

const HeadlineType = string.isRequired;

/* Component ---------------------------------------------------------------- */

export function Nav({ as, headline, ...restProps }) {
  const { navList: list } = useGlobalState();

  return (
    <nav className={classes.Nav} {...restProps}>
      <A11yHidden as={as}>{headline}</A11yHidden>
      <ul>
        {list.map((item) => (
          <Nav.Item key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
}

// Compound Component Pattern
Nav.Item = function NavItem({ item }) {
  return (
    <li>
      <a href={item.to} className={item.active ? classes.active : ''}>
        {item.text}
      </a>
    </li>
  );
};

Nav.Item.propTypes = {
  item: exact({
    id: string,
    to: string,
    text: string,
    active: bool,
  }),
};

/* Props -------------------------------------------------------------------- */

Nav.defaultProps = {
  as: 'h2',
};

Nav.propTypes = {
  as: HeadlineAsType,
  headline: HeadlineType,
};
