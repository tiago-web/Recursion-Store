import React, { useEffect, useState } from 'react';

import { Container, Form } from './styles';

interface BillingFormProps {
  isFormFilled(formFilled: boolean): void;
  isSameAddress: boolean;
}

const BillingForm: React.FC<BillingFormProps> = ({
  isFormFilled,
  isSameAddress,
}) => {
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [postal, setPostal] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => { }, []);

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
                <input type="text" placeholder="Ex. Canada" disabled />
              </div>
              <div className="input next-input">
                <span>Postal Code</span>
                <input type="text" placeholder="Ex. M4B 2P1" disabled />
              </div>
            </div>
            <div>
              <div className="input">
                <span>State</span>
                <input type="text" placeholder="Ex. Ontario" disabled />
              </div>
              <div className="input next-input">
                <span>City</span>
                <input type="text" placeholder="Ex. Toronto" disabled />
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
          )}
      </Container>
    </>
  );
};

export default BillingForm;
