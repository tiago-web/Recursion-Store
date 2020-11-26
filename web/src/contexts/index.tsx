import React from 'react';

import { CartProvider } from './CartContext';

const AppProvider: React.FC = ({ children }) => (
  <CartProvider>{children}</CartProvider>
);

export default AppProvider;
