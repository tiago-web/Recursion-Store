import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import api from '../../services/api';

import ProductDetailContainer from './components/ProductDetailContainer';
import ProductReviewsContainer from './components/ProductReviewsContainer';

import { Section } from './styles';

interface RouteParams {
  productId: string;
}

export interface ImagesProps {
  id: string;
  imageUrl: string;
}

export interface ItemProps {
  color: string;
  imageColor: string; // HEX
  productImages: ImagesProps[];
  sizes: Array<{
    sizeTag: string;
    quantity: number;
  }>;
}

export interface Product {
  _id: string;
  items: ItemProps[];
  name: string;
  price: number;
  description: string;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<RouteParams>(); // THE PRODUCT ID IS ON THIS VARIABLE
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`products/${productId}`);

      setProduct(response.data);
    }

    loadProduct();
  }, [productId]);

  return (
    <>
      <Navbar />
      {product ? (
        <>
          <Section>
            <ProductDetailContainer
              productId={productId}
              name={product.name}
              items={product.items}
              price={product.price}
              description={product.description}
            />
          </Section>
          <ProductReviewsContainer productId={productId} />
        </>
      ) : (
          <h1>Product not found!</h1>
        )}
    </>
  );
};

export default ProductDetail;
