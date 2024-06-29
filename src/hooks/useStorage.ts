import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = (key: string, defaultValue: any = undefined) => {
  return useStorage(defaultValue ? defaultValue : [], key, window.localStorage);
}

const useStorage = <T>(defaultValue: T, key: string, storage: Storage) => {
  const [value, setValue] = useState(() => {
    const jsonValue = storage.getItem(key);

    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }

    if (typeof defaultValue === "function") {
      return defaultValue();
    }

    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) {
      return storage.removeItem(key);
    }

    storage.setItem(key, JSON.stringify(value));
  }, [key, value, storage]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}