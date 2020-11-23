import React from 'react';
import UserLayout from '../../../components/UserLayout';
import PreviousOrderCard from '../../../components/PreviousOrderCard';

const MyAccount: React.FC = () => {
  return (
    <UserLayout ordersHistoryActive>
      <PreviousOrderCard />
    </UserLayout>
  );
};

export default MyAccount;
