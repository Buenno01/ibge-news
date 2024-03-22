import HighlightedNews from '../../components/HighlightedNews';
import NewsList from '../../components/NewsList';
import SearchContainer from '../../components/SearchContainer';

function Home() {
  return (
    <main className="flex flex-col gap-16">
      <HighlightedNews />
      <SearchContainer>
        <NewsList />
      </SearchContainer>
    </main>
  );
}

export default Home;
