import React from 'react';
import { cn } from '@support/preset-style/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const ButtonVariants = cva(
  'inline-flex items-center justify-center h-10 px-4 gap-x-1 rounded-md text-sm font-medium cursor-pointer disabled:cursor-default [&>svg]:w-4 [&>svg]:h-4',
  {
    variants: {
      variant: {
        solid: 'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 disabled:bg-neutral-300',
        destructive: 'bg-red-700 text-white hover:bg-red-800',
        ghost:
          'border border-solid border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600 focus:border-blue-600 focus:text-blue-600 disabled:border-neutral-300 disabled:text-neutral-300',
        outline: 'border border-solid border-gray-300 bg-white text-neutral-800 disabled:text-neutral-300',
        text: 'text-neutral-800',
      },
      size: {
        default: 'h-10 rounded-sm px-4 py-2',
        small: 'h-9 px-3',
        large: 'h-11 px-5 text-lg [&>svg]:w-4.5 [&>svg]:h-4.5 gap-x-1.5',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'default',
    },
  },
);

interface ButtonProps extends VariantProps<typeof ButtonVariants> {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Button = ({ variant, size, className, disabled, children }: ButtonProps) => {
  return (
    <button className={cn(ButtonVariants({ variant, size }), className)} disabled={disabled}>
      {children}
    </button>
  );
};
