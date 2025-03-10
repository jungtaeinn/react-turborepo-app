import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'modules/Checkbox',
  component: Checkbox,
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
  args: {},
};

export const checked: Story = {
  args: {
    checked: true,
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
  },
};
