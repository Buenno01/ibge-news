import Wrapper from './atoms/Wrapper';
import { SearchType } from '../@types/ParamsType';
import FilterButton from './atoms/FilterButton';
import { useSearchNewsContext } from '../context/SearchNewsContext';

type ButtonsToRender = {
  Text: string;
  paramType: SearchType;
};

const buttonsToRender: ButtonsToRender[] = [
  { Text: 'mais recentes', paramType: '' },
  { Text: 'release', paramType: 'release' },
  { Text: 'notícias', paramType: 'news' },
  { Text: 'salvos', paramType: 'saved' },
];

function Filters() {
  const { params, handleFilter } = useSearchNewsContext();
  const activeButton = 'border-red-500 font-bold';

  return (
    <Wrapper className="w-full border-b shadow-md px-3 py-5 mb-5">
      <Wrapper
        className="mx-auto justify-between font-semibold
      sm:justify-start sm:gap-7 sm:container"
      >
        {
        buttonsToRender.map((button, index) => (
          <FilterButton
            key={ index }
            Text={ button.Text }
            className={ params.type === button.paramType ? activeButton : '' }
            onClick={ () => handleFilter(button.paramType) }
          />
        ))
        }
      </Wrapper>
    </Wrapper>
  );
}

export default Filters;
