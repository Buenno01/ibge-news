import { SavedNew } from './SavedNew';

export type SavedNewsContextType = {
  savedNews: SavedNew[];
  toggleSavedNew: (idProduto: number, id: number) => void;
};
