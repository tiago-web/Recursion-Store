import React, { useCallback, useEffect, useState } from 'react';
import { ItemProps } from '..';

import {
  Container,
  OverlayContainer,
  Options,
  OptionTitle,
  OptionItem,
  OptionBtn,
  AddToCartBtn,
} from './styles';

interface AddOrderProps {
  sizeTag: string;
  quantity: number;
}

interface ProductOptionSelectorProps {
  availableSizeTags: string[];
  item: ItemProps;
  addOrder(newOrder: AddOrderProps): void;
}

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ProductOptionSelector: React.FC<ProductOptionSelectorProps> = ({
  availableSizeTags,
  item,
  addOrder,
}) => {
  const [sizeTag, setSizeTag] = useState('');
  const [availableQuantity, setAvailableQuantity] = useState<number>(0);
  // const [quantityOptions, setQuantityOptions] = useState<JSX.Element[]>([]);
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  useEffect(() => {
    const selectedSize = item.sizes.find(size => size.sizeTag === sizeTag);

    if (selectedSize) {
      const availableQtyPerSize = selectedSize.quantity;

      setAvailableQuantity(availableQtyPerSize);
    }
  }, [item.sizes, sizeTag, setAvailableQuantity]);

  // useEffect(() => {
  //   addOrder({
  //     sizeTag,
  //     quantity,
  //   });
  // }, [addOrder, quantity, sizeTag]);

  const checkSizeQuantity = useCallback(
    (size: string) => {
      const foundSize = item.sizes.find(sz => sz.sizeTag === size);

      if (!foundSize || foundSize.quantity === 0) return false;

      return true;
    },
    [item.sizes],
  );

  return (
    <Container>
      <OverlayContainer>
        {sizeTag === '' ? (
          <>
            <OptionTitle>Size</OptionTitle>

            <Options>
              {availableSizeTags.map(size => {
                return (
                  <OptionItem key={size}>
                    <OptionBtn
                      disabled={!checkSizeQuantity(size)}
                      onClick={() => setSizeTag(size)}
                    >
                      {size}
                    </OptionBtn>
                  </OptionItem>
                );
              })}
            </Options>
          </>
        ) : (
          <>
            <OptionTitle>Quantity</OptionTitle>
            <Options>
              {options.map(quantity => (
                <OptionItem key={quantity}>
                  <OptionBtn
                    onClick={() => setSelectedQuantity(quantity)}
                    selected={selectedQuantity === quantity}
                    disabled={!(availableQuantity >= quantity)}
                  >
                    {quantity}
                  </OptionBtn>
                </OptionItem>
              ))}
            </Options>
            <AddToCartBtn>Add to cart</AddToCartBtn>
          </>
        )}
      </OverlayContainer>
    </Container>
  );
};

export default ProductOptionSelector;
