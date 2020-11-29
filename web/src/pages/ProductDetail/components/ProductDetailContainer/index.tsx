import React, { useCallback, useEffect, useState } from 'react';
import { Tooltip } from '@material-ui/core';

import Carousel from '../../../../components/Carousel';
import Button from '../../../../components/Button';
import formatToDollars from '../../../../utils/formatToDollars';

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
  Sizes,
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
  const [selectedColor, setSelectedColor] = useState(items[0].color);
  const [item, setItem] = useState<ItemProps>();
  const [images, setImages] = useState<ImagesProps[]>(items[0].productImages);

  const handleSelectedColor = useCallback((colorName: string) => {
    setSelectedColor(colorName);
  }, []);

  useEffect(() => {
    if (items) {
      setItem(items.find(i => i.color === selectedColor));
    }

    if (item) {
      setImages(item.productImages);
    }
  }, [selectedColor, items, item]);

  return (
    <>
      <Container>
        <CarouselContent>
          <Carousel items={images} height={800} autoPlay={false} />
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
                {items.map(item => (
                  <Tooltip
                    key={item.color}
                    title={item.color}
                    arrow
                    aria-label={item.color.toLocaleLowerCase()}
                  >
                    <ColorContainer>
                      <ProductColor
                        onClick={() => handleSelectedColor(item.color)}
                        selected={item.color === selectedColor}
                        colorHex={item.imageColor}
                      />
                    </ColorContainer>
                  </Tooltip>
                ))}
              </AvailableColors>
            </Colors>
            <Sizes>
              <strong>Sizes</strong>
              <ul>
                <li>
                  <a href="/">XS</a>
                </li>
                <li>
                  <a href="/">S</a>
                </li>
                <li>
                  <a href="/">M</a>
                </li>
                <li>
                  <a href="/">L</a>
                </li>
                <li>
                  <a href="/">XL</a>
                </li>
                <li>
                  <a href="/">XXL</a>
                </li>
              </ul>
            </Sizes>
            <AddToCart>
              <div className="quantity">
                Quantity
                <input name="qty" type="number" value="1" />
              </div>
              <Button>ADD TO CART</Button>
            </AddToCart>
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
