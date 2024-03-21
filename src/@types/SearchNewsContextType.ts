import { ParamsType, SearchType } from './ParamsType';

export type SearchNewsContextType = {
  params: ParamsType,
  setParams: (params: ParamsType) => void,
  handleFilter: (type: SearchType) => void,
};
