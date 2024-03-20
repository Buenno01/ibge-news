import HighlightedNews from '../../components/HighlightedNews';
import NewCard from '../../components/NewCard';
import ListWrapper from '../../components/atoms/ListWrapper';
import newsList from '../../tests/mocks/NewsList';

function Home() {
  return (
    <main className="flex flex-col gap-16">
      <HighlightedNews />
      <ListWrapper
        className="xl:grid xl:grid-cols-3 md:container md:mx-auto sm:gap-y-10"
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
    </main>
  );
}

export default Home;
