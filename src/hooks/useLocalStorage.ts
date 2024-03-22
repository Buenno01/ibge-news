import { useEffect, useState } from 'react';

type UseLocalStorageReturn<T> = [T, (value: T) => void];

const useLocalStorage = <T>(key: string, initialValue: T): UseLocalStorageReturn<T> => {
  const readValue = () => {
    try {
      if (typeof window === 'undefined') {
        return initialValue;
      }
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue());

  useEffect(() => {
    const saveValue = () => {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    };

    saveValue();
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
