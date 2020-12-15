import React, { useCallback, useEffect, useState } from 'react';

import { Container, ShippingType } from './styles';

import BillingForm from './BillingForm';
import ShippingForm from './ShippingForm';
import api from '../../../../services/api';

interface AddressProps {
  isFormFilled(shippingFormFilled: boolean, billingFormFilled: boolean): void;
  handleShippingPrice(selected: number): void;
  handleGetTheAddresses(
    shippingAdress: string,
    shippinCountry: string,
    shippingPostalCode: string,
    shippingState: string,
    shippingCity: string,
    billingAdress: string,
    billingCountry: string,
    billingPostalCode: string,
    billingState: string,
    billingCity: string,
  ): void;
}

export interface AddressesData {
  address: string;
  country: string;
  postalCode: string;
  state: string;
  city: string;
  main: boolean;
}

const Address: React.FC<AddressProps> = ({
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
  const [postal, setPostal] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const [addressBilling, setAddressBilling] = useState('');
  const [countryBilling, setCountryBilling] = useState('');
  const [postalBilling, setPostalBilling] = useState('');
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
      setPostal(postalData);
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
      setPostalBilling(postalData);
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
    handleGetTheAddresses(
      address,
      country,
      postal,
      state,
      city,
      addressBilling,
      countryBilling,
      postalBilling,
      stateBilling,
      cityBilling,
    );
  }, [
    handleGetTheAddresses,
    address,
    country,
    postal,
    state,
    city,
    addressBilling,
    countryBilling,
    postalBilling,
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
          postal={postal}
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
