import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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

interface AddToCartProps {
  sizeTag: string;
  quantity: number;
}

interface QuickAddOptionsProps {
  availableSizeTags: string[];
  item: ItemProps;
  addProductToCart(newOrder: AddToCartProps): void;
}

const options = [1, 2, 3, 4, 5];

const QuickAddOptions: React.FC<QuickAddOptionsProps> = ({
  availableSizeTags,
  item,
  addProductToCart,
}) => {
  const [availableQuantity, setAvailableQuantity] = useState<number>(0);
  const [selectedSizeTag, setSelectedSizeTag] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const history = useHistory();

  useEffect(() => {
    const selectedSize = item.sizes.find(
      size => size.sizeTag === selectedSizeTag,
    );

    if (selectedSize) {
      const availableQtyPerSize = selectedSize.quantity;

      setAvailableQuantity(availableQtyPerSize);
    }
  }, [item.sizes, selectedSizeTag, setAvailableQuantity]);

  const handleAddToCart = useCallback(() => {
    addProductToCart({
      sizeTag: selectedSizeTag,
      quantity: selectedQuantity,
    });
  }, [addProductToCart, selectedSizeTag, selectedQuantity]);

  const checkSizeQuantity = useCallback(
    (size: string) => {
      const foundSize = item.sizes.find(sz => sz.sizeTag === size);

      if (!foundSize || foundSize.quantity <= 0) return false;

      return true;
    },
    [item.sizes],
  );

  return (
    <Container>
      <OverlayContainer>
        {selectedSizeTag === '' ? (
          <>
            <OptionTitle>Size</OptionTitle>

            <Options>
              {availableSizeTags.map(size => {
                return (
                  <OptionItem key={size}>
                    <OptionBtn
                      disabled={!checkSizeQuantity(size)}
                      onClick={() => setSelectedSizeTag(size)}
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
              <AddToCartBtn onClick={handleAddToCart}>Add to cart</AddToCartBtn>
            </>
          )}
      </OverlayContainer>
    </Container>
  );
};

export default QuickAddOptions;
