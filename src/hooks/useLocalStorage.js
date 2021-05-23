import { useState, useEffect } from 'react';

export const useLocalStorageState = (keyName, initialValue) => {
  const getInitialValue = () => {
    const localStorageValue = localStorage.getItem(keyName);
    if (localStorageValue === null) {
      return initialValue;
    }
    return JSON.parse(localStorageValue);
  };

  const [state, setState] = useState(getInitialValue);

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(state));
  }, [state, keyName]);

  return [state, setState];
};
