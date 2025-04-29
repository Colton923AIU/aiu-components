import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChipGroup } from './ChipGroup';

// Wrapper for single selection mode
const SingleSelectionChipGroup = () => {
  const [selected, setSelected] = useState<string | number>('apple');
  
  const chips = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
    { label: 'Grape', value: 'grape' },
    { label: 'Disabled', value: 'disabled', disabled: true }
  ];
  
  const handleChange = (value: string | number | Array<string | number>) => {
    if (typeof value === 'string' || typeof value === 'number') {
      setSelected(value);
    }
  };
  
  return (
    <ChipGroup
      chips={chips}
      value={selected}
      onChange={handleChange}
      multiple={false}
    />
  );
};

// Wrapper for multiple selection mode
const MultipleSelectionChipGroup = () => {
  const [selected, setSelected] = useState<Array<string | number>>(['apple', 'orange']);
  
  const chips = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
    { label: 'Grape', value: 'grape' },
    { label: 'Disabled', value: 'disabled', disabled: true }
  ];
  
  const handleChange = (value: string | number | Array<string | number>) => {
    if (Array.isArray(value)) {
      setSelected(value);
    }
  };
  
  return (
    <ChipGroup
      chips={chips}
      value={selected}
      onChange={handleChange}
      multiple={true}
    />
  );
};

// Wrapper for removable chips
const RemovableChipGroup = () => {
  const [chips, setChips] = useState([
    { label: 'JavaScript', value: 'js' },
    { label: 'TypeScript', value: 'ts' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' }
  ]);
  const [selected, setSelected] = useState<Array<string | number>>(['js', 'react']);
  
  const handleChange = (value: string | number | Array<string | number>) => {
    if (Array.isArray(value)) {
      setSelected(value);
    }
  };
  
  const handleRemove = (value: string | number) => {
    setChips(chips.filter(chip => chip.value !== value));
    if (Array.isArray(selected) && selected.includes(value)) {
      setSelected(selected.filter(v => v !== value));
    }
  };
  
  return (
    <ChipGroup
      chips={chips}
      value={selected}
      onChange={handleChange}
      multiple={true}
      onRemove={handleRemove}
    />
  );
};

const meta: Meta<typeof ChipGroup> = {
  title: 'UI/ChipGroup',
  component: ChipGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChipGroup>;

export const SingleSelection: Story = {
  render: () => <SingleSelectionChipGroup />
};

export const MultipleSelection: Story = {
  render: () => <MultipleSelectionChipGroup />
};

export const Removable: Story = {
  render: () => <RemovableChipGroup />
};

export const WithIcons: Story = {
  render: () => {
    const [selected, setSelected] = useState<Array<string | number>>(['home']);
    
    const handleChange = (value: string | number | Array<string | number>) => {
      if (Array.isArray(value)) {
        setSelected(value);
      }
    };
    
    const chips = [
      { label: 'Home', value: 'home', icon: '🏠' },
      { label: 'Work', value: 'work', icon: '💼' },
      { label: 'Shopping', value: 'shopping', icon: '🛒' },
      { label: 'Entertainment', value: 'entertainment', icon: '🎬' },
      { label: 'Travel', value: 'travel', icon: '✈️' }
    ];
    
    return (
      <ChipGroup
        chips={chips}
        value={selected}
        onChange={handleChange}
        multiple={true}
      />
    );
  }
}; 