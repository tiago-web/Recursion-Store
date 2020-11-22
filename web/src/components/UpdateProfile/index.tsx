import React from 'react';
import { Grid, InputAdornment, TextField } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { useStyles, PurpleButton } from './styles';
import PasswordInputField from '../PasswordInputField';

const UpdateProfile: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          Updated Profile
        </Grid>
        <Grid item xs={12}>
          Photo
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}>xs=12</Paper>
           */}
          <TextField
            // id="input-with-icon-textfield"
            id="input-with-icon-textfield"
            label="First Name"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}>xs=12</Paper>
           */}
          <TextField
            // id="input-with-icon-textfield"
            id="input-with-icon-textfield"
            label="Last Name"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}>xs=12</Paper>
           */}
          <TextField
            // id="input-with-icon-textfield"
            id="input-with-icon-textfield"
            label="Email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}>xs=12</Paper>
           */}
          <TextField
            // id="input-with-icon-textfield"
            id="input-with-icon-textfield"
            label="Phone"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PasswordInputField label="Old Password" name="oldPassword" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PasswordInputField label="New Password" name="newPassword" />
        </Grid>
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
          <PasswordInputField
            label="Confirm New Password"
            name="confirmNewPassword"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
          <PurpleButton>Save</PurpleButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateProfile;
