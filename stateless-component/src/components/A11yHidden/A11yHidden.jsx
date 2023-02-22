import classes from './A11yHidden.module.css';

export const A11yHidden = ({ as: Component, focusable, ...restProps }) => {
  return <Component className={classes.srOnly} {...restProps} />;
};
