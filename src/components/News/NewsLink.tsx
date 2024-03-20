import { Link } from 'react-router-dom';

interface NewsLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

function NewsLink({ href, ...rest }: NewsLinkProps) {
  return (
    <Link
      { ...rest }
      to={ href }
      target="_blank"
      className="bg-green-500 px-2 py-1
      text-white font-medium rounded-md
      active:bg-green-400
      hover:bg-green-700 transition-colors
      shadow-md"
    >
      Leia a notícia aqui
    </Link>
  );
}

export default NewsLink;
