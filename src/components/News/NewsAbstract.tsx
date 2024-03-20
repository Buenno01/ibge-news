import { twMerge } from 'tailwind-merge';

interface NewsAbstractProps extends React.HTMLAttributes<HTMLParagraphElement> {
  abstract: string;
}

function NewsAbstract({ abstract, className, ...rest }: NewsAbstractProps) {
  return (
    <p
      { ...rest }
      className={ twMerge('overflow-hidden line-clamp-3 overflow-ellipsis', className) }
    >
      { abstract }
    </p>
  );
}

export default NewsAbstract;
