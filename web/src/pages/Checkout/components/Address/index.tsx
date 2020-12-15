import React, { useCallback, useEffect, useState } from 'react';

import { Container, ShippingType } from './styles';

import BillingForm from './BillingForm';
import ShippingForm from './ShippingForm';
import api from '../../../../services/api';
import { AddressProps } from '../..';

interface AddressPageProps {
  isFormFilled(shippingFormFilled: boolean, billingFormFilled: boolean): void;
  handleShippingPrice(selected: number): void;
  handleGetTheAddresses(shipping: AddressProps, billing: AddressProps): void;
}

export interface AddressesData {
  address: string;
  country: string;
  postalCode: string;
  state: string;
  city: string;
  main: boolean;
}

const Address: React.FC<AddressPageProps> = ({
  isFormFilled,
  handleShippingPrice,
  handleGetTheAddresses,
}) => {
  const [shippingText, setShippingText] = useState('(1 to 2 business days)');
  const [shippingType, setShippingType] = useState('Express');
  const [isSameAddress, setIsSameAddress] = useState(false);

  const [shippingFormFilled, setShippingFormFilled] = useState(false);
  const [billingFormFilled, setBillingFormFilled] = useState(false);

  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const [addressBilling, setAddressBilling] = useState('');
  const [countryBilling, setCountryBilling] = useState('');
  const [postalCodeBilling, setPostalCodeBilling] = useState('');
  const [stateBilling, setStateBilling] = useState('');
  const [cityBilling, setCityBilling] = useState('');

  const [addresses, setAddresses] = useState<AddressesData[]>([]);

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

  const handleShippingAddressData = useCallback(
    (
      addressData: string,
      countryData: string,
      postalData: string,
      stateData: string,
      cityData: string,
    ) => {
      setAddress(addressData);
      setCountry(countryData);
      setPostalCode(postalData);
      setState(stateData);
      setCity(cityData);
    },
    [],
  );
  const handleBillingAddressData = useCallback(
    (
      addressData: string,
      countryData: string,
      postalData: string,
      stateData: string,
      cityData: string,
    ) => {
      setAddressBilling(addressData);
      setCountryBilling(countryData);
      setPostalCodeBilling(postalData);
      setStateBilling(stateData);
      setCityBilling(cityData);
    },
    [],
  );

  const isShippingFormFilled = useCallback((formFilled: boolean) => {
    setShippingFormFilled(formFilled);
  }, []);

  const isBillingFormFilled = useCallback((formFilled: boolean) => {
    setBillingFormFilled(formFilled);
  }, []);

  useEffect(() => {
    isFormFilled(shippingFormFilled, billingFormFilled);
  }, [isFormFilled, shippingFormFilled, billingFormFilled]);

  useEffect(() => {
    const shippingData = {
      address,
      country,
      postalCode,
      state,
      city,
    };

    const billingData = {
      address: addressBilling,
      country: countryBilling,
      postalCode: postalCodeBilling,
      state: stateBilling,
      city: cityBilling,
    };

    handleGetTheAddresses(shippingData, billingData);
  }, [
    handleGetTheAddresses,
    address,
    country,
    postalCode,
    state,
    city,
    addressBilling,
    countryBilling,
    postalCodeBilling,
    stateBilling,
    cityBilling,
  ]);

  useEffect(() => {
    async function loadUserAddresses(): Promise<void> {
      const response = await api.get('profile/shippingAddresses');

      if (response) {
        setAddresses(response.data);
      }
    }

    loadUserAddresses();
  }, []);

  return (
    <>
      <Container>
        <ShippingForm
          isShippingFormFilled={isShippingFormFilled}
          handleIsSameAddress={handleIsSameAddress}
          handleAddressData={handleShippingAddressData}
          addresses={addresses}
        />
        <BillingForm
          isBillingFormFilled={isBillingFormFilled}
          isSameAddress={isSameAddress}
          handleAddressData={handleBillingAddressData}
          address={address}
          country={country}
          postalCode={postalCode}
          state={state}
          city={city}
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
