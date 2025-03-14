import type { Meta, StoryObj } from '@storybook/react';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'modules/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {},
    },
  },
  argTypes: {
    size: {
      options: ['default', 'small', 'large'],
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const avatar: Story = {
  args: {
    imgSrc:
      'https://images-kr.amoremall.com/fileupload/mainContents/2025/02/28/01_Main-banner_750x570_12429_2503_1w.jpg',
  },
};
