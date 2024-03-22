import { NewsType } from './NewsType';

export type SavedNewsContextType = {
  savedNews: NewsType[];
  toggleSavedNew: (news: NewsType) => void;
};
