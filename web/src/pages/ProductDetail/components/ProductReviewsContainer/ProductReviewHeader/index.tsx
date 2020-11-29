import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import { Link } from 'react-router-dom';
import Button from '../../../../../components/Button';
import ProductReviewBody from '../ProductReviewBody';

import { Container } from './styles';

interface ProductReviewHeaderProps {
  productId: string;
}

const ProductReviewHeader: React.FC<ProductReviewHeaderProps> = ({
  productId,
}) => {
  const [openReviews, setOpenReviews] = React.useState(false);

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleViewAllReviews = (): void => {
    setOpenReviews(true);
  };

  const handleClose = (): void => {
    setOpenReviews(false);
  };

  return (
    <Container>
      <h1>Reviews</h1>
      <Button onClick={handleViewAllReviews}>READ ALL REVIEWS</Button>
      <Link to={`/product/review/${productId}`}>WRITE A REVIEW</Link>

      <Dialog
        fullScreen
        open={openReviews}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className="appBar">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h3" className="title">
              Reviews
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ProductReviewBody productId={productId} title="" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </Container>
  );
};

export default ProductReviewHeader;
