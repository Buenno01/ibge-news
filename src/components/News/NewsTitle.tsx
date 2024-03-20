import { twMerge } from 'tailwind-merge';

interface NewsTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  Title: string;
}

function NewsTitle({ Title, className, ...rest }: NewsTitleProps) {
  return (
    <h3
      { ...rest }
      className={ twMerge('font-semibold', className) }
    >
      { Title }
    </h3>
  );
}

export default NewsTitle;
