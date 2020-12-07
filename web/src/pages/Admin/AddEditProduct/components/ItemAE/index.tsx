import React, { useEffect, useState } from 'react';
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
import { TItem, TImg, TSizes, itemsState } from '../../Atoms';
import ImagePicker from '../ImagePicker';
import SizeTag from '../SizeTag';
import { useStyles, SolidButton, RedOutlinedButton } from './styles';

interface ItemAEProps {
  item?: TItem;
}

const ItemAE: React.FC<ItemAEProps> = ({ item = null }) => {
  const classes = useStyles();
  const titleInitials = item ? 'Add' : 'Edit';
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [color, setColor] = React.useState('');
  const [imageColor, setImageColor] = React.useState('');
  const [globalItems, setGlobalItems] = useRecoilState<TItem[]>(itemsState);

  const [localItem, setLocalItem] = useState<TItem>(() => ({
    color: '',
    imageColor: '',
    productImages: [
      { image: null },
      { image: null },
      { image: null },
      { image: null },
    ] as TImg[],
    sizes: [] as TSizes[],
  }));

  const handleImage = (file: string | null, imageNumber: number): void => {
    setLocalItem(prevState => {
      const updatedImages = prevState.productImages;

      updatedImages[imageNumber].image = file;

      return { ...prevState, productImages: updatedImages } as TItem;
    });
  };

  useEffect(() => {
    console.log(globalItems);
  }, [globalItems]);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item justify="center" alignItems="center">
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
            <Grid key={key} item>
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
        <Grid item>
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
        <Grid>
          <TextField
            value={color}
            onChange={e => setColor(e.target.value)}
            name="colorName"
            label="Color Name"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            name="imageColor"
            value={imageColor}
            onChange={e => setImageColor(e.target.value)}
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
                // value={age}
                // onChange={handleChange}
                label="Size Tag"
              >
                <MenuItem value="XS">XS</MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="M">L</MenuItem>
                <MenuItem value="M">XL</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.item}>
            <TextField
              name="quantity"
              label="Quantity"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.item}>
            <SolidButton>Add Size</SolidButton>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.item}>
            <RedOutlinedButton>Cancel</RedOutlinedButton>
          </Grid>
        </Grid>
        <Grid item>
          <SizeTag quantity={12} sizeTag="XS" />
          <SizeTag quantity={12} sizeTag="S" />
          <SizeTag quantity={12} sizeTag="M" />
          <SizeTag quantity={12} sizeTag="XL" />
          <SizeTag quantity={12} sizeTag="XXL" />
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={4}>
            <RedOutlinedButton>Cancel</RedOutlinedButton>
          </Grid>
          <Grid item xs={4}>
            <SolidButton>Add Item</SolidButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ItemAE;
