import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemProps } from '..';

import {
  Container,
  HoverOptions,
  ButtonsContainer,
  DetailsBtn,
  QuickAddBtn,
} from './styles';
import QuickAddOptions from '../QuickAddOptions';
import { useCart } from '../../../../../contexts/CartContext';

interface ProductHoverProps {
  productId: string;
  selectedColor: string;
  item: ItemProps;
}

interface ProductProps {
  productId: string;
  color: string;
  quantity: number;
  sizeTag: string;
}

const ProductHover: React.FC<ProductHoverProps> = ({
  productId,
  selectedColor,
  item,
}) => {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductProps>(
    {} as ProductProps,
  );
  const { addToCart } = useCart();

  useEffect(() => {
    if (show) {
      setSelectedProduct({
        productId,
        color: selectedColor,
        quantity: 0,
        sizeTag: '',
      });
    }
  }, [productId, selectedColor, show]);

  // useEffect(() => {
  //   console.log(order);
  // }, [order]);

  const toggleQuickAddOptions = useCallback(() => {
    setShow(prevState => !prevState);
  }, []);

  const addProductToCart = useCallback(
    ({ quantity, sizeTag }: Omit<ProductProps, 'productId' | 'color'>) => {
      addToCart(productId, {
        color: selectedColor,
        quantity,
        sizeTag,
      });

      setSelectedProduct(prevState => ({
        ...prevState,
        quantity,
        sizeTag,
      }));

      // TODO: Save the order in the cart
      // TODO: Open a confirmational modal

      setShow(false);
    },
    [addToCart, selectedColor, productId],
  );

  const availableSizeTags = useMemo(() => {
    const sizeTags = item.sizes.map(size => size.sizeTag);

    return sizeTags;
  }, [item]);

  return (
    <Container>
      <HoverOptions>
        {show && (
          <QuickAddOptions
            availableSizeTags={availableSizeTags}
            item={item}
            addProductToCart={addProductToCart}
          />
        )}
        <ButtonsContainer>
          <DetailsBtn>
            <Link to={`/product-detail/${productId}`}>details</Link>
          </DetailsBtn>
          <QuickAddBtn onClick={toggleQuickAddOptions}>quick add</QuickAddBtn>
        </ButtonsContainer>
      </HoverOptions>
    </Container>
  );
};

export default ProductHover;
