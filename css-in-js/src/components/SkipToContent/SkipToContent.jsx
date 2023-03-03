import { string } from 'prop-types';
import { useEffect, useRef } from 'react';
import { A11yHidden } from '@/components';
import classes from './SkipToContent.module.scss';

/* Component ---------------------------------------------------------------- */

export function SkipToContent({ to, ...restProps }) {
  const skipToContentRef = useRef(null);

  useEffect(() => {
    let targetElement = document.querySelector(to);

    if (targetElement) {
      targetElement.setAttribute('tabindex', -1);

      skipToContentRef.current.addEventListener('click', (e) => {
        e.preventDefault();
        targetElement && targetElement.focus();
      });
    }
  }, []);

  return (
    <A11yHidden
      ref={skipToContentRef}
      className={classes.SkipToContent}
      as="a"
      focusable
      href={to}
      {...restProps}
    />
  );
}

/* Props -------------------------------------------------------------------- */

SkipToContent.propTypes = {
  to: string.isRequired,
};
