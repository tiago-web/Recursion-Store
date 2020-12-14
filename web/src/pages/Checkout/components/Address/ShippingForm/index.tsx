import React, { useCallback, useEffect, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { useAuth } from '../../../../../contexts/AuthContext';
import api from '../../../../../services/api';

import { Container, Form } from './styles';

interface AddressesData {
  address: string;
  country: string;
  postalCode: string;
  state: string;
  city: string;
}

interface ShippingFormProps {
  isShippingFormFilled(formFilled: boolean): void;
  handleIsSameAddress(): void;
  handleAddressData(
    addressData: string,
    countryData: string,
    postalData: string,
    stateData: string,
    cityData: string,
  ): void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({
  isShippingFormFilled,
  handleIsSameAddress,
  handleAddressData,
}) => {
  const { user } = useAuth();

  const [addresses, setAddresses] = useState<AddressesData[]>([]);
  const [address, setAddress] = useState(() => {
    const addressExists = addresses[0].address;

    if (addressExists) return addressExists;

    return '';
  });
  const [country, setCountry] = useState(() => {
    const countryExists = addresses[0].country;

    if (countryExists) return countryExists;

    return '';
  });
  const [postal, setPostal] = useState(() => {
    const postalExists = addresses[0].postalCode;

    if (postalExists) return postalExists;

    return '';
  });
  const [state, setState] = useState(() => {
    const stateExists = addresses[0].state;

    if (stateExists) return stateExists;

    return '';
  });
  const [city, setCity] = useState(() => {
    const cityExists = addresses[0].city;

    if (cityExists) return cityExists;

    return '';
  });

  useEffect(() => {
    async function loadUserAddresses(): Promise<void> {
      const response = await api.get('profile/shippingAddresses');

      if (response) {
        setAddresses(response.data);
      }
    }

    loadUserAddresses();
  }, []);

  useEffect(() => {
    if (
      address === '' ||
      country === '' ||
      postal === '' ||
      state === '' ||
      city === ''
    ) {
      isShippingFormFilled(false);
    } else {
      isShippingFormFilled(true);
    }

    handleAddressData(address, country, postal, state, city);
  }, [
    address,
    country,
    postal,
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
          <PlacesAutocomplete
            value={address}
            onChange={e => setAddress(e)}
            onSelect={handleSelectAddress}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input {...getInputProps({ placeholder: 'Address' })} />
                <div>
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => (
                    <div key={suggestion.placeId}>{suggestion.description}</div>
                  ))}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
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
                value={postal}
                onChange={e => setPostal(e.target.value)}
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
        <div>
          <input type="checkbox" checked />
          <span>Use another address</span>
        </div>
        <div>
          <input type="checkbox" onChange={handleIsSameAddress} />
          <span>Use this address as billing address</span>
        </div>
      </Container>
    </>
  );
};

export default ShippingForm;
