import React from 'react';
import { cn } from '@support/preset-style/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const InputVariants = cva(
  'flex w-full h-10 py-1 px-2.5 border border-solid border-gray-400/50 text-foreground text-sm placeholder:text-disabled-foreground/60 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'w-10 h-10',
        small: 'h-8',
      },
      shape: {
        default: 'rounded-md',
        rounded: 'rounded-2xl',
      },
      icons: {
        prefix: 'pl-8',
        suffix: 'pr-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      shape: 'default',
    },
  },
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof InputVariants> {
  className?: string;
  type: 'text' | 'tel' | 'number' | 'search' | 'email' | 'password';
}

export const Input = ({ variant, shape, icons, className, ...props }: InputProps) => {
  return <input className={cn(InputVariants({ variant, shape, icons }), className)} {...props} />;
};

interface InputGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const InputGroup = ({ children, className }: InputGroupProps) => {
  return <div className={cn('flex items-center relative', className)}>{children}</div>;
};
