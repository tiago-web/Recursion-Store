import React, { useEffect, useState } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { Container, Size } from './styles';
import { TSize } from '../../Atoms';

interface SizeTagProps {
  sizeTag: string;
  quantity: number;
  handleSizeSelected(sizeToUpdate: TSize): void;
  handleSizeDelete(sizeTag: string): void;
}

const SizeTag: React.FC<SizeTagProps> = ({
  sizeTag,
  quantity,
  handleSizeSelected,
  handleSizeDelete,
}) => {
  return (
    <Container>
      <Size onClick={() => handleSizeSelected({ sizeTag, quantity })}>
        {sizeTag}({quantity})
      </Size>
      <button type="button" onClick={() => handleSizeDelete(sizeTag)}>
        <ClearIcon />
      </button>
    </Container>
  );
};

export default SizeTag;
