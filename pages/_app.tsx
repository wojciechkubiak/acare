import { useState, useContext } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Routing from "../components/Routing";
import LoginContext, { Step } from "../context/LoginContext";

const App = ({ Component, pageProps, router }: AppProps) => {
  const [loginStep, setLoginStep] = useState<Step>(Step.LOADING);

  const handleLoginStep = (step: Step) => {
    setLoginStep(step);
  };

  return (
    <>
      <Head>
        <title>Acare</title>
      </Head>
      <LoginContext.Provider
        value={{
          step: loginStep,
          setStep: handleLoginStep,
        }}
      >
        <Routing router={router}>
          <Component {...pageProps} router={router} />
        </Routing>
      </LoginContext.Provider>
    </>
  );
};

export default App;
