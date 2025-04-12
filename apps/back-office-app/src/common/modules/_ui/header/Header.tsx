import React from 'react';
import { Avatar } from '../avatar/Avatar';
import { FolderIcon, MagnifyingGlassIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Input, InputGroup } from '../input/Input';
import { Popover, PopoverTrigger, PopoverContent } from '../popover/Popover';

const ThemeToggleTrigger = () => (
  <button type="button" className="w-8 h-8 p-1 rounded-full text-foreground/80 hover:bg-gray-200/30">
    <SunIcon className="w-6 h-6 stroke-1 block [html.dark_&]:hidden" />
    <MoonIcon className="w-6 h-6 stroke-1 hidden [html.dark_&]:block" />
  </button>
);

interface AccountInfoProps {
  /** user full name */
  userName: string;
  /** user email */
  userEmail: string;
}

const AccountInfo = ({ userName, userEmail }: AccountInfoProps) => (
  <div className="px-2 space-y-1">
    <p className="text-foreground text-sm font-bold">{userName}</p>
    <p className="text-foreground/60 text-xs">{userEmail}</p>
  </div>
);

const QuickMenu = ({ children }: { children: React.ReactNode }) => <ul role="menu">{children}</ul>;

const QuickMenuItem = ({ menuName }: { menuName: string }) => (
  <li role="none">
    <Link href="#" className="block py-1 px-2 rounded-sm text-foreground text-xs hover:bg-gray-400/20">
      {menuName}
    </Link>
  </li>
);

const Divider = () => <div className="h-px my-2 -mx-2 border-b border-solid border-gray-400/30"></div>;

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
        <Input type="search" placeholder="search..." variant="small" shape="rounded" icons="prefix" />
      </InputGroup>

      <div className="flex items-center space-x-2 lg:space-x-4">
        <ThemeToggleTrigger />

        <Popover>
          <PopoverTrigger isOpen={true}>
            <Avatar userName="WD" />
          </PopoverTrigger>
          <PopoverContent placement="bottomRight" className="w-50">
            <AccountInfo userName="wendy" userEmail="wendy@gmail.com" />
            <Divider />
            <QuickMenu>
              <QuickMenuItem menuName="Profile" />
              <QuickMenuItem menuName="Account" />
              <QuickMenuItem menuName="Help Center" />
            </QuickMenu>
            <Divider />
            <QuickMenu>
              <QuickMenuItem menuName="Logout" />
            </QuickMenu>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export { Header, ThemeToggleTrigger };
