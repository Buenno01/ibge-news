interface NewsTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  Title: string;
}

function NewsTitle({ Title, ...rest }: NewsTitleProps) {
  return (
    <h3
      { ...rest }
      className="font-semibold"
    >
      { Title }
    </h3>
  );
}

export default NewsTitle;
