import { vi } from 'vitest';
import oneNew from './oneNew';
import NewsList from './NewsList';
import { ApiReturn } from '../../@types/ApiReturn';
import UnfilteredList from './UnfilteredList';
import ReleasesList from './ReleasesList';
import SecondPageList from './SecondPageList';

const DEFAULT_ENDPOINT = /https:\/\/servicodados.ibge.gov.br\/api\/v3\/noticias\/\?qtd=9&page=1/;
const SECOND_PAGE_DEFAULT_ENDPOINT = /https:\/\/servicodados.ibge.gov.br\/api\/v3\/noticias\/\?qtd=9&page=2/;
const RELEASE_ENDPOINT = /https:\/\/servicodados.ibge.gov.br\/api\/v3\/noticias\/\?qtd=9&page=1&tipo=release/;
const NEWS_ENDPOINT = /https:\/\/servicodados.ibge.gov.br\/api\/v3\/noticias\/\?qtd=9&page=1&tipo=noticia/;

export const mockEndpoints = (error = false) => vi
  .spyOn(global, 'fetch')
  .mockImplementation((endpoint) => Promise.resolve(Promise.resolve({
    json: async () => checkErrorOrLoading(error, endpoint as string),
    ok: true,
    status: 200,
  } as Response)));

function checkErrorOrLoading(error: boolean, endpoint: string) {
  if (error) {
    throw new Error('Failed to fetch');
  }
  return getReturnedValue(endpoint);
}

function getReturnedValue(endpoint: string): ApiReturn {
  switch (true) {
    case /qtd=1/i.test(endpoint):
      return oneNew;
    case DEFAULT_ENDPOINT.test(endpoint):
      return UnfilteredList;
    case SECOND_PAGE_DEFAULT_ENDPOINT.test(endpoint):
      return SecondPageList;
    case RELEASE_ENDPOINT.test(endpoint):
      return ReleasesList;
    case NEWS_ENDPOINT.test(endpoint):
      return NewsList;
    default:
      throw new Error('Failed to fetch');
  }
}
