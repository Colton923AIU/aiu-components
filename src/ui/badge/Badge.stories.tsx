import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'subtle'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'color',
    },
    dot: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: '4',
  }
};

export const WithText: Story = {
  args: {
    children: 'New',
  }
};

export const Solid: Story = {
  args: {
    children: '7',
    variant: 'solid'
  }
};

export const Outline: Story = {
  args: {
    children: '12',
    variant: 'outline'
  }
};

export const Subtle: Story = {
  args: {
    children: '24',
    variant: 'subtle'
  }
};

export const SmallSize: Story = {
  args: {
    children: '5',
    size: 'sm'
  }
};

export const LargeSize: Story = {
  args: {
    children: '99+',
    size: 'lg'
  }
};

export const CustomColor: Story = {
  args: {
    children: '3',
    color: '#8e24aa'
  }
};

export const DotMode: Story = {
  args: {
    dot: true,
    color: '#e53935'
  }
}; 