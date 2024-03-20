import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface NewsRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function NewsRoot({ children, className, ...rest }: NewsRootProps) {
  return (
    <div
      { ...rest }
      className={ twMerge(`flex flex-col mx-auto text-sm
    border rounded-lg overflow-hidden w-80 shadow-sm`, className) }
    >
      {children}
    </div>
  );
}

export default NewsRoot;
