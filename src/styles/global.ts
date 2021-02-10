import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
   box-sizing: border-box;
  }
  html,
body,
#__next {
  width: 100%;
  height: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
};
  html, body, #root {
    font-weight: 400;
    line-height: 1.6;
    scroll-behavior: smooth;
  }
  button{
    border-radius: 8px !important;
  }
`;
