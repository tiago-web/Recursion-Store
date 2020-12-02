import React, { useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';

import Button from '../../../../../../components/Button';
import formatToDollars from '../../../../../../utils/formatToDollars';
import { Item } from '../../../..';

import { Container } from './styles';
import api from '../../../../../../services/api';

interface CartItemProps {
  productId: string;
  item: Item;
  handleDeleteItem(productId: string, updatedItem: Item): void;
  imageName: string;
}

interface ItemProps {
  color: string;
  productImages: Array<{
    imageUrl: string;
  }>;
}

interface ProductProps {
  items: ItemProps[];
}

const CartItem: React.FC<CartItemProps> = ({
  productId,
  item,
  handleDeleteItem,
  imageName,
}) => {
  const [updatedItem, setUpdatedItem] = useState<Item>(item);
  const [productApi, setProductApi] = useState<ProductProps>();
  const [itemApi, setItemApi] = useState<ItemProps>();
  const [imageUrl, setImageUrl] = useState('');
  const [hasDiscount, setHasDiscount] = useState(true);

  useEffect(() => {
    setUpdatedItem({
      color: item.color,
      sizeTag: item.sizeTag,
      quantity: item.quantity,
      price: item.price,
    });
  }, [item.color, item.price, item.quantity, item.sizeTag]);

  useEffect(() => {
    async function loadImage(): Promise<void> {
      const response = await api.get(`products/${productId}`);

      setProductApi(response.data);

      if (productApi) {
        productApi.items.map(
          i =>
            i.color === item.color && setImageUrl(i.productImages[0].imageUrl),
        );
      }
    }

    loadImage();
  }, [productId, productApi, item.color]);

  return (
    <>
      <Container>
        <div>
          <img src={imageUrl} alt={imageName} />
          <div>
            <strong>
              Size: <span>{item.sizeTag}</span>
            </strong>
            <strong>
              Color: <span>{item.color}</span>
            </strong>
            <div className="quantity">
              <strong>
                Qty: <span>{item.quantity}</span>
              </strong>
            </div>
          </div>
        </div>
        <div className="price">
          {hasDiscount ? (
            <>
              <span className="oldPrice">{formatToDollars(item.price)}</span>
              <span className="newPrice">CA$48.99</span>
            </>
          ) : (
              <span>{formatToDollars(item.price)}</span>
            )}
          <Button onClick={() => handleDeleteItem(productId, updatedItem)}>
            <FiTrash size={20} />
          </Button>
        </div>
      </Container>
    </>
  );
};

export default CartItem;
