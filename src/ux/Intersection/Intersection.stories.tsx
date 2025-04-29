import type { Meta, StoryObj } from '@storybook/react';
import { Intersection } from './Intersection';
import React, { useEffect, useState } from 'react';

const meta: Meta<typeof Intersection> = {
  title: 'UX/Intersection',
  component: Intersection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    classNames: {
      control: 'object',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Intersection>;

// CSS for the Intersection component demo
const css = `
.intersection-demo-container {
  padding: 20px;
  height: 500px;
  overflow: auto;
  margin: 0 auto;
  max-width: 800px;
}

.intersection-demo-section {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background: #f5f5f5;
}

.intersection-demo-box {
  width: 300px;
  padding: 30px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.intersection-before {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.intersection-after {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.8s ease;
  background: white;
}

.intersection-demo-label {
  position: sticky;
  top: 0;
  background: #333;
  color: white;
  padding: 8px 16px;
  margin: 20px 0;
  border-radius: 4px;
  z-index: 10;
}
`;

// Initialize the CSS
const IntersectionDemo = ({args}: {args: any}) => {
  const [cssInitialized, setCssInitialized] = useState(false);
  
  useEffect(() => {
    if (typeof document !== 'undefined' && !cssInitialized) {
      const styleElement = document.createElement('style');
      styleElement.textContent = css;
      styleElement.setAttribute('data-intersection-demo', 'true');
      document.head.appendChild(styleElement);
      setCssInitialized(true);
    }
    
    return () => {
      if (typeof document !== 'undefined' && cssInitialized) {
        const styleElement = document.querySelector('style[data-intersection-demo]');
        if (styleElement) {
          styleElement.remove();
        }
      }
    };
  }, [cssInitialized]);

  return (
    <div className="intersection-demo-container">
      <div className="intersection-demo-label">Scroll down to see elements appear</div>
      
      <div className="intersection-demo-section">
        <p>This component demonstrates the Intersection Observer API.</p>
      </div>
      
      <div style={{ height: '200px' }}></div>
      
      <Intersection
        classNames={{
          before: 'intersection-before',
          after: 'intersection-after',
        }}
      >
        <div className="intersection-demo-box">
          <h3>First Element</h3>
          <p>This element will animate when it enters the viewport</p>
        </div>
      </Intersection>
      
      <div style={{ height: '400px' }}></div>
      
      <Intersection
        classNames={{
          before: 'intersection-before',
          after: 'intersection-after',
        }}
      >
        <div className="intersection-demo-box">
          <h3>Second Element</h3>
          <p>Another element that will animate on intersection</p>
        </div>
      </Intersection>
      
      <div style={{ height: '400px' }}></div>
      
      <Intersection
        classNames={{
          before: 'intersection-before',
          after: 'intersection-after',
        }}
        {...args}
      >
        <div className="intersection-demo-box">
          {args.children || (
            <>
              <h3>Customizable Element</h3>
              <p>This element can be customized through Storybook controls</p>
            </>
          )}
        </div>
      </Intersection>
      
      <div style={{ height: '100px' }}></div>
      
      <div className="intersection-demo-section">
        <p>End of demo</p>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <IntersectionDemo args={args} />,
  args: {
    children: undefined
  }
};

export const CustomContent: Story = {
  render: (args) => <IntersectionDemo args={args} />,
  args: {
    children: (
      <>
        <h3>Custom Content</h3>
        <p>You can replace this with any React elements</p>
        <button style={{ padding: '8px 16px', marginTop: '10px' }}>Click Me</button>
      </>
    ),
  }
}; 