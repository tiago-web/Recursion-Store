import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import ProductDetailContainer from './components/ProductDetailContainer';
import ProductReviewsContainer from './components/ProductReviewsContainer';

import { Section } from './styles';

interface RouteParams {
  productId: string;
}

export interface Review {
  _id: string;
  title: string;
  body: string;
  createdAt: string;
  createdBy: string;
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
  reviews: Review[];
  items: ItemProps[];
  name: string;
  price: number;
  description: string;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<RouteParams>(); // THE PRODUCT ID IS ON THIS VARIABLE
  const [product, setProduct] = useState<Product>();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadUsers(): Promise<void> {
      const response = await api.get('users');

      setUsers(response.data);
    }

    loadUsers();
  }, []);

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`products/${productId}`);

      setProduct(response.data);
    }

    loadProduct();
  }, [productId]);

  return (
    <>
      {product ? (
        <>
          <Section>
            <ProductDetailContainer
              productId={productId}
              name={product.name}
              items={product.items}
              price={product.price}
              description={product.description}
              reviews={product.reviews}
            />
          </Section>
          <ProductReviewsContainer
            productId={productId}
            name={product.name}
            items={product.items}
            price={product.price}
            description={product.description}
            reviews={product.reviews}
            users={users}
          />
        </>
      ) : (
        <h1>Product not found!</h1>
      )}
    </>
  );
};

export default ProductDetail;
