import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'modules/Input',
  component: Input,
  parameters: {
    layout: 'centered',
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
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
  },
};
