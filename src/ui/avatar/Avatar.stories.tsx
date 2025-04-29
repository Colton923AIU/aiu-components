import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'User Avatar',
    size: 'md'
  }
};

export const WithInitials: Story = {
  args: {
    initials: 'JD',
    size: 'md'
  }
};

export const SmallSize: Story = {
  args: {
    initials: 'SM',
    size: 'sm'
  }
};

export const LargeSize: Story = {
  args: {
    initials: 'LG',
    size: 'lg'
  }
};

export const SquareShape: Story = {
  args: {
    initials: 'SQ',
    shape: 'square'
  }
};

export const CustomSize: Story = {
  args: {
    initials: 'CS',
    size: 64
  }
}; 