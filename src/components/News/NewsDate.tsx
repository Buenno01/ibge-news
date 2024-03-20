import getDate from '../../utils/getDate';

type NewsDateProps = {
  date: string;
};

function NewsDate({ date }: NewsDateProps) {
  const dateDifference = getDate(date);
  return (
    <p className="text-gray-500 text-xs">{ dateDifference }</p>
  );
}

export default NewsDate;
