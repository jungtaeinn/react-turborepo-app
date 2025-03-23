import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'modules/Input',
  component: Input,
  parameters: {
    docs: {
      description: {},
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const basic: Story = {
  args: {
    type: 'text',
    placeholder: 'Username',
    className: 'w-60',
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Username',
    className: 'w-60',
  },
};
