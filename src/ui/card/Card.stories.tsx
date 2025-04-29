import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'text',
    },
    shadow: {
      control: 'text',
    },
    radius: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    children: 'This is a basic card content.',
  }
};

export const WithHeader: Story = {
  args: {
    header: 'Card Header',
    children: 'Card content with a header.',
  }
};

export const WithFooter: Story = {
  args: {
    children: 'Card content with a footer.',
    footer: 'Card Footer'
  }
};

export const WithHeaderAndFooter: Story = {
  args: {
    header: 'Card Header',
    children: 'Card content with both header and footer.',
    footer: 'Card Footer'
  }
};

export const CustomPadding: Story = {
  args: {
    children: 'This card has custom padding.',
    padding: '2rem'
  }
};

export const CustomRadius: Story = {
  args: {
    children: 'This card has a custom border radius.',
    radius: '16px'
  }
};

export const CustomShadow: Story = {
  args: {
    children: 'This card has a custom shadow.',
    shadow: '0 8px 16px rgba(0,0,0,0.16)'
  }
}; 