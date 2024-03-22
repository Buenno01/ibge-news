import HighlightedNews from '../../components/HighlightedNews';
import NewCard from '../../components/NewCard';
import SearchContainer from '../../components/SearchContainer';
import ListWrapper from '../../components/atoms/ListWrapper';
import { useNewsListContext } from '../../context/NewsListContext';

function Home() {
  const { news, error, isFetching } = useNewsListContext();
  return (
    <main className="flex flex-col gap-16">
      <HighlightedNews />
      <SearchContainer>
        <ListWrapper
          className="gap-y- xl:grid xl:grid-cols-3 md:container
          md:mx-auto sm:gap-y-10 relative min-h-20"
        >
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
                  loading={ false }
                />
              ))
            )
            }
        </ListWrapper>
      </SearchContainer>
    </main>
  );
}

export default Home;
