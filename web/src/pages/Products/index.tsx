import React from 'react';
import Navbar from '../../components/Navbar';
import ProductsSideBar from '../../components/ProductsSideBar';
import ProductList from './components/ProductList';
import { ProductsFilterProvider } from '../../contexts/ProductsFilterContext';

import { ProductsContainer } from './styles';

const Products: React.FC = () => {
  return (
    <>
      <Navbar />
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
