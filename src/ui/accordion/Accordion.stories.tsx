import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

// Wrapper for accordion since it's a controlled component
const SingleAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  const items = [
    {
      title: 'Section 1',
      content: 'Content for section 1. This is the first accordion panel.'
    },
    {
      title: 'Section 2',
      content: 'Content for section 2. This is the second accordion panel.'
    },
    {
      title: 'Section 3',
      content: 'Content for section 3. This is the third accordion panel.'
    },
    {
      title: 'Disabled Section',
      content: 'This content should not be visible.',
      disabled: true
    }
  ];
  
  const handleChange = (value: number | number[] | null) => {
    // Since this is single mode, we expect a number or null
    if (value === null || typeof value === 'number') {
      setActiveIndex(value);
    }
  };
  
  return (
    <Accordion
      items={items}
      value={activeIndex}
      onChange={handleChange}
      multiple={false}
    />
  );
};

const MultipleAccordion = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([0]);
  
  const items = [
    {
      title: 'Section 1',
      content: 'Content for section 1. This is the first accordion panel.'
    },
    {
      title: 'Section 2',
      content: 'Content for section 2. This is the second accordion panel.'
    },
    {
      title: 'Section 3',
      content: 'Content for section 3. This is the third accordion panel.'
    }
  ];
  
  const handleChange = (value: number | number[] | null) => {
    // Since this is multiple mode, we expect an array
    if (Array.isArray(value)) {
      setActiveIndexes(value);
    }
  };
  
  return (
    <Accordion
      items={items}
      value={activeIndexes}
      onChange={handleChange}
      multiple={true}
    />
  );
};

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const SingleSelection: Story = {
  render: () => <SingleAccordion />
};

export const MultipleSelection: Story = {
  render: () => <MultipleAccordion />
};

export const WithRichContent: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    
    const handleChange = (value: number | number[] | null) => {
      if (value === null || typeof value === 'number') {
        setActiveIndex(value);
      }
    };
    
    const items = [
      {
        title: 'What is this component?',
        content: (
          <div>
            <p>The Accordion component is used to display collapsible content panels.</p>
            <p>It's useful when you want to toggle between hiding and showing large amounts of content.</p>
          </div>
        )
      },
      {
        title: 'How to use it?',
        content: (
          <div>
            <h4>Usage instructions:</h4>
            <ol>
              <li>Import the Accordion component</li>
              <li>Define your items array with title and content</li>
              <li>Use state to control which panels are open</li>
              <li>Render the component with your items and state handlers</li>
            </ol>
          </div>
        )
      },
      {
        title: 'Features',
        content: (
          <div>
            <ul>
              <li><strong>Single or multiple selection</strong> - Choose whether users can open multiple panels at once</li>
              <li><strong>Accessibility built-in</strong> - ARIA attributes for screen readers</li>
              <li><strong>Disabled state</strong> - Panels can be disabled when needed</li>
              <li><strong>Smooth animations</strong> - Panels open and close with nice transitions</li>
            </ul>
          </div>
        )
      }
    ];
    
    return (
      <Accordion
        items={items}
        value={activeIndex}
        onChange={handleChange}
        multiple={false}
      />
    );
  }
}; 