import type { Meta } from '@storybook/react';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';

export default {
  title: 'modules/Popover',
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center h-full">
        <Story />
      </div>
    ),
  ],
} as Meta;

export const popover_closed = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <span className="inline-flex items-center justify-center h-10 px-4 gap-x-1 rounded-md text-sm font-medium border border-solid border-gray-400/50 bg-background text-foreground cursor-pointer">
          popover open
        </span>
      </PopoverTrigger>
      <PopoverContent>popover contents</PopoverContent>
    </Popover>
  );
};

export const popover_open_bottom = () => {
  return (
    <Popover>
      <PopoverTrigger isOpen={true}>
        <span className="inline-flex items-center justify-center h-10 px-4 gap-x-1 rounded-md text-sm font-medium border border-solid border-gray-400/50 bg-background text-foreground cursor-pointer">
          popover open
        </span>
      </PopoverTrigger>
      <PopoverContent>popover contents</PopoverContent>
    </Popover>
  );
};

export const popover_open_bottom_right = () => {
  return (
    <Popover>
      <PopoverTrigger isOpen={true}>
        <span className="inline-flex items-center justify-center h-10 px-4 gap-x-1 rounded-md text-sm font-medium border border-solid border-gray-400/50 bg-background text-foreground cursor-pointer">
          popover open
        </span>
      </PopoverTrigger>
      <PopoverContent placement="bottomRight">popover contents</PopoverContent>
    </Popover>
  );
};

export const popover_open_bottom_left = () => {
  return (
    <Popover>
      <PopoverTrigger isOpen={true}>
        <span className="inline-flex items-center justify-center h-10 px-4 gap-x-1 rounded-md text-sm font-medium border border-solid border-gray-400/50 bg-background text-foreground cursor-pointer">
          popover open
        </span>
      </PopoverTrigger>
      <PopoverContent placement="bottomLeft">popover contents</PopoverContent>
    </Popover>
  );
};

export const popover_open_top = () => {
  return (
    <Popover>
      <PopoverTrigger isOpen={true}>
        <span className="inline-flex items-center justify-center h-10 px-4 gap-x-1 rounded-md text-sm font-medium border border-solid border-gray-400/50 bg-background text-foreground cursor-pointer">
          popover open
        </span>
      </PopoverTrigger>
      <PopoverContent placement="top">popover contents</PopoverContent>
    </Popover>
  );
};

export const popover_open_top_right = () => {
  return (
    <Popover>
      <PopoverTrigger isOpen={true}>
        <span className="inline-flex items-center justify-center h-10 px-4 gap-x-1 rounded-md text-sm font-medium border border-solid border-gray-400/50 bg-background text-foreground cursor-pointer">
          popover open
        </span>
      </PopoverTrigger>
      <PopoverContent placement="topRight">popover contents</PopoverContent>
    </Popover>
  );
};

export const popover_open_top_left = () => {
  return (
    <Popover>
      <PopoverTrigger isOpen={true}>
        <span className="inline-flex items-center justify-center h-10 px-4 gap-x-1 rounded-md text-sm font-medium border border-solid border-gray-400/50 bg-background text-foreground cursor-pointer">
          popover open
        </span>
      </PopoverTrigger>
      <PopoverContent placement="topLeft">popover contents</PopoverContent>
    </Popover>
  );
};

export const popover_open_right = () => {
  return (
    <Popover>
      <PopoverTrigger isOpen={true}>
        <span className="inline-flex items-center justify-center h-10 px-4 gap-x-1 rounded-md text-sm font-medium border border-solid border-gray-400/50 bg-background text-foreground cursor-pointer">
          popover open
        </span>
      </PopoverTrigger>
      <PopoverContent placement="right">popover contents</PopoverContent>
    </Popover>
  );
};

export const popover_open_left = () => {
  return (
    <Popover>
      <PopoverTrigger isOpen={true}>
        <span className="inline-flex items-center justify-center h-10 px-4 gap-x-1 rounded-md text-sm font-medium border border-solid border-gray-400/50 bg-background text-foreground cursor-pointer">
          popover open
        </span>
      </PopoverTrigger>
      <PopoverContent placement="left">popover contents</PopoverContent>
    </Popover>
  );
};
