import React, { useEffect, useState } from 'react';

import api from '../../../../../services/api';

import { Product } from '../../../../Cart';
import { ItemProps } from '../../../../Products/components/ProductList';
import OrderItem from './OrderItem';

import { Container } from './styles';

interface OrderItemContainerProps {
  product: Product;
}

export interface ProductApiProps {
  _id: string;
  name: string;
  items: ItemProps[];
  price: number;
}

const OrderItemContainer: React.FC<OrderItemContainerProps> = ({ product }) => {
  const [productApi, setProductApi] = useState<ProductApiProps>();

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`products/${product.productId}`);

      setProductApi(response.data);
    }

    loadProduct();
  }, [product.productId, productApi]);

  return (
    <>
      <Container>
        {productApi &&
          product.items.map(item => (
            <OrderItem
              key={product.productId}
              item={item}
              productApi={productApi}
            />
          ))}
      </Container>
    </>
  );
};

export default OrderItemContainer;
