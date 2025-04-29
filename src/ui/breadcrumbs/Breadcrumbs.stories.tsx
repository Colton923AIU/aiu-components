import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'UI/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Current Page' },
    ],
  },
};

export const WithCustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Categories', href: '#' },
      { label: 'Current Page' },
    ],
    separator: '›',
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Home', href: '#', icon: '🏠' },
      { label: 'Products', href: '#', icon: '📦' },
      { label: 'Electronics', href: '#', icon: '💻' },
      { label: 'Current Item', icon: '🔍' },
    ],
  },
};

export const WithOnClick: Story = {
  args: {
    items: [
      { 
        label: 'Home', 
        onClick: () => console.log('Home clicked')
      },
      { 
        label: 'Products', 
        onClick: () => console.log('Products clicked')
      },
      { 
        label: 'Categories', 
        onClick: () => console.log('Categories clicked')
      },
      { label: 'Current Page' },
    ],
  },
};

export const WithArrowSeparator: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '#' },
      { label: 'User Settings', href: '#' },
      { label: 'Profile', href: '#' },
      { label: 'Edit Profile' },
    ],
    separator: '→',
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Home' },
    ],
  },
};

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Electronics', href: '#' },
      { label: 'Computers', href: '#' },
      { label: 'Laptops', href: '#' },
      { label: 'Gaming', href: '#' },
      { label: 'Current Item' },
    ],
  },
}; 