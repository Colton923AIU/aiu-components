import React, { useState, ChangeEvent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer, DrawerSide } from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    open: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

// Wrapper for interactive examples
const DrawerWrapper = ({ side = 'right' as DrawerSide, initialOpen = false, ...props }) => {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button 
        onClick={() => setOpen(true)}
        style={{ 
          padding: '8px 16px', 
          background: '#1976d2', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Open {side} drawer
      </button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        side={side}
        {...props}
      />
    </div>
  );
};

// Basic right drawer
export const RightDrawer: Story = {
  render: () => (
    <DrawerWrapper 
      title="Right Drawer"
      side={'right' as DrawerSide}
    >
      <p>This is a basic drawer that slides in from the right side.</p>
      <p>Click outside or the X button to close it.</p>
    </DrawerWrapper>
  ),
};

// Left drawer
export const LeftDrawer: Story = {
  render: () => (
    <DrawerWrapper 
      title="Left Drawer"
      side={'left' as DrawerSide}
    >
      <p>This drawer slides in from the left side, similar to a navigation menu.</p>
      <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Settings</li>
        <li>Help</li>
        <li>Logout</li>
      </ul>
    </DrawerWrapper>
  ),
};

// Top drawer
export const TopDrawer: Story = {
  render: () => (
    <DrawerWrapper 
      title="Top Drawer"
      side={'top' as DrawerSide}
    >
      <p>This drawer slides in from the top of the screen.</p>
      <p>It can be useful for notifications or temporary messages.</p>
    </DrawerWrapper>
  ),
};

// Bottom drawer
export const BottomDrawer: Story = {
  render: () => (
    <DrawerWrapper 
      title="Bottom Drawer"
      side={'bottom' as DrawerSide}
    >
      <p>This drawer slides in from the bottom of the screen.</p>
      <p>It's great for mobile interfaces or action sheets.</p>
    </DrawerWrapper>
  ),
};

// Drawer with footer
export const WithFooter: Story = {
  render: () => (
    <DrawerWrapper 
      title="Drawer with Footer"
      footer={
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button style={{ padding: '8px 16px', background: '#f5f5f5', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
          <button style={{ padding: '8px 16px', background: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
        </div>
      }
    >
      <p>This drawer includes a footer with action buttons.</p>
      <p>Footers are useful for forms or when users need to take actions.</p>
    </DrawerWrapper>
  ),
};

// Form drawer example
export const FormDrawer: Story = {
  render: () => {
    const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
      });
    };
    
    return (
      <DrawerWrapper 
        title="Contact Form"
        footer={
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <button style={{ padding: '8px 16px', background: '#f5f5f5', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
            <button style={{ padding: '8px 16px', background: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
          </div>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '4px' }}>Name</label>
            <input 
              type="text" 
              name="name"
              value={formValues.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px' }}>Email</label>
            <input 
              type="email" 
              name="email"
              value={formValues.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px' }}>Message</label>
            <textarea 
              name="message"
              value={formValues.message}
              onChange={handleChange}
              rows={4}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
        </div>
      </DrawerWrapper>
    );
  },
};

// Custom styled drawer
export const CustomStyled: Story = {
  render: () => (
    <DrawerWrapper 
      title="Custom Styled Drawer"
      style={{ 
        backgroundColor: '#f8f9fa',
        borderLeft: '4px solid #1976d2',
      }}
    >
      <p>This drawer has custom styling applied to it.</p>
      <p>You can customize the appearance to match your app's design.</p>
    </DrawerWrapper>
  ),
}; 