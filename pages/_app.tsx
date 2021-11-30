import { AppProps } from "next/app";
import Head from "next/head";
import Routing from "../components/Routing";
import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 !important;
    background: #f5f5f5;  
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

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <title>Acare</title>
      </Head>
      <GlobalStyle />
      <Routing router={router}>
        <Component {...pageProps} router={router} />
      </Routing>
    </>
  );
};

export default App;
