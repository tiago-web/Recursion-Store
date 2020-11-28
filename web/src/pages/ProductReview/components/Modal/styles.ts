import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 400px;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #000;
  padding: 20px 40px 30px;
  color: #fff;
  top: 50;
  left: 50;
`;
