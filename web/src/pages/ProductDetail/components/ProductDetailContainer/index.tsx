import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Tooltip } from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import Carousel from '../../../../components/Carousel';
import Button from '../../../../components/Button';
import formatToDollars from '../../../../utils/formatToDollars';
import Sizes from './Sizes';

import { useCart, Item } from '../../../../contexts/CartContext';

import { ImagesProps, ItemProps, Product } from '../..';

import {
  Container,
  CarouselContent,
  ProductDetailContent,
  Title,
  Colors,
  AvailableColors,
  ColorContainer,
  ProductColor,
  AddToCart,
  Description,
} from './styles';

type ProductDetailContainerProps = Omit<Product, '_id'> & {
  productId: string;
};

const ProductDetailContainer: React.FC<ProductDetailContainerProps> = ({
  productId,
  name,
  items,
  price,
  description,
}) => {
  const history = useHistory();

  const [selectedColor, setSelectedColor] = useState(items[0].color);
  const [selectedSizeTag, setSelectedSizeTag] = useState('');
  const [item, setItem] = useState<ItemProps>();
  const [itemSize, setItemSize] = useState<ItemProps>(items[0]);
  const [images, setImages] = useState<ImagesProps[]>(items[0].productImages);
  const [updatedItem, setUpdatedItem] = useState<Item>();
  const [quantity, setQuantity] = useState('');
  const [addedTocart, setAddedToCart] = useState(true);

  const { addToCart } = useCart();

  const handleSelectedColor = useCallback((colorName: string) => {
    setSelectedColor(colorName);
  }, []);

  useEffect(() => {
    if (items) {
      setItem(items.find(i => i.color === selectedColor));
    }

    if (item) {
      setImages(item.productImages);
      setItemSize(item);
    }
  }, [selectedColor, items, item]);

  const availableSizeTags = useMemo(() => {
    const sizeTags = itemSize.sizes.map(s => s.sizeTag);

    return sizeTags;
  }, [itemSize]);

  useEffect(() => {
    if (item) {
      const newUpdatedItem = {
        color: item.color,
        sizeTag: selectedSizeTag,
        quantity: Number(quantity),
        price,
      };
      if (
        newUpdatedItem.color !== '' &&
        newUpdatedItem.sizeTag !== '' &&
        newUpdatedItem.quantity !== 0
      ) {
        setUpdatedItem(newUpdatedItem);
      }
    }
  }, [item, quantity, selectedSizeTag, price]);

  const handleAddToCart = useCallback(() => {
    if (updatedItem) {
      addToCart(productId, updatedItem);
      history.push('/cart');
      setAddedToCart(true);
    } else {
      setAddedToCart(false);
    }
  }, [addToCart, productId, updatedItem, history]);

  const handleSelectedSize = useCallback((size: string) => {
    setSelectedSizeTag(size);
  }, []);

  return (
    <>
      <Container>
        <CarouselContent>
          <Carousel items={images} height={60} autoPlay={false} />
        </CarouselContent>
        {productId ? (
          <ProductDetailContent>
            <Title>
              <h1>{name}</h1>
              <span>{formatToDollars(price)}</span>
            </Title>
            <Colors>
              <strong>Colors</strong>
              <AvailableColors>
                {items.map(i => (
                  <Tooltip
                    key={i.color}
                    title={i.color}
                    arrow
                    aria-label={i.color.toLocaleLowerCase()}
                  >
                    <ColorContainer>
                      <ProductColor
                        onClick={() => handleSelectedColor(i.color)}
                        selected={i.color === selectedColor}
                        colorHex={i.imageColor}
                      />
                    </ColorContainer>
                  </Tooltip>
                ))}
              </AvailableColors>
            </Colors>
            <Sizes
              availableSizeTags={availableSizeTags}
              item={itemSize}
              handleSelectedSize={handleSelectedSize}
              selectedSizeTag={selectedSizeTag}
            />
            <AddToCart>
              <div className="quantity">
                Quantity
                <input
                  name="quantity"
                  type="number"
                  placeholder="Qty"
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                />
              </div>
              <Button onClick={handleAddToCart}>ADD TO CART</Button>
            </AddToCart>
            {!addedTocart && (
              <span style={{ color: '#f00' }}>
                Could not add item to cart. Select all the requirements.
              </span>
            )}
            <Description>
              <strong>Description</strong>
              <p>{description}</p>
            </Description>
          </ProductDetailContent>
        ) : (
            <h1>Product Not Found</h1>
          )}
      </Container>
    </>
  );
};

export default ProductDetailContainer;
