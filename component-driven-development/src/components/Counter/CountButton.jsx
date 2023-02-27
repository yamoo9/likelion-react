/* eslint-disable react/prop-types */

import { memo } from 'react';
import { useCompareProp } from '@/hooks/useCompareProp';

export const CountButton = memo(function CountButton({
  label,
  onUpdate,
  children,
}) {
  useCompareProp(onUpdate);
  return (
    <button type="button" onClick={onUpdate} aria-label={label}>
      {children}
    </button>
  );
});
