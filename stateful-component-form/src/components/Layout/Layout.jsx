import { string } from 'prop-types';
import { Header, Footer, Container } from '@/components';
import classes from './Layout.module.scss';

/* Component ---------------------------------------------------------------- */

export function BaseLayout({ className, children, ...restProps }) {
  const combineClassNames = `${classes.BaseLayout} ${className}`.trim();

  return (
    <div className={combineClassNames} {...restProps}>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}

/* Props -------------------------------------------------------------------- */

BaseLayout.defaultProps = {
  className: '',
};

BaseLayout.propTypes = {
  className: string,
};
