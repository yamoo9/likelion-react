import { useState } from 'react';
import { fibonacci } from '@/utils';

export function StateDemo() {
  const [value] = useState(() => fibonacci(39));

  return <div>{value}</div>;
}
