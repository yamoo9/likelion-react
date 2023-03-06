import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './HomeLink.module.scss';
import { getPathFromBaseUrl } from '@/utils';

/* Component ---------------------------------------------------------------- */

export function HomeLink({ children }) {
  return (
    <h1 className={classes.HomeLink}>
      <Link to={getPathFromBaseUrl()}>{children}</Link>
      {/* <a href={getPathFromBaseUrl()}>{children}</a> */}
    </h1>
  );
}

HomeLink.propTypes = {
  children: PropTypes.node,
};
