import React, { createContext, useState, useCallback, useContext } from 'react';
import { SortByProvider } from './SortByContext';

interface ProductsFilterContextData {
  filters: string[];
  addFilter(filter: string): void;
  removeFilter(filter: string): void;
}

const ProductsFilterContext = createContext<ProductsFilterContextData>(
  {} as ProductsFilterContextData,
);

const ProductsFilterProvider: React.FC = ({ children }) => {
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = useCallback((filter: string) => {
    const updatedFilters = setFilters(prevFilters => [...prevFilters, filter]);

    return updatedFilters;
  }, []);

  const removeFilter = useCallback((filter: string) => {
    setFilters(prevFilters =>
      prevFilters.filter(filterToRemove => filterToRemove !== filter),
    );
  }, []);

  return (
    <ProductsFilterContext.Provider
      value={{ filters, addFilter, removeFilter }}
    >
      <SortByProvider>{children}</SortByProvider>
    </ProductsFilterContext.Provider>
  );
};

const useProductsFilter = (): ProductsFilterContextData => {
  const context = useContext(ProductsFilterContext);

  return context;
};

export { ProductsFilterProvider, useProductsFilter };
