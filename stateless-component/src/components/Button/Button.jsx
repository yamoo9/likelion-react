import classes from './Button.module.css';
import { tokens } from '@/theme/tokens';

const { colors } = tokens;

export function Button({ mode, ...restProps /* { children, ... } */ }) {
  return (
    <button
      type="button"
      className={classes.component}
      style={{
        backgroundColor: colors.primary['500'],
        color: colors.white,
      }}
      {...restProps}
    />
  );
}

Button.defaultProps = {
  mode: 'primary', // 'secondary'
};
