import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';

const meta: Meta<typeof Timeline> = {
  title: 'UI/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Direction of the timeline',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

// Basic vertical timeline
export const VerticalTimeline: Story = {
  args: {
    orientation: 'vertical',
    items: [
      {
        label: 'Project Started',
        time: 'January 10, 2023',
        content: 'Kickoff meeting and initial planning',
      },
      {
        label: 'Design Phase',
        time: 'February 15, 2023',
        content: 'UI/UX design and prototyping',
      },
      {
        label: 'Development',
        time: 'March 25, 2023',
        content: 'Frontend and backend implementation',
      },
      {
        label: 'Testing',
        time: 'April 20, 2023',
        content: 'QA testing and bug fixes',
      },
      {
        label: 'Launch',
        time: 'May 5, 2023',
        content: 'Product release to production',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Default vertical timeline displaying a project timeline.',
      },
    },
  },
};

// Horizontal timeline
export const HorizontalTimeline: Story = {
  args: {
    orientation: 'horizontal',
    items: [
      {
        label: '2019',
        content: 'Company founded',
      },
      {
        label: '2020',
        content: 'Initial product launch',
      },
      {
        label: '2021',
        content: 'Series A funding',
      },
      {
        label: '2022',
        content: 'Expanded to international markets',
      },
      {
        label: '2023',
        content: 'Reached 1M customers',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Horizontal timeline showing company milestones by year.',
      },
    },
  },
};

// Timeline with custom icons
export const CustomIcons: Story = {
  args: {
    items: [
      {
        label: 'Order Placed',
        time: '10:30 AM',
        content: 'Your order has been placed successfully',
        icon: '🛒',
      },
      {
        label: 'Processing',
        time: '11:45 AM',
        content: 'Your order is being processed',
        icon: '⚙️',
      },
      {
        label: 'Shipped',
        time: '2:15 PM',
        content: 'Your order has been shipped',
        icon: '📦',
      },
      {
        label: 'Out for Delivery',
        time: 'May 12, 9:00 AM',
        content: 'Your order is out for delivery',
        icon: '🚚',
      },
      {
        label: 'Delivered',
        time: 'May 12, 3:30 PM',
        content: 'Your order has been delivered',
        icon: '✅',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Timeline with custom icons representing each step of an order process.',
      },
    },
  },
};

// Timeline with rich content
export const RichContent: Story = {
  args: {
    items: [
      {
        label: 'Account Created',
        time: 'January 15, 2023',
        content: (
          <div>
            <p style={{ margin: '0 0 8px 0' }}>User registered with email: user@example.com</p>
            <div style={{ padding: '8px', background: '#f5f5f5', borderRadius: '4px', fontSize: '14px' }}>
              <code>User ID: 12345678</code>
            </div>
          </div>
        ),
        icon: '👤',
      },
      {
        label: 'Profile Completed',
        time: 'January 16, 2023',
        content: (
          <div>
            <p style={{ margin: '0 0 8px 0' }}>User completed their profile information</p>
            <ul style={{ margin: '0', paddingLeft: '16px' }}>
              <li>Added profile picture</li>
              <li>Completed bio information</li>
              <li>Added work experience</li>
            </ul>
          </div>
        ),
        icon: '📝',
      },
      {
        label: 'Subscription Started',
        time: 'January 20, 2023',
        content: (
          <div>
            <p style={{ margin: '0 0 8px 0' }}>User started a premium subscription</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ padding: '4px 8px', background: '#1976d2', color: 'white', borderRadius: '4px', fontSize: '12px' }}>Premium Plan</span>
              <span style={{ fontSize: '14px' }}>$19.99/month</span>
            </div>
          </div>
        ),
        icon: '⭐',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Timeline with rich content including HTML, styles, and interactive elements.',
      },
    },
  },
};

// Timeline with minimal styling
export const MinimalTimeline: Story = {
  args: {
    items: [
      {
        label: 'Research',
        content: 'Market analysis and user research',
      },
      {
        label: 'Strategy',
        content: 'Develop product strategy and roadmap',
      },
      {
        label: 'Design',
        content: 'Create prototypes and visual design',
      },
      {
        label: 'Development',
        content: 'Build and test the product',
      },
    ],
    style: {
      fontSize: '14px',
      maxWidth: '400px',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'A simple, minimal timeline without time information.',
      },
    },
  },
};

// Timeline with alternating content (education/work history)
export const AlternatingTimeline: Story = {
  render: () => {
    // Custom styling for education vs work items
    const items = [
      {
        label: 'University of Technology',
        time: '2015 - 2019',
        content: 'Bachelor of Computer Science',
        key: 'education-1',
        icon: '🎓',
      },
      {
        label: 'Tech Solutions Inc.',
        time: '2019 - 2021',
        content: 'Junior Developer',
        key: 'work-1',
        icon: '💼',
      },
      {
        label: 'Advanced Coding Workshop',
        time: 'Summer 2020',
        content: 'Certificate in Advanced Web Development',
        key: 'education-2',
        icon: '🎓',
      },
      {
        label: 'Global Systems Corp.',
        time: '2021 - Present',
        content: 'Senior Developer',
        key: 'work-2',
        icon: '💼',
      },
    ];

    return (
      <div style={{ maxWidth: '600px' }}>
        <h3 style={{ marginBottom: '16px', color: '#333' }}>Education & Work History</h3>
        <Timeline 
          items={items} 
          style={{ 
            padding: '8px 0',
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'An alternating timeline showing education and work history with different styling.',
      },
    },
  },
}; 