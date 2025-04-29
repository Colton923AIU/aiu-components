import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from './AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'UI/AvatarGroup',
  component: AvatarGroup,
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
    max: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

// Sample avatar data
const avatars = [
  { src: 'https://i.pravatar.cc/150?img=1', alt: 'User 1' },
  { src: 'https://i.pravatar.cc/150?img=2', alt: 'User 2' },
  { src: 'https://i.pravatar.cc/150?img=3', alt: 'User 3' },
  { src: 'https://i.pravatar.cc/150?img=4', alt: 'User 4' },
  { src: 'https://i.pravatar.cc/150?img=5', alt: 'User 5' },
  { src: 'https://i.pravatar.cc/150?img=6', alt: 'User 6' },
  { src: 'https://i.pravatar.cc/150?img=7', alt: 'User 7' },
  { src: 'https://i.pravatar.cc/150?img=8', alt: 'User 8' },
];

export const Default: Story = {
  args: {
    avatars: avatars.slice(0, 5),
    size: 'md',
    shape: 'circle',
  },
};

export const WithMax: Story = {
  args: {
    avatars,
    max: 3,
    size: 'md',
    shape: 'circle',
  },
};

export const SmallSize: Story = {
  args: {
    avatars: avatars.slice(0, 4),
    size: 'sm',
    shape: 'circle',
  },
};

export const LargeSize: Story = {
  args: {
    avatars: avatars.slice(0, 4),
    size: 'lg',
    shape: 'circle',
  },
};

export const SquareShape: Story = {
  args: {
    avatars: avatars.slice(0, 4),
    size: 'md',
    shape: 'square',
  },
};

export const WithInitials: Story = {
  args: {
    avatars: [
      { initials: 'JD', alt: 'John Doe' },
      { initials: 'AS', alt: 'Alice Smith' },
      { initials: 'RJ', alt: 'Robert Johnson' },
      { initials: 'MP', alt: 'Mary Parker' },
    ],
    size: 'md',
    shape: 'circle',
  },
};

export const Mixed: Story = {
  args: {
    avatars: [
      { src: 'https://i.pravatar.cc/150?img=1', alt: 'User 1' },
      { initials: 'AS', alt: 'Alice Smith' },
      { src: 'https://i.pravatar.cc/150?img=3', alt: 'User 3' },
      { initials: 'MP', alt: 'Mary Parker' },
      { src: 'https://i.pravatar.cc/150?img=5', alt: 'User 5' },
      { initials: 'TJ', alt: 'Tom Jones' },
    ],
    max: 4,
    size: 'md',
    shape: 'circle',
  },
}; 