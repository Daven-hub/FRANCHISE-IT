import { useState } from 'react';

interface CheckboxGroupProps {
  options: string[];
  selected: string[];
  name: string;
  onChange: (name: string, values: string[]) => void;
  className?: string;
}

const CheckboxGroup = ({ options, selected, name, onChange, className = '' }: CheckboxGroupProps) => {
  const handleCheckboxChange = (option: string) => {
    const newSelected = selected.includes(option)
      ? selected.filter(item => item !== option)
      : [...selected, option];
    
    onChange(name, newSelected);
  };

  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      {options.map(option => (
        <label key={option} className={`flex items-center p-4 rounded-md border transition-all cursor-pointer ${
          selected.includes(option)
            ? 'border-accent bg-accent/10 text-accent'
            : 'border-white/20 hover:border-accent/50'
        }`}>
          <input
            type="checkbox"
            className="mr-2 h-4 w-4 accent-accent"
            checked={selected.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;