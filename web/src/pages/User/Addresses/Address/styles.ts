import styled from 'styled-components';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export const CssTypography = styled(Typography)`
  font-size: 16px;
  color: #583874;

  display: flex;
  align-items: center;

  svg {
    margin-left: 4px;

    width: 20px;
    height: 20px;
  }
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
    },
    addressesGrid: {
      padding: theme.spacing(2, 2),

      color: '#583874',

      '& h6': {
        fontWeight: 600,
      },
    },
    red: {
      color: '#d3455b',
    },
  }),
);
