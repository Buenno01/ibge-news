import { ReactNode } from 'react';
import Wrapper from './atoms/Wrapper';
import Filters from './Filters';
import PageIndex from './PageIndex';

type SearchContainerProps = {
  children?: ReactNode;
};

function SearchContainer({ children = '' }: SearchContainerProps) {
  return (
    <Wrapper className="flex flex-col w-full">
      <Filters />
      { children }
      <PageIndex />
    </Wrapper>
  );
}

export default SearchContainer;
