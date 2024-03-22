import { ReactNode } from 'react';
import { SavedNewsContext } from '.';
import useLocalStorage from '../../hooks/useLocalStorage';
import { SavedNew } from '../../@types/SavedNew';
import { SavedNewsContextType } from '../../@types/SavedNewsContextType';

type SavedNewsProviderProps = {
  children: ReactNode;
};

function SavedNewsProvider({ children }: SavedNewsProviderProps): JSX.Element {
  const [savedNews, setSavedNews] = useLocalStorage<SavedNew[]>('savedNews', []);

  const addSavedNew = (idProduto: number, id: number) => {
    setSavedNews([...savedNews, [idProduto, id]]);
  };

  const removeSavedNew = (idProduto: number, id: number) => {
    const filteredSavedNews = savedNews
      .filter((savedNew) => savedNew[0] !== idProduto || savedNew[1] !== id);

    setSavedNews(filteredSavedNews);
  };

  const toggleSavedNew = (idProduto: number, id: number) => {
    if (savedNews.some((savedNew) => savedNew[0] === idProduto && savedNew[1] === id)) {
      removeSavedNew(idProduto, id);
    } else {
      addSavedNew(idProduto, id);
    }
  };

  const value: SavedNewsContextType = {
    savedNews,
    toggleSavedNew,
  };

  return (
    <SavedNewsContext.Provider value={ value }>
      { children }
    </SavedNewsContext.Provider>
  );
}

export default SavedNewsProvider;
