import { forwardRef } from 'react';
import { bool, string } from 'prop-types';
import classes from './A11yHidden.module.scss';

/* Higher-order Component ------------------------------------------------------ */

export const A11yHidden = forwardRef(
  (() => {
    /* Component ---------------------------------------------------------------- */

    function A11yHidden(
      { as: Component, focusable, className, ...restProps },
      ref
    ) {
      const combinedClassNames = `${classes.A11yHidden} ${
        focusable ? classes.focusable : ''
      } ${className}`.trim();

      return (
        <Component ref={ref} className={combinedClassNames} {...restProps} />
      );
    }

    /* Props -------------------------------------------------------------------- */

    A11yHidden.defaultProps = {
      as: 'span',
      focusable: false,
      className: '',
    };

    A11yHidden.propTypes = {
      as: string,
      focusable: bool,
      className: string,
    };

    return A11yHidden;
  })()
);
