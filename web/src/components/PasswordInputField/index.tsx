import IconButton from '@material-ui/core/IconButton';
import React, { useState, useCallback } from 'react';
import LockIcon from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { InputAdornment } from '@material-ui/core';
import TextField, { StandardTextFieldProps } from '@material-ui/core/TextField';

const PasswordInputField: React.FC<StandardTextFieldProps> = ({
  label,
  children,
  name,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleChange = useCallback(
    event => {
      setPassword(event.target.value);
    },
    [password],
  );

  const handleClickShowPassword = useCallback(() => {
    setShowPassword(prevState => !prevState);
  }, [showPassword]);

  return (
    <TextField
      id="outlined-adornment-password"
      variant="outlined"
      type={showPassword ? 'text' : 'password'}
      label={label}
      name={name}
      value={password}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LockIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={`Toggle ${label} visibility`}
              onClick={handleClickShowPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    >
      {children}
    </TextField>
  );
};

export default PasswordInputField;
