import { twMerge } from 'tailwind-merge';
import getDate from '../../utils/getDate';

interface NewsDateProps extends React.HTMLAttributes<HTMLParagraphElement> {
  date: string;
}

function NewsDate({ date, className, ...rest }: NewsDateProps) {
  const dateDifference = getDate(date);
  return (
    <p
      { ...rest }
      className={ twMerge('text-gray-500 text-xs', className) }
    >
      { dateDifference }
    </p>
  );
}

export default NewsDate;
