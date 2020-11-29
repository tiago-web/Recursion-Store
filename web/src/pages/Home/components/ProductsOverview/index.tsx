import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, SeeProduct } from './styles';

const ProductOverview: React.FC = () => {
  return (
    <>
      <Container>
        <SeeProduct
          style={{
            backgroundImage: `url(http://localhost:3333/files/db9f69d2dcf820c89151-blueDress.jpg)`,
          }}
        >
          <strong>Dresses</strong>
          <Link to="products">See Products</Link>
        </SeeProduct>
        <SeeProduct
          style={{
            backgroundImage: `url(http://localhost:3333/files/d96223fe3cb566e13ff4-blackSweater.jpg)`,
          }}
        >
          <strong>Sweater</strong>
          <Link to="products">See Products</Link>
        </SeeProduct>
        <SeeProduct
          style={{
            backgroundImage: `url(http://localhost:3333/files/12b0c62915d402132fb6-polo_shirt_blue_1.jpg)`,
          }}
        >
          <strong>Kids</strong>
          <Link to="products">See Products</Link>
        </SeeProduct>
        <SeeProduct
          style={{
            backgroundImage: `url(http://localhost:3333/files/e446aab3b724cfd02f66-face_mask_1.jpg)`,
          }}
        >
          <strong>Face Musk</strong>
          <Link to="products">See Products</Link>
        </SeeProduct>
      </Container>
    </>
  );
};

export default ProductOverview;
