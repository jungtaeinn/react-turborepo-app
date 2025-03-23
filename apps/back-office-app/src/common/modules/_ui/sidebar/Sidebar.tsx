import React from 'react';
import { cn } from '@support/preset-style/lib/utils';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  className?: string;
  children: React.ReactNode;
}

const Sidebar = ({ className, children }: SidebarProps) => {
  return (
    <div
      className={cn(
        'flex flex-col w-60 h-dvh border-r border-solid border-gray-400/30 bg-sidebar-background/50',
        className,
      )}
    >
      {children}
    </div>
  );
};

const SidebarContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-auto py-4 overflow-y-auto">{children}</div>;
};

const SidebarFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-none justify-self-end">{children}</div>;
};

const SidebarGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="not-last:mb-4 py-2">{children}</div>;
};

const SidebarGroupLabel = ({ label }: { label: string }) => {
  return <div className="mb-2 px-4 text-sidebar-foreground text-xs">{label}</div>;
};

const SidebarMenu = ({ children }: { children: React.ReactNode }) => {
  return <ul className="flex flex-col gap-y-1">{children}</ul>;
};

interface SidebarMenuItemProps {
  href: string;
  SvgIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  menuName: string;
  isCurrentPage?: boolean;
}

const SidebarMenuItem = ({ href, SvgIcon, menuName, isCurrentPage }: SidebarMenuItemProps) => {
  return (
    <li className="flex flex-col gap-y-1">
      <a
        href={href}
        className="flex items-center px-4 py-1 text-sidebar-foreground font-medium hover:text-primary [&[aria-current=page]]:text-primary"
        aria-current={isCurrentPage ? 'page' : undefined}
      >
        <SvgIcon className="w-4 h-4 mr-2 stroke-2" />
        {menuName}
        <ChevronRightIcon className="w-4 h-4 ml-auto stroke-2" />
      </a>
    </li>
  );
};

export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem };
