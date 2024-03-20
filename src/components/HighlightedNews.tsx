import useFetch from '../hooks/useFetch';
import News from './News';
import SaveBtn from './atoms/SaveBtn';
import Wrapper from './atoms/Wrapper';

function HighlightedNews() {
  const { data, loading, error } = useFetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=1');

  if (error) return <p data-testid="highlighted-new-error">Something went wrong!</p>;
  if ((!data || data.length === 0) && !loading) return 'Loading...';
  const news = (data && data[0]) ? data[0] : null;

  const BASE_IMG_URL = 'https://agenciadenoticias.ibge.gov.br/';

  return (
    <News.Root
      data-testid="highlighted-new"
      className="lg:flex-row lg:w-11/12 xl:w-9/12 lg:h-60vh md:w-2/3 sm:w-11/12"
    >
      {
        loading && (
          <p data-testid="highlighted-new-loading">Loading...</p>
        )
      }
      {
        (!loading && news) && (
          <>
            <News.Image
              data-testid="highlighted-new-image"
              alt={ news.imagens.image_intro_alt }
              src={ BASE_IMG_URL + news.imagens.image_fulltext }
            />
            <Wrapper className="flex-col gap-2 p-3 lg:justify-between lg:w-2/5">
              <Wrapper className="justify-between">
                <p className="text-xs font-semibold text-green-600">
                  Notícia mais recente
                </p>
                <SaveBtn news={ news } data-testid="highlighted-new-save-btn" />
              </Wrapper>
              <News.Title
                Title={ news.titulo }
                data-testid="highlighted-new-title"
                className="lg:text-xl"
              />
              <News.Abstract
                abstract={ news.introducao }
                data-testid="highlighted-new-abstract"
                className="lg:line-clamp-none lg:text-base"
              />
              <Wrapper className="justify-between">
                <News.Date
                  date={ news.data_publicacao }
                  data-testid="highlighted-new-date"
                  className="lg:text-sm"
                />
                <News.Link href={ news.link } data-testid="highlighted-new-link" />
              </Wrapper>
            </Wrapper>
          </>
        )
      }

    </News.Root>
  );
}

export default HighlightedNews;
