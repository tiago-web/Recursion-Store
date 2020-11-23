import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    product: {
      padding: theme.spacing(2, 0),
    },
    media: {
      height: '12rem',
      backgroundSize: 'contain',
    },
  }),
);
