import { ReactNode } from 'react';

type NewsRootProps = {
  children: ReactNode;
};

function NewsRoot({ children }: NewsRootProps) {
  return (
    <div
      className="flex flex-col mx-auto text-sm
    border rounded-lg overflow-hidden w-80"
    >
      {children}
    </div>
  );
}

export default NewsRoot;
