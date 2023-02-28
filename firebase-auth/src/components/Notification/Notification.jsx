import classes from './Notification.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

const notificationContainer = document.getElementById('notificationContainer');

/* Component ---------------------------------------------------------------- */

export function Notification({
  show,
  onClose,
  className,
  children,
  ...restProps
}) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const { current: closeButton } = closeButtonRef;

    if (closeButton) {
      const handleKeyUp = (e) => {
        console.log('REACT: ', e.key);
        if (e.key.toLowerCase() === 'escape') {
          onClose();
        }
      };

      // 버튼 요소에 이벤트를 연결하면
      // 초점이 버튼 요소에 적용되었을 때 그 때 이벤트가 발동
      globalThis.addEventListener('keyup', handleKeyUp);
      return () => globalThis.removeEventListener('keyup', handleKeyUp);
    }
  }, [onClose, show]);

  return show
    ? createPortal(
        <div
          className={classNames(classes.Notification, className)}
          {...restProps}
        >
          {children}
          <button
            ref={closeButtonRef}
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
