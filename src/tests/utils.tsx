import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import CombinedProviders from '../context/CombinedProviders';

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

function wrapWithContext(
  component: React.ReactElement,
) {
  return (
    <CombinedProviders>
      {component}
    </CombinedProviders>
  );
}

export function renderWithRouter(
  component: React.ReactElement,
  initialEntries: string[] = ['/'],
) {
  return render(wrapWithRouter(component, initialEntries));
}

export function renderWithRouterAndContext(
  component: React.ReactElement,
  initialEntries: string[] = ['/'],
) {
  return render(wrapWithContext(wrapWithRouter(component, initialEntries)));
}
