import {
  FaBookmark,
  FaRegBookmark,
} from 'react-icons/fa6';
import { NewsType } from '../../@types/NewsType';
import { useSavedNewsContext } from '../../context/SavedNewsContext';

interface SaveBtnProps extends React.HTMLAttributes<HTMLButtonElement> {
  news: NewsType;
}

function SaveBtn({ news, ...rest }: SaveBtnProps) {
  const { savedNews, toggleSavedNew } = useSavedNewsContext();
  const isSaved = savedNews
    .some(({ id }) => news.id === id);

  return (
    <button
      { ...rest }
      className="text-green-600 text-xl"
      onClick={ () => toggleSavedNew(news) }
    >
      { isSaved ? <FaBookmark /> : <FaRegBookmark />}
    </button>
  );
}

export default SaveBtn;
