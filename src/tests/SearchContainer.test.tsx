import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { mockEndpoints } from './mocks/mockEndpoints';
import { renderWithRouterAndContext } from './utils';
import SearchContainer from '../components/SearchContainer';

const DEFAULT_ENDPOINT = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=9&page=1';
const SECOND_PAGE_DEFAULT_ENDPOINT = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=9&page=2';
const RELEASE_ENDPOINT = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=9&page=1&tipo=release';
const NEWS_ENDPOINT = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=9&page=1&tipo=noticia';

const getFilterButtons = () => ({
  recent: screen.getByTestId('filter-btn-'),
  release: screen.getByTestId('filter-btn-release'),
  news: screen.getByTestId('filter-btn-news'),
  saved: screen.getByTestId('filter-btn-saved'),
});

const getPageIndex = () => ({
  previous: screen.getByTestId('previous-page'),
  index: screen.getByTestId('page-index'),
  next: screen.getByTestId('next-page'),
});

describe('SearchContainer', () => {
  it('should fetch the most recent infos by default', () => {
    const spy = mockEndpoints();
    renderWithRouterAndContext(<SearchContainer />);
    expect(spy).toHaveBeenCalledWith(DEFAULT_ENDPOINT);
  });

  it('should fetch only releases when the filter is clicked', async () => {
    const spy = mockEndpoints();
    renderWithRouterAndContext(<SearchContainer />);
    const { release } = getFilterButtons();

    await userEvent.click(release);

    expect(spy).toHaveBeenLastCalledWith(RELEASE_ENDPOINT);
  });

  it('should fetch only news when the filter is clicked', async () => {
    const spy = mockEndpoints();
    renderWithRouterAndContext(<SearchContainer />);
    const { news } = getFilterButtons();

    await userEvent.click(news);

    expect(spy).toHaveBeenLastCalledWith(NEWS_ENDPOINT);
  });

  it('should fetch the most recent infos when the filter is clicked back', async () => {
    const spy = mockEndpoints();
    renderWithRouterAndContext(<SearchContainer />);
    const { recent, news } = getFilterButtons();

    await userEvent.click(news);

    expect(spy).toHaveBeenLastCalledWith(NEWS_ENDPOINT);

    await userEvent.click(recent);

    expect(spy).toHaveBeenLastCalledWith(DEFAULT_ENDPOINT);
  });

  it.todo('should render the saved news when the filter is clicked');

  it('should fetch the second page when the button is clicked', async () => {
    const spy = mockEndpoints();
    renderWithRouterAndContext(<SearchContainer />);
    const { next, previous, index } = getPageIndex();

    expect(spy).toHaveBeenCalledWith(DEFAULT_ENDPOINT);

    expect(index).toHaveTextContent(/1/);

    await userEvent.click(next);

    expect(index).toHaveTextContent(/2/);
    expect(spy).toHaveBeenCalledWith(SECOND_PAGE_DEFAULT_ENDPOINT);

    await userEvent.click(previous);

    expect(index).toHaveTextContent(/1/);
    expect(spy).toHaveBeenCalledWith(DEFAULT_ENDPOINT);
  });
});
