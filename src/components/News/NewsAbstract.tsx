type NewsAbstractProps = {
  abstract: string;
};

function NewsAbstract({ abstract }: NewsAbstractProps) {
  return (
    <p className="overflow-hidden line-clamp-3 overflow-ellipsis">{ abstract }</p>
  );
}

export default NewsAbstract;
