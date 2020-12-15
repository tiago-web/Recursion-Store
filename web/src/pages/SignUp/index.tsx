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

enum resgistrationLabels {
  firstName = 'First Name',
  lastName = 'Last Name',
  email = 'Email',
  phone = 'Phone',
  password = 'Password',
}

const SignUp: React.FC = () => {
  const [user, setUser] = useState<SignUpFormData>({} as SignUpFormData);
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const handleInputChange = useCallback(({ target }) => {
    const { name, value } = target;

    setUser(prevValue => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }, []);

  const onSubmit = useCallback(
    async data => {
      // const data = user as SignUpFormData;

      console.log('data', data);

      await api.post('users', data);

      history.push('/');
    },
    [history, user],
  );

  return (
    <Container>
      <FormWrapper>
        <AccountCircleIcon style={{ fontSize: 62, color: '#341C49' }} />
        <SignUpTitle>Sign Up</SignUpTitle>
        <Form>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            {Object.keys(resgistrationLabels).map(name => {
              return (
                <>
                  <Input
                    type={name === 'password' ? 'password' : 'text'}
                    name={name}
                    onChange={handleInputChange}
                    label={
                      resgistrationLabels[
                        name as keyof typeof resgistrationLabels
                      ]
                    }
                    variant="outlined"
                    inputRef={register}
                    autoFocus={name === 'firstName'}
                  />
                  {errors[name] && (
                    <p style={{ color: 'red', paddingBottom: '1.2rem' }}>
                      {errors[name].message}
                    </p>
                  )}
                </>
              );
            })}
            <SubmitButton type="submit">Register</SubmitButton>
          </form>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
