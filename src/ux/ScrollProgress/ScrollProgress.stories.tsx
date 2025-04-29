import type { Meta, StoryObj } from '@storybook/react';
import { ScrollProgress } from './ScrollProgress';
import React from 'react';

const meta: Meta<typeof ScrollProgress> = {
  title: 'UX/ScrollProgress',
  component: ScrollProgress,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: { type: 'number', min: 1, max: 20, step: 1 },
      description: 'Height of the progress bar',
      defaultValue: 4,
    },
    color: {
      control: 'color',
      description: 'Color of the progress bar',
      defaultValue: '#007bff',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the progress track',
      defaultValue: 'transparent',
    },
    position: {
      control: 'radio',
      options: ['top', 'bottom'],
      description: 'Position of the progress bar',
      defaultValue: 'top',
    },
    showPercentage: {
      control: 'boolean',
      description: 'Show the scroll percentage',
      defaultValue: false,
    },
    zIndex: {
      control: { type: 'number', min: 1, max: 9999 },
      description: 'Z-index of the progress bar',
      defaultValue: 1000,
    },
    fixed: {
      control: 'boolean',
      description: 'Whether the bar is fixed or absolute positioned',
      defaultValue: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollProgress>;

// Create a scroll container to demonstrate scroll progress
const ScrollDemo = ({ args }: { args: any }) => {
  const [currentProgress, setCurrentProgress] = React.useState(0);
  
  const handleProgressChange = (progress: number) => {
    setCurrentProgress(progress);
  };
  
  return (
    <div style={{ position: 'relative' }}>
      <ScrollProgress
        {...args}
        onProgressChange={handleProgressChange}
      />
      
      <div style={{ padding: '20px', textAlign: 'center', marginTop: args.position === 'top' ? '20px' : '0' }}>
        <h1>Scroll Progress Demo</h1>
        <p>Scroll down to see the progress bar in action</p>
        {!args.showPercentage && (
          <div style={{ 
            position: 'fixed', 
            right: '20px', 
            bottom: '20px',
            background: '#333',
            color: 'white',
            padding: '10px',
            borderRadius: '4px',
            zIndex: 999,
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}>
            Progress: {currentProgress}%
          </div>
        )}
      </div>
      
      {/* Generate long content for scrolling */}
      {Array.from({ length: 15 }).map((_, index) => (
        <div 
          key={index}
          style={{ 
            height: '300px', 
            margin: '20px', 
            padding: '20px',
            background: index % 2 === 0 ? '#f9f9f9' : '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <h2>Section {index + 1}</h2>
          <p>Scroll down to continue seeing the progress bar update.</p>
          <div style={{ 
            width: `${Math.min(100, currentProgress + (index * 5))}%`,
            height: '10px',
            background: args.color || '#007bff',
            borderRadius: '5px',
            marginTop: '20px',
            transition: 'width 0.3s ease',
          }} />
        </div>
      ))}
      
      <div style={{ padding: '40px', textAlign: 'center', background: '#333', color: 'white' }}>
        <h2>End of Content</h2>
        <p>You've reached 100% of the page!</p>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ScrollDemo args={args} />,
  args: {
    height: 4,
    color: '#007bff',
    position: 'top',
    showPercentage: false,
  }
};

export const BottomProgress: Story = {
  render: (args) => <ScrollDemo args={args} />,
  args: {
    height: 6,
    color: '#28a745',
    position: 'bottom',
    showPercentage: true,
    backgroundColor: 'rgba(0,0,0,0.1)',
  }
};

export const ThickBar: Story = {
  render: (args) => <ScrollDemo args={args} />,
  args: {
    height: 12,
    color: '#dc3545',
    position: 'top',
    showPercentage: true,
  }
}; 