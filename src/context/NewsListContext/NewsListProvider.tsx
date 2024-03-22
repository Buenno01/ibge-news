import { ReactNode, useEffect, useState } from 'react';
import { NewsListContext } from '.';
import { NewsListContextType } from '../../@types/NewsListContextType';
import { NewsType } from '../../@types/NewsType';
import { useSearchNewsContext } from '../SearchNewsContext';
import getEndPoint from '../../utils/getEndPoint';
import formatApiData from '../../utils/formatApiData';

type NewsListProviderProps = {
  children: ReactNode;
};

function NewsListProvider({ children }: NewsListProviderProps) {
  const { params } = useSearchNewsContext();
  const [news, setNews] = useState<NewsType[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async (endpoint: string) => {
      console.log('fetchNews', endpoint);

      try {
        setIsFetching(true);
        setError(null);
        const response = await fetch(endpoint);
        const data = await response.json();
        setNews(formatApiData(data.items));
      } catch (err) {
        setError('Failed to fetch');
      } finally {
        setIsFetching(false);
      }
    };

    if (params.type === 'saved') {
      // Fetch saved news from local storage
    } else {
      fetchNews(getEndPoint(params));
    }
  }, [params]);

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
