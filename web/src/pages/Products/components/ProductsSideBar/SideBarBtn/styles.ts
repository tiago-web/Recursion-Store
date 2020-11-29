import styled from 'styled-components';

import { Button as MaterialBtn } from '@material-ui/core';

import { shade } from 'polished';

export const Button = styled(MaterialBtn)`
  width: 100%;
  margin-top: 18px;
  padding: 8px 10px;
  background: #e06b50;
  border: 2px solid #9f5040;
  color: ${shade(0.5, '#9F5040')};

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  font-family: Roboto, Ubunto, sans-serif;

  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: ${shade(0.3, '#e06b50')};
  }
`;
