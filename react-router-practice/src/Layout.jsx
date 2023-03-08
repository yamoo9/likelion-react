import { NavLink, Outlet } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  const list = [
    { id: 'welcome', text: '웰컴', href: '/' },
    { id: 'posts', text: '포스트 리스트', href: '/posts' },
  ];
  return (
    <header>
      <nav className="gnb">
        <ul>
          {list.map((item) => (
            <NavList
              key={item.id}
              item={item}
              customActiveClassName="likelion-4th"
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}

function NavList({ item, customActiveClassName = 'active' }) {
  return (
    <li>
      <NavLink
        to={item.href}
        className={({ isActive }) => {
          return isActive ? customActiveClassName : undefined;
        }}
      >
        {item.text}
      </NavLink>
    </li>
  );
}

function Footer() {
  return <footer></footer>;
}
