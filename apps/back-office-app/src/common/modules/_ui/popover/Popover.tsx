import React from 'react';
import { cn } from '@support/preset-style/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

/**
 * Popover
 */
const Popover = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex relative align-middle">{children}</div>
);

interface PopoverTriggerProps {
  /** Popover 열림/닫힘 상태  */
  isOpen?: boolean;
  /** popover trigger */
  children: React.ReactNode;
}

/** Popover trigger  */
const PopoverTrigger = ({ isOpen, children }: PopoverTriggerProps) => (
  <button type="button" aria-expanded={isOpen} className="peer">
    {children}
  </button>
);

const PopoverContentVariants = cva(
  'hidden absolute min-w-40 p-2 rounded-xl border border-solid border-gray-400/50 bg-background shadow peer-aria-expanded:block',
  {
    variants: {
      placement: {
        top: '-top-2 left-1/2 -translate-x-1/2 -translate-y-full',
        topRight: '-top-2 right-0 -translate-y-full',
        topLeft: '-top-2 left-0  -translate-y-full',
        right: 'top-1/2 -right-2 translate-x-full -translate-y-1/2',
        bottom: 'top-full left-1/2 mt-2 -translate-x-1/2 ',
        bottomRight: 'top-full right-0 mt-2',
        bottomLeft: 'top-full left-0 mt-2',
        left: 'top-1/2 -left-2 -translate-x-full -translate-y-1/2',
      },
    },
    defaultVariants: {
      placement: 'bottom',
    },
  },
);

interface PopoverContentProps extends VariantProps<typeof PopoverContentVariants> {
  /** Popover 스타일 */
  className?: string;
  /** Popover 콘텐츠 */
  children: React.ReactNode;
}

/**
 * Popover content
 */
const PopoverContent = ({ placement = 'bottom', className, children }: PopoverContentProps) => (
  <div className={cn(PopoverContentVariants({ placement }), className)}>{children}</div>
);

export { Popover, PopoverTrigger, PopoverContent };
