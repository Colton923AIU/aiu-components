import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'color',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const WithLabel: Story = {
  args: {
    value: 65,
    label: 'Uploading files...',
  },
};

export const SmallSize: Story = {
  args: {
    value: 40,
    size: 'sm',
  },
};

export const MediumSize: Story = {
  args: {
    value: 60,
    size: 'md',
  },
};

export const LargeSize: Story = {
  args: {
    value: 80,
    size: 'lg',
  },
};

export const CustomColor: Story = {
  args: {
    value: 75,
    color: '#9c27b0',
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: 'Loading...',
  },
};

export const CompleteProgress: Story = {
  args: {
    value: 100,
    label: 'Upload complete!',
  },
};

export const ProgressStages: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Progress value={25} label="Step 1: Planning" />
      <Progress value={75} label="Step 2: Implementation" />
      <Progress value={50} label="Step 3: Testing" />
      <Progress value={10} label="Step 4: Deployment" />
    </div>
  ),
}; 