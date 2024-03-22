import { NewsType } from '../@types/NewsType';
import News from './News';
import SaveBtn from './atoms/SaveBtn';
import Wrapper from './atoms/Wrapper';

type NewCardProps = {
  news: NewsType;
  loading: boolean;
  index?: number;
};

function NewCard({ news, loading, index = 0 }: NewCardProps) {
  return (
    <News.Root
      data-testid={ `${index}-new-card` }
      className="flex flex-col px-3 py-1 w-72 h-60 lg:w-96 lg:h-45vh justify-between"
    >
      {
        loading && (
          <p data-testid={ `${index}-new-loading` }>Loading...</p>
        )
      }
      {
        (!loading && news) && (
          <>
            <Wrapper className="flex-col gap-2 justify-between h-full border-b p-2">
              <News.Title
                Title={ news.titulo }
                data-testid={ `${index}-newnew-title` }
                className="lg:text-xl line-clamp-3"
              />
              <News.Abstract
                abstract={ news.introducao }
                data-testid={ `${index}-new-abstract` }
                className="lg:line-clamp-none lg:text-base"
              />
              <Wrapper className="justify-between">
                <News.Date
                  date={ news.data_publicacao }
                  data-testid={ `${index}-new-date` }
                  className="lg:text-sm"
                />
                <News.Link href={ news.link } data-testid={ `${index}-new-link` } />
              </Wrapper>
            </Wrapper>
            <Wrapper className="h-fit p-2">
              <SaveBtn news={ news } />
            </Wrapper>
          </>
        )
      }
    </News.Root>
  );
}

export default NewCard;
