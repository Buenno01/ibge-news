import { createContext, useContext } from 'react';
import { NewsListContextType } from '../../@types/NewsListContextType';

const initialState: NewsListContextType = {
  isFetching: true,
  error: null,
  news: [],
};

export const NewsListContext = createContext<NewsListContextType>(initialState);

export const useNewsListContext = () => useContext(NewsListContext);
