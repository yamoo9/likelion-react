/* eslint-disable react/prop-types */

import { memo } from 'react';

export const CountButton = memo(function CountButton({
  label,
  onUpdate,
  children,
}) {
  return (
    <button type="button" onClick={onUpdate} aria-label={label}>
      {children}
    </button>
  );
});
