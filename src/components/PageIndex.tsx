import Wrapper from './atoms/Wrapper';
import { useSearchNewsContext } from '../context/SearchNewsContext';

function PageIndex() {
  const { params, handlePage } = useSearchNewsContext();
  return (
    <Wrapper className="justify-center border-t py-2 mt-5 gap-2 text-green-500 font-bold">
      <button
        onClick={ () => handlePage(-1) }
        aria-label="página anterior"
      >
        {'<<'}
      </button>
      <p className="w-7 text-center">{params.page}</p>
      <button
        onClick={ () => handlePage(1) }
        aria-label="próxima página"
      >
        {'>>'}
      </button>
    </Wrapper>
  );
}

export default PageIndex;
