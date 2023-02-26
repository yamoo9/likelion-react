import { arrayOf, string, oneOf, shape, bool } from 'prop-types';
import { A11yHidden } from '@/components';
import classes from './Nav.module.scss';

/* Types -------------------------------------------------------------------- */

const HeadlineAsType = oneOf(['h2', 'h3', 'h4', 'h5', 'h6']);

const HeadlineType = string.isRequired;

const NavigationItemType = shape({
  id: string,
  to: string,
  text: string,
  active: bool,
});

const NavigationListType = arrayOf(NavigationItemType).isRequired;

/* Component ---------------------------------------------------------------- */

export function Nav({ as, headline, list, ...restProps }) {
  return (
    <nav className={classes.Nav} {...restProps}>
      <A11yHidden as={as}>{headline}</A11yHidden>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <a href={item.to} className={item.active ? classes.active : ''}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* Props -------------------------------------------------------------------- */

Nav.defaultProps = {
  as: 'h2',
};

Nav.propTypes = {
  as: HeadlineAsType,
  headline: HeadlineType,
  list: NavigationListType,
};
