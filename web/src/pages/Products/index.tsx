import React from 'react';
import Navbar from '../../components/Navbar';
import ProductsSideBar from '../../components/ProductsSideBar';

import { ProductsContainer } from './styles';

const Products: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProductsContainer>
        <ProductsSideBar />
        <h1>Products</h1>
      </ProductsContainer>
    </>
  );
};

export default Products;
