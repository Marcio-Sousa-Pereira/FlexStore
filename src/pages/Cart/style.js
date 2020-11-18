import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-height: 500px;
  display: flex;
  justify-content: center;

    /* button {
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
  } */
`;

export const Unidades = styled.div`
  background: #fff;
  display: flex;
  border-radius: 5px;
  flex-direction: row;
  height: 150px;
  margin-top: 6px;
  justify-content: space-between;
  

  #primeira {
    display: flex;
    justify-content: left;
    margin: 0 10px 0 10px;
    img {
      width: 170px;
      height: 160px;
    } 

    #sub-primeira {
      max-width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 10px 0 10px;
      font-family: Roboto, sans-serif;
      span {
        color: gray;
      }
    }
  }

  #segunda {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: #4169E1;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#403F3F')};
      }

    }

    span {
      margin: 0 20px 0 20px;
    }
  }

  #terceira {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 50px 0 20px;

    svg {
      color: #4169E1;
      cursor: pointer;
      margin-left: 30px;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#403F3F')};
      }
    }
  }
 
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px 0 30px;
  max-height: 900px;
  flex: 1;
  max-width: 1000px;

`;



