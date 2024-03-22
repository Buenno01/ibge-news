import { ReactNode, useState } from 'react';
import { SearchNewsContext } from '.';
import { SearchNewsContextType } from '../../@types/SearchNewsContextType';
import { ParamsType, SearchType } from '../../@types/ParamsType';

type SearchNewsProviderProps = {
  children: ReactNode;
};

function SearchNewsProvider({ children }: SearchNewsProviderProps) {
  const [params, setParams] = useState<ParamsType>({ type: '', page: 1 });

  const handleFilter = (type: SearchType) => {
    if (type !== params.type) setParams({ ...params, type });
  };

  const handlePage = (page: number) => {
    if (page < 0 && params.page === 1) return;
    setParams({ ...params, page: params.page + page });
  };

  const value: SearchNewsContextType = {
    params,
    setParams,
    handleFilter,
    handlePage,
  };
  return (
    <SearchNewsContext.Provider value={ value }>
      { children }
    </SearchNewsContext.Provider>
  );
}

export default SearchNewsProvider;
