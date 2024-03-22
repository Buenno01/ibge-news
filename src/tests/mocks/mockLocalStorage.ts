import { MockInstance, vi } from 'vitest';
import UnfilteredList from './UnfilteredList';

const savedNewsStorage = [
  [UnfilteredList.items[0].produto_id, UnfilteredList.items[0].id],
  [UnfilteredList.items[1].produto_id, UnfilteredList.items[1].id],
  [UnfilteredList.items[2].produto_id, UnfilteredList.items[2].id],
];

const mockLocalStorage = {
  savedNews: (): [MockInstance<[key: string], string | null>, number[][]] => {
    const spy = vi.spyOn(Storage.prototype, 'getItem')
      .mockImplementation((key: string) => {
        if (key === 'savedNews') return JSON.stringify(savedNewsStorage);
        return null;
      });

    return [spy, savedNewsStorage];
  },
};

export default mockLocalStorage;
