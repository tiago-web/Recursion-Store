import React, { forwardRef, useCallback, useEffect, useState } from 'react';

import { Tooltip } from '@material-ui/core';

import formatToDollars from '../../../../../utils/formatToDollars';

import ProductHover from '../ProductHover';
import { Product } from '..';

import {
  Container,
  ProductImage,
  EditProductButton,
  ProductName,
  ProductPrice,
  AvailableColors,
  ColorContainer,
  ProductColor,
} from './styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../../contexts/AuthContext';

type ProductCardProps = Omit<Product, '_id'> & {
  productId: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  productId,
  items,
  name,
  price,
}) => {
  const [isHover, setIsHover] = useState(false);
  const { user } = useAuth();
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [selectedColor, setSelectedColor] = useState(items[0].color);

  const handleSelectedColor = useCallback((colorName: string) => {
    setSelectedColor(colorName);
  }, []);

  useEffect(() => {
    setIsAdminUser(user.permission === 'User' ? false : true);
  }, []);

  return (
    <Container>
      {items.map(
        item =>
          item.color === selectedColor && (
            <ProductImage
              key={item.color}
              style={{
                backgroundImage: `url(${item.productImages[0].imageUrl})`,
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => setIsHover(true)}
            >
              {isAdminUser && (
                <Link to={`/admin/editproduct/${productId}`}>
                  <EditProductButton>Edit Product</EditProductButton>
                </Link>
              )}

              {isHover && (
                <ProductHover
                  productId={productId}
                  item={item}
                  selectedColor={selectedColor}
                />
              )}
            </ProductImage>
          ),
      )}
      <ProductName to={`/product-detail/${productId}`}>{name}</ProductName>

      <ProductPrice>{formatToDollars(price)}</ProductPrice>
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
    </Container>
  );
};

export default ProductCard;
