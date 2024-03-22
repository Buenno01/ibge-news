import HighlightedNews from '../../components/HighlightedNews';
import NewCard from '../../components/NewCard';
import SearchContainer from '../../components/SearchContainer';
import ListWrapper from '../../components/atoms/ListWrapper';
import { useNewsListContext } from '../../context/NewsListContext';

function Home() {
  const { news } = useNewsListContext();
  return (
    <main className="flex flex-col gap-16">
      <HighlightedNews />
      <SearchContainer>
        <ListWrapper
          className="gap-y- xl:grid xl:grid-cols-3 md:container md:mx-auto sm:gap-y-10"
        >
          {
            news.map((item, index) => (
              <NewCard
                key={ index }
                news={ item }
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
