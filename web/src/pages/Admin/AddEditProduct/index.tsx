import React from 'react';
import { RecoilRoot } from 'recoil';
import ProductAE from './components/ProductAE';

const AddEditProduct: React.FC = () => {
  return (
    <RecoilRoot>
      <ProductAE />
    </RecoilRoot>
  );
};

export default AddEditProduct;
