import React, { useEffect, useState } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { Container, Size } from './styles';

interface SizeTagProps {
  sizeTag: string;
  quantity: number;
}

const SizeTag: React.FC<SizeTagProps> = ({ sizeTag, quantity }) => {
  return (
    <Container>
      <Size>
        {sizeTag}({quantity})
      </Size>
      <button type="button">
        <ClearIcon />
      </button>
    </Container>
  );
};

export default SizeTag;
