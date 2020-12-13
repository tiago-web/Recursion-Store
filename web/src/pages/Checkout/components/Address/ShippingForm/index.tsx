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
          <input type="text" />
          <div>
            <div className="input">
              <label htmlFor="">Country</label>
              <input type="text" />
            </div>
            <div className="input">
              <label htmlFor="">Postal Code</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <div className="input">
              <label htmlFor="">State</label>
              <input type="text" />
            </div>
            <div className="input">
              <label htmlFor="">City</label>
              <input type="text" name="" id="" />
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default ShippingForm;
