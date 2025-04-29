import React, { useState, useEffect, ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar, SnackbarPosition } from './Snackbar';

const meta: Meta<typeof Snackbar> = {
  title: 'UI/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['bottom', 'top', 'bottom-left', 'bottom-right', 'top-left', 'top-right'],
      description: 'Position of the snackbar on the screen',
    },
    autoHideDuration: {
      control: { type: 'number', min: 1000, step: 1000 },
      description: 'Time in milliseconds before auto-hiding',
    },
    open: {
      control: 'boolean',
      description: 'Whether the snackbar is visible',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

interface SnackbarTriggerProps {
  initialOpen?: boolean;
  position?: SnackbarPosition;
  message?: ReactNode;
  autoHideDuration?: number;
  action?: ReactNode;
  [key: string]: any;
}

// For all interactive examples
const SnackbarTrigger = ({ 
  initialOpen = false, 
  position = 'bottom', 
  message = 'This is a snackbar message', 
  autoHideDuration,
  action,
  ...props 
}: SnackbarTriggerProps) => {
  const [open, setOpen] = useState(initialOpen);
  
  // Reset state when story changes
  useEffect(() => {
    setOpen(initialOpen);
  }, [initialOpen]);

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button 
        onClick={() => setOpen(true)} 
        style={{ 
          padding: '8px 16px', 
          background: '#1976d2', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer' 
        }}
      >
        Show Snackbar
      </button>
      <Snackbar 
        open={open} 
        message={message}
        position={position}
        autoHideDuration={autoHideDuration}
        action={action}
        onClose={() => setOpen(false)}
        {...props}
      />
    </div>
  );
};

// Basic snackbar
export const Default: Story = {
  render: () => (
    <SnackbarTrigger 
      message="This is a simple snackbar notification"
      autoHideDuration={5000}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic snackbar that appears at the bottom of the screen and automatically hides after 5 seconds.',
      },
    },
  },
};

// Snackbar with action button
export const WithAction: Story = {
  render: () => (
    <SnackbarTrigger 
      message="Your file has been deleted"
      action={
        <button 
          onClick={() => alert('Undo action triggered')} 
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#90caf9', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            padding: '4px 8px',
          }}
        >
          UNDO
        </button>
      }
      autoHideDuration={6000}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Snackbar with an action button that allows users to undo the operation.',
      },
    },
  },
};

// Snackbar at different positions
export const TopPosition: Story = {
  render: () => (
    <SnackbarTrigger 
      message="This snackbar appears at the top"
      position="top"
      autoHideDuration={5000}
    />
  ),
};

export const BottomLeftPosition: Story = {
  render: () => (
    <SnackbarTrigger 
      message="This snackbar appears at the bottom left"
      position="bottom-left"
      autoHideDuration={5000}
    />
  ),
};

export const TopRightPosition: Story = {
  render: () => (
    <SnackbarTrigger 
      message="This snackbar appears at the top right"
      position="top-right"
      autoHideDuration={5000}
    />
  ),
};

// Snackbar with different durations
export const LongDuration: Story = {
  render: () => (
    <SnackbarTrigger 
      message="This snackbar stays visible for 10 seconds"
      autoHideDuration={10000}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Snackbar with a longer display duration for more important messages.',
      },
    },
  },
};

export const NoDuration: Story = {
  render: () => (
    <SnackbarTrigger 
      message="This snackbar won't automatically disappear until closed"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Snackbar that remains visible until explicitly closed by the user.',
      },
    },
  },
};

// Snackbar with rich content
export const RichContent: Story = {
  render: () => (
    <SnackbarTrigger 
      message={
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '20px' }}>✅</span>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Success!</div>
            <div>Your settings have been saved successfully.</div>
          </div>
        </div>
      }
      autoHideDuration={5000}
      style={{ padding: '12px 24px' }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Snackbar with rich content including an icon and multi-line text.',
      },
    },
  },
};

// Snackbar with custom styling
export const CustomStyling: Story = {
  render: () => (
    <SnackbarTrigger 
      message="This is a custom styled snackbar"
      autoHideDuration={5000}
      style={{ 
        background: 'linear-gradient(90deg, #4caf50, #8bc34a)',
        color: '#fff',
        borderRadius: '4px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Snackbar with custom styling applied for a unique look.',
      },
    },
  },
};

// Error snackbar
export const ErrorSnackbar: Story = {
  render: () => (
    <SnackbarTrigger 
      message="An error occurred while processing your request"
      autoHideDuration={6000}
      style={{ background: '#f44336' }}
      action={
        <button 
          onClick={() => alert('Retry action triggered')} 
          style={{ 
            background: 'none', 
            border: '1px solid white', 
            color: 'white', 
            padding: '4px 8px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          RETRY
        </button>
      }
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Error-styled snackbar with a retry action button.',
      },
    },
  },
};

// Multiple consecutive snackbars example
export const ConsecutiveSnackbars: Story = {
  render: () => {
    interface SnackbarItem {
      id: number;
      message: string;
    }
    
    const [snackbars, setSnackbars] = useState<SnackbarItem[]>([]);
    const [nextId, setNextId] = useState(1);
    
    const addSnackbar = () => {
      const id = nextId;
      setNextId(prev => prev + 1);
      const newSnackbar = {
        id,
        message: `Notification ${id}`,
      };
      setSnackbars(prev => [...prev, newSnackbar]);
      
      // Auto remove after 3 seconds
      setTimeout(() => {
        setSnackbars(prev => prev.filter(snack => snack.id !== id));
      }, 3000);
    };
    
    return (
      <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button 
          onClick={addSnackbar} 
          style={{ 
            padding: '8px 16px', 
            background: '#1976d2', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Add Notification
        </button>
        
        {snackbars.map((snackbar, index) => (
          <Snackbar
            key={snackbar.id}
            open={true}
            message={snackbar.message}
            position="bottom-right"
            style={{ bottom: `${(index * 64) + 32}px` }}
            onClose={() => setSnackbars(prev => prev.filter(s => s.id !== snackbar.id))}
          />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to display multiple stacked snackbars.',
      },
    },
  },
}; 