import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

// Interactive story for controlled component
const TabsWithHooks = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { label: 'Tab 1', content: 'This is the content for Tab 1' },
    { label: 'Tab 2', content: 'This is the content for Tab 2' },
    { label: 'Tab 3', content: 'This is the content for Tab 3' },
    { label: 'Disabled', content: 'You cannot see this content', disabled: true },
  ];
  
  return (
    <Tabs
      tabs={tabs}
      value={activeTab}
      onChange={setActiveTab}
    />
  );
};

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Basic example
export const Default: Story = {
  render: () => <TabsWithHooks />
};

// Example with custom tab content
export const WithRichContent: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    
    const tabs = [
      { 
        label: 'Information',
        content: (
          <div>
            <h3>Information Tab</h3>
            <p>This tab contains important information.</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        )
      },
      { 
        label: 'Settings',
        content: (
          <div>
            <h3>Settings Tab</h3>
            <p>Adjust your preferences here.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label>
                <input type="checkbox" /> Enable notifications
              </label>
              <label>
                <input type="checkbox" /> Dark mode
              </label>
            </div>
          </div>
        )
      },
      { 
        label: 'Help',
        content: (
          <div>
            <h3>Help & Support</h3>
            <p>Need assistance? Contact us:</p>
            <p><strong>Email:</strong> support@example.com</p>
          </div>
        )
      },
    ];
    
    return (
      <Tabs
        tabs={tabs}
        value={activeTab}
        onChange={setActiveTab}
      />
    );
  }
}; 