import React from 'react';
import { Avatar } from '../avatar/Avatar';
import { FolderIcon, MagnifyingGlassIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Input, InputGroup } from '../input/Input';

const ThemeToggleTrigger = () => (
  <button type="button" className="w-8 h-8 p-1 rounded-full text-foreground/80 cursor-pointer hover:bg-gray-200/30">
    <SunIcon className="w-6 h-6 stroke-1 block [html.dark_&]:hidden" />
    <MoonIcon className="w-6 h-6 stroke-1 hidden [html.dark_&]:block" />
  </button>
);

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full py-4 px-5 space-x-3 lg:space-x-0 bg-background">
      <h1 className="flex-none">
        <Link href="/" className="flex items-center text-foreground text-lg">
          <span className="mr-2 p-2 bg-box-invert-background/90 rounded text-box-invert-foreground">
            <FolderIcon className="w-5 h-5" />
          </span>
          <span className="hidden md:block">Store Admin</span>
        </Link>
      </h1>

      <InputGroup className="w-full lg:flex lg:w-80">
        <MagnifyingGlassIcon className="absolute top-1/2 left-2 w-4 h-4 -translate-y-1/2" />
        <Input type="search" placeholder="search..." size="small" shape="rounded" icons="prefix" />
      </InputGroup>

      <div className="flex items-center space-x-2 lg:space-x-4">
        <ThemeToggleTrigger />
        <a href="#">
          <Avatar userName="JK" />
        </a>
      </div>
    </header>
  );
};

export { Header, ThemeToggleTrigger };
