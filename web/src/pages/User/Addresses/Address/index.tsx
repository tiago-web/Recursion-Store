import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from '@material-ui/core';
import { useStyles, CssTypography } from './styles';
import api from '../../../../services/api';

export type TUserAddress = {
  oldPostalCode?: string;
  address: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  main?: boolean;
};

type AddressProps = {
  address: TUserAddress;
  removeAddress(postalCode: string): void;
};

const Address: React.FC<AddressProps> = ({ address, removeAddress }) => {
  const classes = useStyles();

  return (
    <Grid xs={12} sm={6} className={classes.addressesGrid}>
      <Card className={classes.root}>
        <CardContent>
          <CssTypography color="textSecondary" gutterBottom>
            {address.main ? (
              <>
                Default Shipping Address
                <CheckIcon />
              </>
            ) : (
              <br />
            )}
          </CssTypography>
          <Typography variant="h6">{address.address}</Typography>
          <Typography variant="body1" component="p">
            {address.postalCode}
          </Typography>
          <Typography variant="body2" component="p">
            {address.city}, {address.state}, {address.country}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/user/edit-address/${address.postalCode}`}>
            <Button size="small">Edit</Button>
          </Link>
          <Button
            size="small"
            className={classes.red}
            onClick={() => removeAddress(`${address.postalCode}`)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Address;
