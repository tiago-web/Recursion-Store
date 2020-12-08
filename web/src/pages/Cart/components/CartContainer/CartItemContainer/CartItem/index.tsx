import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import Button from '../../../../../../components/Button';
import formatToDollars from '../../../../../../utils/formatToDollars';

import { Container } from './styles';
import { ProductApiProps } from '..';
import { Item } from '../../../../../../contexts/CartContext';

interface CartItemProps {
  productId: string;
  item: Item;
  handleDeleteItem(productId: string, updatedItem: Item): void;
  handleUpdateItem(productId: string, updatedItem: Item): void;
  productApi: ProductApiProps;
}

const CartItem: React.FC<CartItemProps> = ({
  productId,
  item,
  handleDeleteItem,
  handleUpdateItem,
  productApi,
}) => {
  const [updatedItem, setUpdatedItem] = useState<Item>(item);
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(item.quantity);
  const [qtyApi, setQtyApi] = useState<number>(0);
  const [highQty, setHighQty] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(false);
  const [maxQtyActive, setMaxQtyActive] = useState(false);

  const options = ['1', '2', '3', '4', '5'];

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

      const itemApi = productApi.items.find(i => i.color === item.color);

      if (itemApi) {
        const sizeApi = itemApi.sizes.find(sz => sz.sizeTag === item.sizeTag);

        if (sizeApi) {
          setQtyApi(sizeApi.quantity);
        }
      }
    }

    loadFromApi();
  }, [productApi, item.color, item.sizeTag]);

  useEffect(() => {
    if (qty > 5) {
      setHighQty(true);
    } else if (qty <= 5 && qty > 0) {
      setHighQty(false);
    } else if (qty <= 0) {
      handleDeleteItem(productId, updatedItem);
    } else {
      setHighQty(false);
    }
  }, [qty, handleDeleteItem, productId, updatedItem]);

  useEffect(() => {
    handleUpdateItem(productId, updatedItem);
  }, [productId, updatedItem, handleUpdateItem]);

  const handleChangeSelectQty = useCallback(
    (selectedValue: string) => {
      if (selectedValue === '10+' && qtyApi >= 10) {
        setQty(10);
      } else if (Number(selectedValue) <= qtyApi) {
        // if (Number(selectedValue) <= 5) {
        //   if (Number(selectedValue) >= 1) {
        //     setQty(Number(selectedValue));
        //   } else {
        //     handleDeleteItem(productId, updatedItem);
        //   }
        // } else {
        //   setQty(10);
        // }
        // setMaxQtyActive(false);
        setQty(Number(selectedValue));
        setMaxQtyActive(false);
      } else {
        setQty(qtyApi);
        setMaxQtyActive(true);
      }
    },
    [qtyApi],
  );

  const handleChangeInputQty = useCallback(
    (value: number) => {
      if (value <= qtyApi) {
        setQty(value);
        setMaxQtyActive(false);
      } else {
        setMaxQtyActive(true);
      }
    },
    [qtyApi],
  );

  return (
    <>
      <Container>
        <div>
          <Link to={`/product-detail/${productId}`}>
            <img src={imageUrl} alt={productApi.name} />
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
                  max="99"
                  onBlur={e => handleChangeInputQty(Number(e.target.value))}
                />
              ) : (
                  <>
                    <select
                      defaultValue={qty}
                      onChange={e => handleChangeSelectQty(e.target.value)}
                    >
                      <option value="0">0 (delete)</option>
                      {options.slice(0, 5).map(option => (
                        <option key={options[Number(option)]} value={option}>
                          {option}
                        </option>
                      ))}
                      <option value="10+">10 +</option>
                    </select>
                    {maxQtyActive ? <span>Max quantity is {qtyApi}.</span> : ''}
                  </>
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
              <span>{formatToDollars(price)} ea</span>
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
