import React from 'react';
import { cn } from '@support/preset-style/lib/utils';

interface CheckboxProps {
  className?: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
}

export const Input = ({ className, type, placeholder, disabled }: CheckboxProps) => {
  return (
    <>
      <input
        className={cn(
          'flex basis-full h-10 py-1 px-2.5 border border-solid border-gray-300 rounded-md text-neutral-800 text-sm placeholder:text-neutral-400 focus:border-blue-500 disabled:bg-neutral-100',
          className,
        )}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
    </>
  );
};

export const InputGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative">{children}</div>;
};
