import { ApiReturn } from '../../@types/ApiReturn';
import newsList from './NewsList';
import ReleasesList from './ReleasesList';
import UnfilteredList from './UnfilteredList';

const sumAllItems = [
  ...newsList.items,
  ...ReleasesList.items,
  ...UnfilteredList.items,
];

const getSavedMock = (ids: string): ApiReturn => ({
  count: 3,
  nextPage: 2,
  previousPage: 0,
  page: 1,
  showingFrom: 1,
  showingTo: sumAllItems.length,
  totalPages: 2,
  items: sumAllItems
    .filter(({ id }) => ids.split('|').map(Number).includes(id)),
});

export default getSavedMock;
