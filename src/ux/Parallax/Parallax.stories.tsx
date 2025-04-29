import type { Meta, StoryObj } from '@storybook/react';
import { Parallax } from './Parallax';
import React from 'react';

const meta: Meta<typeof Parallax> = {
  title: 'UX/Parallax',
  component: Parallax,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    speed: {
      control: { type: 'range', min: -1, max: 1, step: 0.1 },
      description: 'Speed of the parallax effect',
      defaultValue: 0.5,
    },
    height: {
      control: 'text',
      description: 'Height of the parallax container',
      defaultValue: '400px',
    },
    backgroundImage: {
      control: 'text',
      description: 'Background image URL',
    },
    backgroundPosition: {
      control: 'text',
      description: 'Background position',
      defaultValue: 'center',
    },
    backgroundSize: {
      control: 'text',
      description: 'Background size',
      defaultValue: 'cover',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Parallax>;

// Sample image URLs for demo
const sampleImages = {
  mountains: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  city: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  beach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
};

// Create a scroll container to demonstrate parallax effect
const ParallaxDemo = ({ args }: { args: any }) => {
  return (
    <div style={{ height: '2000px' }}>
      <div style={{ padding: '20px', textAlign: 'center', background: '#f5f5f5' }}>
        <h2>Parallax Effect Demo</h2>
        <p>Scroll down to see the parallax effect in action</p>
      </div>
      
      {/* First parallax section */}
      <Parallax
        height="400px"
        backgroundImage={sampleImages.mountains}
        speed={args.speed || 0.5}
        {...args}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.3)',
        }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Mountains</h2>
            <p style={{ fontSize: '1.2rem' }}>Parallax speed: {args.speed || 0.5}</p>
          </div>
        </div>
      </Parallax>
      
      {/* Content section */}
      <div style={{ padding: '60px 20px', textAlign: 'center', background: 'white' }}>
        <h3>Regular Content Section</h3>
        <p>This content scrolls normally without parallax effect</p>
        <p>Continue scrolling to see more parallax examples</p>
      </div>
      
      {/* Second parallax section */}
      <Parallax
        height="400px"
        backgroundImage={sampleImages.city}
        speed={(args.speed || 0.5) * 0.8} // Slightly different speed
        {...args}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.3)',
        }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>City Skyline</h2>
            <p style={{ fontSize: '1.2rem' }}>Parallax speed: {(args.speed || 0.5) * 0.8}</p>
          </div>
        </div>
      </Parallax>
      
      {/* Content section */}
      <div style={{ padding: '60px 20px', textAlign: 'center', background: '#f9f9f9' }}>
        <h3>Another Regular Section</h3>
        <p>The parallax effect creates depth as you scroll</p>
        <p>Try adjusting the speed in the Storybook controls</p>
      </div>
      
      {/* Third parallax section */}
      <Parallax
        height="400px"
        backgroundImage={sampleImages.beach}
        speed={(args.speed || 0.5) * 1.2} // Slightly different speed
        {...args}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.3)',
        }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Beach</h2>
            <p style={{ fontSize: '1.2rem' }}>Parallax speed: {(args.speed || 0.5) * 1.2}</p>
          </div>
        </div>
      </Parallax>
      
      {/* Footer */}
      <div style={{ padding: '40px 20px', textAlign: 'center', background: '#333', color: 'white' }}>
        <p>End of Parallax Demo</p>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ParallaxDemo args={args} />,
  args: {
    speed: 0.5,
  }
};

export const SlowParallax: Story = {
  render: (args) => <ParallaxDemo args={args} />,
  args: {
    speed: 0.2,
  }
};

export const ReverseParallax: Story = {
  render: (args) => <ParallaxDemo args={args} />,
  args: {
    speed: -0.3,
  }
}; 