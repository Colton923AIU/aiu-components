import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { Box } from '../box/Box';

const meta: Meta<typeof Stack> = {
  title: 'UI/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'radio', options: ['row', 'column'] },
      description: 'Direction of stacking (row or column)',
      defaultValue: 'column',
    },
    gap: {
      control: 'text',
      description: 'Gap between children (number for px or string for CSS value)',
    },
    align: {
      control: { 
        type: 'select', 
        options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'] 
      },
      description: 'Align items along the cross axis',
    },
    justify: {
      control: { 
        type: 'select', 
        options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'] 
      },
      description: 'Justify items along the main axis',
    },
    wrap: {
      control: 'boolean',
      description: 'Whether to wrap children onto multiple lines',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

// Box style for examples
const boxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 80,
  height: 80,
  border: '1px solid #ddd',
  borderRadius: 4,
};

// Basic vertical stack
export const VerticalStack: Story = {
  args: {
    direction: 'column',
    gap: 16,
    children: (
      <>
        <Box style={{ ...boxStyle, background: '#bbdefb' }}>Item 1</Box>
        <Box style={{ ...boxStyle, background: '#c8e6c9' }}>Item 2</Box>
        <Box style={{ ...boxStyle, background: '#fff9c4' }}>Item 3</Box>
        <Box style={{ ...boxStyle, background: '#ffccbc' }}>Item 4</Box>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic vertical stack with evenly spaced items.',
      },
    },
  },
};

// Horizontal stack
export const HorizontalStack: Story = {
  args: {
    direction: 'row',
    gap: 16,
    children: (
      <>
        <Box style={{ ...boxStyle, background: '#bbdefb' }}>Item 1</Box>
        <Box style={{ ...boxStyle, background: '#c8e6c9' }}>Item 2</Box>
        <Box style={{ ...boxStyle, background: '#fff9c4' }}>Item 3</Box>
        <Box style={{ ...boxStyle, background: '#ffccbc' }}>Item 4</Box>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Horizontal stack with items aligned in a row.',
      },
    },
  },
};

// Stack with different alignments
export const AlignmentVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, width: 400 }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>align="flex-start"</h4>
        <Stack direction="row" gap={16} align="flex-start" style={{ height: 120, background: '#f5f5f5', padding: 16 }}>
          <Box style={{ ...boxStyle, height: 40, background: '#bbdefb' }}>Small</Box>
          <Box style={{ ...boxStyle, height: 60, background: '#c8e6c9' }}>Medium</Box>
          <Box style={{ ...boxStyle, height: 80, background: '#fff9c4' }}>Large</Box>
        </Stack>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>align="center"</h4>
        <Stack direction="row" gap={16} align="center" style={{ height: 120, background: '#f5f5f5', padding: 16 }}>
          <Box style={{ ...boxStyle, height: 40, background: '#bbdefb' }}>Small</Box>
          <Box style={{ ...boxStyle, height: 60, background: '#c8e6c9' }}>Medium</Box>
          <Box style={{ ...boxStyle, height: 80, background: '#fff9c4' }}>Large</Box>
        </Stack>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>align="flex-end"</h4>
        <Stack direction="row" gap={16} align="flex-end" style={{ height: 120, background: '#f5f5f5', padding: 16 }}>
          <Box style={{ ...boxStyle, height: 40, background: '#bbdefb' }}>Small</Box>
          <Box style={{ ...boxStyle, height: 60, background: '#c8e6c9' }}>Medium</Box>
          <Box style={{ ...boxStyle, height: 80, background: '#fff9c4' }}>Large</Box>
        </Stack>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stack with different alignment options along the cross axis.',
      },
    },
  },
};

// Stack with different justification
export const JustificationVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, width: 400 }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>justify="flex-start"</h4>
        <Stack direction="row" gap={16} justify="flex-start" style={{ background: '#f5f5f5', padding: 16 }}>
          <Box style={{ ...boxStyle, width: 60, background: '#bbdefb' }}>1</Box>
          <Box style={{ ...boxStyle, width: 60, background: '#c8e6c9' }}>2</Box>
          <Box style={{ ...boxStyle, width: 60, background: '#fff9c4' }}>3</Box>
        </Stack>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>justify="center"</h4>
        <Stack direction="row" gap={16} justify="center" style={{ background: '#f5f5f5', padding: 16 }}>
          <Box style={{ ...boxStyle, width: 60, background: '#bbdefb' }}>1</Box>
          <Box style={{ ...boxStyle, width: 60, background: '#c8e6c9' }}>2</Box>
          <Box style={{ ...boxStyle, width: 60, background: '#fff9c4' }}>3</Box>
        </Stack>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>justify="space-between"</h4>
        <Stack direction="row" justify="space-between" style={{ background: '#f5f5f5', padding: 16 }}>
          <Box style={{ ...boxStyle, width: 60, background: '#bbdefb' }}>1</Box>
          <Box style={{ ...boxStyle, width: 60, background: '#c8e6c9' }}>2</Box>
          <Box style={{ ...boxStyle, width: 60, background: '#fff9c4' }}>3</Box>
        </Stack>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>justify="space-evenly"</h4>
        <Stack direction="row" justify="space-evenly" style={{ background: '#f5f5f5', padding: 16 }}>
          <Box style={{ ...boxStyle, width: 60, background: '#bbdefb' }}>1</Box>
          <Box style={{ ...boxStyle, width: 60, background: '#c8e6c9' }}>2</Box>
          <Box style={{ ...boxStyle, width: 60, background: '#fff9c4' }}>3</Box>
        </Stack>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stack with different justification options along the main axis.',
      },
    },
  },
};

// Stack with wrapping
export const WrappingStack: Story = {
  args: {
    direction: 'row',
    gap: 16,
    wrap: true,
    style: { width: 300, background: '#f5f5f5', padding: 16 },
    children: (
      <>
        <Box style={{ ...boxStyle, background: '#bbdefb' }}>Item 1</Box>
        <Box style={{ ...boxStyle, background: '#c8e6c9' }}>Item 2</Box>
        <Box style={{ ...boxStyle, background: '#fff9c4' }}>Item 3</Box>
        <Box style={{ ...boxStyle, background: '#ffccbc' }}>Item 4</Box>
        <Box style={{ ...boxStyle, background: '#e1bee7' }}>Item 5</Box>
        <Box style={{ ...boxStyle, background: '#b2dfdb' }}>Item 6</Box>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Stack with wrapping enabled to handle overflow.',
      },
    },
  },
};

// Real-world example: Form layout
export const FormLayout: Story = {
  render: () => (
    <Stack direction="column" gap={20} style={{ width: 400, padding: 24, background: 'white', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
      <h2 style={{ margin: 0 }}>Contact Form</h2>
      
      <Stack direction="column" gap={8}>
        <label htmlFor="name" style={{ fontWeight: 500 }}>Name</label>
        <input
          id="name"
          type="text"
          style={{ 
            padding: '10px 12px', 
            borderRadius: 4, 
            border: '1px solid #ddd',
            fontSize: 14,
          }}
          placeholder="Enter your name"
        />
      </Stack>
      
      <Stack direction="column" gap={8}>
        <label htmlFor="email" style={{ fontWeight: 500 }}>Email</label>
        <input
          id="email"
          type="email"
          style={{ 
            padding: '10px 12px', 
            borderRadius: 4, 
            border: '1px solid #ddd',
            fontSize: 14,
          }}
          placeholder="Enter your email"
        />
      </Stack>
      
      <Stack direction="column" gap={8}>
        <label htmlFor="message" style={{ fontWeight: 500 }}>Message</label>
        <textarea
          id="message"
          style={{ 
            padding: '10px 12px', 
            borderRadius: 4, 
            border: '1px solid #ddd',
            fontSize: 14,
            minHeight: 100,
            resize: 'vertical',
          }}
          placeholder="Enter your message"
        />
      </Stack>
      
      <Stack direction="row" gap={16} justify="flex-end" style={{ marginTop: 8 }}>
        <button
          style={{ 
            padding: '10px 16px',
            background: 'transparent',
            border: '1px solid #ddd',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
        <button
          style={{ 
            padding: '10px 16px',
            background: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A practical example using Stack to create a form layout.',
      },
    },
  },
};

// Real-world example: Card with media
export const MediaCard: Story = {
  render: () => (
    <Stack 
      direction="column" 
      gap={0} 
      style={{ 
        width: 320, 
        overflow: 'hidden', 
        borderRadius: 8, 
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', 
        background: 'white'
      }}
    >
      <div style={{ 
        height: 180, 
        background: '#f5f5f5', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#888',
        fontSize: 48,
      }}>
        🏞️
      </div>
      <Stack direction="column" gap={16} style={{ padding: 16 }}>
        <h3 style={{ margin: 0 }}>Card Title</h3>
        <p style={{ margin: 0, color: '#666', lineHeight: 1.5, fontSize: 14 }}>
          This is a card component built using the Stack component. It's useful for media content, blog posts, or product cards.
        </p>
        <Stack direction="row" gap={8} style={{ marginTop: 8 }}>
          <button
            style={{ 
              padding: '8px 16px',
              background: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            Action
          </button>
          <button
            style={{ 
              padding: '8px 16px',
              background: 'transparent',
              border: '1px solid #ddd',
              borderRadius: 4,
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            Share
          </button>
        </Stack>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A media card example built using the Stack component.',
      },
    },
  },
}; 