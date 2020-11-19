import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  flex: 1;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;

    footer{
      display: flex;
      justify-content: space-between;
      font-family: Roboto, sans-serif; 
      width: 100%;

      button {
        border: 0;
        margin-top: 20px;
        font-family: Roboto, sans-serif; 
        border-radius: 8px;
        background: #4169E1;
        color: #fff;
        width: 200px;
        height: 40px;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.3, '#4169E1')};
          }
      }

      p {
        margin-top: 20px;
      }
    }

      table {
      background: #fff;
      border-radius: 5px;
      width: 100%;
      font-family: Roboto, sans-serif;

      img {
        width: 120px;
        height: 120px;
        margin-left: 15px;
      }

      .td-first {
          display: flex;
        }

      th {
        text-align: left;
        padding: 10px;
        color: #736E6E;
      }

      .first {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1; 
          align-items: left;
          background: white;
          margin: 0 8px 0 20px;

          span {
            margin-top: 10px;
            color: #736E6E;
          }
      }

      svg {
          transition: color 0.3s;
          color: #4169E1;
          padding: 6px;
          cursor: pointer;

          &:hover {
            color: ${shade(0.3, '#4169E1')};
          }
        }

      .second {
        display: flex;
        align-items: center;
        cursor: pointer;

        input {
          border-radius: 5px;
          padding: 5px;
          border: 1px solid gray;
          width: 42px;
        }
      }
    }
  }
`;



// export const Total = styled.div`
//   display: flex;
//   align-items: baseline;
//   span {
//     color: #999;
//     font-weight: bold;
//   }
//   strong {
//     font-size: 28px;
//     margin-left: 5px;
//   }
// `;

// export const Container = styled.div`
//   max-height: 540px;
//   display: flex;
//   justify-content: center;
// `;

// export const Unidades = styled.tr`
//   background: #fff;
//   display: flex;
//   border-radius: 5px;
//   flex-direction: row;
//   height: 150px;
//   margin-top: 6px;
  

//   #primeira {
//     display: flex;
//     img {
//       width: 150px;
//     } 

//     #sub-primeira {
//       display: flex;
//       flex: 1;
//       flex-direction: column;
//       justify-content: center;
//       margin: 0 7px 0 10px;
//       font-family: Roboto, sans-serif;
//       span {
//         color: gray;
//       }
//     }
//   }

//   #segunda {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     svg {
//       color: #4169E1;
//       cursor: pointer;
//       transition: color 0.3s;

//       &:hover {
//         color: ${shade(0.2, '#403F3F')};
//       }

//     }

//     input {
//       width: 50px;
//       padding: 5px;
//       margin: 0 10px 0 10px;
//     }

//     span {
//       margin: 0 20px 0 20px;
//     }
//   }

//   #terceira {
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     margin: 0 10px 0 0px;
//     width: 60px;
//   }

//   svg {
//       color: #4169E1;
//       cursor: pointer;
//       margin-left: auto;
//       transition: color 0.3s;
//       &:hover {
//         color: ${shade(0.2, '#403F3F')};
//       }
//     }
// `;

// export const List = styled.table`
//   background: #fff;
//   position: relative;
//   border-radius: 10px;
//   width: 100%;

//   tr {
//     display: block;
//     align-items: center;
//     justify-content: space-around;
//   } 

//   td {
//     margin: 0 8px 0 8px;
//   }
  
//   th {
//     display: flex;
//     align-items: center;
//     font-family: Roboto, sans-serif;
//     color: #4D4D4D;
//   }
// `;



