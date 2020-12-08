import styled from 'styled-components';

export const ItemContainer = styled.div`
  margin: 1rem 0;
  border: 0.1rem solid #583874;
  background-color: #e0e1e2c9;
  /* color: #e0e1e2c9; */
  height: 8rem;
  width: 18rem;
  display: flex;
  direction: row;
  .image {
    img {
      margin: 0.95rem;
      height: 6rem;
      border: 0.5rem solid white;
    }
  }
  .elements {
    direction: column;
    align-self: center;
  }
  .row1 {
    align-items: center;
    display: flex;
    margin: 0.5rem 0;
  }
  .row2 {
    display: flex;
    margin: 0.5rem 0;
  }
  .ileft {
    margin-right: 1rem;
    svg {
    }
  }
  .iright {
    margin-right: 0.3rem;
    font-size: 0.85rem;
  }
`;
