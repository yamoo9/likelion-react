import { useId } from 'react';
import { bool, string } from 'prop-types';
import { A11yHidden } from '@/components';
import classes from './FormInput.module.scss';

/* Component ---------------------------------------------------------------- */

export function FormInput({
  label,
  type,
  invisibleLabel,
  vertical,
  inputed,
  ...restProps
}) {
  const id = useId();
  const combineClassNames = `${classes.FormInput} ${
    vertical ? classes.FormInputVertical : ''
  } ${inputed ? classes.inputed : ''}`.trim();

  return (
    <div className={combineClassNames}>
      {renderLabel(id, label, invisibleLabel)}
      <input id={id} type={type} className={classes.input} {...restProps} />
    </div>
  );
}

/* Props -------------------------------------------------------------------- */

FormInput.defualtProps = {
  type: 'text',
  invisibleLabel: false,
  vertical: false,
  inputed: false,
};

FormInput.propTypes = {
  type: string,
  invisibleLabel: bool,
  vertical: bool,
  inputed: bool,
};

/* Render Function ---------------------------------------------------------- */

function renderLabel(id, label, invisibleLabel) {
  return invisibleLabel ? (
    <A11yHidden as="label" htmlFor={id} className={classes.label}>
      {label}
    </A11yHidden>
  ) : (
    <label htmlFor={id} className={classes.label}>
      {label}
    </label>
  );
}
