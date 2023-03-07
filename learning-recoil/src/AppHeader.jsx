import BalladCount from './BalladCount';

export default function AppHeader() {
  return (
    <header style={headerStyle}>
      <h2 style={headlineStyle}>
        발라드 장르 곡수 <BalladCount />
      </h2>
    </header>
  );
}

const headerStyle = {
  position: 'fixed',
  top: 0,
  left: 24,
};

const headlineStyle = {
  fontSize: 16,
  color: '#909090',
};
