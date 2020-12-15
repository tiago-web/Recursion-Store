import { lighten, shade } from 'polished';
import styled from 'styled-components';

interface LikeButtonProps {
  selected: boolean;
}

export const Container = styled.div`
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

  .deleteBtn {
    background: none;
    width: 24px;
    color: rgba(200, 34, 53, 1);
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin: 0 48px 0 0;
    outline: none;

    transition: all 0.2s;

    &:hover {
      color: ${lighten(0.2, 'rgba(200, 34, 53, 1)')};
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 20%;

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

  flex: 1;

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
`;

export const LikeButton = styled.button<LikeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  border: 0;
  padding: 6px;
  background: #f2f2f2;
  color: ${props => (props.selected ? '#e06b50' : 'rgba(88, 56, 116, 0.8)')};
  outline: none;

  transition: all 0.2s;

  &:hover {
    color: ${props => (props.selected ? '#f35532' : '#462166')};
  }
`;
