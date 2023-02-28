import classes from './Notification.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const notificationContainer = document.getElementById('notificationContainer');

/* Component ---------------------------------------------------------------- */

export function Notification({ className, ...restProps }) {
  return createPortal(
    <div className={classNames(classes.Notification, className)} {...restProps}>
      Notification
    </div>,
    notificationContainer
  );
}

/* Props -------------------------------------------------------------------- */

Notification.propTypes = {
  className: PropTypes.string,
};
