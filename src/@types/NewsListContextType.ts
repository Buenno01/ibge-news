import { NewsType } from './NewsType';

export type NewsListContextType = {
  news: NewsType[],
  isFetching: boolean,
  error: string | null,
};
