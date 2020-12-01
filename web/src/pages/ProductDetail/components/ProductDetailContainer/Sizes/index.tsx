import React, { useCallback } from 'react';

import { Container, Options, OptionItem, OptionBtn } from './styles';
import { ItemProps } from '../../..';

interface SizesProps {
  availableSizeTags: string[];
  item: ItemProps;
  handleSelectedSize(size: string): void;
  selectedSizeTag: string;
}

const Sizes: React.FC<SizesProps> = ({
  availableSizeTags,
  item,
  handleSelectedSize,
  selectedSizeTag,
}) => {
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
      <strong>Sizes</strong>
      <Options>
        {availableSizeTags.map(size => {
          return (
            <OptionItem key={size}>
              <OptionBtn
                disabled={!checkSizeQuantity(size)}
                onClick={() => handleSelectedSize(size)}
                selected={selectedSizeTag === size}
              >
                {size}
              </OptionBtn>
            </OptionItem>
          );
        })}
      </Options>
    </Container>
  );
};

export default Sizes;
