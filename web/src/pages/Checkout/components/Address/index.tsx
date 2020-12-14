import React, { useCallback, useEffect, useState } from 'react';

import { Container, ShippingType } from './styles';

import BillingForm from './BillingForm';
import ShippingForm from './ShippingForm';

interface AddressProps {
  isFormFilled(formFilled: boolean): void;
  handleShippingPrice(selected: number): void;
}

const Address: React.FC<AddressProps> = ({
  isFormFilled,
  handleShippingPrice,
}) => {
  const [shippingText, setShippingText] = useState('(1 to 2 business days)');
  const [shippingType, setShippingType] = useState('Express');
  const [isSameAddress, setIsSameAddress] = useState(false);

  const handleIsSameAddress = useCallback(() => {
    setIsSameAddress(prevState => !prevState);
  }, []);

  const handleSelectShipType = useCallback(
    (selectedValue: string) => {
      if (selectedValue === 'Express') {
        setShippingText('(1 to 2 business days)');
        handleShippingPrice(12.99);
      } else if (selectedValue === 'Two-day') {
        setShippingText('(3 to 5 business days)');
        handleShippingPrice(7.99);
      } else if (selectedValue === 'Budget') {
        setShippingText('(6 to 10 business days)');
        handleShippingPrice(3.99);
      }
    },
    [handleShippingPrice],
  );

  const handleAddressData = useCallback(() => { }, []);

  return (
    <>
      <Container>
        <ShippingForm
          isFormFilled={isFormFilled}
          handleIsSameAddress={handleIsSameAddress}
        />
        <BillingForm
          isFormFilled={isFormFilled}
          isSameAddress={isSameAddress}
        />

        <ShippingType>
          <h3>Shipping Type</h3>
          <span>Type</span>
          <div>
            <select
              name="shipping-type"
              id="shipping-type"
              onChange={e => handleSelectShipType(e.target.value)}
              defaultValue={shippingType}
            >
              <option value="Express">Express</option>
              <option value="Two-day">Two-day</option>
              <option value="Budget">Budget</option>
            </select>
            <span>{shippingText}</span>
          </div>
        </ShippingType>
      </Container>
    </>
  );
};

export default Address;
