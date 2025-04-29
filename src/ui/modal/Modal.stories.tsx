import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

// We need a wrapper component for Modal since it's a controlled component
const ModalWrapper = ({ children, title, footer }: { children: React.ReactNode, title?: React.ReactNode, footer?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        footer={footer}
      >
        {children}
      </Modal>
    </div>
  );
};

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => (
    <ModalWrapper>
      <p>This is a basic modal dialog content.</p>
    </ModalWrapper>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <ModalWrapper title="Modal Title">
      <p>This modal has a title.</p>
    </ModalWrapper>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <ModalWrapper
      footer={
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button style={{ padding: '8px 16px' }}>Cancel</button>
          <button
            style={{
              backgroundColor: '#0078d4',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '2px'
            }}
          >
            Confirm
          </button>
        </div>
      }
    >
      <p>This modal has a footer with action buttons.</p>
    </ModalWrapper>
  ),
};

export const Complete: Story = {
  render: () => (
    <ModalWrapper
      title="Delete Confirmation"
      footer={
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button style={{ padding: '8px 16px' }}>Cancel</button>
          <button
            style={{
              backgroundColor: '#d32f2f',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '2px'
            }}
          >
            Delete
          </button>
        </div>
      }
    >
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </ModalWrapper>
  ),
}; 