import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Product, Item } from '../../..';

import { Container } from './styles';
import CartItem from './CartItem';
import api from '../../../../../services/api';
import { useCart } from '../../../../../contexts/CartContext';
import { ItemProps } from '../../../../Products/components/ProductList';

interface CartItemContainerProps {
  p: Product;
  productFromApi(pApi: ProductApiProps): void;
}

export interface ProductApiProps {
  _id: string;
  name: string;
  items: ItemProps[];
  price: number;
}

const CartItemContainer: React.FC<CartItemContainerProps> = ({
  p,
  productFromApi,
}) => {
  const [productApi, setProductApi] = useState<ProductApiProps>();
  const { deleteItem, updateItem } = useCart();

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`products/${p.productId}`);

      setProductApi(response.data);
    }
    if (productApi) {
      productFromApi(productApi);
    }

    loadProduct();
  }, [p.productId, productFromApi, productApi]);

  function handleDeleteItem(productId: string, updatedItem: Item): void {
    try {
      deleteItem(productId, updatedItem);
    } catch (err) {
      console.log(err);
    }
  }

  function handleUpdateItem(productId: string, updatedItem: Item): void {
    try {
      updateItem(productId, updatedItem);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      {productApi && (
        <>
          <Link to={`/product-detail/${p.productId}`}>
            <h2>{productApi.name}</h2>
          </Link>
          {p.items.map(item => (
            <CartItem
              key={item.color}
              productId={p.productId}
              item={item}
              handleDeleteItem={handleDeleteItem}
              handleUpdateItem={handleUpdateItem}
              imageName={productApi.name}
              productApi={productApi}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default CartItemContainer;
