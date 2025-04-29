import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    onClose: { action: 'closed' }
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    type: 'info',
    children: 'This is an informational alert.',
  }
};

export const Success: Story = {
  args: {
    type: 'success',
    children: 'Operation completed successfully!',
  }
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: 'This action may have consequences.',
  }
};

export const Error: Story = {
  args: {
    type: 'error',
    children: 'An error occurred while processing your request.',
  }
};

export const WithTitle: Story = {
  args: {
    type: 'info',
    title: 'Information',
    children: 'This alert has a title.',
  }
};

export const WithCloseButton: Story = {
  args: {
    type: 'success',
    children: 'This alert can be dismissed.',
    onClose: () => console.log('Alert closed'),
  }
};

export const CompleteExample: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    children: 'This is a complete alert example with title and close button.',
    onClose: () => console.log('Alert closed'),
  }
};