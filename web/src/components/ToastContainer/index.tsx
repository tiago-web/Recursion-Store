import React, { useState } from 'react';
// import { useTransition } from 'react-spring';

// import Toast from './Toast';
// import { Container } from './styles';
// import { ToastMessage } from '../../contexts/ToastContext';

// interface ToastContainerProps {
//   messages: ToastMessage[];
// }
const ToastContainer: React.FC = () => <h1>Toast</h1>;
// const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
// const messagesWithTransitions = useTransition(
//   messages,
//   message => message.id,
//   {
//     from: { right: '-120%', opacity: 0 },
//     enter: { right: '0%', opacity: 1 },
//     leave: { right: '-129%', opacity: 0 },
//   },
// );

// return (
//   <Container>
//     {messagesWithTransitions.map(({ item, key, props }) => (
//       <Toast key={key} style={props} message={item} />
//     ))}
//   </Container>
// );
// return <div />;
// };

export default ToastContainer;
