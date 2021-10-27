import React, { useState } from "react";
import Lottie from "react-lottie";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import animationData from "../assets/splash.json";
import AppNameHeader from "./AppNameHeader";

const LoaderContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Loading = () => {
  const [isStopped, setIsStopped] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={isStopped}
          isPaused={isPaused}
        />
      </div>
      <AppNameHeader />
      <LoaderContainer>
        <Loader type="TailSpin" color="#D4AFB9" height={70} width={70} />
      </LoaderContainer>
    </>
  );
};

export default Loading;
