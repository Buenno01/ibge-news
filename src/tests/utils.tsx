import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

function wrapWithRouter(
  component: React.ReactElement,
  initialEntries: string[] = ['/'],
) {
  window.history.pushState({}, 'Test page', initialEntries[initialEntries.length - 1]);
  return (
    <MemoryRouter initialEntries={ initialEntries }>
      {component}
    </MemoryRouter>
  );
}

export function renderWithRouter(
  component: React.ReactElement,
  initialEntries: string[] = ['/'],
) {
  return render(wrapWithRouter(component, initialEntries));
}
