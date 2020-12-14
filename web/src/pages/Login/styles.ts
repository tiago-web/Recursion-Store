import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const mainColor = '#341C49';
const focusColor = '#583874';

export const CreateNewAccountText = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: focusColor,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: mainColor,
    },
    '&$checked': {
      color: `${mainColor}`,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: mainColor,
      },
      '&:hover fieldset': {
        borderColor: mainColor,
      },
      '&.Mui-focused fieldset': {
        borderColor: focusColor,
      },
    },
  },
})(TextField);

export const useStyles = makeStyles(theme => {
  return {
    title: {
      color: `${mainColor}`,
    },
    paper: {
      margin: theme.spacing(4, 0),
      display: 'flex',
      color: `${focusColor}`,
      flexDirection: 'column',
      alignItems: 'center',
      border: `1px solid ${mainColor}`,
      borderRadius: '2rem',
      padding: '1.5rem 2.5rem',
    },
    avatar: {
      margin: theme.spacing(3),
      backgroundColor: mainColor,
      fontSize: 50,
    },
    form: {
      marginTop: theme.spacing(4),
      width: '100%',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: mainColor,
      color: 'white',
      padding: '50 50',
      '&:hover': {
        backgroundColor: `${focusColor}`,
      },
    },
    link: {
      color: '#e06b50',
      textDecoration: 'none !important',
    },
    checkBox: {
      color: `${mainColor} !important`,
    },
    error: {
      color: 'red',
    },
  };
});
