import React from "react";
import Lottie from "react-lottie";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import animationData from "../assets/splash.json";
import AppNameHeader from "./AppNameHeader";

const LoaderBody = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Loading = () => {
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
      <LoaderBody>
        <Lottie
          isClickToPauseDisabled={true}
          options={defaultOptions}
          height={500}
          width={500}
          isStopped={false}
          isPaused={false}
        />
        <AppNameHeader text="Animalcare" />
        <Loader type="TailSpin" color="#D4AFB9" height={70} width={70} />
      </LoaderBody>

    </>
  );
};

export default Loading;
