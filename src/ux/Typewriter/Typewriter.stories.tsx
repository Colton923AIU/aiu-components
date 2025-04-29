import type { Meta, StoryObj } from '@storybook/react';
import { Typewriter } from './Typewriter';
import React from 'react';

const meta: Meta<typeof Typewriter> = {
  title: 'UX/Typewriter',
  component: Typewriter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text to be typed out',
    },
    speed: {
      control: { type: 'number', min: 10, max: 500, step: 10 },
      description: 'Typing speed in milliseconds per character',
    },
    startDelay: {
      control: { type: 'number', min: 0, max: 3000, step: 100 },
      description: 'Delay before typing starts',
    },
    endDelay: {
      control: { type: 'number', min: 0, max: 3000, step: 100 },
      description: 'Delay after typing completes',
    },
    sentenceDelay: {
      control: { type: 'number', min: 0, max: 5000, step: 100 },
      description: 'Delay between sentences',
    },
    loop: {
      control: 'boolean',
      description: 'Whether to loop through the text',
    },
    eraseMode: {
      control: 'boolean',
      description: 'Whether to erase text before typing the next sentence',
    },
    eraseSpeed: {
      control: { type: 'number', min: 10, max: 300, step: 10 },
      description: 'Erasing speed in milliseconds per character',
    },
    cursor: {
      control: 'text',
      description: 'Cursor character',
    },
    showCursor: {
      control: 'boolean',
      description: 'Whether to show the cursor',
    },
    autoStart: {
      control: 'boolean',
      description: 'When true, typing starts automatically',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typewriter>;

export const Basic: Story = {
  args: {
    text: 'Hello, I am a typewriter component.',
    speed: 70,
    showCursor: true,
    cursor: '|',
  },
};

export const MultipleLines: Story = {
  args: {
    text: [
      'Hello there!',
      'I can type multiple sentences.',
      'Just provide an array of strings.',
      'Pretty cool, right?',
    ],
    speed: 50,
    sentenceDelay: 1000,
    showCursor: true,
  },
};

export const WithErasing: Story = {
  args: {
    text: [
      'First sentence that will be erased.',
      'Second sentence will replace it.',
      'And finally the third one.',
    ],
    speed: 60,
    eraseMode: true,
    eraseSpeed: 30,
    sentenceDelay: 800,
    loop: true,
  },
};

export const Looping: Story = {
  args: {
    text: [
      'This is the first sentence.',
      'This is the second sentence.',
      'This will repeat infinitely.',
    ],
    speed: 70,
    loop: true,
    sentenceDelay: 1200,
  },
};

export const CustomCursor: Story = {
  args: {
    text: 'Type with a custom cursor...',
    speed: 80,
    cursor: '▌',
    showCursor: true,
  },
};

export const SlowTyping: Story = {
  args: {
    text: 'This... types... very... slowly...',
    speed: 200,
    cursor: '_',
  },
};

// A component to showcase rich HTML support
const RichContent = () => {
  const sentences = [
    'I can <b>format</b> text',
    'I support <span style="color: blue">colors</span>',
    'And <span style="font-size: 1.5em">different</span> <span style="font-size: 0.8em">sizes</span>',
    'Pretty <span style="color: red; font-weight: bold">amazing</span>, right?'
  ];

  return (
    <div style={{ textAlign: 'center', width: '400px' }}>
      <Typewriter 
        text={sentences}
        speed={50}
        eraseMode={true}
        loop={true}
      />
    </div>
  );
};

export const RichContentExample: Story = {
  render: () => <RichContent />,
  parameters: {
    docs: {
      description: {
        story: 'This example shows how the Typewriter can handle rich HTML content (coming soon).',
      },
    },
  },
}; 