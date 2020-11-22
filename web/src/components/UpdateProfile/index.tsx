import React, { useState, useCallback } from 'react';
import { Grid, InputAdornment, Paper, TextField } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from '@material-ui/core/IconButton/IconButton';
import LockIcon from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useStyles, PurpleButton } from './styles';

const UpdateProfile: React.FC = () => {
  const classes = useStyles();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangeOldPassword = useCallback(
    event => {
      setOldPassword(event.target.value);
    },
    [oldPassword],
  );

  const handleChangeNewPassword = useCallback(
    event => {
      setNewPassword(event.target.value);
    },
    [newPassword],
  );

  const handleChangeConfirmPassword = useCallback(
    event => {
      setConfirmPassword(event.target.value);
    },
    [confirmPassword],
  );

  const handleClickShowOldPassword = useCallback(() => {
    setShowOldPassword(prevState => !prevState);
  }, [showOldPassword]);

  const handleClickShowNewPassword = useCallback(() => {
    setShowNewPassword(prevState => !prevState);
  }, [showNewPassword]);

  const handleClickShowConfirmPassword = useCallback(() => {
    setShowConfirmPassword(prevState => !prevState);
  }, [showConfirmPassword]);

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
          <TextField
            id="outlined-adornment-password"
            variant="outlined"
            type={showOldPassword ? 'text' : 'password'}
            label="Old Password"
            value={oldPassword}
            onChange={handleChangeOldPassword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={handleClickShowOldPassword}
                  >
                    {showOldPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-adornment-password"
            variant="outlined"
            type={showNewPassword ? 'text' : 'password'}
            label="New Password"
            value={newPassword}
            onChange={handleChangeNewPassword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={handleClickShowNewPassword}
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-adornment-password"
            variant="outlined"
            type={showConfirmPassword ? 'text' : 'password'}
            label="Confirm New Password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
