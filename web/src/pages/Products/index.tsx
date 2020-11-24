import React from 'react';
import Navbar from '../../components/Navbar';
import ProductsSideBar from '../../components/ProductsSideBar';
import ProductList from './components/ProductList';

import { ProductsContainer } from './styles';

const Products: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProductsContainer>
        <ProductsSideBar />
        <ProductList />
      </ProductsContainer>
    </>
  );
};

export default Products;
