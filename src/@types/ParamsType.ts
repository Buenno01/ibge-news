export type SearchType = '' | 'release' | 'news' | 'saved';

export interface ParamsType {
  type: SearchType;
  page: number;
}
