import { createContext, useContext } from 'react';
import { SavedNewsContextType } from '../../@types/SavedNewsContextType';

const initialState: SavedNewsContextType = {
  savedNews: [],
  toggleSavedNew: () => {},
};

export const SavedNewsContext = createContext<SavedNewsContextType>(initialState);

export const useSavedNewsContext = () => useContext(SavedNewsContext);
