import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'UI/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    color: {
      control: 'color',
    },
    thickness: {
      control: 'text',
    },
    margin: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <div>Content above the divider</div>
        <Story />
        <div>Content below the divider</div>
      </div>
    ),
  ],
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
        <div>Left content</div>
        <Story />
        <div>Right content</div>
      </div>
    ),
  ],
};

export const CustomColor: Story = {
  args: {
    color: '#1976d2',
    thickness: 2,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <div>Content above the divider</div>
        <Story />
        <div>Content below the divider</div>
      </div>
    ),
  ],
};

export const ThickDivider: Story = {
  args: {
    thickness: 4,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <div>Content above the divider</div>
        <Story />
        <div>Content below the divider</div>
      </div>
    ),
  ],
};

export const CustomMargin: Story = {
  args: {
    margin: '32px 0',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <div>Content above the divider (with extra margin)</div>
        <Story />
        <div>Content below the divider (with extra margin)</div>
      </div>
    ),
  ],
};

export const InCard: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '300px', padding: '16px', border: '1px solid #eee', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 16px 0' }}>Card Title</h3>
        <Story />
        <p style={{ margin: '16px 0 0 0' }}>Card content goes here. This is some example text to show how a divider might be used in a card component.</p>
      </div>
    ),
  ],
};

export const WithContentSections: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <section>
          <h3>Section 1</h3>
          <p>This is the content for section 1.</p>
        </section>
        <Story />
        <section>
          <h3>Section 2</h3>
          <p>This is the content for section 2.</p>
        </section>
        <Story />
        <section>
          <h3>Section 3</h3>
          <p>This is the content for section 3.</p>
        </section>
      </div>
    ),
  ],
}; 