import { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";
import Routing from "../components/Routing/Routing";
import { store } from "../store";
import { GlobalStyle } from "../styles/AppStyled";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <title>Acare</title>
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <Routing router={router}>
          <Component {...pageProps} router={router} />
        </Routing>
      </Provider>
    </>
  );
};

export default App;
