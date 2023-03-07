import { useEffect } from 'react';

export default function CountButton({ children, ...restProps }) {
  useEffect(() => {
    console.log('React: Update CountButton');
  });

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
}
