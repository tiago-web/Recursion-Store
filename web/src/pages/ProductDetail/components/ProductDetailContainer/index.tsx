import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Tooltip } from '@material-ui/core';

import { size } from 'polished';
import Carousel from '../../../../components/Carousel';
import Button from '../../../../components/Button';
import formatToDollars from '../../../../utils/formatToDollars';
import Sizes from './Sizes';

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
  const [selectedColor, setSelectedColor] = useState(items[0].color);
  const [item, setItem] = useState<ItemProps>();
  const [itemSize, setItemSize] = useState<ItemProps>(items[0]);
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

  const availableSizeTags = useMemo(() => {
    const sizeTags = itemSize.sizes.map(s => s.sizeTag);

    return sizeTags;
  }, [itemSize]);

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
            <Sizes availableSizeTags={availableSizeTags} item={itemSize} />
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
