import React, { createContext, useState, useCallback, useContext } from 'react';

interface SortByContextData {
  sortBy: string;
  setSortBy(sortBy: string): void;
  removeSortBy(): void;
}

const SortByContext = createContext<SortByContextData>({} as SortByContextData);

const SortByProvider: React.FC = ({ children }) => {
  const [sortByFilter, setSortByFilter] = useState<string>('');

  const setSortBy = useCallback((sortBy: string) => {
    setSortByFilter(sortBy);
  }, []);

  const removeSortBy = useCallback(() => {
    setSortByFilter('');
  }, []);

  return (
    <SortByContext.Provider
      value={{ sortBy: sortByFilter, setSortBy, removeSortBy }}
    >
      {children}
    </SortByContext.Provider>
  );
};

const useSortBy = (): SortByContextData => {
  const context = useContext(SortByContext);

  return context;
};

export { SortByProvider, useSortBy };
