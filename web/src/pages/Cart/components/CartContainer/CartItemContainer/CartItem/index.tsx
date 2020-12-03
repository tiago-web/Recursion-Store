import React, { useCallback, useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import Button from '../../../../../../components/Button';
import formatToDollars from '../../../../../../utils/formatToDollars';
import { Item } from '../../../..';

import { Container } from './styles';
import { ProductApiProps } from '..';
import { useCart } from '../../../../../../contexts/CartContext';

interface CartItemProps {
  productId: string;
  item: Item;
  handleDeleteItem(productId: string, updatedItem: Item): void;
  handleUpdateItem(productId: string, updatedItem: Item): void;
  imageName: string;
  productApi: ProductApiProps;
}

interface ItemProps {
  color: string;
  productImages: Array<{
    imageUrl: string;
  }>;
}

const CartItem: React.FC<CartItemProps> = ({
  productId,
  item,
  handleDeleteItem,
  handleUpdateItem,
  imageName,
  productApi,
}) => {
  const [updatedItem, setUpdatedItem] = useState<Item>(item);
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(item.quantity);
  const [highQty, setHighQty] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(false);

  const { updateItem } = useCart();

  useEffect(() => {
    setUpdatedItem({
      color: item.color,
      sizeTag: item.sizeTag,
      quantity: qty,
    });
  }, [item.color, item.sizeTag, qty]);

  useEffect(() => {
    async function loadFromApi(): Promise<void> {
      productApi.items.map(
        i => i.color === item.color && setImageUrl(i.productImages[0].imageUrl),
      );
      setPrice(productApi.price);
    }

    loadFromApi();
  }, [productApi, item.color]);

  useEffect(() => {
    if (qty > 5) {
      setHighQty(true);
    } else if (qty <= 0) {
      handleDeleteItem(productId, updatedItem);
    } else {
      setHighQty(false);
    }
  }, [qty, handleDeleteItem, productId, updatedItem]);

  useEffect(() => {
    updateItem(productId, updatedItem);
  }, [productId, updatedItem, updateItem]);

  const handleChangeSelectQty = useCallback(
    (selectedValue: string) => {
      if (Number(selectedValue) >= 1 || Number(selectedValue) <= 5) {
        setQty(Number(selectedValue));
      } else if (Number(selectedValue) < 1) {
        handleDeleteItem(productId, updatedItem);
      } else if (selectedValue === '10+') {
        setQty(10);
      }
    },
    [handleDeleteItem, productId, updatedItem],
  );

  return (
    <>
      <Container>
        <div>
          <Link to={`/product-detail/${productId}`}>
            <img src={imageUrl} alt={imageName} />
          </Link>
          <div>
            <strong>
              Size: <span>{item.sizeTag}</span>
            </strong>
            <strong>
              Color: <span>{item.color}</span>
            </strong>
            <div className="quantity">
              <strong>Qty:</strong>
              {highQty ? (
                <input
                  type="number"
                  defaultValue={qty}
                  onBlur={e => setQty(Number(e.target.value))}
                />
              ) : (
                  <select
                    defaultValue={qty}
                    onChange={e => handleChangeSelectQty(e.target.value)}
                  >
                    <option value="0">0 (delete)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="10+">10 +</option>
                  </select>
                )}
            </div>
          </div>
        </div>
        <div className="price">
          {hasDiscount ? (
            <>
              <span className="oldPrice">{formatToDollars(price)}</span>
              <span className="newPrice">CA$48.99</span>
            </>
          ) : (
              <span>{formatToDollars(price)}</span>
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
