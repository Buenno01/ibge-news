import { NewsType } from '../@types/NewsType';
import News from './News';
import SaveBtn from './atoms/SaveBtn';
import Wrapper from './atoms/Wrapper';

type HighlightedNewsProps = {
  news: NewsType;
};

function HighlightedNews({ news }: HighlightedNewsProps) {
  return (
    <News.Root>
      <News.Image
        alt={ news.imagens.image_intro_alt }
        src={ news.imagens.image_intro }
      />
      <Wrapper className="flex-col gap-2 p-3">
        <Wrapper className="justify-between">
          <p className="text-xs font-semibold text-green-600">
            Notícia mais recente
          </p>
          <SaveBtn newsId={ news.id } />
        </Wrapper>
        <News.Title title={ news.titulo } />
        <News.Abstract abstract={ news.introducao } />
        <Wrapper className="justify-between">
          <News.Date date={ news.data_publicacao } />
          <News.Link href={ news.link } />
        </Wrapper>
      </Wrapper>
    </News.Root>
  );
}

export default HighlightedNews;
