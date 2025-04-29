import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'UI/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    p: { 
      control: 'text',
      description: 'Padding (number for px or string for CSS value)',
    },
    m: { 
      control: 'text',
      description: 'Margin (number for px or string for CSS value)',
    },
    bg: { 
      control: 'color',
      description: 'Background color',
    },
    border: { 
      control: 'text',
      description: 'Border style (CSS border value)',
    },
    radius: { 
      control: 'text',
      description: 'Border radius (number for px or string for CSS value)',
    },
    shadow: { 
      control: 'text',
      description: 'Box shadow (CSS shadow value)',
    },
    width: { 
      control: 'text',
      description: 'Width (number for px or string for CSS value)',
    },
    height: { 
      control: 'text',
      description: 'Height (number for px or string for CSS value)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

// Basic Box with padding
export const Basic: Story = {
  args: {
    p: 16,
    border: '1px solid #eee',
    width: 200,
    height: 100,
    children: 'Basic Box',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic Box with padding, border, width and height.',
      },
    },
  },
};

// Box with background color
export const WithBackground: Story = {
  args: {
    p: 16,
    bg: '#f5f5f5',
    radius: 8,
    width: 200,
    height: 100,
    children: 'Box with background',
  },
  parameters: {
    docs: {
      description: {
        story: 'Box with background color and rounded corners.',
      },
    },
  },
};

// Box with shadow
export const WithShadow: Story = {
  args: {
    p: 16,
    shadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    radius: 8,
    width: 200,
    height: 100,
    children: 'Box with shadow',
  },
  parameters: {
    docs: {
      description: {
        story: 'Box with shadow effect for depth.',
      },
    },
  },
};

// Box with string values for padding and margin
export const WithStringDimensions: Story = {
  args: {
    p: '1rem 2rem',
    m: '1rem',
    border: '1px solid #ddd',
    width: '250px',
    height: 'auto',
    children: 'Box with string dimensions',
  },
  parameters: {
    docs: {
      description: {
        story: 'Box using string values for padding and margin.',
      },
    },
  },
};

// Box as a card
export const AsCard: Story = {
  args: {
    p: 24,
    bg: 'white',
    radius: 12,
    shadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: 300,
    children: (
      <div>
        <h3 style={{ margin: '0 0 16px 0' }}>Card Title</h3>
        <p style={{ margin: '0 0 24px 0', color: '#666' }}>
          This is a Box component styled to look like a card. It can be used for various UI elements.
        </p>
        <button 
          style={{ 
            background: '#1976d2', 
            color: 'white', 
            border: 'none', 
            padding: '8px 16px', 
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Learn More
        </button>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Box styled as a card component with title, content and button.',
      },
    },
  },
};

// Box with different border radius values
export const BorderRadiusVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Box p={16} border="1px solid #ddd" radius={0} width={100} height={100}>
        Square
      </Box>
      <Box p={16} border="1px solid #ddd" radius={8} width={100} height={100}>
        Rounded
      </Box>
      <Box p={16} border="1px solid #ddd" radius="50%" width={100} height={100} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Circle
      </Box>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Boxes with different border radius values: square, rounded, and circle.',
      },
    },
  },
};

// Nested boxes
export const NestedBoxes: Story = {
  render: () => (
    <Box p={24} bg="#f9f9f9" border="1px solid #eee" radius={8} width={400}>
      <h3 style={{ margin: '0 0 16px 0' }}>Parent Box</h3>
      <Box p={16} bg="white" border="1px solid #ddd" radius={4} m="0 0 16px 0">
        <h4 style={{ margin: '0 0 8px 0' }}>Child Box 1</h4>
        <p style={{ margin: 0, fontSize: '14px' }}>This is a nested box inside the parent.</p>
      </Box>
      <Box p={16} bg="white" border="1px solid #ddd" radius={4}>
        <h4 style={{ margin: '0 0 8px 0' }}>Child Box 2</h4>
        <p style={{ margin: 0, fontSize: '14px' }}>Another nested box inside the parent.</p>
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of nested Box components to create complex layouts.',
      },
    },
  },
};

// Box used for notification
export const NotificationBox: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Box 
        p="12px 16px" 
        bg="#e8f5e9" 
        border="1px solid #c8e6c9" 
        radius={4}
        style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}
      >
        <div style={{ marginRight: '12px', color: '#4caf50', fontSize: '20px' }}>✓</div>
        <div>
          <div style={{ fontWeight: 'bold' }}>Success</div>
          <div style={{ fontSize: '14px' }}>Operation completed successfully.</div>
        </div>
      </Box>
      
      <Box 
        p="12px 16px" 
        bg="#fff3e0" 
        border="1px solid #ffe0b2" 
        radius={4}
        style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}
      >
        <div style={{ marginRight: '12px', color: '#ff9800', fontSize: '20px' }}>⚠️</div>
        <div>
          <div style={{ fontWeight: 'bold' }}>Warning</div>
          <div style={{ fontSize: '14px' }}>This action cannot be undone.</div>
        </div>
      </Box>
      
      <Box 
        p="12px 16px" 
        bg="#ffebee" 
        border="1px solid #ffcdd2" 
        radius={4}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <div style={{ marginRight: '12px', color: '#f44336', fontSize: '20px' }}>✖</div>
        <div>
          <div style={{ fontWeight: 'bold' }}>Error</div>
          <div style={{ fontSize: '14px' }}>Something went wrong. Please try again.</div>
        </div>
      </Box>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Box components styled as notification elements: success, warning, and error.',
      },
    },
  },
}; 