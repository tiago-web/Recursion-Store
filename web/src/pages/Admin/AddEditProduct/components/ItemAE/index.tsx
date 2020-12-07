import React, { useEffect, useState, useRef, useCallback } from 'react';
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
}

const ItemAE: React.FC<ItemAEProps> = ({ item = null }) => {
  const classes = useStyles();
  const titleInitials = item ? 'Add' : 'Edit';
  const [globalItems, setGlobalItems] = useRecoilState<TItem[]>(itemsState);
  const [alertOpen, setAlertOpen] = useState(false);
  // const [color, setColor] = useState('');
  // const [imageColor, setImageColor] = useState('');
  const [size, setSize] = useState<TSize>({ sizeTag: '', quantity: 1 });
  const [localSizeTag, setLocalSizeTag] = useState<TSize[]>([] as TSize[]);
  const [errorSize, setErrorSize] = useState({
    sizeTag: '',
    quantity: '',
  });
  const [isSizeTagAdd, setIsSizeTagAdd] = useState('add');
  const [localItem, setLocalItem] = useState<TItem>(() => ({
    color: '',
    imageColor: '',
    productImages: [
      { image: null },
      { image: null },
      { image: null },
      { image: null },
    ] as TImg[],
    sizes: [] as TSize[],
  }));

  const handleImage = (file: string | null, imageNumber: number): void => {
    setLocalItem(prevState => {
      const updatedImages = prevState.productImages;

      updatedImages[imageNumber].image = file;

      return { ...prevState, productImages: updatedImages } as TItem;
    });
  };

  const handleItemChange = useCallback(({ target }) => {
    const { name, value } = target;
    setLocalItem(prevState => {
      return { ...prevState, [name as keyof TItem]: value };
    });
  }, []);

  const handleSizeChange = useCallback(({ target }) => {
    const { name } = target;
    let { value } = target;
    console.log(target);
    if (name === 'quantity' && typeof value === 'string')
      value = parseInt(value, 10);
    setSize(prevState => {
      return {
        ...prevState,
        [name as keyof TSize]: value,
      };
    });
  }, []);

  const handleAddUpdateBtnClick = ({ sizeTag, quantity }: TSize): void => {
    setErrorSize({ sizeTag: '', quantity: '' });
    if (sizeTag === '')
      setErrorSize(prevState => ({
        ...prevState,
        sizeTag: 'You must select a sizeTag',
      }));
    if (quantity < 1)
      setErrorSize(prevState => ({
        ...prevState,
        quantity: 'The quantity must be a number greater than 0',
      }));

    if (errorSize.sizeTag === '' && errorSize.quantity === '') {
      const newSize = { sizeTag, quantity } as TSize;
      if (isSizeTagAdd === 'add') {
        const sizeFound = localItem.sizes.find(sz => sz.sizeTag === sizeTag);
        console.log('Adding', sizeFound);
        if (sizeFound)
          setErrorSize(prevState => ({
            ...prevState,
            sizeTag: 'The size tag already exist for this item',
          }));
        else {
          console.log('Adding the Size');
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
    }
  };

  // const handleSizes() = useCallback(({ target })=>{

  // }, [])

  useEffect(() => {
    console.log(localItem);
  }, [localItem]);

  // useEffect(() => {
  //   console.log(size);
  // }, [size]);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item justify="center" alignItems="center" className={classes.item}>
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
              {isSizeTagAdd}
            </SolidButton>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.item}>
            <RedOutlinedButton>Cancel</RedOutlinedButton>
          </Grid>
        </Grid>
        <Grid item className={classes.item}>
          {localItem.sizes.map(sz => (
            <SizeTag
              key={sz.sizeTag}
              sizeTag={sz.sizeTag}
              quantity={sz.quantity}
            />
          ))}
          {/* <SizeTag quantity={12} sizeTag="S" />
          <SizeTag quantity={12} sizeTag="M" />
          <SizeTag quantity={12} sizeTag="XL" />
          <SizeTag quantity={12} sizeTag="XXL" /> */}
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={2} className={classes.item}>
            <RedOutlinedButton>Cancel</RedOutlinedButton>
          </Grid>
          <Grid item xs={12} sm={2} className={classes.item}>
            <SolidButton>Add Item</SolidButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ItemAE;
