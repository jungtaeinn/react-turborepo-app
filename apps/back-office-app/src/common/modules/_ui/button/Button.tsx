import React from 'react';
import { cn } from '@support/preset-style/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const ButtonVariants = cva(
  'inline-flex items-center justify-center h-10 px-4 gap-x-1 rounded-md text-sm font-medium disabled:cursor-default [&>svg]:w-4 [&>svg]:h-4',
  {
    variants: {
      variant: {
        solid: 'bg-primary text-primary-foreground disabled:bg-neutral-300',
        destructive: 'bg-destructive text-primary-foreground hover:bg-red-800',
        ghost: 'border border-solid border-primary text-primary disabled:border-neutral-300 disabled:text-neutral-300',
        outline: 'border border-solid border-gray-400/50 bg-background text-foreground disabled:text-neutral-300',
        text: 'text-foreground',
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
