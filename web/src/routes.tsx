import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import ProductReview from './pages/ProductReview';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Products} path="/products" />
      <Route component={ProductDetail} path="/product-detail" />
      <Route component={ProductReview} path="/product/review" />
    </BrowserRouter>
  );
};

export default Routes;
