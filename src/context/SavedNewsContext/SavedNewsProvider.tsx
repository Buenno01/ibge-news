import { ReactNode } from 'react';
import { SavedNewsContext } from '.';
import useLocalStorage from '../../hooks/useLocalStorage';
import { SavedNewsContextType } from '../../@types/SavedNewsContextType';
import { NewsType } from '../../@types/NewsType';

type SavedNewsProviderProps = {
  children: ReactNode;
};

function SavedNewsProvider({ children }: SavedNewsProviderProps): JSX.Element {
  const [savedNews, setSavedNews] = useLocalStorage<NewsType[]>('savedNews', []);

  const addSavedNew = (news: NewsType) => {
    setSavedNews([...savedNews, news]);
  };

  const removeSavedNew = (news: NewsType) => {
    const filteredSavedNews = savedNews
      .filter(({ id }) => news.id !== id);

    setSavedNews(filteredSavedNews);
  };

  const toggleSavedNew = (news: NewsType) => {
    if (savedNews.some(({ id }) => news.id === id)) {
      removeSavedNew(news);
    } else {
      addSavedNew(news);
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
