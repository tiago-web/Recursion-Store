import styled from 'styled-components';
import { Button as MaterialBtn } from '@material-ui/core';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  @media screen and (min-width: 3150px) {
    height: 85vh;
  }

  min-height: 85vh;
`;

export const SideBar = styled.div`
  background: #462a5e;

  height: 100%;
  width: 16vw;
  border-top-right-radius: 8px;
  max-width: 320px;
  min-width: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;

  box-shadow: 2px -2px 4px 0px rgba(0, 0, 0, 0.3);
`;

export const AddNewProductButton = styled(MaterialBtn)`
  width: 80%;
  background: #e06b50;
  color: #fff;
  padding: 12px 14px;

  font-size: 1.1rem;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  font-family: Roboto, Ubunto, sans-serif;

  transition: background-color 0.3s;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;

  &:hover {
    background: ${shade(0.3, '#e06b50')};
  }

  svg {
    margin-left: 8px;
  }
`;

export const AddNewProductLink = styled(Link)`
  width: 100%;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
