import React from 'react';
import { cn } from '@support/preset-style/lib/utils';

interface InputProps {
  className?: string;
  type: 'text' | 'tel' | 'number' | 'search' | 'email' | 'password';
  placeholder?: string;
  disabled?: boolean;
}

export const Input = ({ className, type, placeholder, disabled }: InputProps) => {
  return (
    <input
      className={cn(
        'flex basis-full h-10 py-1 px-2.5 border border-solid border-gray-400/50 rounded-md text-foreground text-sm placeholder:text-disabled-foreground/60 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export const InputGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative">{children}</div>;
};
