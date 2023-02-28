import classes from './Notification.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const notificationContainer = document.getElementById('notificationContainer');

/* Component ---------------------------------------------------------------- */

export function Notification({
  show,
  onClose,
  className,
  children,
  ...restProps
}) {
  return show
    ? createPortal(
        <div
          className={classNames(classes.Notification, className)}
          {...restProps}
        >
          {children}
          <button
            type="button"
            className={classes.closeButton}
            onClick={onClose}
          >
            ×
          </button>
        </div>,
        notificationContainer
      )
    : null;
}

/* Props -------------------------------------------------------------------- */

Notification.defaultProps = {
  show: false,
};

Notification.propTypes = {
  show: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};
