import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ListWrapperProps extends React.HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

function ListWrapper({ children, className, ...rest }: ListWrapperProps) {
  return (
    <ul { ...rest } className={ twMerge('flex flex-wrap', className) }>
      { children }
    </ul>
  );
}

export default ListWrapper;
