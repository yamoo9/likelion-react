import { render, screen } from '@testing-library/react';
import App from './App';

test('App 컴포넌트 내부의 React 로고는 접근성을 준수했나요?', () => {
  render(<App />);

  const reactLogo = screen.getByRole('img');

  expect(reactLogo.getAttribute('alt')).toBe('React');
});
