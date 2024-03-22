import { useState } from 'react';
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
  const { produto_id: idProduto, id } = news;
  const { savedNews, toggleSavedNew } = useSavedNewsContext();
  const isSaved = savedNews
    .some((savedNew) => savedNew[0] === idProduto && savedNew[1] === id);

  return (
    <button
      { ...rest }
      className="text-green-600 text-xl"
      onClick={ () => toggleSavedNew(idProduto, id) }
    >
      { isSaved ? <FaBookmark /> : <FaRegBookmark />}
    </button>
  );
}

export default SaveBtn;
