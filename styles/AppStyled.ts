import { createGlobalStyle } from "styled-components";

import Background from "../assets/bg.png";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 !important;
    background: url(${Background}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    
    //background: rgb(250, 255, 250);
    //background: linear-gradient(180deg, rgb(253, 255, 253) 0%, rgb(251, 255, 251) 34%, rgb(251, 255, 251) 100%);
    min-height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #afafaf;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #8d8d8d;
  }
`;
