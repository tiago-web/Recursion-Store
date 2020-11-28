import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledModal } from './styles';

const Modal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    history.push('/product-detail');
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        // onTimeUpdate={}
        disablePortal
        disableEnforceFocus
        disableAutoFocus
      >
        <h2 id="simple-modal-title">Thanks for your review!</h2>
      </StyledModal>
    </>
  );
};

export default Modal;
