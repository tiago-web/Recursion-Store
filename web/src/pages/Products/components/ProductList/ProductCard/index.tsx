import React, { useCallback, useState } from 'react';

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
  const [selectedColor, setSelectedColor] = useState(items[0].color);

  const handleSelectedColor = useCallback((colorName: string) => {
    setSelectedColor(colorName);
  }, []);

  return (
    <Container>
      {items.map(item => (
        <>
          {item.color === selectedColor && (
            <ProductImage src={item.productImages[0].imageUrl} alt={name} />
          )}
        </>
      ))}
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
      <AvailableColors>
        {items.map(item => (
          <ProductColor
            key={item.color}
            onClick={() => handleSelectedColor(item.color)}
            selected={item.color === selectedColor}
            colorHex={item.imageColor}
          />
        ))}
      </AvailableColors>
    </Container>
  );
};

export default ProductCard;
