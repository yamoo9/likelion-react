import { forwardRef } from 'react';
import classes from './A11yHidden.module.css';

export const A11yHidden = forwardRef(function A11yHidden(
  /* props */
  { as: Component = 'span', focusable = false, className = '', ...restProps },
  /* ref (forwarding) */
  ref
) {
  const combinedClassNames = `${classes.srOnly} ${
    focusable ? classes.focusable : ''
  } ${className}`.trim();

  return <Component ref={ref} className={combinedClassNames} {...restProps} />;
});
