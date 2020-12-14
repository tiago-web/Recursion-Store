import React, { useEffect, useState, useCallback } from 'react';
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Collapse,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useRecoilState } from 'recoil';
import { TItem, TImg, TSize, itemsState } from '../../Atoms';
import ImagePicker from '../ImagePicker';
import SizeTag from '../SizeTag';
import { useStyles, SolidButton, RedOutlinedButton } from './styles';

interface ItemAEProps {
  item?: TItem;
  setModalOpen(status: boolean): void;
}

const ItemAE: React.FC<ItemAEProps> = ({ item, setModalOpen }) => {
  const classes = useStyles();
  const isEditItem = !!(item && item.color);
  const titleInitials = isEditItem ? 'Edit' : 'Add';
  const [globalItems, setGlobalItems] = useRecoilState<TItem[]>(itemsState);
  const [alertOpen, setAlertOpen] = useState(false);
  const [size, setSize] = useState<TSize>({ sizeTag: '', quantity: 1 });
  const [errorSize, setErrorSize] = useState({
    sizeTag: '',
    quantity: '',
  });
  const [errorItem, setErrorItem] = useState({
    color: '',
    imageColor: '',
    productImages: '',
    sizes: '',
  });
  const [sizeTagBtnAction, setSizeTagBtnAction] = useState('add');
  const [clearBtnText, setClearBtnText] = useState('clear');
  const [localItem, setLocalItem] = useState<TItem>(() => {
    return item && item.color
      ? item
      : {
          color: '',
          imageColor: '',
          productImages: [
            { image: null },
            { image: null },
            { image: null },
            { image: null },
          ] as TImg[],
          sizes: [] as TSize[],
        };
  });

  const handleImage = useCallback(
    (file: File | string | null, imageNumber: number): void => {
      setLocalItem(prevState => {
        const updatedImages = prevState.productImages.map((img, idx) => {
          if (idx === imageNumber) return { image: file };
          return img;
        });

        return { ...prevState, productImages: updatedImages };
      });
    },
    [localItem],
  );

  const handleItemChange = useCallback(({ target }) => {
    const { name, value } = target;
    setLocalItem(prevState => {
      return { ...prevState, [name as keyof TItem]: value };
    });
  }, []);

  const handleSizeChange = useCallback(({ target }) => {
    const { name } = target;
    let { value } = target;
    if (name === 'quantity' && typeof value === 'string')
      value = parseInt(value, 10);
    setSize(prevState => {
      return {
        ...prevState,
        [name as keyof TSize]: value,
      };
    });
  }, []);

  const handleSizeSelected = (sizeToUpdate: TSize): void => {
    setSize(sizeToUpdate);
    setSizeTagBtnAction('update');
    setClearBtnText('cancel');
  };

  const handleSizeDelete = (sizeTag: string): void => {
    const sizes = localItem.sizes.filter(sz => sz.sizeTag !== sizeTag);
    setLocalItem(prevState => ({ ...prevState, sizes }));
  };

  const handleClearCancelBtn = (): void => {
    setSize({ sizeTag: '', quantity: 1 });
    setSizeTagBtnAction('add');
    setClearBtnText('clear');
  };

  const handleAddUpdateBtnClick = ({ sizeTag, quantity }: TSize): void => {
    setErrorSize({ sizeTag: '', quantity: '' });
    let anyError = false;
    if (sizeTag === '') {
      anyError = true;
      setErrorSize(prevState => ({
        ...prevState,
        sizeTag: 'You must select a sizeTag',
      }));
    }
    if (quantity < 1) {
      anyError = true;
      setErrorSize(prevState => ({
        ...prevState,
        quantity: 'The quantity must be a number greater than 0',
      }));
    }
    if (!anyError) {
      if (sizeTagBtnAction === 'add') {
        const newSize = { sizeTag, quantity } as TSize;
        const sizeFound = localItem.sizes.find(sz => sz.sizeTag === sizeTag);
        if (sizeFound)
          setErrorSize(prevState => ({
            ...prevState,
            sizeTag: 'The size tag already exist for this item',
          }));
        else {
          setSize({ sizeTag: '', quantity: 1 });
          setLocalItem(prevState => {
            const sizes =
              prevState.sizes.length === 0
                ? [newSize]
                : [...prevState.sizes, newSize];
            return {
              ...prevState,
              sizes,
            };
          });
        }
      }
      if (sizeTagBtnAction === 'update') {
        const sizes = localItem.sizes.map(sz => {
          if (sz.sizeTag === sizeTag) return { ...sz, quantity };
          return sz;
        });
        setLocalItem(prevState => ({ ...prevState, sizes }));
        handleClearCancelBtn();
      }
    }
  };

  const clearErrorItem = (): void => {
    setErrorItem({
      color: '',
      imageColor: '',
      productImages: '',
      sizes: '',
    });
  };

  const handleSubmit = useCallback((): void => {
    clearErrorItem();
    let anyError = false;
    const imagesItems = localItem.productImages.filter(img => {
      if (img.image !== null) return img;
    });

    // console.log('onsubmit', imagesItems);

    for (let i = imagesItems.length; i < 4; i++)
      imagesItems[i] = { image: null } as TImg;

    if (localItem.color === '') {
      anyError = true;
      setErrorItem(prevState => ({
        ...prevState,
        color: 'You must enter a color',
      }));
    }

    if (localItem.imageColor === '') {
      anyError = true;
      setErrorItem(prevState => ({
        ...prevState,
        imageColor: 'You must enter a hex color',
      }));
    }

    if (imagesItems.length === 0) {
      anyError = true;
      setErrorItem(prevState => ({
        ...prevState,
        productImages: 'You must have at least one image',
      }));
    }

    if (localItem.sizes.length === 0) {
      anyError = true;
      setErrorItem(prevState => ({
        ...prevState,
        sizes: 'You must have at least one size',
      }));
    }

    const colorFound = isEditItem
      ? globalItems.find(
          glbItem =>
            item &&
            item.color !== localItem.color &&
            glbItem.color === localItem.color,
        )
      : globalItems.find(glbItem => glbItem.color === localItem.color);

    if (colorFound) {
      anyError = true;
      setErrorItem(prevState => ({
        ...prevState,
        color: 'The color already exist',
      }));
    }

    setTimeout(() => {
      clearErrorItem();
    }, 2500);

    if (!anyError) {
      // If no errors, then add  to the global items
      const itemToUpdateOrAdd = {
        ...localItem,
        productImages: imagesItems,
      };
      if (isEditItem) {
        const updatedItems = globalItems.map(gblItem =>
          item && gblItem.color === item.color ? itemToUpdateOrAdd : gblItem,
        );
        setGlobalItems(updatedItems);
      } else {
        setGlobalItems(prevState => [...prevState, itemToUpdateOrAdd]);
      }
      setModalOpen(false);
    }
  }, [localItem]);

  // useEffect(() => {
  //   console.log(globalItems);
  // }, [globalItems]);

  // useEffect(() => {
  //   console.log(errorSize);
  // }, [errorSize]);

  // useEffect(() => {
  //   console.log(localItem);
  // }, [localItem]);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item className={classes.item}>
        <h1>{titleInitials} Item</h1>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {Object.keys(localItem.productImages).map((_, index) => {
          const key = index + 1;
          return (
            <Grid key={key} item className={classes.item}>
              <ImagePicker
                item={localItem}
                imageNumber={index}
                handleImage={handleImage}
                setAlertOpen={setAlertOpen}
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} className={classes.item}>
          {errorItem.productImages !== '' && (
            <p className={classes.error}>{errorItem.productImages}</p>
          )}
          <Collapse in={alertOpen}>
            <Alert
              variant="outlined"
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlertOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <AlertTitle>
                <strong>Error</strong>
              </AlertTitle>
              Wrong file type selected!, Please chose images with{' '}
              <strong>jpeg</strong> format.
            </Alert>
          </Collapse>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <TextField
            name="color"
            value={localItem.color}
            onChange={handleItemChange}
            label="Color Name"
            variant="outlined"
            fullWidth
          />
          {errorItem.color !== '' && (
            <p className={classes.error}>{errorItem.color}</p>
          )}
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <TextField
            name="imageColor"
            value={localItem.imageColor}
            onChange={handleItemChange}
            label="Hex Color (#761253)"
            variant="outlined"
            fullWidth
          />
          {errorItem.imageColor !== '' && (
            <p className={classes.error}>{errorItem.imageColor}</p>
          )}
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={3} className={classes.item}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              fullWidth
            >
              <InputLabel>Size Tag</InputLabel>
              <Select
                disabled={sizeTagBtnAction === 'update'}
                name="sizeTag"
                value={size.sizeTag}
                onChange={handleSizeChange}
                label="Size Tag"
              >
                <MenuItem value="XS">XS</MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
                <MenuItem value="XXL">XXL</MenuItem>
              </Select>
            </FormControl>
            {errorSize.sizeTag !== '' && (
              <p className={classes.error}>{errorSize.sizeTag}</p>
            )}
          </Grid>
          <Grid item xs={12} sm={3} className={classes.item}>
            <TextField
              name="quantity"
              value={size.quantity}
              type="number"
              onChange={handleSizeChange}
              label="Quantity"
              variant="outlined"
              fullWidth
              inputProps={{ style: { textAlign: 'center' } }}
            />
            {errorSize.quantity !== '' && (
              <p className={classes.error}>{errorSize.quantity}</p>
            )}
          </Grid>
          <Grid item xs={12} sm={3} className={classes.item}>
            <SolidButton onClick={() => handleAddUpdateBtnClick(size)}>
              {sizeTagBtnAction}
            </SolidButton>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.item}>
            <RedOutlinedButton onClick={handleClearCancelBtn}>
              {clearBtnText}
            </RedOutlinedButton>
          </Grid>
        </Grid>
        <Grid item className={classes.item}>
          {localItem.sizes.map(sz => (
            <SizeTag
              key={sz.sizeTag}
              sizeTag={sz.sizeTag}
              quantity={sz.quantity}
              handleSizeSelected={handleSizeSelected}
              handleSizeDelete={handleSizeDelete}
            />
          ))}
          {errorItem.sizes !== '' && (
            <p className={classes.error}>{errorItem.sizes}</p>
          )}
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={2} className={classes.item}>
            <RedOutlinedButton onClick={() => setModalOpen(false)}>
              Cancel
            </RedOutlinedButton>
          </Grid>
          <Grid item xs={12} sm={2} className={classes.item}>
            <SolidButton onClick={handleSubmit}>
              {item && item.color ? 'update' : 'add'}
            </SolidButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ItemAE;
