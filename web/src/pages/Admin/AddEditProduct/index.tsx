import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { productState, TProduct, TItem } from './Atoms';
// import ProductAE from './components/ProductAE';
import ImagePicker from './components/ImagePicker';
import ItemAE from './components/ItemAE';

const MiddleElement: React.FC = () => {
  const [product, setProduct] = useRecoilState<TProduct>(productState);

  const newItem = {
    color: 'Gray',
    imageColor: '#7f7f7f',
    productImages: [],
    sizes: [],
  } as TItem;

  return (
    <>
      <ItemAE />
      {/* <ImagePicker itemNumber={0} imageNumber={0} /> */}
      {/* <ImagePicker itemNumber={0} imageNumber={1} /> */}
    </>
  );
};

const AddEditProduct: React.FC = () => {
  return (
    <RecoilRoot>
      {/* <ProductAE /> */}
      <MiddleElement />
    </RecoilRoot>
  );
};

export default AddEditProduct;
