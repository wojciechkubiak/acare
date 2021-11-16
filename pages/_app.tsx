import { AppProps } from "next/app";
import Head from "next/head";
import Routing from "../components/Routing";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <title>Acare</title>
      </Head>
      <Routing router={router}>
        <Component {...pageProps} router={router} />
      </Routing>
    </>
  );
};

export default App;
