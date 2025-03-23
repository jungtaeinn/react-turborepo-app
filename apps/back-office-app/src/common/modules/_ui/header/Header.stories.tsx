import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'modules/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {},
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const header: Story = {};
