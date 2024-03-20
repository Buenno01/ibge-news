import { ReactNode } from 'react';

interface NewsRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function NewsRoot({ children, ...rest }: NewsRootProps) {
  return (
    <div
      { ...rest }
      className="flex flex-col mx-auto text-sm
    border rounded-lg overflow-hidden w-80 shadow-sm"
    >
      {children}
    </div>
  );
}

export default NewsRoot;
