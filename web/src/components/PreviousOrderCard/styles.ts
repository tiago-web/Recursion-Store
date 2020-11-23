import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: '3rem',
    },
    orderHeader: {
      padding: theme.spacing(0),
      textAlign: 'center',
      backgroundColor: '#DFE5EC',
      border: '3px solid #9EADBA',
      borderRadius: '0',
      boxShadow: 'none',
    },
    item: {
      textAlign: 'left',
      padding: theme.spacing(1, 0),
      color: 'var(--title-color)',
      fontSize: '0.8rem',
    },
    orderDetails: {
      backgroundColor: '#F7F9FA',
      border: '3px solid #EAEAEA',
      borderTop: '0',
      borderRadius: '0',
    },
  }),
);

export const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'var(--title-color)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
  arrow: {
    color: '#f5f5f9',
  },
}))(Tooltip);
