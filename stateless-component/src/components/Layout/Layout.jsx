import { Header } from './Header';
import { Footer } from './Footer';

export function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
