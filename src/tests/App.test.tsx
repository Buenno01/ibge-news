import { waitFor } from '@testing-library/dom';
import { screen } from '@testing-library/react';
import App from '../App';
import { mockEndpoints } from './mocks/mockEndpoints';
import { renderWithRouterAndContext } from './utils';

describe('App', () => {
  it('renders without crashing', async () => {
    mockEndpoints();
    renderWithRouterAndContext(<App />, ['/']);

    await waitFor(() => {
      expect(screen.getByText(/notícia mais recente/i)).toBeInTheDocument();
    });
  });
  it('renders the header', async () => {
    mockEndpoints();
    renderWithRouterAndContext(<App />, ['/']);

    await waitFor(() => {
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });
  });
});
