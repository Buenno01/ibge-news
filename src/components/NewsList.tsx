import { useNewsListContext } from '../context/NewsListContext';
import NewCard from './NewCard';
import NewCardLoading from './NewCardLoading';
import ListWrapper from './atoms/ListWrapper';

function NewsList() {
  const { news, error, isFetching } = useNewsListContext();
  return (
    <ListWrapper
      className="gap-y- xl:grid xl:grid-cols-3 md:container
          md:mx-auto sm:gap-y-10 relative min-h-20"
    >
      {
        isFetching && (
          Array.from({ length: 9 }).map((_, index) => (
            <NewCardLoading key={ index } />
          ))
        )
      }
      {
        (news.length === 0 && !isFetching) && (
          <p
            className="text-center text-2xl
          absolute left-0 right-0 bottom-1/2 translate-y-1/2"
          >
            {error ?? 'Nenhuma notícia encontrada'}
          </p>
        )
      }
      {
        (!isFetching && !error) && (
          news.map((item, index) => (
            <NewCard
              key={ index }
              news={ item }
              index={ index }
            />
          ))
        )
      }
    </ListWrapper>
  );
}

export default NewsList;
