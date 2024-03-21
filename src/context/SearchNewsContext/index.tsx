import { createContext, useContext } from 'react';
import { SearchNewsContextType } from '../../@types/SearchNewsContextType';

const initialState: SearchNewsContextType = {
  params: { type: '', page: 1 },
  setParams: () => {},
  handleFilter: () => {},
};

export const SearchNewsContext = createContext<SearchNewsContextType>(initialState);

export const useSearchNewsContext = () => useContext(SearchNewsContext);
