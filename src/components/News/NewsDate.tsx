import getDate from '../../utils/getDate';

interface NewsDateProps extends React.HTMLAttributes<HTMLParagraphElement> {
  date: string;
}

function NewsDate({ date, ...rest }: NewsDateProps) {
  const dateDifference = getDate(date);
  return (
    <p
      { ...rest }
      className="text-gray-500 text-xs"
    >
      { dateDifference }
    </p>
  );
}

export default NewsDate;
