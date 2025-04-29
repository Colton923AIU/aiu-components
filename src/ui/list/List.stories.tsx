import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'UI/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of list items',
    },
    header: {
      control: 'text',
      description: 'Optional header content',
    },
    footer: {
      control: 'text',
      description: 'Optional footer content',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple selection',
    },
    divider: {
      control: 'boolean',
      description: 'Show divider between items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

// Basic list with simple items
export const Basic: Story = {
  args: {
    items: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' },
      { label: 'Item 4' },
      { label: 'Item 5' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic list with simple text items.',
      },
    },
  },
};

// List with header and footer
export const WithHeaderAndFooter: Story = {
  args: {
    header: 'List Header',
    footer: 'List Footer',
    items: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'List with header and footer elements.',
      },
    },
  },
};

// List with icons
export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Home', icon: '🏠' },
      { label: 'Settings', icon: '⚙️' },
      { label: 'Profile', icon: '👤' },
      { label: 'Messages', icon: '💬' },
      { label: 'Logout', icon: '🚪' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'List with icons alongside each item.',
      },
    },
  },
};

// List with descriptions
export const WithDescriptions: Story = {
  args: {
    header: 'Notifications',
    items: [
      { label: 'New message', description: '2 minutes ago' },
      { label: 'System update', description: '1 hour ago' },
      { label: 'Payment received', description: 'Yesterday' },
      { label: 'Friend request', description: '3 days ago' },
    ],
    divider: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'List with descriptions for each item and dividers between items.',
      },
    },
  },
};

// List with disabled items
export const WithDisabledItems: Story = {
  args: {
    items: [
      { label: 'Available option', icon: '✅' },
      { label: 'Disabled option', icon: '❌', disabled: true },
      { label: 'Available option', icon: '✅' },
      { label: 'Disabled option', icon: '❌', disabled: true },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'List with some disabled items that cannot be selected.',
      },
    },
  },
};

// Interactive list with selection
export const WithSelection: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<number>(0);
    
    return (
      <div style={{ width: '300px' }}>
        <List
          header="Select an option"
          items={[
            { label: 'Option 1' },
            { label: 'Option 2' },
            { label: 'Option 3' },
            { label: 'Option 4' },
          ]}
          selected={selected}
          onSelect={(idx) => setSelected(idx as number)}
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f5f5f5', borderRadius: '4px' }}>
          Selected: Option {selected + 1}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive list with selection state.',
      },
    },
  },
};

// Multiple selection list
export const MultipleSelection: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<number[]>([0, 2]);
    
    return (
      <div style={{ width: '300px' }}>
        <List
          header="Select multiple options"
          items={[
            { label: 'Option 1' },
            { label: 'Option 2' },
            { label: 'Option 3' },
            { label: 'Option 4' },
          ]}
          multiple={true}
          selected={selected}
          onSelect={(selected) => setSelected(selected as number[])}
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f5f5f5', borderRadius: '4px' }}>
          Selected: {selected.map(idx => `Option ${idx + 1}`).join(', ')}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'List with multiple selection enabled.',
      },
    },
  },
};

// Complex list example
export const ComplexList: Story = {
  render: () => {
    const items = [
      {
        label: (
          <div>
            <div style={{ fontWeight: 'bold' }}>John Doe</div>
            <div style={{ fontSize: '14px' }}>Meeting scheduled for tomorrow</div>
          </div>
        ),
        icon: (
          <div style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            background: '#1976d2', 
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px'
          }}>
            JD
          </div>
        ),
        description: (
          <div style={{ fontSize: '12px', color: '#666' }}>2h ago</div>
        )
      },
      {
        label: (
          <div>
            <div style={{ fontWeight: 'bold' }}>Sarah Smith</div>
            <div style={{ fontSize: '14px' }}>Shared a document with you</div>
          </div>
        ),
        icon: (
          <div style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            background: '#388e3c', 
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px'
          }}>
            SS
          </div>
        ),
        description: (
          <div style={{ fontSize: '12px', color: '#666' }}>Yesterday</div>
        )
      },
      {
        label: (
          <div>
            <div style={{ fontWeight: 'bold' }}>Mike Johnson</div>
            <div style={{ fontSize: '14px' }}>Left a comment on your post</div>
          </div>
        ),
        icon: (
          <div style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            background: '#f57c00', 
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px'
          }}>
            MJ
          </div>
        ),
        description: (
          <div style={{ fontSize: '12px', color: '#666' }}>2 days ago</div>
        )
      },
    ];

    return (
      <div style={{ width: '400px' }}>
        <List
          header={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Recent Activity</span>
              <button style={{ 
                border: 'none', 
                background: 'none', 
                color: '#1976d2', 
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                Mark all as read
              </button>
            </div>
          }
          items={items}
          divider={true}
          footer={
            <div style={{ textAlign: 'center' }}>
              <button style={{ 
                border: 'none', 
                background: 'none', 
                color: '#1976d2', 
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                View all activities
              </button>
            </div>
          }
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex list example with custom item rendering, including avatars and timestamps.',
      },
    },
  },
}; 