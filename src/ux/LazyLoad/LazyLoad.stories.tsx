import type { Meta, StoryObj } from '@storybook/react';
import { LazyLoad } from './LazyLoad';
import React from 'react';

const meta: Meta<typeof LazyLoad> = {
  title: 'UX/LazyLoad',
  component: LazyLoad,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: 'text',
      description: 'Height of the placeholder',
      defaultValue: 'auto',
    },
    width: {
      control: 'text',
      description: 'Width of the placeholder',
      defaultValue: '100%',
    },
    delay: {
      control: { type: 'number', min: 0, max: 5000, step: 100 },
      description: 'Delay in ms before loading',
      defaultValue: 0,
    },
    placeholder: {
      control: 'text',
      description: 'Custom placeholder content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LazyLoad>;

// Create a scroll container to demonstrate lazy loading
const ScrollContainer = ({ args }: { args: any }) => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px', padding: '10px', background: '#f0f0f0', borderRadius: '4px' }}>
        <h3>Scroll down to see lazy loaded content</h3>
        <p>The components below will only load when they enter the viewport</p>
      </div>
      
      {/* Regular content before lazy loaded items */}
      <div style={{ height: '200px', background: '#eee', marginBottom: '20px', padding: '20px' }}>
        <h3>Regular content</h3>
        <p>Scroll down to see the lazy loaded content below</p>
      </div>
      
      {/* First lazy load item */}
      <LazyLoad 
        height="200px" 
        delay={args.delay || 500}
        {...args}
      >
        <div style={{ 
          height: '100%',
          background: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <h3>First Lazy Loaded Content</h3>
          <p>This content was loaded when it entered the viewport!</p>
        </div>
      </LazyLoad>
      
      {/* Spacer */}
      <div style={{ height: '300px', marginBottom: '20px' }} />
      
      {/* Second lazy load item */}
      <LazyLoad 
        height="250px"
        delay={args.delay || 800}
        {...args}
      >
        <div style={{ 
          height: '100%',
          background: 'linear-gradient(135deg, #2196F3 0%, #03A9F4 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <h3>Second Lazy Loaded Content</h3>
          <p>This content loads with a slightly longer delay!</p>
          <button style={{ 
            background: 'white', 
            color: '#2196F3', 
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            marginTop: '10px',
            cursor: 'pointer',
          }}>
            Interactive Element
          </button>
        </div>
      </LazyLoad>
      
      {/* Spacer */}
      <div style={{ height: '300px', marginBottom: '20px' }} />
      
      {/* Third lazy load item - uses the custom placeholder if provided */}
      <LazyLoad 
        height="200px"
        delay={args.delay || 1000}
        placeholder={args.placeholder}
        {...args}
      >
        <div style={{ 
          height: '100%',
          background: 'linear-gradient(135deg, #9C27B0 0%, #673AB7 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <h3>Third Lazy Loaded Content</h3>
          <p>This content appears after the longest delay!</p>
        </div>
      </LazyLoad>
      
      {/* Footer */}
      <div style={{ height: '100px', background: '#f0f0f0', marginTop: '20px', padding: '20px', textAlign: 'center' }}>
        <p>End of demo</p>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ScrollContainer args={args} />,
  args: {
    delay: 500,
  }
};

export const WithCustomPlaceholder: Story = {
  render: (args) => <ScrollContainer args={args} />,
  args: {
    delay: 1000,
    placeholder: (
      <div style={{ 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#f5f5f5',
        border: '1px dashed #ccc',
        borderRadius: '4px',
      }}>
        <p>Custom placeholder - Content is loading...</p>
      </div>
    ),
  }
};

export const NoDelay: Story = {
  render: (args) => <ScrollContainer args={args} />,
  args: {
    delay: 0,
  }
}; 