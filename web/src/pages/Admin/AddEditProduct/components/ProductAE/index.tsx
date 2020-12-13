import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation, useHistory, Link } from 'react-router-dom';
import { Grid, TextField, Modal, Backdrop, Fade } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MultiSelect from 'react-multi-select-component';
import { useRecoilState } from 'recoil';
import ItemDetail from '../ItemDetail';
import ItemAE from '../ItemAE';
import { productState, itemsState, TProduct, TItem, TImg } from '../../Atoms';
import { useStyles, SolidButton, RedOutlinedButton } from './styles';
import './selectStyles.css';
import api from '../../../../../services/api';

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
  name: yup.string().min(4).required('You must provide a product name.'),
  type: yup.string().min(3).required('You must provide a type of product.'),
  price: yup.number().required('You must provide a product price.'),
  description: yup
    .string()
    .min(6)
    .required('You must provide a produdct description'),
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
  const history = useHistory();
  const { pathname } = useLocation();
  const { productId }: { productId: string } = useParams();
  const isEditProductPage = pathname.toLowerCase().includes('edit');
  const titleInitials = isEditProductPage ? 'Edit' : 'Add';
  // const [product, setProduct] = useRecoilState<TProduct>(productState);
  const [product, setProduct] = useState<TProduct>({} as TProduct);
  const [globalItems, setGlobalItems] = useRecoilState<TItem[]>(itemsState);
  const [catSelected, setCatSelected] = useState<TCategoryOptions[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<TItem>({} as TItem);
  const [errorProduct, setErrorProduct] = useState({
    categories: '',
    items: '',
    product: '',
  });

  const handleModalOpen = (item: TItem | undefined): void => {
    item ? setModalItem(item as TItem) : setModalItem({} as TItem);
    setModalOpen(true);
  };

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(productSchema),
  });

  const handleChange = useCallback(e => {
    const { name, value } = e.target;
    setProduct(prevState => ({ ...prevState, [name]: value }));
  }, []);

  useEffect(() => {
    if (isEditProductPage) {
      api.get(`/Products/${productId}`).then(response => {
        // console.log(response.data);
        const {
          name,
          type,
          categories,
          price,
          description,
          discountPercentage,
        }: TProduct = response.data;

        const reqProduct = {
          name,
          type,
          categories,
          price,
          description,
          discountPercentage,
        };
        setProduct(reqProduct);

        const categoriesSelected = categories.map(cat => ({
          label: cat,
          value: cat,
        }));
        setCatSelected(categoriesSelected);

        const prod: TProduct = response.data;

        if (prod.items) {
          const updatedItems: TItem[] = prod.items.map(item => {
            const imageArraySize: number = item.productImages.length;

            const updatedProductImages: TImg[] = item.productImages.map(
              img => ({
                image: img.imageUrl,
              }),
            );

            for (let i = imageArraySize; i < 4; i++)
              updatedProductImages[i] = { image: null } as TImg;

            return { ...item, productImages: updatedProductImages };
          });
          setGlobalItems(updatedItems);
        }
      });
    }
  }, []);

  useEffect(() => {
    const categoriesSelected = catSelected.map(category => category.label);
    setProduct(prevState => ({ ...prevState, categories: categoriesSelected }));
  }, [catSelected]);

  // useEffect(() => {
  //   console.log(product);
  // }, [product]);

  // useEffect(() => {
  //   console.log(globalItems);
  // }, [globalItems]);

  const clearErrorProduct = (): void => {
    setErrorProduct({
      categories: '',
      items: '',
      product: '',
    });
  };

  const onSubmit = useCallback(
    ({
      name,
      type,
      price,
      description,
    }: Omit<TProduct, 'categories' | 'discountPercentage' | 'items'>): void => {
      clearErrorProduct();
      let anyError = false;

      if (globalItems.length === 0) {
        anyError = true;
        setErrorProduct(prevState => ({
          ...prevState,
          items: 'You must add at least one item',
        }));
      }

      if (product.categories && product.categories.length === 0) {
        anyError = true;
        setErrorProduct(prevState => ({
          ...prevState,
          categories: 'You must add at least one category',
        }));
      }

      setTimeout(() => {
        clearErrorProduct();
      }, 2500);

      if (!anyError) {
        const productToUpdateOrAdd = {
          name,
          type,
          categories: product.categories,
          price,
          description,
        };

        if (isEditProductPage) {
          console.log('Updating', productToUpdateOrAdd, globalItems);
        } else {
          console.log('Adding', productToUpdateOrAdd);
          let createdProductId = '';
          let isAddingErrors = false;
          api
            .post('/Products', productToUpdateOrAdd)
            .then(response => {
              createdProductId = response.data._id;
              for (let i = 0; i < globalItems.length; i++) {
                const itemFormData = new FormData();
                itemFormData.append('color', globalItems[i].color);
                itemFormData.append('imageColor', globalItems[i].imageColor);
                itemFormData.append(
                  'sizes',
                  JSON.stringify(globalItems[i].sizes),
                );

                for (let j = 0; j < globalItems[i].productImages.length; j++) {
                  const image =
                    globalItems[i].productImages[j].image ??
                    globalItems[i].productImages[j].image;
                  if (image) itemFormData.append('productImages', image);
                }

                api
                  .post(`/Products/Items/${createdProductId}`, itemFormData)
                  .then(res => {
                    console.log(`color ${globalItems[i].color} was inserted`);
                  })
                  // eslint-disable-next-line no-loop-func
                  .catch(() => {
                    isAddingErrors = true;
                    setErrorProduct(prevState => {
                      const updatedItemsError = `${prevState.items}<p>color ${globalItems[i].color} was NOT inserted</p>`;
                      return { ...prevState, items: updatedItemsError };
                    });
                  });
              }
            })
            .catch(() => {
              isAddingErrors = true;
              setErrorProduct(prevState => ({
                ...prevState,
                product: `Error: The product ${productToUpdateOrAdd.name} was NOT added`,
              }));
            });
          if (!isAddingErrors && createdProductId !== '')
            history.push(`/Admin/EditProduct/${createdProductId}`);
        }
      }
    },
    [globalItems, product],
  );

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs>
            <h1 className={classes.title}>{titleInitials} Product</h1>
          </Grid>
          <Grid container direction="column" alignItems="center">
            {Object.keys(productLabels).map(name => {
              return name === 'categories' ? (
                <div>
                  <MultiSelect
                    className={classes.multiSelect}
                    options={categoryOptions}
                    value={catSelected}
                    onChange={setCatSelected}
                    labelledBy={
                      productLabels[name as keyof typeof productLabels]
                    }
                  />
                  {errorProduct.categories && (
                    <p className={classes.error}>{errorProduct.categories}</p>
                  )}
                </div>
              ) : (
                <Grid key={name} item className={classes.gridCenter}>
                  <TextField
                    name={name}
                    label={productLabels[name as keyof typeof productLabels]}
                    variant="outlined"
                    onChange={handleChange}
                    autoComplete={name}
                    value={product[name as keyof typeof product]}
                    error={!!errors[name]}
                    inputRef={register}
                    className={classes.textField}
                    multiline={name === 'description'}
                  />
                  {errors[name] && (
                    <p className={classes.error}>{errors[name].message}</p>
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
                  <SolidButton onClick={() => handleModalOpen(undefined)}>
                    Add Item
                  </SolidButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {errorProduct.items && (
                <p className={classes.error}>{errorProduct.items}</p>
              )}
            </Grid>
            {globalItems.map((item, idx) => (
              <Grid key={item.color + String(idx)} item>
                <ItemDetail item={item} handleModalOpen={handleModalOpen} />
              </Grid>
            ))}
            <Grid item className={classes.addBtn}>
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  {errorProduct.product && (
                    <p className={classes.error}>{errorProduct.product}</p>
                  )}
                </Grid>
                <Grid item xs={6} className={classes.item}>
                  <Link to="/products">
                    <RedOutlinedButton>Cancel</RedOutlinedButton>
                  </Link>
                </Grid>
                <Grid item xs={6} className={classes.item}>
                  <SolidButton type="submit">
                    {isEditProductPage ? 'Update' : 'Add'}
                  </SolidButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Modal
        className={classes.modal}
        open={modalOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <div className={classes.paper}>
            <ItemAE item={modalItem} setModalOpen={setModalOpen} />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ProductAE;
