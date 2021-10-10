import { useState, useContext } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import LoadingContext from "../context/LoadingContext";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = ({ Component, pageProps }: AppProps) => {
  const loadingCtx = useContext(LoadingContext);

  const [isLoading, setIsLoading] = useState(loadingCtx.isLoading);
  const [isContentVisible, setisContentVisible] = useState(
    loadingCtx.isContentVisible
  );

  const loadingHandler = (data: boolean): void => {
    setIsLoading(data);
  };

  return (
    <>
      <Head>
        <title>Acare</title>
      </Head>
      <LoadingContext.Provider
        value={{
          isLoading: isLoading,
          setIsLoading: loadingHandler,
          isContentVisible: isContentVisible,
          setIsContentVisible: setisContentVisible,
        }}
      >
        <Component {...pageProps} />;
      </LoadingContext.Provider>
    </>
  );
};

export default App;
