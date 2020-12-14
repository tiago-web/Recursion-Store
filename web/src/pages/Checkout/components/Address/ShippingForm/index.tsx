import React, { useEffect, useState } from 'react';

import { Container, Form } from './styles';

interface ShippingFormProps {
  isFormFilled(formFilled: boolean): void;
  handleIsSameAddress(): void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({
  isFormFilled,
  handleIsSameAddress,
}) => {
  // const [addressFilled, setAddressFilled] = useState(false);
  const [address, setAddress] = useState('');
  // const [countryFilled, setCountryFilled] = useState(false);
  const [country, setCountry] = useState('');
  // const [postalFilled, setPostalFilled] = useState(false);
  const [postal, setPostal] = useState('');
  // const [stateFilled, setStateFilled] = useState(false);
  const [state, setState] = useState('');
  // const [cityFilled, setCityFilled] = useState(false);
  const [city, setCity] = useState('');

  useEffect(() => {
    if (
      address === '' ||
      country === '' ||
      postal === '' ||
      state === '' ||
      city === ''
    ) {
      isFormFilled(false);
    } else {
      isFormFilled(true);
    }
  }, [address, country, postal, state, city, isFormFilled]);

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
          <input type="checkbox" onChange={handleIsSameAddress} />
          <span>Use this address as billing address</span>
        </div>
      </Container>
    </>
  );
};

export default ShippingForm;
