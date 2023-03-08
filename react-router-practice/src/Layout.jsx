import { NavLink } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">웰컴</NavLink>
          </li>
          <li>
            <NavLink to="/posts">포스트 리스트</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return <footer></footer>;
}
