import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'UI/Tag',
  component: Tag,
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
    onRemove: { action: 'removed' }
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Solid: Story = {
  args: {
    children: 'Solid Tag',
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Tag',
    variant: 'outline',
  },
};

export const Subtle: Story = {
  args: {
    children: 'Subtle Tag',
    variant: 'subtle',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Tag',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Tag',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Tag',
    size: 'lg',
  },
};

export const CustomColor: Story = {
  args: {
    children: 'Custom Color',
    color: '#8e24aa',
  },
};

export const Removable: Story = {
  args: {
    children: 'Removable Tag',
    onRemove: () => console.log('Tag removed'),
  },
};

export const TagGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag variant="solid" color="#1976d2">Technology</Tag>
      <Tag variant="solid" color="#388e3c">Nature</Tag>
      <Tag variant="solid" color="#f57c00">Travel</Tag>
      <Tag variant="solid" color="#d32f2f">Important</Tag>
      <Tag variant="outline" color="#7b1fa2">Entertainment</Tag>
      <Tag variant="outline" color="#0288d1">Education</Tag>
      <Tag variant="subtle" color="#00796b">Health</Tag>
      <Tag variant="subtle" color="#c2185b">Fashion</Tag>
    </div>
  ),
}; 