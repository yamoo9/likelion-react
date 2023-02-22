import classes from './Button.module.css';
import { tokens } from '@/theme/tokens';

const { colors } = tokens;

export function Button({ mode, ...restProps }) {
  // props로부터 파생된 지역 변수 (렌더링 과는 아무 상관 없음)
  let isPrimary = mode.includes('primary');

  return (
    <button
      type="button"
      className={classes.component}
      style={{
        backgroundColor: isPrimary
          ? colors.primary['500']
          : colors.primary['50'],
        color: isPrimary ? colors.white : colors.primary['400'],
      }}
      {...restProps}
    />
  );
}

Button.defaultProps = {
  mode: 'primary', // 'secondary'
};
