import React, { useState, useCallback } from 'react';
import { Grid, InputAdornment, Paper } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PasswordInputField from '../../../../components/PasswordInputField';
import { useAuth, TUser } from '../../../../contexts/AuthContext';
import api from '../../../../services/api';
import { useStyles, PurpleButton, CssTextField } from './styles';

const userSchema = yup.object().shape({
  firstName: yup.string().min(3).required(),
  lastName: yup.string().min(3).required(),
  email: yup.string().email().required(),
  phone: yup.string().min(10).required(),
  oldPassword: yup.string(),
  newPassword: yup.string().when('oldPassword', {
    is: value => value,
    then: yup.string().required().min(6),
    otherwise: yup.string(),
  }),
  confirmNewPassword: yup.string().when('oldPassword', {
    is: value => value,
    then: yup
      .string()
      .oneOf(
        [yup.ref('newPassword'), undefined],
        'New & Confirm Password must match',
      )
      .required('Confirm new password is required')
      .min(6),
    otherwise: yup.string(),
  }),
});
// .matches(
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
//   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
// ),

const userInfo = {
  firstName: {
    icon: <PersonIcon />,
    label: 'First Name',
  },
  lastName: {
    icon: <PersonIcon />,
    label: 'Last Name',
  },
  email: {
    icon: <EmailIcon />,
    label: 'Email',
  },
  phone: {
    icon: <PhoneIcon />,
    label: 'Phone',
  },
};

interface TUserPasswords extends TUser {
  oldPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
}

const passwordLabels = {
  oldPassword: 'Old Password',
  newPassword: 'New Password',
  confirmNewPassword: 'Confirm New Password',
};

const UpdateProfile: React.FC = () => {
  const classes = useStyles();
  const { user, updateUser } = useAuth();
  const [userForm, setUserForm] = useState(user as TUser);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(userSchema),
  });

  const handleChange = useCallback(e => {
    const { name, value } = e.target;
    setUserForm(prevState => ({ ...prevState, [name]: value }));
  }, []);

  const onSubmit = useCallback((data: TUserPasswords): void => {
    const {
      firstName,
      lastName,
      email,
      phone,
      oldPassword,
      newPassword,
    } = data;
    console.log(data);

    const updatedUser = {
      firstName,
      lastName,
      email,
      phone,
    };

    api
      .put(
        '/profile',
        oldPassword === ''
          ? updatedUser
          : {
              ...updatedUser,
              oldPassword,
              password: newPassword,
            },
      )
      .then(() => {
        updateUser(updatedUser as TUser);
        setSuccess('The User was successfully updated!');
        setTimeout(() => setSuccess(''), 2500);
      })
      .catch(response => {
        const { responseText }: { responseText: string } = response.request;
        const { message } = JSON.parse(responseText);
        setError(message);
        setTimeout(() => setError(''), 2500);
      });
  }, []);

  return (
    <div className={classes.root}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2 className={classes.title}>Updated Profile</h2>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <AccountCircleIcon style={{ fontSize: 120 }} />
            </Paper>
          </Grid>

          {Object.keys(userInfo).map(name => {
            return (
              <Grid key={name} item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <CssTextField
                    className={classes.textField}
                    label={userInfo[name as keyof typeof userInfo].label}
                    onChange={handleChange}
                    value={userForm[name as keyof typeof userForm]}
                    name={name}
                    variant="outlined"
                    inputRef={register}
                    error={!!errors[name]}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {userInfo[name as keyof typeof userInfo].icon}
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors[name] && (
                    <p className={classes.error}>{errors[name].message}</p>
                  )}
                </Paper>
              </Grid>
            );
          })}

          {Object.keys(passwordLabels).map(name => {
            return (
              <>
                {name === 'confirmNewPassword' && (
                  <Grid item xs={12} sm={6}>
                    &nbsp;
                  </Grid>
                )}
                <Grid key={name} item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    <PasswordInputField
                      inputRef={register}
                      label={
                        passwordLabels[name as keyof typeof passwordLabels]
                      }
                      name={name}
                    />
                    {errors[name] && (
                      <p className={classes.error}>{errors[name].message}</p>
                    )}
                  </Paper>
                </Grid>
              </>
            );
          })}

          <Grid item xs={12} sm={6}>
            &nbsp;
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              {error && <p className={classes.error}>{error}</p>}
              {success && <p className={classes.success}>{success}</p>}
              <PurpleButton type="submit">Save</PurpleButton>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default UpdateProfile;
