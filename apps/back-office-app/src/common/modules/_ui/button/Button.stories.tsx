import type { Meta, StoryObj } from '@storybook/react';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'modules/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {},
    },
  },
  argTypes: {
    variant: {
      options: ['solid', 'destructive', 'ghost', 'outline', 'text'],
      control: { type: 'radio' },
    },
    size: {
      options: ['default', 'small', 'large'],
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const solid: Story = {
  args: {
    children: 'Button',
  },
};

export const destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Button',
  },
};

export const ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};

export const outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
  },
};

export const with_icon_example = () => {
  return (
    <Button variant="solid" size="default">
      <Cog6ToothIcon />
      Button
    </Button>
  );
};
