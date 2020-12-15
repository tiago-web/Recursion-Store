import React, { useEffect, useState } from 'react';

import { Container, Form } from './styles';

interface BillingFormProps {
  isBillingFormFilled(formFilled: boolean): void;
  handleAddressData(
    addressData: string,
    countryData: string,
    postalData: string,
    stateData: string,
    cityData: string,
  ): void;
  isSameAddress: boolean;
  address: string;
  country: string;
  postal: string;
  state: string;
  city: string;
}

const BillingForm: React.FC<BillingFormProps> = ({
  isBillingFormFilled,
  handleAddressData,
  isSameAddress,
  address,
  country,
  postal,
  state,
  city,
}) => {
  const [addressBilling, setAddressBilling] = useState('');
  const [countryBilling, setCountryBilling] = useState('');
  const [postalBilling, setPostalBilling] = useState('');
  const [stateBilling, setStateBilling] = useState('');
  const [cityBilling, setCityBilling] = useState('');

  useEffect(() => {
    if (isSameAddress) {
      isBillingFormFilled(true);
    } else {
      isBillingFormFilled(false);
    }
  }, [isSameAddress, isBillingFormFilled]);

  useEffect(() => {
    if (
      addressBilling === '' ||
      countryBilling === '' ||
      postalBilling === '' ||
      stateBilling === '' ||
      cityBilling === ''
    ) {
      isBillingFormFilled(false);
    } else {
      isBillingFormFilled(true);
    }
    handleAddressData(
      addressBilling,
      countryBilling,
      postalBilling,
      stateBilling,
      cityBilling,
    );
  }, [
    handleAddressData,
    addressBilling,
    countryBilling,
    postalBilling,
    stateBilling,
    cityBilling,
    isBillingFormFilled,
  ]);

  return (
    <>
      <Container>
        <h3>Billing Address</h3>
        {isSameAddress ? (
          <Form>
            <span>Address</span>
            <input
              type="text"
              className="main-input"
              placeholder="Ex. 101 Egliton Ave."
              disabled
              value={address}
            />
            <div>
              <div className="input">
                <span>Country</span>
                <input
                  type="text"
                  placeholder="Ex. Canada"
                  disabled
                  value={country}
                />
              </div>
              <div className="input next-input">
                <span>Postal Code</span>
                <input
                  type="text"
                  placeholder="Ex. M4B 2P1"
                  disabled
                  value={postal}
                />
              </div>
            </div>
            <div>
              <div className="input">
                <span>State</span>
                <input
                  type="text"
                  placeholder="Ex. Ontario"
                  disabled
                  value={state}
                />
              </div>
              <div className="input next-input">
                <span>City</span>
                <input
                  type="text"
                  placeholder="Ex. Toronto"
                  disabled
                  value={city}
                />
              </div>
            </div>
          </Form>
        ) : (
            <Form>
              <span>Address</span>
              <input
                type="text"
                className="main-input"
                placeholder="Ex. 101 Egliton Ave."
                value={addressBilling}
                onChange={e => setAddressBilling(e.target.value)}
              />
              <div>
                <div className="input">
                  <span>Country</span>
                  <input
                    type="text"
                    placeholder="Ex. Canada"
                    value={countryBilling}
                    onChange={e => setCountryBilling(e.target.value)}
                  />
                </div>
                <div className="input next-input">
                  <span>Postal Code</span>
                  <input
                    type="text"
                    placeholder="Ex. M4B 2P1"
                    value={postalBilling}
                    onChange={e => setPostalBilling(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="input">
                  <span>State</span>
                  <input
                    type="text"
                    placeholder="Ex. Ontario"
                    value={stateBilling}
                    onChange={e => setStateBilling(e.target.value)}
                  />
                </div>
                <div className="input next-input">
                  <span>City</span>
                  <input
                    type="text"
                    placeholder="Ex. Toronto"
                    value={cityBilling}
                    onChange={e => setCityBilling(e.target.value)}
                  />
                </div>
              </div>
            </Form>
          )}
      </Container>
    </>
  );
};

export default BillingForm;
