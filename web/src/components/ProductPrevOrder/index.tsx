import React from 'react';
import { Grid, CardMedia } from '@material-ui/core';
import { useStyles, PurpleSolidButton, PurpleOutlineButton } from './styles';

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
      <Grid item container xs={12} sm={6}>
        <Grid item xs={6}>
          <CardMedia
            className={classes.media}
            image="https://cdn.shopify.com/s/files/1/1417/0920/products/6242-nox-anabel-royal-blue_95046124-1406-4e44-a9a2-5fce4117b9cd.jpg?v=1571659552"
            title="Blue Dress V-Shape"
          />
        </Grid>
        <Grid
          item
          xs={6}
          direction="column"
          justify="space-between"
          alignItems="stretch"
          className={classes.detail}
        >
          <Grid className={classes.titleLine} xs={12}>
            Dress V-Shape
          </Grid>
          <Grid className={classes.descriptionLine} xs={12}>
            Medium
          </Grid>
          <Grid className={classes.descriptionLine} xs={12}>
            Green
          </Grid>
          <Grid className={classes.descriptionLine} xs={12}>
            2 items
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} sm={6}>
        <Grid
          item
          xs={12}
          direction="column"
          justify="space-between"
          alignItems="stretch"
          className={classes.buttonsSection}
        >
          <Grid className={classes.titleLine} xs={12}>
            CA$99.99
          </Grid>

          <Grid className={classes.titleLine} xs={12}>
            <PurpleSolidButton>Buy it Again</PurpleSolidButton>
          </Grid>

          <Grid className={classes.titleLine} xs={12}>
            <PurpleOutlineButton>Write a product review</PurpleOutlineButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductPrevOrder;
