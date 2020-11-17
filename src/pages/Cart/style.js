import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

    button {
      justify-content: center;
      background: transparent;
      cursor: pointer;
      align-items: center;
      color: #7179C1;
      border-radius: 50%;
      border: solid #7179C1 3px;
      width: 26px;
      height: 26px;  

      span {
        margin-right: 30px
      }
  }
`;

export const List = styled.div`
  /* th {
      padding-bottom: 20px;
      color: #696969;
      font-family: Roboto, sans-serif;
      width: 400px;
  } */
  width: 960px;

  div {
    display: flex;
    font-family: Roboto, sans-serif;
    margin-top: 6px;
    border-radius: 5px;
    background: #fff;
    width: 100%;
    height: 100px;

    img {
      margin-left: 10px;
      height: 95px;
      width: 100px;
    }

    p {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      text-align: left;
      justify-content: center;

      span {
        margin-top: 10px;
        color: #363636;
        margin-bottom: 3px;
      }
    }

    > div {
      height: 40px;
      display: flex;
      justify-content: center;
      margin-top: 36px;
      width: 300px;
      margin-left: 50px;

      button {
        margin: 0 25px 0 25px;
      }

      span {
        margin-top: 2px;
      }
    }
  }
`;



