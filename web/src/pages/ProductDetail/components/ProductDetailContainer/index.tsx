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

interface ProductDetailContainerProps {
  productId: string;
  product: Product;
}

const ProductDetailContainer: React.FC<ProductDetailContainerProps> = ({
  productId,
  product,
}) => {
  const history = useHistory();

  const [selectedColor, setSelectedColor] = useState(product.items[0].color);
  const [itemSize, setItemSize] = useState<ItemProps>(product.items[0]);
  const [selectedSizeTag, setSelectedSizeTag] = useState(
    itemSize.sizes[0].sizeTag,
  );
  const [item, setItem] = useState<ItemProps>();
  const [images, setImages] = useState<ImagesProps[]>(
    product.items[0].productImages,
  );
  const [updatedItem, setUpdatedItem] = useState<Item>();
  const [quantity, setQuantity] = useState('');
  const [sizeQuantity, setSizeQuantity] = useState<number>(0);
  const [addedTocart, setAddedToCart] = useState(true);

  const { addToCart } = useCart();

  const handleSelectedColor = useCallback((colorName: string) => {
    setSelectedColor(colorName);
  }, []);

  useEffect(() => {
    if (product.items) {
      setItem(product.items.find(i => i.color === selectedColor));
    }

    if (item) {
      setImages(item.productImages);
      setItemSize(item);

      const selectedSize = item.sizes.find(
        size => size.sizeTag === selectedSizeTag,
      );

      if (selectedSize) {
        const availableQuantity = selectedSize.quantity;

        setSizeQuantity(availableQuantity);
      }
    }
  }, [selectedColor, product.items, item, selectedSizeTag]);

  const availableSizeTags = useMemo(() => {
    const availableSizeTagsQty = itemSize.sizes.filter(s => s.quantity > 0);

    if (availableSizeTagsQty) {
      const sizeTags = availableSizeTagsQty.map(s => s.sizeTag);
      return sizeTags;
    }
    return [];
  }, [itemSize]);

  useEffect(() => {
    if (item && selectedSizeTag) {
      const newUpdatedItem = {
        color: item.color,
        sizeTag: selectedSizeTag,
        quantity: Number(quantity),
      };
      if (
        newUpdatedItem.color !== '' &&
        newUpdatedItem.sizeTag !== '' &&
        newUpdatedItem.quantity > 0 &&
        newUpdatedItem.quantity <= sizeQuantity
      ) {
        setUpdatedItem(newUpdatedItem);
      }
    }
  }, [item, quantity, selectedSizeTag, product.price, sizeQuantity]);

  const handleAddToCart = useCallback(() => {
    if (updatedItem && updatedItem.quantity <= sizeQuantity) {
      addToCart(productId, updatedItem);
      history.push('/cart');
      setAddedToCart(true);
    } else {
      setAddedToCart(false);
    }
  }, [addToCart, productId, updatedItem, history, sizeQuantity]);

  const handleSelectedSize = useCallback((size: string) => {
    setSelectedSizeTag(size);
  }, []);

  const handleSetQuantity = useCallback(
    (qty: string) => {
      if (Number(qty) <= 0) {
        setAddedToCart(false);
      } else if (qty && Number(qty) <= sizeQuantity) {
        setQuantity(qty);
        setAddedToCart(true);
      }
    },
    [sizeQuantity],
  );

  return (
    <>
      <Container>
        {/* <CarouselContent>
          <Carousel
            items={images}
            height={60}
            autoPlay={false}
            backgroundColor="#fafafa"
            navButtonsAlwaysVisible
          />
        </CarouselContent> */}
        {/* <ProductImagesCarousel items={images}/> */}
        {productId ? (
          <ProductDetailContent>
            <Title>
              <h1>{product.name}</h1>
              <span>{formatToDollars(product.price)}</span>
            </Title>
            <Colors>
              <strong>Colors</strong>
              <AvailableColors>
                {product.items.map(i => (
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
              <strong>Quantity</strong>
              <div className="quantity">
                <input
                  name="quantity"
                  type="number"
                  placeholder="Qty"
                  defaultValue={quantity}
                  onChange={e => handleSetQuantity(e.target.value)}
                />
                {addedTocart ? (
                  <Button onClick={handleAddToCart}>ADD TO CART</Button>
                ) : (
                    <Button>ADD TO CART</Button>
                  )}
              </div>
            </AddToCart>
            {!addedTocart && (
              <span style={{ color: '#f00' }}>
                Please, select a valid quantity.
              </span>
            )}
            <span>Quantity available: {sizeQuantity}</span>
            <Description>
              <strong>Description</strong>
              <p>{product.description}</p>
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
