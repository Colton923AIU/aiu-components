import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    page: {
      control: { type: 'number', min: 1 },
    },
    pageCount: {
      control: { type: 'number', min: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// Default pagination with a few pages
export const Default: Story = {
  args: {
    page: 1,
    pageCount: 5,
    onChange: (page: number) => console.log(`Page changed to ${page}`),
  },
};

// Pagination with many pages showing ellipsis
export const ManyPages: Story = {
  args: {
    page: 5,
    pageCount: 20,
    onChange: (page: number) => console.log(`Page changed to ${page}`),
  },
};

// Show what happens when on first page
export const FirstPage: Story = {
  args: {
    page: 1,
    pageCount: 10,
    onChange: (page: number) => console.log(`Page changed to ${page}`),
  },
};

// Show what happens when on last page
export const LastPage: Story = {
  args: {
    page: 10,
    pageCount: 10,
    onChange: (page: number) => console.log(`Page changed to ${page}`),
  },
};

// With custom styling
export const CustomStyling: Story = {
  args: {
    page: 3,
    pageCount: 7,
    onChange: (page: number) => console.log(`Page changed to ${page}`),
    style: {
      backgroundColor: '#f5f5f5',
      padding: '8px',
      borderRadius: '4px',
    },
  },
};

// Interactive example with state
export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageCount = 10;
    
    return (
      <div>
        <p>Current page: {currentPage}</p>
        <Pagination
          page={currentPage}
          pageCount={pageCount}
          onChange={setCurrentPage}
        />
      </div>
    );
  },
};

// Pagination with a single page (should render nothing)
export const SinglePage: Story = {
  args: {
    page: 1,
    pageCount: 1,
    onChange: (page: number) => console.log(`Page changed to ${page}`),
  },
};

// Pagination with different breakpoints
export const MiddlePage: Story = {
  args: {
    page: 50,
    pageCount: 100,
    onChange: (page: number) => console.log(`Page changed to ${page}`),
  },
};

// Pagination with custom class name
export const CustomClassName: Story = {
  args: {
    page: 3,
    pageCount: 10,
    onChange: (page: number) => console.log(`Page changed to ${page}`),
    className: 'my-custom-pagination',
  },
};

// Pagination with table integration example
export const WithTableExample: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems = 37;
    const pageCount = Math.ceil(totalItems / itemsPerPage);
    
    // Mock data - in real app this would be filtered by page
    const items = Array.from({ length: itemsPerPage }, (_, i) => {
      const itemIndex = (currentPage - 1) * itemsPerPage + i + 1;
      if (itemIndex <= totalItems) {
        return { id: itemIndex, name: `Item ${itemIndex}`, value: Math.floor(Math.random() * 100) };
      }
      return null;
    }).filter((item): item is { id: number; name: string; value: number } => item !== null);
    
    return (
      <div style={{ width: '400px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #eee' }}>ID</th>
              <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #eee' }}>Name</th>
              <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #eee' }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{item.id}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{item.name}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee', textAlign: 'right' }}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
          </div>
          <Pagination
            page={currentPage}
            pageCount={pageCount}
            onChange={setCurrentPage}
          />
        </div>
      </div>
    );
  },
};

// Pagination with mobile-friendly layout
export const MobileFriendly: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageCount = 10;
    
    return (
      <div style={{ width: '280px', border: '1px dashed #ccc', padding: '16px' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px' }}>Mobile View Simulation</div>
        <Pagination
          page={currentPage}
          pageCount={pageCount}
          onChange={setCurrentPage}
          style={{ flexWrap: 'wrap', justifyContent: 'center', rowGap: '8px' }}
        />
      </div>
    );
  },
}; 