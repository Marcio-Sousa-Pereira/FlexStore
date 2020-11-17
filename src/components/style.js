import styled from 'styled-components';
import { shade } from 'polished';

const HeaderStyle = styled.header`
  background: #1C1C1C;
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 9;

  a {
    background: transparent;
    border: 0px;
    width: 140px;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 55px;
    text-decoration: none;
    margin-left: auto;
    transition: color 0.3s;

    &:hover p {
      color: ${shade(0.2, '#7179C1')};
    }

    &:hover svg {
      color: ${shade(0.2, '#7179C1')};
    }

    svg {
    transition: color 0.3s;
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
      transition: color 0.3s;
      font-family: Roboto, sans-serif;
      color: #fff;
      font-size: 12px;
    }
  }
  }

`;

export default HeaderStyle;