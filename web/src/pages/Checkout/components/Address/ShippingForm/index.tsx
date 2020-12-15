import React, { useCallback, useEffect, useState } from 'react';
import { AddressesData } from '..';
import { useAuth } from '../../../../../contexts/AuthContext';
import api from '../../../../../services/api';

import { Container, Form } from './styles';

interface ShippingFormProps {
  isShippingFormFilled(formFilled: boolean): void;
  handleIsSameAddress(): void;
  handleAddressData(
    addressData: string,
    countryData: string,
    postalCodeData: string,
    stateData: string,
    cityData: string,
  ): void;
  addresses: AddressesData[];
}

const ShippingForm: React.FC<ShippingFormProps> = ({
  isShippingFormFilled,
  handleIsSameAddress,
  handleAddressData,
  addresses,
}) => {
  const { user } = useAuth();

  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (
      address === '' ||
      country === '' ||
      postalCode === '' ||
      state === '' ||
      city === ''
    ) {
      isShippingFormFilled(false);
    } else {
      isShippingFormFilled(true);
    }
    handleAddressData(address, country, postalCode, state, city);
  }, [
    address,
    country,
    postalCode,
    state,
    city,
    handleAddressData,
    isShippingFormFilled,
  ]);

  const handleSelectAddress = useCallback(async (value: string): Promise<
    void
  > => {
    console.log(value);
  }, []);

  return (
    <>
      <Container>
        <h3>Shipping Address</h3>
        <Form>
          <span>Address</span>
          <input
            type="text"
            className="main-input"
            placeholder="Ex. 101 Egliton Ave."
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <div>
            <div className="input">
              <span>Country</span>
              <input
                type="text"
                placeholder="Ex. Canada"
                value={country}
                onChange={e => setCountry(e.target.value)}
              />
            </div>
            <div className="input next-input">
              <span>Postal Code</span>
              <input
                type="text"
                placeholder="Ex. M4B 2P1"
                value={postalCode}
                onChange={e => setPostalCode(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="input">
              <span>State</span>
              <input
                type="text"
                placeholder="Ex. Ontario"
                value={state}
                onChange={e => setState(e.target.value)}
              />
            </div>
            <div className="input next-input">
              <span>City</span>
              <input
                type="text"
                placeholder="Ex. Toronto"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
            </div>
          </div>
        </Form>
        {/* <div>
          <input type="checkbox" checked />
          <span>Use another address</span>
        </div> */}
        <div>
          <input type="checkbox" onChange={handleIsSameAddress} />
          <span>Use this address as billing address</span>
        </div>
      </Container>
    </>
  );
};

export default ShippingForm;
