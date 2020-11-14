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

export const List = styled.table`
  th {
      padding-bottom: 20px;
      color: #696969;
      font-family: Roboto, sans-serif;
      width: 400px;
  }

  td {
    text-align: center;
  }

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
  }
`;



