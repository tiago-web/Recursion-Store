import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import ProductReview from './pages/ProductReview';
import Cart from './pages/Cart';
import MyAccount from './pages/User/MyAccount';
import OrdersHistory from './pages/User/OrdersHistory';
import Addresses from './pages/User/Addresses';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Products} path="/products" />
      <Route component={ProductDetail} path="/product-detail" />
      <Route component={ProductReview} path="/product/review" />
      <Route component={Cart} path="/cart" />
      <Route component={MyAccount} path="/user/myaccount" />
      <Route component={OrdersHistory} path="/user/ordershistory" />
      <Route component={Addresses} path="/user/addresses" />
    </BrowserRouter>
  );
};

export default Routes;
