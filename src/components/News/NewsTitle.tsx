type NewsTitleProps = {
  title: string;
};

function NewsTitle({ title }: NewsTitleProps) {
  return (
    <h3
      className="font-semibold"
    >
      { title }
    </h3>
  );
}

export default NewsTitle;
