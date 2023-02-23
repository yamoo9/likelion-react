import classes from './HomeLink.module.scss';

import { getPathFromBaseUrl } from '@/utils';

/* Component ---------------------------------------------------------------- */

export function HomeLink({ children }) {
  return (
    <h1 className={classes.HomeLink}>
      <a href={getPathFromBaseUrl()}>{children}</a>
    </h1>
  );
}
