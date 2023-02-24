import classes from "./Logo.module.scss"
import logo from "@/assets/react.svg"

/* Component ---------------------------------------------------------------- */

export const Logo = ({ children, ...restProps }) => (
  <figure className={classes.Logo}>
    <img src={logo} alt={children ? "" : "리액트"} {...restProps} />
    <figcaption>{children}</figcaption>
  </figure>
)
