import { node, string } from 'prop-types';
import { getPathFromBaseUrl as baseURL } from '@/utils';
import { Header, Footer, Container } from '@/components';
import classes from './Layout.module.scss';

/* Component ---------------------------------------------------------------- */

const navList = [
  { id: 'home', to: baseURL(), text: '홈', active: false },
  { id: 'signup', to: baseURL('signup'), text: '회원가입', active: true },
  { id: 'signin', to: baseURL('signin'), text: '로그인', active: false },
  { id: 'todos', to: baseURL('todos'), text: '할 일 목록', active: false },
];

export function BaseLayout({ className, children, ...restProps }) {
  const combineClassNames = `${classes.BaseLayout} ${className}`.trim();

  return (
    <div className={combineClassNames} {...restProps}>
      <Header logoLabel="Stateful Component & Form Design" navList={navList} />
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
};
