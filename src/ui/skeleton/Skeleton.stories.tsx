import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: 'Width of the skeleton (number in px or string value like "100%")',
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton (number in px or string value)',
    },
    borderRadius: {
      control: 'text',
      description: 'Border radius of the skeleton (number in px or string value)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: 200,
    height: 24,
    borderRadius: 6,
  },
};

export const Rectangle: Story = {
  args: {
    width: 300,
    height: 40,
    borderRadius: 4,
  },
};

export const Circle: Story = {
  args: {
    width: 80,
    height: 80,
    borderRadius: '50%',
  },
};

export const Pill: Story = {
  args: {
    width: 150,
    height: 30,
    borderRadius: 15,
  },
};

export const Card: Story = {
  render: () => (
    <div style={{ width: 320, padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
      <Skeleton width="70%" height={24} borderRadius={4} style={{ marginBottom: 8 }} />
      <Skeleton width="100%" height={16} borderRadius={4} style={{ marginBottom: 8 }} />
      <Skeleton width="100%" height={16} borderRadius={4} style={{ marginBottom: 8 }} />
      <Skeleton width="60%" height={16} borderRadius={4} style={{ marginBottom: 16 }} />
      <Skeleton width="40%" height={32} borderRadius={4} />
    </div>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <div style={{ width: 320, padding: 16, border: '1px solid #eee', borderRadius: 8, display: 'flex', gap: 16 }}>
      <Skeleton width={80} height={80} borderRadius="50%" />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
        <Skeleton width="80%" height={20} borderRadius={4} style={{ marginBottom: 8 }} />
        <Skeleton width="60%" height={16} borderRadius={4} style={{ marginBottom: 6 }} />
        <Skeleton width="40%" height={14} borderRadius={4} />
      </div>
    </div>
  ),
};

export const ArticlePreview: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <Skeleton width="100%" height={200} borderRadius={8} style={{ marginBottom: 16 }} />
      <Skeleton width="75%" height={28} borderRadius={4} style={{ marginBottom: 12 }} />
      <Skeleton width="100%" height={16} borderRadius={4} style={{ marginBottom: 8 }} />
      <Skeleton width="100%" height={16} borderRadius={4} style={{ marginBottom: 8 }} />
      <Skeleton width="60%" height={16} borderRadius={4} style={{ marginBottom: 12 }} />
      <div style={{ display: 'flex', gap: 8 }}>
        <Skeleton width={80} height={32} borderRadius={4} />
        <Skeleton width={100} height={32} borderRadius={4} />
      </div>
    </div>
  ),
}; 