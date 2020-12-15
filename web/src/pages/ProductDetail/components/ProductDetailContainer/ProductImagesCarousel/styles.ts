// import styled from 'styled-components';

// import {
//     CarouselProvider,
//     ButtonBack,
//     ButtonNext,
//     ButtonBackProps,
// } from 'pure-react-carousel';
// import { shade } from 'polished';
// import { Link } from 'react-router-dom';

// export const Container = styled.div`
//   position: relative;
// `;

// export const Carousel = styled(CarouselProvider)``;

// export const SlideItem = styled.div`
//   margin: 0 auto;
//   width: 350px;
// `;

// export const SlideImage = styled.div`
//   height: 400px;
//   width: 350px;
//   border-radius: 5px;
//   margin-bottom: 8px;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: 350px 400px;

//   -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.07);
//   -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.07);
//   box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.07);
// `;

// export const ProductName = styled(Link)`
//   font-weight: 800;
//   font-size: 1.5rem;
//   color: var(--text-color);
//   transition: color 0.3s;

//   :hover {
//     color: ${shade(0.6, '#583874')};
//   }
// `;

// export const ProductPrice = styled.p`
//   margin: 3px 0 9px;
//   font-weight: 600;
//   font-size: 1rem;
//   color: #e06b50;
// `;

// export const CustomButtonBack = styled(ButtonBack) <ButtonBackProps>`
//   transition: all 0.2s;
//   border-radius: 50%;
//   padding: 4px;

//   svg {
//     font-size: 42px;
//   }

//   position: absolute;
//   top: 30%;
//   left: 30px;
//   z-index: 5;

//   border: none;
//   outline: none;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: none;
//   color: rgba(0, 0, 0, 0.5);

//   &:hover {
//     background: ${shade(0.3, 'rgba(0, 0, 0, 0.5)')};

//     color: rgba(255, 255, 255, 0.8);
//   }
// `;

// export const CustomButtonNext = styled(ButtonNext)`
//   transition: all 0.2s;
//   border-radius: 50%;
//   padding: 4px;

//   svg {
//     font-size: 42px;
//   }

//   border: none;
//   outline: none;

//   position: absolute;
//   top: 30%;
//   right: 30px;
//   z-index: 5;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: none;
//   color: rgba(0, 0, 0, 0.5);

//   &:hover {
//     background: ${shade(0.3, 'rgba(0, 0, 0, 0.5)')};

//     color: rgba(255, 255, 255, 0.8);
//   }
// `;
