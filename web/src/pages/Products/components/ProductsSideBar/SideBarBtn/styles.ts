import styled from 'styled-components';

import { Button as MaterialBtn } from '@material-ui/core';

import { shade } from 'polished';

interface ButtonProps {
  active: boolean;
}

export const Button = styled(MaterialBtn)<ButtonProps>`
  width: 100%;
  margin-top: 24px;
  padding: 10px 12px;
  border: 2px solid #220f33;
  color: #fff;

  font-size: 1.1rem;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  font-family: Roboto, Ubunto, sans-serif;

  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: #220f33;
  }

  background: ${props => (props.active ? '#220f33' : '#220f33')};

  color: ${props => (props.active ? '#e06b50' : '#fff')};
`;
