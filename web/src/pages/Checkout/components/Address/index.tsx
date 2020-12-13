import React, { useState } from 'react';

import { Container } from './styles';

import BillingForm from './BillingForm';
import ShippingForm from './ShippingForm';

interface AddressProps {
  isFormFilled(formFilled: boolean): void;
}

const Address: React.FC<AddressProps> = ({ isFormFilled }) => {
  const [formFilled, setFormFilled] = useState(false);

  return (
    <>
      <Container>
        <ShippingForm isFormFilled={isFormFilled} />
        <BillingForm isFormFilled={isFormFilled} />

        <div>
          <h3>Shipping Type</h3>
          <label htmlFor="shipping-type">Type</label>
          <div>
            <select name="shipping-type" id="shipping-type">
              <option value="Express">Express</option>
              <option value="Two-day">Two-day</option>
              <option value="Budget">Budget</option>
            </select>
            <span>(1 to 2 Business days)</span>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Address;
