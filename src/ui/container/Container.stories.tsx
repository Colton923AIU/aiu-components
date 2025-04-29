import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'UI/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: { 
        type: 'select', 
        options: ['xs', 'sm', 'md', 'lg', 'xl'] 
      },
      description: 'Maximum width of the container',
      defaultValue: 'lg',
    },
    p: {
      control: 'text',
      description: 'Padding inside the container (number for px or string for CSS value)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

// Helper component for visualization
const ContainerVisualizer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ 
    background: '#f5f5f5', 
    minHeight: '200px', 
    width: '100%', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '24px 0',
  }}>
    {children}
  </div>
);

// Basic container with default maxWidth
export const DefaultContainer: Story = {
  render: () => (
    <ContainerVisualizer>
      <Container style={{ background: '#e3f2fd', padding: '24px', border: '1px dashed #90caf9' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Default Container (lg: 1200px)</h3>
          <p style={{ margin: 0 }}>
            This container uses the default maxWidth of 'lg', which is 1200px.
          </p>
        </div>
      </Container>
    </ContainerVisualizer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default container with maxWidth set to "lg" (1200px).',
      },
    },
  },
};

// Different predefined maxWidth options
export const PredefinedSizes: Story = {
  render: () => (
    <div>
      <ContainerVisualizer>
        <Container 
          maxWidth="xs" 
          style={{ background: '#e8f5e9', padding: '16px', border: '1px dashed #a5d6a7' }}
        >
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Extra Small (xs: 360px)</h3>
            <p style={{ margin: 0 }}>
              This container uses maxWidth of 'xs', which is 360px.
            </p>
          </div>
        </Container>
      </ContainerVisualizer>
      
      <ContainerVisualizer>
        <Container 
          maxWidth="sm" 
          style={{ background: '#fff9c4', padding: '16px', border: '1px dashed #fff176' }}
        >
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Small (sm: 600px)</h3>
            <p style={{ margin: 0 }}>
              This container uses maxWidth of 'sm', which is 600px.
            </p>
          </div>
        </Container>
      </ContainerVisualizer>
      
      <ContainerVisualizer>
        <Container 
          maxWidth="md" 
          style={{ background: '#ffccbc', padding: '16px', border: '1px dashed #ffab91' }}
        >
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Medium (md: 900px)</h3>
            <p style={{ margin: 0 }}>
              This container uses maxWidth of 'md', which is 900px.
            </p>
          </div>
        </Container>
      </ContainerVisualizer>
      
      <ContainerVisualizer>
        <Container 
          maxWidth="lg" 
          style={{ background: '#e3f2fd', padding: '16px', border: '1px dashed #90caf9' }}
        >
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Large (lg: 1200px)</h3>
            <p style={{ margin: 0 }}>
              This container uses maxWidth of 'lg', which is 1200px.
            </p>
          </div>
        </Container>
      </ContainerVisualizer>
      
      <ContainerVisualizer>
        <Container 
          maxWidth="xl" 
          style={{ background: '#e1bee7', padding: '16px', border: '1px dashed #ce93d8' }}
        >
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Extra Large (xl: 1536px)</h3>
            <p style={{ margin: 0 }}>
              This container uses maxWidth of 'xl', which is 1536px.
            </p>
          </div>
        </Container>
      </ContainerVisualizer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of all predefined container sizes (xs, sm, md, lg, xl).',
      },
    },
  },
};

// Custom numeric maxWidth
export const CustomNumericWidth: Story = {
  render: () => (
    <ContainerVisualizer>
      <Container 
        maxWidth={800} 
        style={{ background: '#bbdefb', padding: '24px', border: '1px dashed #90caf9' }}
      >
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Custom Width (800px)</h3>
          <p style={{ margin: 0 }}>
            This container uses a custom numeric maxWidth of 800px.
          </p>
        </div>
      </Container>
    </ContainerVisualizer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Container with a custom numeric width of 800px.',
      },
    },
  },
};

// Custom string maxWidth
export const CustomStringWidth: Story = {
  render: () => (
    <ContainerVisualizer>
      <Container 
        maxWidth="75%" 
        style={{ background: '#c8e6c9', padding: '24px', border: '1px dashed #a5d6a7' }}
      >
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Percentage Width (75%)</h3>
          <p style={{ margin: 0 }}>
            This container uses a custom percentage maxWidth of 75%.
          </p>
        </div>
      </Container>
    </ContainerVisualizer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Container with a custom percentage-based width (75%).',
      },
    },
  },
};

// Container with padding
export const WithPadding: Story = {
  render: () => (
    <div>
      <ContainerVisualizer>
        <Container 
          maxWidth="md" 
          p={16}
          style={{ background: '#ffecb3', border: '1px dashed #ffd54f' }}
        >
          <div style={{ 
            textAlign: 'center',
            background: 'white',
            padding: '24px',
            borderRadius: '4px',
          }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Container with Numeric Padding</h3>
            <p style={{ margin: 0 }}>
              This container has padding of 16px (specified as a number).
            </p>
          </div>
        </Container>
      </ContainerVisualizer>
      
      <ContainerVisualizer>
        <Container 
          maxWidth="md" 
          p="32px 16px"
          style={{ background: '#ffecb3', border: '1px dashed #ffd54f' }}
        >
          <div style={{ 
            textAlign: 'center',
            background: 'white',
            padding: '24px',
            borderRadius: '4px',
          }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Container with String Padding</h3>
            <p style={{ margin: 0 }}>
              This container has padding of "32px 16px" (specified as a string).
            </p>
          </div>
        </Container>
      </ContainerVisualizer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of containers with different padding values.',
      },
    },
  },
};

// Real-world example: Website layout
export const WebsiteLayout: Story = {
  render: () => (
    <div>
      <div style={{ background: '#1976d2', padding: '16px 0', color: 'white' }}>
        <Container maxWidth="lg" p={16}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 'bold', fontSize: '24px' }}>Brand Logo</div>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Features</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Pricing</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>
        </Container>
      </div>
      
      <div style={{ background: '#2196f3', padding: '48px 0', color: 'white' }}>
        <Container maxWidth="lg" p={16}>
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{ margin: '0 0 16px 0', fontSize: '48px' }}>Welcome to Our Website</h1>
            <p style={{ margin: '0 0 24px 0', fontSize: '18px', opacity: 0.9 }}>
              A complete solution for your business needs. Discover how we can help you succeed.
            </p>
            <button
              style={{
                background: 'white',
                color: '#2196f3',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Get Started
            </button>
          </div>
        </Container>
      </div>
      
      <div style={{ padding: '64px 0' }}>
        <Container maxWidth="lg" p={16}>
          <h2 style={{ margin: '0 0 48px 0', textAlign: 'center' }}>Our Features</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '32px' 
          }}>
            {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, index) => (
              <div 
                key={index}
                style={{ 
                  padding: '24px', 
                  background: '#f5f5f5', 
                  borderRadius: '8px',
                  textAlign: 'center', 
                }}
              >
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '50%', 
                  background: '#e3f2fd', 
                  margin: '0 auto 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                }}>
                  {index + 1}
                </div>
                <h3 style={{ margin: '0 0 8px 0' }}>{feature}</h3>
                <p style={{ margin: 0, color: '#666' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      
      <div style={{ background: '#f5f5f5', padding: '32px 0' }}>
        <Container maxWidth="lg" p={16}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>&copy; 2023 Brand Name. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Privacy</a>
              <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Terms</a>
              <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A real-world example showing containers in a full website layout.',
      },
    },
  },
}; 