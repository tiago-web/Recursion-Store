import React from 'react';
import { Grid, CardMedia } from '@material-ui/core';
import { useStyles } from './styles';

const ProductPrevOrder: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.product}
    >
      <Grid item xs={12} sm={4}>
        <CardMedia
          className={classes.media}
          image="https://cdn.shopify.com/s/files/1/1417/0920/products/6242-nox-anabel-royal-blue_95046124-1406-4e44-a9a2-5fce4117b9cd.jpg?v=1571659552"
          title="Blue Dress V-Shape"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        &nbsp;
      </Grid>
    </Grid>
  );
};

export default ProductPrevOrder;
