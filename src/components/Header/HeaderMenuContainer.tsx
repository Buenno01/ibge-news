import { ReactNode } from 'react';
import ListWrapper from '../atoms/ListWrapper';

type HeaderMenuContainerProps = {
  children: ReactNode;
};

function HeaderMenuContainer({ children }: HeaderMenuContainerProps) {
  return (
    <ListWrapper>
      { children }
    </ListWrapper>
  );
}

export default HeaderMenuContainer;
