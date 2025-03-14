import React from 'react';
import { cn } from '@support/preset-style/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';

const avatarVariants = cva(
  'relative overflow-hidden rounded-full before:absolute before:inset-0 before:z-1 before:border before:border-solid before:border-black/3 before:rounded-full',
  {
    variants: {
      size: {
        default: 'w-10 h-10',
        small: 'w-6 h-6',
        large: 'w-15 h-15',
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
  imgSrc: string;
  /** avatar image alt */
  imgAlt?: string;
}

export const Avatar = ({ size, className, imgSrc, imgAlt = '' }: avatarProps) => {
  return (
    <div className={cn(avatarVariants({ size }), className)}>
      <Image src={imgSrc} alt={imgAlt} fill={true} className="aspect-square object-cover" />
    </div>
  );
};
