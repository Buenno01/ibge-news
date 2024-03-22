import { ReactNode, useEffect, useState } from 'react';
import { NewsListContext } from '.';
import { NewsListContextType } from '../../@types/NewsListContextType';
import { NewsType } from '../../@types/NewsType';
import { useSearchNewsContext } from '../SearchNewsContext';
import { useSavedNewsContext } from '../SavedNewsContext';
import getEndPoint from '../../utils/getEndPoint';
import fetchNews from '../../utils/fetchNews';

type NewsListProviderProps = {
  children: ReactNode;
};

function NewsListProvider({ children }: NewsListProviderProps) {
  const { params } = useSearchNewsContext();
  const { savedNews } = useSavedNewsContext();
  const [news, setNews] = useState<NewsType[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const endpoint = getEndPoint(params);

    const fetchDefault = async () => {
      try {
        setIsFetching(true);
        setError(null);
        const response = await fetchNews(endpoint);
        setNews(response);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsFetching(false);
      }
    };

    if (params.type !== 'saved') {
      fetchDefault();
    }
  }, [params]);

  useEffect(() => {
    if (params.type === 'saved') {
      setNews(savedNews);
    }
  }, [savedNews, params]);

  const value: NewsListContextType = {
    news,
    isFetching,
    error,
  };

  return (
    <NewsListContext.Provider value={ value }>
      { children }
    </NewsListContext.Provider>
  );
}

export default NewsListProvider;
