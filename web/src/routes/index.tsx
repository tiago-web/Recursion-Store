import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomRoute from './Routes';

import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Products from '../pages/Products';
import ProductReview from '../pages/ProductReview';
import Cart from '../pages/Cart';
import MyAccount from '../pages/User/MyAccount';
import OrdersHistory from '../pages/User/OrdersHistory';
import Addresses from '../pages/User/Addresses';
import AddEditAddress from '../pages/User/AddEditAddress';
import OrderDetails from '../pages/OrderDetails';
import Login from '../pages/Login';
import AddEditProduct from '../pages/Admin/AddEditProduct';
import ItemAE from '../pages/Admin/AddEditProduct/components/ItemAE';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={SignUp} path="/signup" />
      <Route component={Products} path="/products/:filter?" />
      <Route component={ProductDetail} path="/product-detail/:productId" />
      <Route component={ProductReview} path="/product/review/:productId" />
      <Route component={Cart} path="/cart" />
      <Route component={AddEditProduct} path="/Admin/AddProduct" />
      <Route component={AddEditProduct} path="/Admin/EditProduct/:productId" />
      <Route component={ItemAE} path="/Admin/AddItem" />
      <CustomRoute component={MyAccount} path="/user/myaccount" isPrivate />
      <CustomRoute
        component={OrdersHistory}
        path="/user/ordershistory"
        isPrivate
      />
      <CustomRoute component={Addresses} path="/user/addresses" isPrivate />
      <CustomRoute
        component={AddEditAddress}
        path="/user/edit-address/:oldPostalCode"
        isPrivate
      />
      <CustomRoute
        component={AddEditAddress}
        path="/user/add-address"
        isPrivate
      />
      <CustomRoute
        component={OrderDetails}
        path="/order-details/:orderId"
        isPrivate
      />
      <CustomRoute component={Login} path="/login" />
    </Switch>
  );
};

export default Routes;
