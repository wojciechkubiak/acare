import React, { useState, useContext, useCallback, useEffect } from "react";
import Lottie from "react-lottie";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import animationData from "../assets/splash.json";
import AppNameHeader from "./AppNameHeader";

const LoaderContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border: none;
  background-color: #d396a7;
  border-radius: 12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  cursor: pointer;
  transition: 1000ms all;
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
