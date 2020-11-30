import React, { useCallback, useState } from 'react';

import { Container, Options, OptionItem, OptionBtn } from './styles';
import { ItemProps } from '../../..';

interface SizesProps {
  availableSizeTags: string[];
  item: ItemProps;
}

const options = [1, 2, 3, 4, 5];

const Sizes: React.FC<SizesProps> = ({ availableSizeTags, item }) => {
  const [availableQuantity, setAvailableQuantity] = useState<number>(0);
  const [selectedSizeTag, setSelectedSizeTag] = useState('');

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
                onClick={() => setSelectedSizeTag(size)}
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
