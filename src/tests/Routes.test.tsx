import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from './utils';

describe('Routes', () => {
  it('should render the Home page', async () => {
    renderWithRouter(<App />, ['/']);

    const highlightedNew = await screen.findByTestId('highlighted-new');

    expect(highlightedNew).toBeInTheDocument();
  });
});
