import { ReactNode } from 'react';
import Wrapper from '../atoms/Wrapper';

type HeaderRootProps = {
  children: ReactNode;
};

function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  );
}

export default HeaderRoot;
