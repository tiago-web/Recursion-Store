import React, { useCallback, useState } from 'react';
import { Tooltip } from '@material-ui/core';

import formatToDollars from '../../../../../utils/formatToDollars';

import { Product } from '..';

import {
  Container,
  ProductImage,
  ProductName,
  ProductPrice,
  AvailableColors,
  ProductColor,
} from './styles';

const ProductCard: React.FC<Product> = ({ items, name, price }) => {
  const [isHover, setIsHover] = useState(false);
  const [selectedColor, setSelectedColor] = useState(items[0].color);

  const handleSelectedColor = useCallback((colorName: string) => {
    setSelectedColor(colorName);
  }, []);

  return (
    <Container>
      {items.map(item => (
        <>
          {item.color === selectedColor && (
            <ProductImage
              style={{
                backgroundImage: `url(${item.productImages[0].imageUrl})`,
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              {isHover && (
                <div>
                  <button>DETAILS</button>
                  <button>QUICK ADD</button>
                </div>
              )}
            </ProductImage>
          )}
        </>
      ))}

      <ProductName>{name}</ProductName>
      <ProductPrice>{formatToDollars(price)}</ProductPrice>
      <AvailableColors>
        {items.map(item => (
          <Tooltip
            key={item.color}
            title={item.color}
            arrow
            aria-label={item.color.toLocaleLowerCase()}
          >
            <ProductColor
              onClick={() => handleSelectedColor(item.color)}
              selected={item.color === selectedColor}
              colorHex={item.imageColor}
            />
          </Tooltip>
        ))}
      </AvailableColors>
    </Container>
  );
};

export default ProductCard;
