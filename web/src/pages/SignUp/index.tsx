import React, { useCallback, useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import api from '../../services/api';
import {
  Container,
  FormWrapper,
  SignUpTitle,
  Form,
  Input,
  SubmitButton,
} from './styles';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

const registrationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'The first name must be at least 3 characters long.')
    .required('You must provide a first name.'),
  lastName: yup
    .string()
    .min(3, 'The last name must be at least 3 characters long.')
    .required('You must provide a last name.'),
  email: yup.string().email().required('You must provide a email address.'),
  phone: yup
    .string()
    .min(10, 'The number must be at least 10 digits long.')
    .required('You must provide a phone number'),
  password: yup.string().min(6).required('You must provide a password.'),
});

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

  // const onSubmit = useCallback(data => {
  //   console.log(data);
  // });

  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(productSchema),
  // });

  return (
    <Container>
      <FormWrapper>
        <AccountCircleIcon style={{ fontSize: 62, color: '#341C49' }} />
        <SignUpTitle>Sign Up</SignUpTitle>
        <Form>
          {/* <form noValidate onSubmit={handleSubmit(onSubmit)}> */}
          <Input
            type="text"
            name="firstName"
            onChange={handleInputChange}
            label="First Name"
            variant="outlined"
            autoFocus
          />
          {/* {errors.firstName && (
            <p style={{ color: 'red' }}>{errors.firstName}</p>
          )} */}
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

          <SubmitButton onClick={handleSubmit} type="submit">
            Register
          </SubmitButton>
          {/* </form> */}
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
