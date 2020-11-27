import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';

import ProductDetailContainer from './components/ProductDetailContainer';
import ProductReviewsContainer from './components/ProductReviewsContainer';

import { Section } from './styles';

interface RouteParams {
  productId: string;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<RouteParams>(); // THE PRODUCT ID IS ON THIS VARIABLE
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(productId);
  }, [productId]);

  return (
    <>
      <Navbar />
      <Section>
        <ProductDetailContainer />
      </Section>
      <ProductReviewsContainer productId={productId} />
    </>
  );
};

export default ProductDetail;
