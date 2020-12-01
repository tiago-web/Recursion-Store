import React, {
  FormEvent,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import Button from '../../components/Button';

import api from '../../services/api';

import { Container, Form } from './styles';
import { ProductImage } from '../Products/components/ProductList/ProductCard/styles';

interface RouteParams {
  productId: string;
}

export interface ProductImage {
  imageUrl: string;
}

export interface Item {
  color: string;
  productImages: ProductImage[];
}

export interface Product {
  _id: string;
  name: string;
  items: Item[];
}

export interface ReviewFormData {
  title: string;
  body: string;
}

const ProductReview: React.FC = () => {
  const { productId } = useParams<RouteParams>(); // THE PRODUCT ID IS ON THIS VARIABLE
  const history = useHistory();

  const [product, setProduct] = useState<Product>();
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`products/${productId}`);

      setProduct(response.data);

      if (product) setImage(product.items[0].productImages[0].imageUrl);
    }

    loadProduct();
  }, [productId, image, product]);

  function Alert(props: AlertProps): ReactElement {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    setOpenSuccess(false);
    setOpenError(false);
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!title && !body) {
      setTitleError(true);
      setBodyError(true);
      setOpenError(true);
      return;
    }
    if (!title) {
      setTitleError(true);
      setBodyError(false);
      setOpenError(true);
      return;
    }
    if (!body) {
      setTitleError(false);
      setBodyError(true);
      setOpenError(true);
      return;
    }

    setTitleError(false);
    setBodyError(false);

    setOpenSuccess(true);

    const data = {
      productId,
      title,
      body,
    };

    console.log(data);

    // await api.post('reviews', data);

    // history.push(`/product-detail/${productId}`);
  }

  const handleGoBack = useCallback(() => {
    history.push('/products');
  }, [history]);

  return (
    <>
      <Container>
        {product ? (
          <>
            <h1>
              Write a review for <span>{product?.name}</span>
            </h1>
            <div className="form">
              <img src={image} alt="Dress" />
              <Form onSubmit={handleSubmit}>
                <input
                  className={titleError ? 'error' : ''}
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />{' '}
                <textarea
                  className={bodyError ? 'error' : ''}
                  placeholder="Review"
                  name="body"
                  cols={4}
                  rows={18}
                  value={body}
                  onChange={e => setBody(e.target.value)}
                />
                <Button type="submit">SEND</Button>
                <Snackbar
                  open={openSuccess}
                  autoHideDuration={4000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Thanks for your review!
                  </Alert>
                </Snackbar>
                <Snackbar
                  open={openError}
                  autoHideDuration={4000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="error">
                    Fill the form to submit a review!
                  </Alert>
                </Snackbar>
              </Form>
            </div>
          </>
        ) : (
            <>
              <h1>Product not found!</h1>
              <Button onClick={handleGoBack} id="go-back">
                Go back
            </Button>
            </>
          )}
      </Container>
    </>
  );
};

export default ProductReview;
