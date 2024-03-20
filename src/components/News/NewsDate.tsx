type NewsDateProps = {
  date: string;
};

function NewsDate({ date }: NewsDateProps) {
  return (
    <p className="text-gray-500 text-xs">{ date }</p>
  );
}

export default NewsDate;
