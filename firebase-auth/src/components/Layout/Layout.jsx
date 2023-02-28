import { arrayOf, bool, exact, node, string } from 'prop-types';
import { Header, Footer, Container } from '@/components';
import classes from './Layout.module.scss';

/* Component ---------------------------------------------------------------- */

export function BaseLayout({
  logoLabel,
  navList,
  className,
  children,
  ...restProps
}) {
  const combineClassNames = `${classes.BaseLayout} ${className}`.trim();

  return (
    <div className={combineClassNames} {...restProps}>
      <Header logoLabel={logoLabel} navList={navList} />
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
  children: node,
  logoLabel: string,
  navList: arrayOf(
    exact({
      id: string,
      to: string,
      text: string,
      active: bool,
    })
  ),
};
