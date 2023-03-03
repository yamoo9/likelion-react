import { PropTypes } from 'prop-types';
import classes from './HomeLink.module.scss';
import { getPathFromBaseUrl } from '@/utils';
import { Box } from '@/components/Box.styled';

/* Component ---------------------------------------------------------------- */

export function HomeLink({ children }) {
  return (
    <h1 className={classes.HomeLink}>
      <a href={getPathFromBaseUrl()}>{children}</a>
      <Box>styled components</Box>
    </h1>
  );
}

HomeLink.propTypes = {
  children: PropTypes.node,
};
