import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

function Wrapper({ children, className = undefined }: WrapperProps) {
  return (
    <div className={ twMerge('flex', className) }>
      { children }
    </div>
  );
}

export default Wrapper;
