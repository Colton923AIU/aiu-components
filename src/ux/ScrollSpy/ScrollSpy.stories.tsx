import type { Meta, StoryObj } from '@storybook/react';
import { ScrollSpy } from './ScrollSpy';
import React, { useEffect, useState } from 'react';

const meta: Meta<typeof ScrollSpy> = {
  title: 'UX/ScrollSpy',
  component: ScrollSpy,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    navSelector: {
      control: 'text',
      description: 'CSS selector for the navigation container',
    },
    linkSelector: {
      control: 'text',
      description: 'CSS selector for navigation items',
    },
    activeClass: {
      control: 'text',
      description: 'CSS class to add to active navigation item',
    },
    offset: {
      control: { type: 'number', min: 0, max: 200, step: 10 },
      description: 'Offset from the top to consider a section in view',
    },
    threshold: {
      control: { type: 'number', min: 0, max: 1, step: 0.1 },
      description: 'Threshold of visibility required to mark a section as active',
    },
    smoothScroll: {
      control: 'boolean',
      description: 'If true, smooth scrolling is enabled when clicking navigation items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollSpy>;

// Helper component to inject the navigation and sections structure
const ScrollSpyDemo = ({ args }: { args: any }) => {
  const [mounted, setMounted] = useState(false);
  
  // Add demo CSS
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const styleId = 'scrollspy-demo-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        body {
          scroll-behavior: smooth;
        }
        .scrollspy-nav {
          position: sticky;
          top: 0;
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 100;
        }
        .scrollspy-nav ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .scrollspy-nav li {
          padding: 0;
          margin: 0;
        }
        .scrollspy-nav a {
          display: block;
          padding: 16px 20px;
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .scrollspy-nav a:hover {
          background: #f5f5f5;
        }
        .scrollspy-nav a.active {
          color: #4285f4;
          border-bottom: 3px solid #4285f4;
        }
        .scrollspy-section {
          min-height: 500px;
          padding: 100px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
        }
        .scrollspy-section h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        #section1 { background: #f8f9fa; }
        #section2 { background: #e9ecef; }
        #section3 { background: #dee2e6; }
        #section4 { background: #ced4da; }
        .scrollspy-footer {
          padding: 40px 20px;
          background: #343a40;
          color: white;
          text-align: center;
        }
      `;
      document.head.appendChild(style);
    }
    
    // Mark as mounted after content has been rendered
    setMounted(true);
    
    return () => {
      const styleElement = document.getElementById(styleId);
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);
  
  // We need to wait until the component is mounted to pass the selectors
  const navProps = mounted ? {
    navSelector: '.scrollspy-nav',
    linkSelector: '.scrollspy-nav a',
    offset: args.offset ?? 70,
    threshold: args.threshold ?? 0.3,
    activeClass: args.activeClass ?? 'active',
    smoothScroll: args.smoothScroll ?? true,
  } : {
    navSelector: '',
    linkSelector: '',
  };
  
  return (
    <div className="scrollspy-container">
      {/* Navigation */}
      <nav className="scrollspy-nav">
        <ul>
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
          <li><a href="#section4">Section 4</a></li>
        </ul>
      </nav>
      
      <ScrollSpy {...navProps}>
        {/* Content Sections */}
        <section id="section1" className="scrollspy-section">
          <h2>Section 1</h2>
          <p>This is the first section. Scroll down to see the ScrollSpy in action.</p>
          <p>The navigation item will highlight as you scroll through sections.</p>
        </section>
        
        <section id="section2" className="scrollspy-section">
          <h2>Section 2</h2>
          <p>This is the second section with different background color.</p>
          <p>Notice how the navigation highlight updates as you scroll.</p>
        </section>
        
        <section id="section3" className="scrollspy-section">
          <h2>Section 3</h2>
          <p>This is the third section of our ScrollSpy demo.</p>
          <p>Try clicking on the navigation items to automatically scroll to each section.</p>
        </section>
        
        <section id="section4" className="scrollspy-section">
          <h2>Section 4</h2>
          <p>This is the final section of our ScrollSpy demo.</p>
          <p>You can customize various aspects of the ScrollSpy behavior using the controls.</p>
        </section>
        
        <footer className="scrollspy-footer">
          <p>ScrollSpy Component Demo</p>
        </footer>
      </ScrollSpy>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ScrollSpyDemo args={args} />,
  args: {
    offset: 70,
    threshold: 0.3,
    activeClass: 'active',
    smoothScroll: true,
  },
};

export const LargeOffset: Story = {
  render: (args) => <ScrollSpyDemo args={args} />,
  args: {
    offset: 150,
    threshold: 0.2,
    activeClass: 'active',
    smoothScroll: true,
  },
};

export const HighThreshold: Story = {
  render: (args) => <ScrollSpyDemo args={args} />,
  args: {
    offset: 70,
    threshold: 0.7,
    activeClass: 'active',
    smoothScroll: true,
  },
}; 