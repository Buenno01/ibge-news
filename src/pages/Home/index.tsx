import HighlightedNews from '../../components/HighlightedNews';
import NewCard from '../../components/NewCard';
import SearchContainer from '../../components/SearchContainer';
import ListWrapper from '../../components/atoms/ListWrapper';
import newsList from '../../tests/mocks/NewsList';

function Home() {
  return (
    <main className="flex flex-col gap-16">
      <HighlightedNews />
      <SearchContainer>
        <ListWrapper
          className="gap-y- xl:grid xl:grid-cols-3 md:container md:mx-auto sm:gap-y-10"
        >
          {
            newsList.items.map((news, index) => (
              <NewCard
                key={ index }
                news={ news }
                index={ index }
                loading={ false }
              />
            ))
            }
        </ListWrapper>
      </SearchContainer>
    </main>
  );
}

export default Home;
