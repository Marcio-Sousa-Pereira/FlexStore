import styled from 'styled-components';

const HeaderStyle = styled.header`
  background: #1C1C1C;
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 9;
 

  a {
    background: transparent;
    border: 0;
    display: flex;
    cursor: pointer;
    text-decoration: none;
    justify-content: flex-end;

    svg {
    margin-top: 13px;
    margin-right: 20px;
    color: #fff;
  }

  div {
    margin-right: 10px;
    margin-top: 13px;
    display: flex;
    flex-direction: column;
    text-align: right;

    p {
      font-family: Roboto, sans-serif;
      color: #fff;
      font-size: 12px;
    }
  }
  }
`;

export default HeaderStyle;