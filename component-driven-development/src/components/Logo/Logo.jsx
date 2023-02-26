import classes from './Logo.module.scss';
import logo from '@/assets/react.svg';
import { node, oneOf } from 'prop-types';

/* Component ---------------------------------------------------------------- */

export const Logo = ({ children, rotation, ...restProps }) => (
  <figure className={classes.Logo}>
    <img
      style={{
        rotate: `${rotation}deg`,
      }}
      src={logo}
      alt={children ? '' : '리액트'}
      {...restProps}
    />
    <figcaption>{children}</figcaption>
  </figure>
);

Logo.defaultProps = {
  rotation: 0,
};

Logo.propTypes = {
  children: node,
  /**
   * 로고를 회전합니다.
   */
  rotation: oneOf([0, 90]),
};
