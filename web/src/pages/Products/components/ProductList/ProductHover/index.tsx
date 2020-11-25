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

interface ProductHoverProps {
  productId: string;
  selectedColor: string;
  item: ItemProps;
}

interface OrderProps {
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
  const [order, setOrder] = useState<OrderProps>({} as OrderProps);

  useEffect(() => {
    if (show) {
      setOrder({
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

  const toggleProductOption = useCallback(() => {
    setShow(prevState => !prevState);
  }, []);

  const addOrder = useCallback(
    ({ quantity, sizeTag }: Omit<OrderProps, 'productId' | 'color'>) => {
      setOrder(prevState => ({
        ...prevState,
        quantity,
        sizeTag,
      }));

      // TODO: Save the order in the cart
      // TODO: Open a confirmational modal

      setShow(false);
    },
    [],
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
            addOrder={addOrder}
          />
        )}
        <ButtonsContainer>
          <DetailsBtn>
            <Link to={`/product-detail/${productId}`}>details</Link>
          </DetailsBtn>
          <QuickAddBtn onClick={toggleProductOption}>quick add</QuickAddBtn>
        </ButtonsContainer>
      </HoverOptions>
    </Container>
  );
};

export default ProductHover;
