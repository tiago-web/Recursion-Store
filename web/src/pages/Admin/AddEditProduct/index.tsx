import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { productState, TProduct, TItem } from './Atoms';
// import ProductAE from './components/ProductAE';
import ImagePicker from './components/ImagePicker';
import ItemAE from './components/ItemAE';
import ProductAE from './components/ProductAE';
import ItemDetail from './components/ItemDetail';

const MiddleElement: React.FC = () => {
  const [product, setProduct] = useRecoilState<TProduct>(productState);

  const newItem = {
    color: 'Gray',
    imageColor: '#7f7f7f',
    productImages: [],
    sizes: [],
  } as TItem;

  const item: TItem = {
    color: 'Blue',
    imageColor: '#123738',
    productImages: [
      {
        image:
          'https://calvinklein.scene7.com/is/image/CalvinKlein/11552413_060_main?wid=730&hei=961&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
      },
    ],
    sizes: [
      { sizeTag: 'XS', quantity: 32 },
      { sizeTag: 'S', quantity: 22 },
      { sizeTag: 'M', quantity: 17 },
      { sizeTag: 'L', quantity: 13 },
      { sizeTag: 'XL', quantity: 19 },
      { sizeTag: 'XXL', quantity: 42 },
    ],
  };

  return (
    <>
      <ProductAE />
      {/* <ItemDetail item={item} /> */}
      {/* <ItemAE /> */}
    </>
  );
};

const AddEditProduct: React.FC = () => {
  return (
    <RecoilRoot>
      <MiddleElement />
    </RecoilRoot>
  );
};

export default AddEditProduct;
