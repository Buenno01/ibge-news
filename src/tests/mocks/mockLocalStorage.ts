import { MockInstance, vi } from 'vitest';
import UnfilteredList from './UnfilteredList';
import { NewsType } from '../../@types/NewsType';

const savedNewsStorage: NewsType[] = [
  { ...UnfilteredList.items[0], imagens: JSON.parse(UnfilteredList.items[0].imagens) },
  { ...UnfilteredList.items[1], imagens: JSON.parse(UnfilteredList.items[1].imagens) },
  { ...UnfilteredList.items[2], imagens: JSON.parse(UnfilteredList.items[2].imagens) },
];

const mockLocalStorage = {
  savedNews: (): [MockInstance<[key: string], string | null>, NewsType[]] => {
    const spy = vi.spyOn(Storage.prototype, 'getItem')
      .mockImplementation((key: string) => {
        if (key === 'savedNews') return JSON.stringify(savedNewsStorage);
        return null;
      });

    return [spy, savedNewsStorage];
  },
};

export default mockLocalStorage;
