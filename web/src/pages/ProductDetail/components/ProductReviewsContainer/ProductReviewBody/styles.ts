import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin-top: 80px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Review = styled.div`
  margin-top: 48px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }

  & + div {
    border-top: 1px solid;
    padding-top: 48px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 1120px) {
    flex-direction: row;
    margin-bottom: 12px;
  }

  span {
    font-weight: bold;

    & + span {
      margin-top: 8px;

      @media screen and (max-width: 1120px) {
        margin: 0 0 0 12px;
      }
    }
  }
`;

export const ReviewBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 80%;

  strong {
    font-weight: bold;
    font-size: 18px;
    color: #333;
    margin-bottom: 24px;
  }

  p {
    font-size: 16px;
    margin-bottom: 18px;
  }
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 15%;

  button {
    border: 0;
    padding: 6px;
    background: #f2f2f2;
  }
`;
