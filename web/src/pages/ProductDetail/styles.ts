import styled from 'styled-components';

export const Section = styled.section`
  /* height: 800px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 80px 0;

  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }
`;
