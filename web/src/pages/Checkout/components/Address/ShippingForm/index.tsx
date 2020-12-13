import React from 'react';

import { Container, Form } from './styles';

interface ShippingFormProps {
  isFormFilled(formFilled: boolean): void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ isFormFilled }) => {
  return (
    <>
      <Container>
        <h3>Shipping Address</h3>
        <Form>
          <label htmlFor="">Address</label>
          <input
            type="text"
            className="main-input"
            placeholder="Ex. 101 Egliton Ave."
          />
          <div>
            <div className="input">
              <label htmlFor="">Country</label>
              <input type="text" placeholder="Ex. Canada" />
            </div>
            <div className="input next-input">
              <label htmlFor="">Postal Code</label>
              <input type="text" placeholder="Ex. M4B 2P1" />
            </div>
          </div>
          <div>
            <div className="input">
              <label htmlFor="">State</label>
              <input type="text" placeholder="Ex. Ontario" />
            </div>
            <div className="input next-input">
              <label htmlFor="">City</label>
              <input type="text" placeholder="Ex. Toronto" />
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default ShippingForm;
