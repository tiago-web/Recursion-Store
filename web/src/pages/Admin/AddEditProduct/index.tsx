import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { useAuth } from '../../../contexts/AuthContext';
import ProductAE from './components/ProductAE';
import { useHistory } from 'react-router-dom';

const AddEditProduct: React.FC = () => {
  const { user } = useAuth();
  let history = useHistory();

  useEffect(() => {
    if (user.permission === 'User') {
      history.push('/login');
    }
  }, []);

  return (
    <RecoilRoot>
      <ProductAE />
    </RecoilRoot>
  );
};

export default AddEditProduct;
