import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 12, 14, 16, 18, 24, 32],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'bold', 400, 500, 700],
    },
    color: {
      control: 'color',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    truncate: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is the default text component',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text size="xs">Extra Small Text (xs)</Text>
      <Text size="sm">Small Text (sm)</Text>
      <Text size="md">Medium Text (md)</Text>
      <Text size="lg">Large Text (lg)</Text>
      <Text size="xl">Extra Large Text (xl)</Text>
      <Text size={28}>Custom Size Text (28px)</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="bold">Bold weight text</Text>
      <Text weight={300}>Light weight text (300)</Text>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text color="#000000">Default black text</Text>
      <Text color="#0078d4">Primary blue text</Text>
      <Text color="#d32f2f">Error red text</Text>
      <Text color="#107c10">Success green text</Text>
      <Text color="#ca5010">Warning orange text</Text>
      <Text color="#605e5c">Neutral secondary text</Text>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Text align="left">Left aligned text block that demonstrates alignment</Text>
      <Text align="center">Center aligned text block that demonstrates alignment</Text>
      <Text align="right">Right aligned text block that demonstrates alignment</Text>
      <Text align="justify">
        Justified text that demonstrates alignment with a longer paragraph to show the effect more clearly.
        This text will be stretched to fill the entire width of its container.
      </Text>
    </div>
  ),
};

export const Truncated: Story = {
  args: {
    truncate: true,
    children: 'This is a very long text that will be truncated with ellipsis when it exceeds the available width of its container.',
    style: { width: '300px' },
  },
};

export const CustomElement: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text as="h1" size="xl" weight="bold">This is a Heading 1</Text>
      <Text as="h2" size="lg" weight="bold">This is a Heading 2</Text>
      <Text as="h3" size="md" weight="bold">This is a Heading 3</Text>
      <Text as="p">This is a paragraph element</Text>
      <Text as="span" size="sm" color="#605e5c">This is a small span element</Text>
    </div>
  ),
}; 