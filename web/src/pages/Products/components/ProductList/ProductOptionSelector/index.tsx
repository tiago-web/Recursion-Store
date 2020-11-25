import React, { useEffect, useState } from 'react';
import { ItemProps } from '..';

import {
  Container,
  OverlayContainer,
  Options,
  OptionTitle,
  OptionItem,
  OptionBtn,
  ConfirmBtn,
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

const ProductOptionSelector: React.FC<ProductOptionSelectorProps> = ({
  availableSizeTags,
  item,
  addOrder,
}) => {
  const [sizeTag, setSizeTag] = useState('');
  const [availableQuantity, setAvailableQuantity] = useState<number>(0);
  const [quantityOptions, setQuantityOptions] = useState<JSX.Element[]>([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const selectedSize = item.sizes.find(size => size.sizeTag === sizeTag);

    if (selectedSize) {
      const availableQtyPerSize = selectedSize.quantity;

      setAvailableQuantity(availableQtyPerSize);
    }
  }, [item.sizes, sizeTag, setAvailableQuantity]);

  useEffect(() => {
    const options = [];

    for (let i = 1; i <= 10; i++) {
      console.log(!(availableQuantity >= i));

      options.push(
        <OptionItem key={i}>
          <OptionBtn
            onClick={() => setQuantity(i)}
            disabled={!(availableQuantity >= i)}
          >
            {i}
          </OptionBtn>
        </OptionItem>,
      );
    }

    setQuantityOptions(options);
  }, [availableQuantity]);

  // useEffect(() => {
  //   addOrder({
  //     sizeTag,
  //     quantity,
  //   });
  // }, [addOrder, quantity, sizeTag]);

  return (
    <Container>
      <OverlayContainer>
        {sizeTag === '' ? (
          <>
            <OptionTitle>Size</OptionTitle>

            <Options>
              {availableSizeTags.map(availableSize => {
                return (
                  <OptionItem key={availableSize}>
                    <OptionBtn onClick={() => setSizeTag(availableSize)}>
                      {availableSize}
                    </OptionBtn>
                  </OptionItem>
                );
              })}
            </Options>
          </>
        ) : (
          <>
            <OptionTitle>Quantity</OptionTitle>
            <Options>{quantityOptions}</Options>
            <ConfirmBtn>Confirm</ConfirmBtn>
          </>
        )}
      </OverlayContainer>
    </Container>
  );
};

export default ProductOptionSelector;
