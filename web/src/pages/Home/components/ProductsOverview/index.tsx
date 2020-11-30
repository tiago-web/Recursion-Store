import React from 'react';
import { Link } from 'react-router-dom';

import { Container, SeeProduct } from './styles';

const ProductOverview: React.FC = () => {
  return (
    <>
      <Container>
        <SeeProduct
          style={{
            backgroundImage: `url(http://localhost:3333/files/dcd8c56e36a2b7cb2ad4-sleeve.jpg)`,
          }}
        >
          <strong>Women</strong>
          <Link to="/products/women">See Products</Link>
        </SeeProduct>
        <SeeProduct
          style={{
            backgroundImage: `url(http://localhost:3333/files/6172f0d9ee16ee5ac3b0-blackSweaterMen3.jpg)`,
          }}
        >
          <strong>Men</strong>
          <Link to="/products/men">See Products</Link>
        </SeeProduct>
        <SeeProduct
          style={{
            backgroundImage: `url(http://localhost:3333/files/12b0c62915d402132fb6-polo_shirt_blue_1.jpg)`,
          }}
        >
          <strong>Kids</strong>
          <Link to="/products/kids">See Products</Link>
        </SeeProduct>
        <SeeProduct
          style={{
            backgroundImage: `url(http://localhost:3333/files/e446aab3b724cfd02f66-face_mask_1.jpg)`,
          }}
        >
          <strong>Accessories</strong>
          <Link to="/products/accessories">See Products</Link>
        </SeeProduct>
      </Container>
    </>
  );
};

export default ProductOverview;
