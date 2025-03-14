import React from 'react';
import { cn } from '@support/preset-style/lib/utils';

import { CheckIcon } from '@heroicons/react/16/solid';

interface CheckboxProps {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
}

export const Checkbox = ({ className, checked, disabled }: CheckboxProps) => {
  return (
    <>
      <input type="checkbox" checked={checked} disabled={disabled} className="sr-only peer" />
      <span
        className={cn(
          'inline-flex items-center justify-center w-4 h-4 border border-solid border-gray-300 rounded-xs align-middle peer-checked:border-0 peer-checked:bg-blue-500 peer-disabled:border-neutral-100 peer-disabled:bg-neutral-100 [&>svg]:hidden peer-checked:[&>svg]:block peer-disabled:[&>svg]:hidden',
          className,
        )}
      >
        <CheckIcon className="w-3 h-3 stroke-2 fill-white" />
      </span>
    </>
  );
};
