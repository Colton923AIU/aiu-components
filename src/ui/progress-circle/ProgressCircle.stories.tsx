import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressCircle } from './ProgressCircle';

const meta: Meta<typeof ProgressCircle> = {
  title: 'UI/ProgressCircle',
  component: ProgressCircle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    },
    size: {
      control: { type: 'number', min: 20, max: 200, step: 4 }
    },
    thickness: {
      control: { type: 'number', min: 1, max: 20, step: 1 }
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressCircle>;

export const Default: Story = {
  args: {
    value: 65,
  },
};

export const WithPercentLabel: Story = {
  args: {
    value: 42,
    label: '42%',
  },
};

export const LargeSize: Story = {
  args: {
    value: 75,
    size: 120,
    thickness: 10,
    label: '75%',
  },
};

export const CustomColor: Story = {
  args: {
    value: 90,
    color: '#8e24aa',
    label: '90%',
  },
};

export const ThinCircle: Story = {
  args: {
    value: 60,
    thickness: 2,
    size: 80,
  },
};

export const ThickCircle: Story = {
  args: {
    value: 85,
    thickness: 12,
    size: 100,
  },
};

export const CustomLabel: Story = {
  args: {
    value: 100,
    label: '✓',
    color: '#4caf50',
    size: 80,
  },
};

export const ProgressSet: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <ProgressCircle value={25} label="25%" size={80} color="#ff9800" />
        <div style={{ marginTop: '8px' }}>Storage</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ProgressCircle value={67} label="67%" size={80} color="#2196f3" />
        <div style={{ marginTop: '8px' }}>CPU</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ProgressCircle value={42} label="42%" size={80} color="#f44336" />
        <div style={{ marginTop: '8px' }}>Memory</div>
      </div>
    </div>
  ),
}; 