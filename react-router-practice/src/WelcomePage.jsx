import { Helmet } from 'react-helmet-async';

export default function WelcomePage() {
  return (
    <div>
      <Helmet>
        <title>웰컴!!!! 🏚️</title>
        <meta name="description" content="welcome ...." />
      </Helmet>
      <h2>웰컴!!! React Router</h2>
    </div>
  );
}
