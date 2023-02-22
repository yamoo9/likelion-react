import classes from './Button.module.css';

export function Button({ mode, children, ...restProps }) {
  return (
    <button type="button" className={classes.component} {...restProps}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  mode: 'primary', // 'secondary'
};

/* -------------------------------------------------------------------------- */

// export function Button({ mode = 'primary', children }) {
//   return (
//     <button type="button" className={classes.component}>
//       {children}
//     </button>
//   );
// }
