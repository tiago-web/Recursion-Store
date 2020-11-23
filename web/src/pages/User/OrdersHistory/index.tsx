import React from 'react';
import UserLayout from '../../../components/UserLayout';
import UpdateProfile from '../../../components/UpdateProfile';

const MyAccount: React.FC = () => {
  return (
    <UserLayout ordersHistoryActive>
      <UpdateProfile />
    </UserLayout>
  );
};

export default MyAccount;
