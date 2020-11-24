import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';

import ProductCard from './ProductCard';

import { Title, Container, Products } from './styles';

interface ItemProps {
  color: string;
  imageColor: string; // HEX
  productImages: Array<{
    imageUrl: string;
  }>;
  sizes: Array<{
    sizeTag: string;
    quantity: number;
  }>;
}

export interface Product {
  items: ItemProps[];
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <Title>Products</Title>
      <Products>
        {products.map(product => (
          <ProductCard
            key={product.name}
            name={product.name}
            items={product.items}
            price={product.price}
          />
        ))}
      </Products>
    </Container>
  );
};

export default ProductList;
