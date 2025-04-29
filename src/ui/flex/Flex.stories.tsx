import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'UI/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { 
        type: 'select', 
        options: ['row', 'column', 'row-reverse', 'column-reverse'] 
      },
      description: 'The direction of the flex container',
      defaultValue: 'row',
    },
    align: {
      control: { 
        type: 'select', 
        options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'] 
      },
      description: 'How to align items along the cross axis',
      defaultValue: 'stretch',
    },
    justify: {
      control: { 
        type: 'select', 
        options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'] 
      },
      description: 'How to justify items along the main axis',
      defaultValue: 'flex-start',
    },
    gap: {
      control: 'text',
      description: 'Gap between flex items (e.g., "8px", "1rem")',
    },
    wrap: {
      control: 'boolean',
      description: 'Whether flex items should wrap onto multiple lines',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

// Create a basic box to use in examples
interface BoxProps {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Box: React.FC<BoxProps> = ({ children, width = 80, height = 80, color = '#e3f2fd' }) => (
  <div
    style={{
      width,
      height,
      backgroundColor: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #90caf9',
      borderRadius: '4px',
      padding: '8px',
      boxSizing: 'border-box',
    }}
  >
    {children}
  </div>
);

// Basic row layout
export const BasicRow: Story = {
  args: {
    direction: 'row',
    gap: '16px',
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic row layout with items in a horizontal line.',
      },
    },
  },
};

// Basic column layout
export const BasicColumn: Story = {
  args: {
    direction: 'column',
    gap: '16px',
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic column layout with items stacked vertically.',
      },
    },
  },
};

// Different alignments
export const AlignmentExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '500px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>align="flex-start"</h4>
        <Flex 
          align="flex-start" 
          style={{ height: '120px', background: '#f5f5f5', padding: '16px' }}
          gap="16px"
        >
          <Box height={40}>Small</Box>
          <Box height={60}>Medium</Box>
          <Box height={80}>Large</Box>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>align="center"</h4>
        <Flex 
          align="center" 
          style={{ height: '120px', background: '#f5f5f5', padding: '16px' }}
          gap="16px"
        >
          <Box height={40}>Small</Box>
          <Box height={60}>Medium</Box>
          <Box height={80}>Large</Box>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>align="flex-end"</h4>
        <Flex 
          align="flex-end" 
          style={{ height: '120px', background: '#f5f5f5', padding: '16px' }}
          gap="16px"
        >
          <Box height={40}>Small</Box>
          <Box height={60}>Medium</Box>
          <Box height={80}>Large</Box>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>align="stretch" (with auto height)</h4>
        <Flex 
          align="stretch" 
          style={{ height: '120px', background: '#f5f5f5', padding: '16px' }}
          gap="16px"
        >
          <Box height="auto">Auto</Box>
          <Box height="auto">Auto</Box>
          <Box height="auto">Auto</Box>
        </Flex>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of different alignment options along the cross axis.',
      },
    },
  },
};

// Different justify settings
export const JustifyExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '500px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>justify="flex-start"</h4>
        <Flex 
          justify="flex-start" 
          style={{ background: '#f5f5f5', padding: '16px' }}
          gap="16px"
        >
          <Box width={60}>1</Box>
          <Box width={60}>2</Box>
          <Box width={60}>3</Box>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>justify="center"</h4>
        <Flex 
          justify="center" 
          style={{ background: '#f5f5f5', padding: '16px' }}
          gap="16px"
        >
          <Box width={60}>1</Box>
          <Box width={60}>2</Box>
          <Box width={60}>3</Box>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>justify="flex-end"</h4>
        <Flex 
          justify="flex-end" 
          style={{ background: '#f5f5f5', padding: '16px' }}
          gap="16px"
        >
          <Box width={60}>1</Box>
          <Box width={60}>2</Box>
          <Box width={60}>3</Box>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>justify="space-between"</h4>
        <Flex 
          justify="space-between" 
          style={{ background: '#f5f5f5', padding: '16px' }}
        >
          <Box width={60}>1</Box>
          <Box width={60}>2</Box>
          <Box width={60}>3</Box>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>justify="space-around"</h4>
        <Flex 
          justify="space-around" 
          style={{ background: '#f5f5f5', padding: '16px' }}
        >
          <Box width={60}>1</Box>
          <Box width={60}>2</Box>
          <Box width={60}>3</Box>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>justify="space-evenly"</h4>
        <Flex 
          justify="space-evenly" 
          style={{ background: '#f5f5f5', padding: '16px' }}
        >
          <Box width={60}>1</Box>
          <Box width={60}>2</Box>
          <Box width={60}>3</Box>
        </Flex>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of different justify content options along the main axis.',
      },
    },
  },
};

// Reverse direction examples
export const ReverseDirections: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '500px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>direction="row-reverse"</h4>
        <Flex 
          direction="row-reverse" 
          style={{ background: '#f5f5f5', padding: '16px' }}
          gap="16px"
        >
          <Box color="#bbdefb">1</Box>
          <Box color="#c8e6c9">2</Box>
          <Box color="#fff9c4">3</Box>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>direction="column-reverse"</h4>
        <Flex 
          direction="column-reverse" 
          style={{ background: '#f5f5f5', padding: '16px', height: '240px' }}
          gap="16px"
        >
          <Box color="#bbdefb">1</Box>
          <Box color="#c8e6c9">2</Box>
          <Box color="#fff9c4">3</Box>
        </Flex>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of reverse direction options for row and column layouts.',
      },
    },
  },
};

// Wrapping behavior
export const Wrapping: Story = {
  args: {
    wrap: true,
    gap: '16px',
    style: { width: '300px', background: '#f5f5f5', padding: '16px' },
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
        <Box>Item 4</Box>
        <Box>Item 5</Box>
        <Box>Item 6</Box>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of wrapping behavior when items exceed container width.',
      },
    },
  },
};

// Real-world example: Navigation bar
export const NavigationBar: Story = {
  render: () => (
    <Flex
      justify="space-between"
      align="center"
      style={{ 
        width: '600px', 
        background: '#1976d2', 
        color: 'white',
        padding: '0 16px',
        height: '64px',
        borderRadius: '4px',
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Brand Logo</div>
      
      <Flex gap="24px">
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Products</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
      </Flex>
      
      <button
        style={{
          background: 'transparent',
          border: '1px solid white',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Login
      </button>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A real-world example using Flex to create a navigation bar layout.',
      },
    },
  },
};

// Real-world example: Product card
export const ProductCard: Story = {
  render: () => (
    <Flex
      direction="column"
      style={{ 
        width: '300px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <div 
        style={{ 
          height: '180px', 
          background: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
        }}
      >
        🎧
      </div>
      
      <Flex direction="column" style={{ padding: '16px' }} gap="8px">
        <h3 style={{ margin: 0 }}>Premium Headphones</h3>
        <div style={{ color: '#f57c00' }}>★★★★☆ (4.5)</div>
        <p style={{ margin: '8px 0 16px', color: '#666', fontSize: '14px' }}>
          High-quality wireless headphones with noise cancellation and premium sound.
        </p>
        
        <Flex justify="space-between" align="center">
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}>$129.99</span>
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
            Add to Cart
          </button>
        </Flex>
      </Flex>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A product card example using nested Flex components for layout.',
      },
    },
  },
}; 