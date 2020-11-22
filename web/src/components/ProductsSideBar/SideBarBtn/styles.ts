import styled from 'styled-components';

import { Button as MaterialBtn } from '@material-ui/core';

import { shade } from 'polished';

export const Button = styled(MaterialBtn)`
  width: 100%;
  margin-top: 16px;
  padding: 6px 8px;
  background: #dfe5ec;
  border: 2px solid #868c98;
  color: ${shade(0.4, '#868c98')};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: ${shade(0.2, '#dfe5ec')};
  }
`;
