import { ReactNode } from 'react';

type ListWrapperProps = {
  children: ReactNode;
};

function ListWrapper({ children }: ListWrapperProps) {
  return (
    <ul className="flex gap-2">
      { children }
    </ul>
  );
}

export default ListWrapper;
