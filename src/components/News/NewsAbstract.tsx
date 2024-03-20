interface NewsAbstractProps extends React.HTMLAttributes<HTMLParagraphElement> {
  abstract: string;
}

function NewsAbstract({ abstract, ...rest }: NewsAbstractProps) {
  return (
    <p
      { ...rest }
      className="overflow-hidden line-clamp-3 overflow-ellipsis"
    >
      { abstract }
    </p>
  );
}

export default NewsAbstract;
