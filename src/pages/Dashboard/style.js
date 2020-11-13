import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 65px;
  display: flex;
  max-height: 900px;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 95%;
  margin: auto;
  justify-content: space-around;
  
  /**
  para colocar espaço entre os elementos
  a + a {
    margin-left: 16px;
  }
  **/

  div {
    margin-top: 15px;
    background: #fff;
    width: 300px;
    height: 400px;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    transition: transform 0.2s;

    button {
      display: flex;
      height: 36px;
      border: 0;
      width: 280px;
      margin: auto;
      margin-top: 5px;
      background: #7179C1;
      border-radius: 5px;
      cursor: pointer;

      strong {
        font-family: Roboto, sans-serif;
        margin-top: 7px;
        font-size: 16px;
        color: #fff;
        font-weight: 2;
      }

        &:hover {
          transform: scale(1.02);
        }

      div {
        margin-top: 0px;
        border-radius: 5px 0px 0px 5px;
        width: 50px;
        height: 36px;
        display: flex;
        background: #6650AD;
        color: #fff;
        
        span {
          margin-top: 9px;
          font-size: 18px;
          margin-left: 5px;
        }

        svg {
          height: 40px;
          width: 23px;
          margin-left: 3px;
        }
      }
    }

    img {
      width: 300px;
      height: 280px;
    }

    strong {
      color: #1C1C1C;
      margin-left: 20px;
      font-size: 25px;
    }

    p {
      color: #1C1C1C;
      margin-left: 20px;
    }
  }
`;