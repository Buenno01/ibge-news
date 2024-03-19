import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from './utils';

describe('Routes', () => {
  it('should render the Home page', async () => {
    renderWithRouter(<App />, ['/']);

    const highlightedNew = await screen.findByTestId('highlighted-new');

    expect(highlightedNew).toBeInTheDocument();
  });

  it('should render the SavedNews page', async () => {
    renderWithRouter(<App />, ['/', '/saved']);

    const highlightedSaved = await screen.findByRole('heading', { name: /saved/i });

    expect(highlightedSaved).toBeInTheDocument();
  });
});
