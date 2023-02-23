import { bool } from 'prop-types';
import { getColor } from '@/theme/utils';
import classes from './Button.module.scss';

/* Component ---------------------------------------------------------------- */

export function Button({ secondary: isSecondary, disabled, ...restProps }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={classes.Button}
      style={{
        backgroundColor: !isSecondary
          ? getColor('primary/400')
          : getColor('white'),
        color: !isSecondary ? getColor('white') : getColor('primary/400'),
      }}
      {...restProps}
    />
  );
}

/* Props -------------------------------------------------------------------- */

Button.defaultProps = {
  secondary: false,
  disabled: false,
};

Button.propTypes = {
  secondary: bool,
  disabled: bool,
};
