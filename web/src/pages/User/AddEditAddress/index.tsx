import React, { useEffect, useState, useCallback, ChangeEvent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import { Grid, TextField, FormControlLabel, Button } from '@material-ui/core';
import UserLayout from '../components/UserLayout';
import { useStyles, PurpleSolidButton, RedOutlinedButton } from './styles';
import api from '../../../services/api';
import apiErrorHandler from '../../../services/apiErrorHandler';
import { TUserAddress } from '../Addresses/Address';

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

  const [main, setMain] = useState(false);
  const [address, setAddress] = useState<TUserAddress>({} as TUserAddress);

  const handleChange = (): void => {
    setMain(prevState => !prevState);
  };
  type TAddressEvent = {
    name: string;
    value: string;
  };

  const handleAddressChange = useCallback(e => {
    // console.log(e.target.name);
    const { name, value } = e.target;

    setAddress(prevState => ({ ...prevState, [name]: value }));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('@Recursion:token');
    if (!token) history.push('/');
    api
      .get(`/profile/shippingAddress/${oldPostalCode}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(response => {
        const reqAddress = response.data;
        // Object.keys(reqAddress).map((name, i) => {
        //   console.log(name, i, reqAddress[name]);
        //   setAddress(prevState => ({ ...prevState, [name]: reqAddress[name] }));
        // });

        setAddress(reqAddress);
        if (address) setMain(!!address.main);
      })
      .catch(apiErrorHandler);
  }, []);

  return (
    <UserLayout addressesActive>
      <Grid container direction="row" className={classes.container}>
        <Grid item className={classes.textFieldGrid}>
          <h2>{titleInitials} Address</h2>
        </Grid>
        {address ? (
          <Grid container item alignItems="center">
            <Grid xs={12} className={classes.textFieldGrid}>
              <TextField
                name="address"
                label="Address"
                variant="standard"
                onChange={handleAddressChange}
                fullWidth
                defaultValue={address.address}
                value={address.address}
              />
            </Grid>
            <Grid xs={12} sm={6} className={classes.textFieldGrid}>
              <TextField
                name="country"
                label="Country"
                variant="outlined"
                onChange={handleAddressChange}
                fullWidth
                value={address.country}
              />
            </Grid>
            <Grid xs={12} sm={6} className={classes.textFieldGrid}>
              <TextField
                name="state"
                label="State"
                variant="outlined"
                onChange={handleAddressChange}
                fullWidth
                value={address.state}
              />
            </Grid>
            <Grid xs={12} sm={6} className={classes.textFieldGrid}>
              <TextField
                name="city"
                label="City"
                variant="outlined"
                onChange={handleAddressChange}
                fullWidth
                value={address.city}
              />
            </Grid>
            <Grid xs={12} sm={6} className={classes.textFieldGrid}>
              <TextField
                name="postalcode"
                label="Postal Code"
                variant="outlined"
                onChange={handleAddressChange}
                fullWidth
                value={address.postalCode}
              />
            </Grid>
            <Grid xs={12} sm={12} className={classes.textFieldGrid}>
              <FormControlLabel
                control={
                  <PurpleCheckbox
                    checked={address.main}
                    onChange={handleAddressChange}
                    name="main"
                  />
                }
                label="Default Shipping Address"
              />
            </Grid>

            <Grid xs={12} sm={6} className={classes.textFieldGrid}>
              &nbsp;
            </Grid>
            <Grid container xs={12} sm={6} className={classes.textFieldGrid}>
              {isEditAddressPage ? (
                <>
                  <Grid xs={6} className={classes.textFieldGrid}>
                    <RedOutlinedButton variant="contained" fullWidth>
                      Cancel
                    </RedOutlinedButton>
                  </Grid>
                  <Grid xs={6} className={classes.textFieldGrid}>
                    <PurpleSolidButton variant="contained" fullWidth>
                      Save
                    </PurpleSolidButton>
                  </Grid>
                </>
              ) : (
                <PurpleSolidButton variant="contained" fullWidth>
                  Create Address
                </PurpleSolidButton>
              )}
            </Grid>
          </Grid>
        ) : (
          <Grid container item alignItems="center">
            No Address Found
          </Grid>
        )}
      </Grid>
    </UserLayout>
  );
};

export default AddEditAddress;
