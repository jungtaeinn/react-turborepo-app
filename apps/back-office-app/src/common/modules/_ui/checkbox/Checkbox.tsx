import React from 'react';
import { cn } from '@support/preset-style/lib/utils';

import { CheckIcon } from '@heroicons/react/16/solid';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <>
      <input type="checkbox" {...props} className="sr-only peer" />
      <span
        className={cn(
          'inline-flex items-center justify-center w-4 h-4 border border-solid border-gray-400/50 rounded-xs align-middle peer-checked:border-0 peer-checked:bg-primary peer-disabled:bg-disabled-background/50 peer-disabled:opacity-50 [&>svg]:hidden peer-checked:[&>svg]:block peer-disabled:[&>svg]:hidden',
          className,
        )}
      >
        <CheckIcon className="w-3 h-3 stroke-2 fill-primary-foreground" />
      </span>
    </>
  );
};
