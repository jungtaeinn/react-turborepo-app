import React from 'react';
import { cn } from '@support/preset-style/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';

const avatarVariants = cva(
  'inline-flex overflow-hidden relative rounded-full align-middle before:absolute before:inset-0 before:z-1 before:border before:border-solid before:border-black/3 before:rounded-full',
  {
    variants: {
      size: {
        default: 'w-10 h-10',
        small: 'w-7 h-7 text-xs',
        large: 'w-15 h-15 text-lg',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

interface avatarProps extends VariantProps<typeof avatarVariants> {
  className?: string;
  /** avatar image src */
  imgSrc?: string;
  /** avatar image alt */
  imgAlt?: string;
  /** user 이름 */
  userName?: string;
}

export const Avatar = ({ size, className, imgSrc, imgAlt = '', userName }: avatarProps) => {
  return (
    <span className={cn(avatarVariants({ size }), className)}>
      {imgSrc ? (
        <Image src={imgSrc} alt={imgAlt} fill={true} className="aspect-square object-cover" />
      ) : (
        <span className="flex items-center justify-center aspect-square p-1 bg-slate-300/50 text-foreground text-center">
          {userName}
        </span>
      )}
    </span>
  );
};
