import HipHopCount from './HipHopCount';

export default function AppFooter() {
  return (
    <footer style={footerStyle}>
      <h2 style={headlineStyle}>
        힙합 장르 곡수 <HipHopCount />
      </h2>
    </footer>
  );
}

const footerStyle = {
  position: 'fixed',
  top: 0,
  right: 24,
};

const headlineStyle = {
  fontSize: 16,
  color: '#909090',
};
