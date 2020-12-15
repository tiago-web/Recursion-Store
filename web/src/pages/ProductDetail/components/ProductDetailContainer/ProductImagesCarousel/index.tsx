import React, { useEffect, useState } from 'react';
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// import { Slider, Slide } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

// import {
//     Container,
//     Carousel,
//     SlideItem,
//     SlideImage,
//     ProductName,
//     ProductPrice,
//     CustomButtonBack,
//     CustomButtonNext,
// } from './styles';

// interface ProductImagesCarouselProps {
//     images: string[];
// }

const ProductImagesCarousel: React.FC = () => <h1>Hello</h1>;
// {
//     return (
//         <Container>
//             <Carousel
//                 visibleSlides={3}
//                 totalSlides={8}
//                 step={1}
//                 naturalSlideWidth={350}
//                 naturalSlideHeight={500}
//             >
//                 <Slider>
//                     {products.map((product, index) => (
//                         <Slide key={product._id} index={index}>
//                             <SlideItem>
//                                 <Link to={`/product-detail/${product._id}`}>
//                                     <SlideImage
//                                         style={{
//                                             backgroundImage: `url(${product.imageUrl})`,
//                                         }}
//                                     />
//                                 </Link>

//                                 <ProductName to={`/product-detail/${product._id}`}>
//                                     {product.name}
//                                 </ProductName>

//                                 <ProductPrice>{formatToDollars(product.price)}</ProductPrice>
//                             </SlideItem>
//                         </Slide>
//                     ))}
//                 </Slider>
//                 <CustomButtonBack>
//                     <NavigateBeforeIcon />
//                 </CustomButtonBack>
//                 <CustomButtonNext>
//                     <NavigateNextIcon />
//                 </CustomButtonNext>
//             </Carousel>
//         </Container>
//     );
// };

export default ProductImagesCarousel;
