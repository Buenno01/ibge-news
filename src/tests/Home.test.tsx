import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import { mockEndpoints } from './mocks/mockEndpoints';
import { renderWithRouter } from './utils';
import Home from '../pages/Home';
import oneNew from './mocks/oneNew';
import HighlightedNews from '../components/HighlightedNews';

const ONE_NEW_ENDPOINT = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=1';

const getHighlightedNewElements = async () => ({
  image: await screen.findByTestId('highlighted-new-image'),
  title: await screen.findByTestId('highlighted-new-title'),
  abstract: await screen.findByTestId('highlighted-new-abstract'),
  date: await screen.findByTestId('highlighted-new-date'),
  link: await screen.findByTestId('highlighted-new-link'),
  saveBtn: await screen.findByTestId('highlighted-new-save-btn'),
});
describe('Home', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should fetch the most recent new', () => {
    const spy = mockEndpoints();
    renderWithRouter(<Home />);
    expect(spy).toHaveBeenCalledWith(ONE_NEW_ENDPOINT);
  });

  it('should render the HighlightedNew component with the correct data', async () => {
    mockEndpoints();
    renderWithRouter(<HighlightedNews />);

    const highlightedNew = await screen.findByTestId('highlighted-new');

    expect(highlightedNew).toBeInTheDocument();

    const elements = await getHighlightedNewElements();

    expect(elements.image).toHaveAttribute('src', 'https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/ibge/2024_03/ENCE_HUB_HOME.jpg');
    expect(elements.title).toHaveTextContent(oneNew.items[0].titulo);
    expect(elements.abstract).toHaveTextContent(oneNew.items[0].introducao);
    expect(elements.date).toHaveTextContent(/mêses atrás/i);
    expect(elements.link).toHaveAttribute('href', oneNew.items[0].link);
    expect(elements.saveBtn).toBeInTheDocument();
  });

  it('should render the HighlightedNew with a loading status if it\'s fetching', async () => {
    mockEndpoints(false);
    const getLoadingStatus = () => screen.queryByTestId('highlighted-new-loading');

    renderWithRouter(<HighlightedNews />);

    const loadingStatus = getLoadingStatus();
    expect(loadingStatus).toBeInTheDocument();

    await screen.findByTestId('highlighted-new');
    const newLoadingStatus = getLoadingStatus();
    expect(newLoadingStatus).not.toBeInTheDocument();
  });

  it('should render the HighlightedNew with an error message if it fails to fetch', async () => {
    mockEndpoints(true);
    renderWithRouter(<HighlightedNews />);

    const errorMessage = await screen.findByTestId('highlighted-new-error');
    expect(errorMessage).toBeInTheDocument();
  });
});
