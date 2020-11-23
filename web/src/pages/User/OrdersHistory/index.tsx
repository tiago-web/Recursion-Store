import React from 'react';
import UserLayout from '../../../components/UserLayout';
import PreviousOrders from '../../../components/PreviousOrders';

const MyAccount: React.FC = () => {
  return (
    <UserLayout ordersHistoryActive>
      <PreviousOrders />
    </UserLayout>
  );
};

export default MyAccount;
