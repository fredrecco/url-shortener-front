import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useStorage";

export type Url = {
  id: string;
  expanded: string;
  createdAt: any;
  updatedAt: any;
  shortened: string;
}

type HistoryContextType = {
  value: Url[];
  setValue: Dispatch<SetStateAction<Url[]>>
}

export const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export const HistoryContextProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [urlList, addList] = useLocalStorage("url-history-list");
  const [value, setValue] = useState<Url[]>(urlList);

  useEffect(() => {
    if (value) addList(value);
  }, [value]);

  return (
    <HistoryContext.Provider value={{ value, setValue }}>
      {children}
    </HistoryContext.Provider>
  );
}