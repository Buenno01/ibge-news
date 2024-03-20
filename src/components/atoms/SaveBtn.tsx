import { useState } from 'react';
import {
  FaBookmark,
  FaRegBookmark,
} from 'react-icons/fa6';
import { NewsType } from '../../@types/NewsType';

interface SaveBtnProps extends React.HTMLAttributes<HTMLButtonElement> {
  news: NewsType;
}

function SaveBtn({ news }: SaveBtnProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleClick = () => {
    setIsSaved(!isSaved);
    console.log(`Todo: save btn${news}`);
  };

  return (
    <button className="text-green-600 text-xl" onClick={ handleClick }>
      { isSaved ? <FaBookmark /> : <FaRegBookmark />}
    </button>
  );
}

export default SaveBtn;
