import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import ProductReview from './pages/ProductReview';
import Cart from './pages/Cart';
import MyAccount from './pages/User/MyAccount';
import OrdersHistory from './pages/User/OrdersHistory';
import Addresses from './pages/User/Addresses';
import AddEditAddress from './pages/User/AddEditAddress';
import OrderDetails from './pages/OrderDetails';
import Login from './pages/Login';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Products} path="/products/:filter?" />
      <Route component={ProductDetail} path="/product-detail/:productId" />
      <Route component={ProductReview} path="/product/review/:productId" />
      <Route component={Cart} path="/cart" />
      <Route component={MyAccount} path="/user/myaccount" />
      <Route component={OrdersHistory} path="/user/ordershistory" />
      <Route component={Addresses} path="/user/addresses" />
      <Route
        component={AddEditAddress}
        path="/user/edit-address/:oldPostalCode"
      />
      <Route component={AddEditAddress} path="/user/add-address" />
      <Route component={OrderDetails} path="/order-details/:orderId" />
      <Route component={Login} path="/login" />
    </Switch>
  );
};

export default Routes;
