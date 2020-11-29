import React, { useState } from 'react';
import { AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
// import { DevTool } from '@hookform/devtools';
import {
  Avatar,
  Grid,
  Container,
  CssBaseline,
  FormControlLabel,
  Button,
  Link,
  Checkbox,
  Typography,
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import api from '../../services/api';
import { CssTextField, useStyles } from './styles';

type TLoginData = {
  email: string;
  password: string;
  remember: boolean;
};

const Login: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [error, setError] = useState(undefined);

  const { register, handleSubmit, control, errors } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      remember: true,
    },
  });

  // type TLoginResponse = {
  //   data: {
  //     token?: string;
  //     status?: string;
  //     message?: string;
  //   };
  //   status: number;
  // };

  const onSubmit = ({ email, password }: TLoginData): void => {
    // const response: TLoginResponse = api.post('/sessions', {
    //   email,
    //   password,
    // });
    api
      .post('/sessions', {
        email,
        password,
      })
      .then(response => {
        if (response.statusText === 'Created' && response.data.token) {
          setError(undefined);
          localStorage.setItem('@Recursion:token', response.data.token);
          history.push('/products');
        }
      })
      .catch(response => {
        const { message } = JSON.parse(response.request.response);
        setError(message);
        setTimeout(() => {
          setError(undefined);
        }, 2500);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      {/* <DevTool control={control} /> */}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon style={{ fontSize: 45 }} />
        </Avatar>
        <Typography component="h1" variant="h4" className={classes.title}>
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <CssTextField
            name="email"
            label="Email Address"
            variant="outlined"
            margin="normal"
            inputRef={register({
              required: 'You must provide the email address!',
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'You must provide a valid email address!',
              },
            })}
            autoComplete="email"
            error={!!errors.email}
            fullWidth
            autoFocus
          />
          {errors.email && (
            <span className={classes.error}>{errors.email.message}</span>
          )}
          <CssTextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            inputRef={register({
              required: 'You must provide a password.',
              minLength: {
                value: 6,
                message: 'Your password must be greater than 6 characters',
              },
            })}
            error={!!errors.password}
            fullWidth
            autoComplete="current-password"
          />
          {errors.password && (
            <span className={classes.error}>{errors.password.message}</span>
          )}

          <Grid container>
            <Grid item>
              <span className={classes.error}>{error}</span>
            </Grid>
          </Grid>

          <Grid container>
            {/* <Grid item xs>
              <Link href="/" variant="body2" className={classes.link}>
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <FormControlLabel
                control={
                  <Controller
                    control={control}
                    name="remember"
                    defaultValue
                    render={({ onChange, value }) => (
                      <Checkbox
                        className={classes.checkBox}
                        onChange={e => onChange(e.target.checked)}
                        checked={value}
                      />
                    )}
                  />
                }
                label="Remember me"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!!errors.email || !!errors.password}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              &nbsp;
              {/* <Link href="#" variant="body2" className={classes.link}>
                {'New to this platform? Create an Acount.'}
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
