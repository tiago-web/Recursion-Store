import React, { useEffect, useState, useCallback } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { useLocation, useHistory, useParams, Link } from 'react-router-dom';
import { Grid, TextField, FormControlLabel } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import UserLayout from '../components/UserLayout';
import { useStyles, PurpleSolidButton, RedOutlinedButton } from './styles';
import api from '../../../services/api';
import { TUserAddress } from '../Addresses/Address';

const addressSchema = yup.object().shape({
  address: yup.string().min(6).required(),
  country: yup.string().min(3).required(),
  state: yup.string().min(3).required(),
  city: yup.string().min(3).required(),
  postalCode: yup.string().min(6).required(),
  main: yup.boolean(),
});

enum addressLabels {
  address = 'Address',
  country = 'Country',
  state = 'State',
  city = 'City',
  postalCode = 'Postal Code',
  main = 'Default Shipping Address',
}

const PurpleCheckbox = withStyles({
  root: {
    color: purple[200],
    '&$checked': {
      color: purple[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const AddEditAddress: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();
  const { oldPostalCode }: { oldPostalCode: string } = useParams();
  const isEditAddressPage = pathname.toLowerCase().includes('edit');
  const titleInitials = isEditAddressPage ? 'Edit' : 'Add';
  const [addressFound, setAddressFound] = useState(false);
  const [addressForm, setAddressForm] = useState<TUserAddress>({
    address: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
    main: false,
  } as TUserAddress);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(addressSchema),
  });

  const handleAddressChange = useCallback(e => {
    const { name, value, checked } = e.target;
    name === 'main'
      ? setAddressForm(prevState => ({ ...prevState, [name]: checked }))
      : setAddressForm(prevState => ({ ...prevState, [name]: value }));
  }, []);

  useEffect(() => {
    if (isEditAddressPage) {
      api.get(`/profile/shippingAddress/${oldPostalCode}`).then(response => {
        const reqAddress = response.data;
        setAddressFound(true);
        setAddressForm(reqAddress);
      });
    }
  }, []);

  const onSubmit = useCallback(async (data: TUserAddress): Promise<void> => {
    const { address, country, state, city, postalCode, main } = data;
    if (isEditAddressPage) {
      const response = await api.put('/profile/shippingAddress', {
        oldPostalCode,
        address,
        country,
        state,
        city,
        postalCode,
        main,
      });
      history.goBack();
    } else {
      // create shipping address
      const response = await api.post('/profile/shippingAddress', {
        oldPostalCode,
        address,
        country,
        state,
        city,
        postalCode,
        main,
      });
      history.goBack();
    }
  }, []);

  return (
    <UserLayout addressesActive>
      <Grid container direction="row" className={classes.container}>
        <Grid item className={classes.textFieldGrid}>
          <h2>{titleInitials} Address</h2>
        </Grid>
        {(isEditAddressPage && addressFound) || !isEditAddressPage ? (
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container item alignItems="center">
              {Object.keys(addressForm).map(name => {
                return name === 'main' ? (
                  <Grid
                    key={name}
                    xs={12}
                    sm={12}
                    className={classes.textFieldGrid}
                  >
                    <FormControlLabel
                      label={addressLabels[name as keyof typeof addressLabels]}
                      control={
                        <PurpleCheckbox
                          name={name}
                          onChange={handleAddressChange}
                          checked={addressForm[name]}
                          inputRef={register}
                        />
                      }
                    />
                  </Grid>
                ) : (
                  <Grid
                    key={name}
                    xs={name === 'address' ? 12 : 6}
                    className={classes.textFieldGrid}
                  >
                    <TextField
                      name={name}
                      label={addressLabels[name as keyof typeof addressLabels]}
                      variant="outlined"
                      onChange={handleAddressChange}
                      autoComplete={name}
                      value={addressForm[name as keyof typeof addressForm]}
                      error={!!errors[name]}
                      inputRef={register}
                      fullWidth
                      autoFocus
                    />
                    {errors[name] && (
                      <span className={classes.error}>
                        {errors[name].message}
                      </span>
                    )}
                  </Grid>
                );
              })}

              <Grid xs={12} sm={6} className={classes.textFieldGrid}>
                &nbsp;
              </Grid>
              <Grid container xs={12} sm={6} className={classes.textFieldGrid}>
                <Grid xs={6} className={classes.textFieldGrid}>
                  <Link to="/user/addresses">
                    <RedOutlinedButton variant="contained" fullWidth>
                      Cancel
                    </RedOutlinedButton>
                  </Link>
                </Grid>
                <Grid xs={6} className={classes.textFieldGrid}>
                  <PurpleSolidButton
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    {isEditAddressPage ? 'Save' : 'Create'}
                  </PurpleSolidButton>
                </Grid>
              </Grid>
            </Grid>
          </form>
        ) : (
          <Grid container alignItems="center">
            <Grid item xs={12} className={classes.textFieldGrid}>
              No Address Found
            </Grid>
          </Grid>
        )}
      </Grid>
    </UserLayout>
  );
};

export default AddEditAddress;
