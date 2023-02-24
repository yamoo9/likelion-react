/* eslint-disable react/prop-types */

import { forwardRef } from "react"
import classes from "./A11yHidden.module.scss"

/* Higher-order Component ------------------------------------------------------ */

export const A11yHidden = forwardRef(function A11yHidden(
  { as: Component = "span", focusable = false, className = "", ...restProps },
  ref
) {
  const combinedClassNames = `${classes.A11yHidden} ${
    focusable ? classes.focusable : ""
  } ${className}`.trim()

  return <Component ref={ref} className={combinedClassNames} {...restProps} />
})
