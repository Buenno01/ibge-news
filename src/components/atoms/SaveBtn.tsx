import { useState } from 'react';
import {
  FaBookmark,
  FaRegBookmark,
} from 'react-icons/fa6';

interface SaveBtnProps extends React.HTMLAttributes<HTMLButtonElement> {
  newsId: number;
}

function SaveBtn({ newsId }: SaveBtnProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleClick = () => {
    setIsSaved(!isSaved);
    console.log(`Todo: save btn${newsId}`);
  };

  return (
    <button className="text-green-600 text-xl" onClick={ handleClick }>
      { isSaved ? <FaBookmark /> : <FaRegBookmark />}
    </button>
  );
}

export default SaveBtn;
