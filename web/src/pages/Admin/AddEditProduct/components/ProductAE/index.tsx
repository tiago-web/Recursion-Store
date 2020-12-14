import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation, useHistory, Link } from 'react-router-dom';
import {
  Grid,
  TextField,
  Modal,
  Backdrop,
  Fade,
  CircularProgress,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MultiSelect from 'react-multi-select-component';
import { useRecoilState } from 'recoil';
import ItemDetail from '../ItemDetail';
import ItemAE from '../ItemAE';
import { itemsState, TProduct, TItem, TImg } from '../../Atoms';
import { useStyles, SolidButton, RedOutlinedButton } from './styles';
import './selectStyles.css';
import api from '../../../../../services/api';
import getItemsActions from '../../../../../utils/getItemsActions';
import fetchImageUrlAsBlob from '../../../../../utils/fetchImageUrlAsBlob';

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
  const [loading, setLoading] = useState(false);
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
  const [serverItems, setServerItems] = useState<TItem[]>([]);

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
          setServerItems(prod.items);
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
  //   console.log('serverItems', serverItems);
  // }, [serverItems]);

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

  const endOfRequest = (
    createdProductId: string | undefined = undefined,
  ): void => {
    setLoading(false);
    if (!createdProductId)
      setTimeout(() => {
        history.push(`/product-detail/${productId}`);
      }, 300);

    if (createdProductId)
      setTimeout(() => {
        history.push(`/product-detail/${createdProductId}`);
      }, 300);
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
          // console.log(
          //   'Updating',
          //   productToUpdateOrAdd,
          //   globalItems,
          //   serverItems,
          // );
          let isUpdatingErrors = false;
          setLoading(true);
          api
            .put(`/Products/${productId}`, productToUpdateOrAdd)
            .then(response => {
              const itemsActions = getItemsActions(serverItems, globalItems);

              // console.log('itemsActions', itemsActions);

              itemsActions.map(async (itemAction, idx) => {
                const itemToUpdateOrAdd = globalItems.find(
                  itm => itm.color === itemAction.color,
                );

                const itemFormData = new FormData();

                if (itemToUpdateOrAdd) {
                  itemFormData.append('color', itemToUpdateOrAdd.color);
                  itemFormData.append(
                    'imageColor',
                    itemToUpdateOrAdd.imageColor,
                  );
                  itemFormData.append(
                    'sizes',
                    JSON.stringify(itemToUpdateOrAdd.sizes),
                  );
                }

                switch (itemAction.action) {
                  case 'update': {
                    if (itemToUpdateOrAdd) {
                      itemFormData.append('oldColor', itemToUpdateOrAdd.color);
                      for (
                        let j = 0;
                        j < itemToUpdateOrAdd.productImages.length;
                        j++
                      ) {
                        const image =
                          itemToUpdateOrAdd.productImages[j].image ??
                          itemToUpdateOrAdd.productImages[j].image;

                        if (
                          typeof image === 'string' &&
                          image.includes('http://localhost:3333/files/')
                        ) {
                          // eslint-disable-next-line no-await-in-loop
                          const dataFile = await fetchImageUrlAsBlob(image);
                          itemFormData.append(
                            'productImages',
                            dataFile,
                            'image.jpg',
                          );
                          // console.log('File', dataFile);
                        }

                        if (typeof image === 'object' && image) {
                          itemFormData.append('productImages', image as File);
                          // console.log('image', image);
                        }
                      }

                      // console.log('requesting update');
                      const res = await api.put(
                        `/Products/Items/${productId}`,
                        itemFormData,
                      );
                      // console.log('receiving update', res);

                      api
                        .put(`/Products/Items/${productId}`, itemFormData)
                        .then(res => {
                          // console.log(
                          //   `color ${itemToUpdateOrAdd.color} was updated`,
                          // );
                          if (idx === itemsActions.length - 1) endOfRequest();
                        })
                        .catch(() => {
                          if (idx === itemsActions.length - 1) endOfRequest();
                          isUpdatingErrors = true;
                          setErrorProduct(prevState => {
                            const updatedItemsError = `${prevState.items}<p>color ${itemToUpdateOrAdd.color} was NOT updated</p>`;
                            // console.log(updatedItemsError);
                            return { ...prevState, items: updatedItemsError };
                          });
                        });
                    }
                    break;
                  }

                  case 'delete': {
                    const colorToDelete = {
                      color: itemAction.color,
                    };

                    api
                      .delete(`/Products/Items/${productId}`, {
                        data: colorToDelete,
                      })
                      .then(res => {
                        if (idx === itemsActions.length - 1) endOfRequest();
                        // console.log(
                        //   `color ${itemAction.color} was deleted successfully`,
                        // );
                      })
                      .catch(() => {
                        if (idx === itemsActions.length - 1) endOfRequest();
                        isUpdatingErrors = true;
                        setErrorProduct(prevState => {
                          const deletedItemsError = `${prevState.items}<p>color ${itemAction.color} was NOT deleted</p>`;
                          // console.log(deletedItemsError);
                          return { ...prevState, items: deletedItemsError };
                        });
                      });
                    break;
                  }

                  case 'add': {
                    if (itemToUpdateOrAdd) {
                      for (
                        let j = 0;
                        j < itemToUpdateOrAdd.productImages.length;
                        j++
                      ) {
                        const image =
                          itemToUpdateOrAdd.productImages[j].image ??
                          itemToUpdateOrAdd.productImages[j].image;

                        if (
                          typeof image === 'string' &&
                          image.includes('http://localhost:3333/files/')
                        ) {
                          // eslint-disable-next-line no-await-in-loop
                          const dataFile = await fetchImageUrlAsBlob(image);
                          itemFormData.append(
                            'productImages',
                            dataFile,
                            'image.jpg',
                          );
                          // console.log('File', dataFile);
                        }

                        if (typeof image === 'object') {
                          itemFormData.append('productImages', image as File);
                          // console.log('image', image);
                        }
                      }

                      api
                        .post(`/Products/Items/${productId}`, itemFormData)
                        .then(res => {
                          if (idx === itemsActions.length - 1) endOfRequest();
                          // console.log(
                          //   `color ${itemToUpdateOrAdd.color} was added`,
                          // );
                        })
                        .catch(() => {
                          if (idx === itemsActions.length - 1) endOfRequest();
                          isUpdatingErrors = true;
                          setErrorProduct(prevState => {
                            const updatedItemsError = `${prevState.items}<p>color ${itemToUpdateOrAdd.color} was NOT added</p>`;
                            // console.log(updatedItemsError);
                            return { ...prevState, items: updatedItemsError };
                          });
                        });
                    }

                    break;
                  }

                  default:
                    break;
                }
              });
            })
            .catch(() => {
              endOfRequest();
              isUpdatingErrors = true;
              setErrorProduct(prevState => ({
                ...prevState,
                product: `Error: The product ${productToUpdateOrAdd.name} was NOT added`,
              }));
            });
        } else {
          // console.log('Adding', productToUpdateOrAdd);
          let createdProductId = '';
          let isAddingErrors = false;
          setLoading(true);
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
                  // eslint-disable-next-line no-loop-func
                  .then(() => {
                    if (globalItems.length - 1 === i)
                      endOfRequest(createdProductId);
                    // console.log(`color ${globalItems[i].color} was inserted`);
                  })
                  // eslint-disable-next-line no-loop-func
                  .catch(() => {
                    if (globalItems.length - 1 === i)
                      endOfRequest(createdProductId);
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
    [globalItems, product, serverItems],
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
      <Modal className={classes.modal} open={loading} closeAfterTransition>
        <Fade in={loading}>
          <div className={classes.paper}>
            <CircularProgress size={100} />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ProductAE;
