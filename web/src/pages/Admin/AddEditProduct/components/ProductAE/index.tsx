import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useHistory, useParams, Link } from 'react-router-dom';
import { Grid, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MultiSelect from 'react-multi-select-component';
import { useRecoilState } from 'recoil';
import ItemDetail from '../ItemDetail';
import { productState, itemsState, TProduct, TItem } from '../../Atoms';
import { useStyles, SolidButton } from './styles';
import './selectStyles.css';

type TCategoryOptions = {
  label: string;
  value: string;
};

const categoryOptions = [
  { label: 'New Collection', value: 'New Collection' },
  { label: 'Clothing', value: 'Clothing' },
  { label: 'Shoes', value: 'Shoes' },
  { label: 'Accessories', value: 'Accessories' },
  { label: 'Women', value: 'Women' },
  { label: 'Men', value: 'Men' },
  { label: 'Kids', value: 'Kids' },
];

const productSchema = yup.object().shape({
  name: yup.string().min(4).required(),
  type: yup.string().min(3).required(),
  categories: yup.string().min(3).required(),
  price: yup.number().required(),
  Description: yup.string().min(6).required(),
});

enum productLabels {
  name = 'Name',
  type = 'Type',
  categories = 'Categories',
  price = 'Price',
  description = 'Description',
}

const ProductAE: React.FC = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  // const { productId }: { productId: string } = useParams();
  const isEditProductPage = pathname.toLowerCase().includes('edit');
  const titleInitials = isEditProductPage ? 'Edit' : 'Add';
  const [product, setProduct] = useRecoilState<TProduct>(productState);
  const [items, setItems] = useRecoilState<TItem[]>(itemsState);
  const [catSelected, setCatSelected] = useState<TCategoryOptions[]>([]);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(productSchema),
  });

  const handleChange = useCallback(e => {
    const { name, value } = e.target;
    setProduct(prevState => ({ ...prevState, [name]: value }));
  }, []);

  useEffect(() => {
    // This is just for testing purposes
    const categories = catSelected.map(category => category.label);
    setProduct(prevState => ({ ...prevState, categories }));
  }, [catSelected]);

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs>
        <h1 className={classes.title}>{titleInitials} Product</h1>
      </Grid>
      <Grid container direction="column" alignItems="center">
        {Object.keys(productLabels).map(name => {
          return name === 'categories' ? (
            <div>
              {/* <pre>{JSON.stringify(selected)}</pre> */}
              <MultiSelect
                className={classes.multiSelect}
                options={categoryOptions}
                value={catSelected}
                onChange={setCatSelected}
                labelledBy={productLabels[name as keyof typeof productLabels]}
              />
            </div>
          ) : (
            <Grid key={name} item>
              <TextField
                name={name}
                label={productLabels[name as keyof typeof productLabels]}
                variant="outlined"
                onChange={handleChange}
                autoComplete="name"
                value={product[name as keyof TProduct]}
                error={!!errors[name]}
                inputRef={register}
                autoFocus
                fullWidth
                className={classes.textField}
                multiline={name === 'description'}
              />
              {errors[name] && (
                <span className={classes.error}>{errors[name].message}</span>
              )}
            </Grid>
          );
        })}
        <Grid item className={classes.multiSelect}>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={6}>
              <h3 className={classes.purple}>Items</h3>
            </Grid>
            <Grid item xs={6}>
              <SolidButton>Add Item</SolidButton>
            </Grid>
          </Grid>
        </Grid>
        {items.map(item => (
          <Grid key={item.color} item>
            <ItemDetail item={item} />
          </Grid>
        ))}
        <Grid item className={classes.addBtn}>
          <SolidButton>Add Product</SolidButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductAE;
