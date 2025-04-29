import type { Meta, StoryObj } from '@storybook/react';
import { SmoothScroll, SmoothScrollRef } from './SmoothScroll';
import React, { useEffect, useRef, useState } from 'react';

const meta: Meta<typeof SmoothScroll> = {
  title: 'UX/SmoothScroll',
  component: SmoothScroll,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    targetSelector: {
      control: 'text',
      description: 'CSS selector for elements that trigger smooth scrolling',
    },
    duration: {
      control: { type: 'number', min: 100, max: 3000, step: 100 },
      description: 'Duration of the scroll animation in milliseconds',
    },
    easing: {
      control: 'select',
      options: ['linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad'],
      description: 'Easing function for the scroll animation',
    },
    offset: {
      control: { type: 'number', min: 0, max: 200, step: 10 },
      description: 'Offset from the top of the target element in pixels',
    },
    updateHash: {
      control: 'boolean',
      description: 'Whether to update the URL hash after scrolling',
    },
    enabled: {
      control: 'boolean',
      description: 'Whether to enable smooth scrolling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SmoothScroll>;

// Helper component to demonstrate SmoothScroll
const SmoothScrollDemo = ({ args }: { args: any }) => {
  const smoothScrollRef = useRef<SmoothScrollRef>(null);
  const [activeSection, setActiveSection] = useState<string>('section1');
  
  // Add demo CSS
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const styleId = 'smoothscroll-demo-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .smoothscroll-nav {
          position: sticky;
          top: 0;
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 100;
          padding: 10px 0;
        }
        .smoothscroll-nav ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          justify-content: center;
        }
        .smoothscroll-nav li {
          padding: 0;
          margin: 0;
        }
        .smoothscroll-nav a {
          display: block;
          padding: 10px 20px;
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          border-radius: 4px;
        }
        .smoothscroll-nav a:hover {
          background: #f5f5f5;
        }
        .smoothscroll-nav a.active {
          background: #4285f4;
          color: white;
        }
        .smoothscroll-section {
          min-height: 500px;
          padding: 100px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
        }
        .smoothscroll-section h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .manual-nav {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: white;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }
        .manual-nav button {
          padding: 8px 16px;
          border: none;
          background: #4285f4;
          color: white;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .manual-nav button:hover {
          background: #3367d6;
        }
        #section1 { background: #f8f9fa; }
        #section2 { background: #e9ecef; }
        #section3 { background: #dee2e6; }
        #section4 { background: #ced4da; }
        .smoothscroll-footer {
          padding: 40px 20px;
          background: #343a40;
          color: white;
          text-align: center;
        }
        .progress-indicator {
          position: fixed;
          top: 70px;
          left: 20px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 10px 15px;
          border-radius: 4px;
          font-size: 14px;
          transition: opacity 0.3s ease;
          opacity: 0;
          z-index: 1000;
        }
        .progress-indicator.visible {
          opacity: 1;
        }
      `;
      document.head.appendChild(style);
    }
    
    return () => {
      const styleElement = document.getElementById(styleId);
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);
  
  // Handle starting scroll
  const handleScrollStart = (targetElement: HTMLElement) => {
    if (targetElement && targetElement.id) {
      setActiveSection(targetElement.id);
      showProgress(0);
    }
  };
  
  // Handle scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showProgressIndicator, setShowProgressIndicator] = useState(false);
  
  const showProgress = (progress: number) => {
    setScrollProgress(progress);
    setShowProgressIndicator(true);
    
    // Hide progress indicator after scrolling completes
    if (progress >= 1) {
      setTimeout(() => {
        setShowProgressIndicator(false);
      }, 1000);
    }
  };
  
  const handleScrollProgress = (progress: number) => {
    showProgress(progress);
  };
  
  // Handle scroll to section manually
  const scrollToSection = (sectionId: string) => {
    if (smoothScrollRef.current) {
      smoothScrollRef.current.scrollTo(sectionId);
    }
  };
  
  return (
    <div className="smoothscroll-container">
      {/* Progress indicator */}
      <div className={`progress-indicator ${showProgressIndicator ? 'visible' : ''}`}>
        Scroll progress: {Math.round(scrollProgress * 100)}%
      </div>
      
      <SmoothScroll
        ref={smoothScrollRef}
        targetSelector=".smoothscroll-nav a"
        duration={args.duration ?? 800}
        easing={args.easing ?? 'easeInOutQuad'}
        offset={args.offset ?? 70}
        updateHash={args.updateHash ?? true}
        enabled={args.enabled ?? true}
        onStart={handleScrollStart}
        onScroll={handleScrollProgress}
      >
        {/* Navigation */}
        <nav className="smoothscroll-nav">
          <ul>
            <li><a href="#section1" className={activeSection === 'section1' ? 'active' : ''}>Section 1</a></li>
            <li><a href="#section2" className={activeSection === 'section2' ? 'active' : ''}>Section 2</a></li>
            <li><a href="#section3" className={activeSection === 'section3' ? 'active' : ''}>Section 3</a></li>
            <li><a href="#section4" className={activeSection === 'section4' ? 'active' : ''}>Section 4</a></li>
          </ul>
        </nav>
        
        {/* Manual navigation via ref */}
        <div className="manual-nav">
          <p>Programmatic Navigation:</p>
          <button onClick={() => scrollToSection('section1')}>Go to 1</button>
          <button onClick={() => scrollToSection('section2')}>Go to 2</button>
          <button onClick={() => scrollToSection('section3')}>Go to 3</button>
          <button onClick={() => scrollToSection('section4')}>Go to 4</button>
        </div>
        
        {/* Content Sections */}
        <section id="section1" className="smoothscroll-section">
          <h2>Section 1</h2>
          <p>This is the first section. Click the navigation links above to see smooth scrolling in action.</p>
          <p>You can also use the buttons on the right to scroll programmatically.</p>
        </section>
        
        <section id="section2" className="smoothscroll-section">
          <h2>Section 2</h2>
          <p>This is the second section with a different background color.</p>
          <p>Notice how smoothly the page scrolls between sections.</p>
        </section>
        
        <section id="section3" className="smoothscroll-section">
          <h2>Section 3</h2>
          <p>This is the third section of our SmoothScroll demo.</p>
          <p>You can adjust the animation duration and easing function in the controls.</p>
        </section>
        
        <section id="section4" className="smoothscroll-section">
          <h2>Section 4</h2>
          <p>This is the final section of our SmoothScroll demo.</p>
          <p>The progress indicator shows how far along the scroll animation is.</p>
        </section>
        
        <footer className="smoothscroll-footer">
          <p>SmoothScroll Component Demo</p>
        </footer>
      </SmoothScroll>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <SmoothScrollDemo args={args} />,
  args: {
    duration: 800,
    easing: 'easeInOutQuad',
    offset: 70,
    updateHash: true,
    enabled: true,
  },
};

export const SlowScroll: Story = {
  render: (args) => <SmoothScrollDemo args={args} />,
  args: {
    duration: 2000,
    easing: 'easeInOutQuad',
    offset: 70,
    updateHash: true,
  },
};

export const LinearEasing: Story = {
  render: (args) => <SmoothScrollDemo args={args} />,
  args: {
    duration: 800,
    easing: 'linear',
    offset: 70,
    updateHash: true,
  },
}; 