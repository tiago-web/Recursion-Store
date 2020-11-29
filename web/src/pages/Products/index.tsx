import React from 'react';

import ProductList from './components/ProductList';
import { ProductsFilterProvider } from './contexts/ProductsFilterContext';

import { ProductsContainer } from './styles';
import ProductsSideBar from './components/ProductsSideBar';

const Products: React.FC = () => {
  return (
    <>
      <ProductsFilterProvider>
        <ProductsContainer>
          <ProductsSideBar />
          <ProductList />
        </ProductsContainer>
      </ProductsFilterProvider>
    </>
  );
};

export default Products;
