import React from 'react';
import { Grid, InputAdornment, TextField, Paper } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PasswordInputField from '../../../../components/PasswordInputField';
import { useStyles, PurpleButton } from './styles';

const UpdateProfile: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2 className={classes.title}>Updated Profile</h2>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <AccountCircleIcon style={{ fontSize: 120 }} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <TextField
              className={classes.textField}
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <TextField
              className={classes.textField}
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
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <TextField
              className={classes.textField}
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <TextField
              className={classes.textField}
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <PasswordInputField label="Old Password" name="oldPassword" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <PasswordInputField label="New Password" name="newPassword" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <PasswordInputField
              label="Confirm New Password"
              name="confirmNewPassword"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <PurpleButton>Save</PurpleButton>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateProfile;
