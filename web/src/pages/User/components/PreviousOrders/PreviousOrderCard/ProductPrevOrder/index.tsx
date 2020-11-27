import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, CardMedia } from '@material-ui/core';
import { useStyles, PurpleSolidButton, PurpleOutlineButton } from './styles';
import formatToDollars from '../../../../../../utils/formatToDollars';
import formatSizeTagToName from '../../../../../../utils/formatSizeTagToName';
import formatQuantityToItemsNumber from '../../../../../../utils/formatQuantityToItemsNumber';

export type TProduct = {
  _id: string;
  productId: TProductDetail;
  productPrice: number;
  items: TItem[];
};

type TProductDetail = {
  _id: string;
  name: string;
  items: [
    {
      productImages: [
        {
          image: string;
          imageUrl: string;
        },
      ];
    },
  ];
};

type TItem = {
  _id: string;
  color: string;
  sizeTag: string;
  quantity: number;
};

type ProductPrevOrderProps = {
  product: TProduct;
  item: TItem;
};

const ProductPrevOrder: React.FC<ProductPrevOrderProps> = ({
  product,
  item,
}) => {
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
            image={product.productId.items[0].productImages[0].imageUrl}
            title={product.productId.name}
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
            {product.productId.name}
          </Grid>
          <Grid className={classes.descriptionLine} xs={12}>
            {formatSizeTagToName(item.sizeTag)}
          </Grid>
          <Grid className={classes.descriptionLine} xs={12}>
            {item.color}
          </Grid>
          <Grid className={classes.descriptionLine} xs={12}>
            {formatQuantityToItemsNumber(item.quantity)}
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
            {formatToDollars(product.productPrice)}
          </Grid>

          <Grid className={classes.titleLine} xs={12}>
            <Link to={`/product-detail/${product.productId._id}`}>
              <PurpleSolidButton>Buy it Again</PurpleSolidButton>
            </Link>
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
