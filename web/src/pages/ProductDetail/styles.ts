import styled from 'styled-components';

export const Section = styled.section`
  height: 800px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 80px 0;

  a {
    text-decoration: none;
  }
`;

export const CarouselContent = styled.div`
  width: 750px;
  display: flex;
  justify-content: center;
`;

export const ProductDetailContent = styled.div`
  width: 250px;
  margin-left: 120px;
  display: flex;
  flex-direction: column;

  div.title {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h1 {
      margin-right: 24px;
    }
  }

  span {
    margin-top: 24px;
    color: #000;
  }
`;

export const Colors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 24px;

  strong {
    font-size: 18px;
    color: #222;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    margin-top: 12px;

    li {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      flex: 1 0 auto;
      margin: 0 5px 10px 0;
    }
    #red {
      background: #f00;
    }
    #blue {
      background: #00f;
    }
    #green {
      background: #0f0;
    }
    #black {
      background: #000;
    }
  }
`;

export const Sizes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 24px;

  strong {
    font-size: 18px;
    color: #222;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    margin-top: 12px;

    li {
      width: 45px;
      height: 45px;
      flex: 1 0 auto;
      margin: 0 3px 5px 0;
      color: #222;
    }
    #red {
      background: #f00;
    }
    #blue {
      background: #00f;
    }
    #green {
      background: #0f0;
    }
    #black {
      background: #000;
    }
  }
`;
