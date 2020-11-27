import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { useLocation } from 'react-router-dom';
import { Grid, TextField, FormControlLabel, Button } from '@material-ui/core';
import UserLayout from '../components/UserLayout';
import { useStyles } from './styles';
import api from '../../../services/api';

const PurpleCheckbox = withStyles({
  root: {
    color: purple[200],
    '&$checked': {
      color: purple[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const PreviousOrders: React.FC = () => {
  const { pathname } = useLocation();
  const isEditAddressPage = pathname.toLowerCase().includes('edit');
  const titleInitials = isEditAddressPage ? 'Edit' : 'Add';
  const [main, setMain] = useState(false);

  const handleChange = (): void => {
    setMain(prevState => !prevState);
    console.log(main);
  };
  const classes = useStyles();

  return (
    <UserLayout addressesActive>
      <Grid container direction="row" className={classes.container}>
        <Grid item className={classes.textFieldGrid}>
          <h2>{titleInitials} Address</h2>
        </Grid>
        <Grid container item alignItems="center">
          <Grid xs={12} className={classes.textFieldGrid}>
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xs={12} sm={6} className={classes.textFieldGrid}>
            <TextField
              name="country"
              label="Country"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xs={12} sm={6} className={classes.textFieldGrid}>
            <TextField
              name="state"
              label="State"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xs={12} sm={6} className={classes.textFieldGrid}>
            <TextField name="city" label="City" variant="outlined" fullWidth />
          </Grid>
          <Grid xs={12} sm={6} className={classes.textFieldGrid}>
            <TextField
              name="postalcode"
              label="Postal Code"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xs={12} sm={12} className={classes.textFieldGrid}>
            <FormControlLabel
              control={
                <PurpleCheckbox
                  checked={main}
                  onChange={handleChange}
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
                <Grid xs={12} sm={6} className={classes.textFieldGrid}>
                  <Button variant="contained" fullWidth>
                    Cancel
                  </Button>
                </Grid>
                <Grid xs={12} sm={6} className={classes.textFieldGrid}>
                  <Button variant="contained" fullWidth>
                    Save
                  </Button>
                </Grid>
              </>
            ) : (
              <Button variant="contained" fullWidth>
                Create Address
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </UserLayout>
  );
};

export default PreviousOrders;
