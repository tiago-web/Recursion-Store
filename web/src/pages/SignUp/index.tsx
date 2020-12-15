import React, { useCallback, useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {
  Container,
  FormWrapper,
  SignUpTitle,
  Form,
  Input,
  SubmitButton,
} from './styles';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [user, setUser] = useState<SignUpFormData>({} as SignUpFormData);
  const history = useHistory();

  const handleSubmit = useCallback(async () => {
    const data = user as SignUpFormData;

    console.log('here');

    history.push('/');

    await api.post('users', data);
  }, [history, user]);

  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;

    setUser(prevValue => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }, []);

  return (
    <Container>
      <FormWrapper>
        <AccountCircleIcon style={{ fontSize: 62, color: '#341C49' }} />
        <SignUpTitle>Sign Up</SignUpTitle>
        <Form>
          <Input
            type="text"
            name="firstName"
            onChange={handleInputChange}
            label="First Name"
            variant="outlined"
            autoFocus
          />
          <Input
            type="text"
            name="lastName"
            onChange={handleInputChange}
            label="Last Name"
            variant="outlined"
          />
          <Input
            type="text"
            name="email"
            onChange={handleInputChange}
            label="E-mail"
            variant="outlined"
          />
          <Input
            type="text"
            name="phone"
            onChange={handleInputChange}
            label="Phone"
            variant="outlined"
          />
          <Input
            type="password"
            name="password"
            onChange={handleInputChange}
            label="Password"
            variant="outlined"
          />

          <SubmitButton onClick={handleSubmit} type="button">
            Register
          </SubmitButton>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
