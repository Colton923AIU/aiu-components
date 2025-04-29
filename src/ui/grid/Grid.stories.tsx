import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'UI/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Number of columns in the grid',
    },
    gap: {
      control: { type: 'number', min: 0, max: 48 },
      description: 'Gap between grid items in pixels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

// Helper to create consistent grid items
const GridItem = ({ children, color = '#1976d2' }: { children: React.ReactNode; color?: string }) => (
  <div
    style={{
      backgroundColor: color,
      color: 'white',
      padding: '24px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100px',
      fontSize: '18px',
      fontWeight: 'bold',
    }}
  >
    {children}
  </div>
);

// Basic grid with default settings
export const Default: Story = {
  args: {
    columns: 3,
    gap: 24,
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic 3-column grid with 24px gap between items.',
      },
    },
  },
};

// Grid with 4 columns
export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: 16,
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
        <GridItem>Item 7</GridItem>
        <GridItem>Item 8</GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: '4-column grid with 16px gap between items.',
      },
    },
  },
};

// Grid with 2 columns and larger gap
export const TwoColumnsLargeGap: Story = {
  args: {
    columns: 2,
    gap: 32,
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: '2-column grid with a larger 32px gap between items.',
      },
    },
  },
};

// Responsive grid
export const ResponsiveGrid: Story = {
  args: {
    columns: 4,
    gap: 24,
    responsive: {
      sm: 1,
      md: 2,
      lg: 3,
    },
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
        <GridItem>Item 7</GridItem>
        <GridItem>Item 8</GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid that changes from 4 columns on large screens to 3 columns on large screens (max-width: 1200px), 2 columns on medium screens (max-width: 900px), and 1 column on small screens (max-width: 600px).',
      },
    },
  },
};

// Grid with string-based gap
export const StringGap: Story = {
  args: {
    columns: 3,
    gap: '2rem',
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with a string-based gap using CSS units (2rem).',
      },
    },
  },
};

// Grid with different content types
export const MixedContent: Story = {
  render: () => {
    return (
      <Grid columns={3} gap={20} style={{ maxWidth: '800px' }}>
        <div style={{ padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Card Title</h3>
          <p style={{ margin: '0', color: '#666' }}>This is a simple text card with some basic content.</p>
        </div>
        
        <div style={{ padding: '0', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ height: '120px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            [Image placeholder]
          </div>
          <div style={{ padding: '12px' }}>
            <p style={{ margin: '0', fontSize: '14px' }}>Image caption</p>
          </div>
        </div>
        
        <div style={{ padding: '16px', backgroundColor: '#e3f2fd', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>42</div>
          <div>Statistic label</div>
        </div>
        
        <div style={{ padding: '16px', backgroundColor: '#fff3e0', borderRadius: '8px', border: '1px solid #ffe0b2' }}>
          <h4 style={{ margin: '0 0 8px 0', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>⚠️</span> Notice
          </h4>
          <p style={{ margin: '0' }}>This is an important notification that needs attention.</p>
        </div>
        
        <GridItem color="#673ab7">Grid Item</GridItem>
        
        <div style={{ padding: '16px', backgroundColor: '#e8f5e9', borderRadius: '8px' }}>
          <ul style={{ margin: '0', paddingLeft: '20px' }}>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
          </ul>
        </div>
      </Grid>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with mixed content types including cards, images, and various layouts.',
      },
    },
  },
};

// Grid with uneven heights
export const UnevenHeights: Story = {
  render: () => {
    return (
      <Grid columns={3} gap={20} style={{ maxWidth: '800px' }}>
        <GridItem>
          Short content
        </GridItem>
        <GridItem>
          <div style={{ height: '200px', display: 'flex', alignItems: 'center' }}>
            Taller content
          </div>
        </GridItem>
        <GridItem>
          Short content
        </GridItem>
        <GridItem>
          <div style={{ height: '150px', display: 'flex', alignItems: 'center' }}>
            Medium height
          </div>
        </GridItem>
        <GridItem>
          Short content
        </GridItem>
        <GridItem>
          <div style={{ height: '100px', display: 'flex', alignItems: 'center' }}>
            Variable height
          </div>
        </GridItem>
      </Grid>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with items of varying heights, showcasing how the grid handles uneven content.',
      },
    },
  },
}; 