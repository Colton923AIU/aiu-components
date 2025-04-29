import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from './Spacer';

const meta: Meta<typeof Spacer> = {
  title: 'UI/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'radio', options: ['vertical', 'horizontal'] },
      description: 'Direction of the space (vertical = height, horizontal = width)',
      defaultValue: 'vertical',
    },
    size: {
      control: 'text',
      description: 'Size of the space (number for px or string for CSS value)',
      defaultValue: 16,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

// Basic vertical spacer
export const VerticalSpacer: Story = {
  render: () => (
    <div style={{ border: '1px dashed #ccc', padding: '8px', width: '200px' }}>
      <div style={{ background: '#bbdefb', padding: '16px', textAlign: 'center' }}>
        Element 1
      </div>
      <Spacer direction="vertical" size={16} />
      <div style={{ background: '#bbdefb', padding: '16px', textAlign: 'center' }}>
        Element 2
      </div>
      <Spacer direction="vertical" size={32} />
      <div style={{ background: '#bbdefb', padding: '16px', textAlign: 'center' }}>
        Element 3
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical spacers with different sizes (16px and 32px) between elements.',
      },
    },
  },
};

// Horizontal spacer
export const HorizontalSpacer: Story = {
  render: () => (
    <div style={{ 
      border: '1px dashed #ccc', 
      padding: '8px', 
      display: 'flex', 
      alignItems: 'center', 
      height: '80px' 
    }}>
      <div style={{ background: '#c8e6c9', padding: '16px', textAlign: 'center' }}>
        Element 1
      </div>
      <Spacer direction="horizontal" size={16} />
      <div style={{ background: '#c8e6c9', padding: '16px', textAlign: 'center' }}>
        Element 2
      </div>
      <Spacer direction="horizontal" size={32} />
      <div style={{ background: '#c8e6c9', padding: '16px', textAlign: 'center' }}>
        Element 3
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Horizontal spacers with different sizes (16px and 32px) between elements in a row.',
      },
    },
  },
};

// Custom size spacer
export const CustomSizeSpacer: Story = {
  render: () => (
    <div style={{ border: '1px dashed #ccc', padding: '8px', width: '200px' }}>
      <div style={{ background: '#ffecb3', padding: '16px', textAlign: 'center' }}>
        Element 1
      </div>
      <Spacer direction="vertical" size="2rem" />
      <div style={{ background: '#ffecb3', padding: '16px', textAlign: 'center' }}>
        Element 2
      </div>
      <Spacer direction="vertical" size="5vh" />
      <div style={{ background: '#ffecb3', padding: '16px', textAlign: 'center' }}>
        Element 3
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Spacers with custom CSS units (2rem and 5vh) instead of pixel values.',
      },
    },
  },
};

// Spacer in layout
export const SpacerInLayout: Story = {
  render: () => (
    <div style={{ width: '300px', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ background: '#1976d2', color: 'white', padding: '16px', fontWeight: 'bold' }}>
        Card Header
      </div>
      <div style={{ padding: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Card Title</h3>
        <p style={{ margin: 0, color: '#666' }}>
          This is a sample card with spacers used to control layout spacing.
        </p>
        <Spacer size={24} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '24px', color: '#f57c00' }}>★</span>
          <Spacer direction="horizontal" size={8} />
          <span>Featured Item</span>
        </div>
        <Spacer size={16} />
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
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A practical example of using spacers in a card layout for consistent spacing.',
      },
    },
  },
};

// Form with spacers
export const FormWithSpacers: Story = {
  render: () => (
    <div style={{ width: '300px', padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 16px 0' }}>Contact Form</h3>
      
      <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold', fontSize: '14px' }}>Name</label>
      <Spacer size={8} />
      <input
        id="name"
        type="text"
        style={{ 
          width: '100%', 
          padding: '8px', 
          borderRadius: '4px', 
          border: '1px solid #ddd',
          boxSizing: 'border-box',
        }}
        placeholder="Enter your name"
      />
      
      <Spacer size={16} />
      
      <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', fontSize: '14px' }}>Email</label>
      <Spacer size={8} />
      <input
        id="email"
        type="email"
        style={{ 
          width: '100%', 
          padding: '8px', 
          borderRadius: '4px', 
          border: '1px solid #ddd',
          boxSizing: 'border-box',
        }}
        placeholder="Enter your email"
      />
      
      <Spacer size={16} />
      
      <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold', fontSize: '14px' }}>Message</label>
      <Spacer size={8} />
      <textarea
        id="message"
        style={{ 
          width: '100%', 
          padding: '8px', 
          borderRadius: '4px', 
          border: '1px solid #ddd',
          boxSizing: 'border-box',
          height: '80px',
          resize: 'vertical',
        }}
        placeholder="Enter your message"
      />
      
      <Spacer size={24} />
      
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          style={{
            background: '#f5f5f5',
            border: '1px solid #ddd',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
        <Spacer direction="horizontal" size={12} />
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
          Submit
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using spacers in a form to maintain consistent spacing between form elements.',
      },
    },
  },
};

// Different spacer sizes comparison
export const SpacerSizesComparison: Story = {
  render: () => (
    <div style={{ width: '250px', border: '1px dashed #ccc', padding: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '80px' }}>8px:</div>
        <div style={{ flex: 1, background: '#e3f2fd', height: '20px' }}></div>
        <Spacer direction="horizontal" size={8} />
        <div style={{ flex: 1, background: '#e3f2fd', height: '20px' }}></div>
      </div>
      <Spacer size={16} />
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '80px' }}>16px:</div>
        <div style={{ flex: 1, background: '#e3f2fd', height: '20px' }}></div>
        <Spacer direction="horizontal" size={16} />
        <div style={{ flex: 1, background: '#e3f2fd', height: '20px' }}></div>
      </div>
      <Spacer size={16} />
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '80px' }}>24px:</div>
        <div style={{ flex: 1, background: '#e3f2fd', height: '20px' }}></div>
        <Spacer direction="horizontal" size={24} />
        <div style={{ flex: 1, background: '#e3f2fd', height: '20px' }}></div>
      </div>
      <Spacer size={16} />
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '80px' }}>32px:</div>
        <div style={{ flex: 1, background: '#e3f2fd', height: '20px' }}></div>
        <Spacer direction="horizontal" size={32} />
        <div style={{ flex: 1, background: '#e3f2fd', height: '20px' }}></div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Visual comparison of different spacer sizes (8px, 16px, 24px, 32px).',
      },
    },
  },
}; 