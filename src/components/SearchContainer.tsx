import { ReactNode } from 'react';
import Wrapper from './atoms/Wrapper';
import Filters from './Filters';

type SearchContainerProps = {
  children: ReactNode;
};

function SearchContainer({ children }: SearchContainerProps) {
  return (
    <Wrapper className="flex flex-col w-full">
      <Filters />
      { children }
    </Wrapper>
  );
}

export default SearchContainer;
