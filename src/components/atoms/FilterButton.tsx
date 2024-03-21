import React from 'react';
import { twMerge } from 'tailwind-merge';

interface FilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Text: string;
}

function FilterButton({ Text, className, ...rest }: FilterButtonProps) {
  return (
    <button
      { ...rest }
      className={ twMerge('capitalize border-b-2 px-1', className) }
    >
      { Text }
    </button>
  );
}

export default FilterButton;
