import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (newValue) => {
    setStoredValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [storedValue, setValue];
};

export default useLocalStorage;
