import { vi } from 'vitest';
import oneNew from './oneNew';
import newsList from './NewsList';
import { ApiReturn } from '../../@types/ApiReturn';

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
    case /qtd=10/i.test(endpoint):
      return newsList;
    default:
      throw new Error('Failed to fetch');
  }
}
