import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'UI/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    autoPlay: {
      control: 'boolean',
      description: 'Enable auto-play functionality',
    },
    interval: {
      control: { type: 'number', min: 1000, step: 500 },
      description: 'Auto-play interval in milliseconds',
    },
    showIndicators: {
      control: 'boolean',
      description: 'Show dot indicators',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

// Basic carousel with images
export const Default: Story = {
  args: {
    children: [
      <div key="1" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3498db', color: 'white', fontSize: '24px' }}>
        Slide 1
      </div>,
      <div key="2" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e74c3c', color: 'white', fontSize: '24px' }}>
        Slide 2
      </div>,
      <div key="3" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2ecc71', color: 'white', fontSize: '24px' }}>
        Slide 3
      </div>,
    ],
    autoPlay: false,
    showIndicators: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic carousel with three differently colored slides.',
      },
    },
  },
};

// Auto-playing carousel
export const AutoPlay: Story = {
  args: {
    children: [
      <div key="1" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3498db', color: 'white', fontSize: '24px' }}>
        Auto-playing slide 1
      </div>,
      <div key="2" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e74c3c', color: 'white', fontSize: '24px' }}>
        Auto-playing slide 2
      </div>,
      <div key="3" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2ecc71', color: 'white', fontSize: '24px' }}>
        Auto-playing slide 3
      </div>,
    ],
    autoPlay: true,
    interval: 3000,
    showIndicators: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with auto-play enabled and a 3-second interval.',
      },
    },
  },
};

// Carousel without indicators
export const WithoutIndicators: Story = {
  args: {
    children: [
      <div key="1" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3498db', color: 'white', fontSize: '24px' }}>
        Slide 1
      </div>,
      <div key="2" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e74c3c', color: 'white', fontSize: '24px' }}>
        Slide 2
      </div>,
      <div key="3" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2ecc71', color: 'white', fontSize: '24px' }}>
        Slide 3
      </div>,
    ],
    autoPlay: false,
    showIndicators: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with dot indicators hidden.',
      },
    },
  },
};

// Single slide carousel (no controls shown)
export const SingleSlide: Story = {
  args: {
    children: [
      <div key="1" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#9b59b6', color: 'white', fontSize: '24px' }}>
        Single Slide
      </div>,
    ],
    showIndicators: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with only one slide. Note that navigation controls and indicators are automatically hidden.',
      },
    },
  },
};

// Carousel with content cards
export const ContentCards: Story = {
  args: {
    children: [
      <div key="1" style={{ height: '400px', padding: '30px', boxSizing: 'border-box' }}>
        <div style={{ height: '100%', background: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Product Features</h3>
          <p style={{ color: '#666', lineHeight: 1.6, flex: 1 }}>
            Our product offers a comprehensive set of features designed to enhance productivity and streamline workflows.
            With intuitive controls and powerful capabilities, you'll be able to accomplish tasks faster than ever before.
          </p>
          <button style={{ alignSelf: 'flex-start', background: '#1976d2', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
            Learn More
          </button>
        </div>
      </div>,
      <div key="2" style={{ height: '400px', padding: '30px', boxSizing: 'border-box' }}>
        <div style={{ height: '100%', background: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Customer Testimonials</h3>
          <blockquote style={{ color: '#666', lineHeight: 1.6, fontStyle: 'italic', flex: 1, margin: 0 }}>
            "This product has completely transformed how our team collaborates. The interface is intuitive, and the features are exactly what we needed."
            <footer style={{ marginTop: '16px', fontStyle: 'normal', color: '#888' }}>
              — Jane Smith, CEO of TechCorp
            </footer>
          </blockquote>
          <button style={{ alignSelf: 'flex-start', background: '#1976d2', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
            Read More Reviews
          </button>
        </div>
      </div>,
      <div key="3" style={{ height: '400px', padding: '30px', boxSizing: 'border-box' }}>
        <div style={{ height: '100%', background: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Pricing Plans</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <h4 style={{ margin: '0 0 8px 0' }}>Basic</h4>
              <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>$9.99</div>
              <div>Per month</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: '#f5f5f5', borderRadius: '4px' }}>
              <h4 style={{ margin: '0 0 8px 0' }}>Pro</h4>
              <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>$19.99</div>
              <div>Per month</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <h4 style={{ margin: '0 0 8px 0' }}>Enterprise</h4>
              <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>$49.99</div>
              <div>Per month</div>
            </div>
          </div>
          <button style={{ alignSelf: 'center', background: '#1976d2', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
            Choose a Plan
          </button>
        </div>
      </div>,
    ],
    autoPlay: true,
    interval: 5000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with rich content cards showcasing different information.',
      },
    },
  },
};

// Carousel with custom styling
export const CustomStyling: Story = {
  args: {
    children: [
      <div key="1" style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f39c12', color: 'white', fontSize: '24px' }}>
        Custom Styled Slide 1
      </div>,
      <div key="2" style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#8e44ad', color: 'white', fontSize: '24px' }}>
        Custom Styled Slide 2
      </div>,
      <div key="3" style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#16a085', color: 'white', fontSize: '24px' }}>
        Custom Styled Slide 3
      </div>,
    ],
    autoPlay: false,
    style: { 
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
      maxWidth: '600px',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with custom styling applied to the container.',
      },
    },
  },
}; 