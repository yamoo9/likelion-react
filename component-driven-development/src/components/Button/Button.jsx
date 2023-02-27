import PropTypes from 'prop-types';
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
  /** 버튼 모양을 두번째(secondary)로 설정합니다. */
  secondary: PropTypes.bool,
  /** 버튼을 비활성화(disabled) 합니다. */
  disabled: PropTypes.bool,
};
