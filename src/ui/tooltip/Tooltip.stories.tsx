import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    delay: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
  },
};

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    position: 'top',
    children: <button style={{ padding: '8px 16px' }}>Top Tooltip</button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    position: 'bottom',
    children: <button style={{ padding: '8px 16px' }}>Bottom Tooltip</button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    position: 'left',
    children: <button style={{ padding: '8px 16px' }}>Left Tooltip</button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    position: 'right',
    children: <button style={{ padding: '8px 16px' }}>Right Tooltip</button>,
  },
};

export const WithDelay: Story = {
  args: {
    content: 'Tooltip with 500ms delay',
    delay: 500,
    children: <button style={{ padding: '8px 16px' }}>Delayed Tooltip</button>,
  },
};

export const WithHtmlContent: Story = {
  args: {
    content: (
      <div>
        <strong>Rich content</strong>
        <p style={{ margin: '4px 0' }}>With multiple elements</p>
        <span style={{ color: '#ffcc00' }}>And styling</span>
      </div>
    ),
    children: <button style={{ padding: '8px 16px' }}>Rich Content Tooltip</button>,
  },
}; 