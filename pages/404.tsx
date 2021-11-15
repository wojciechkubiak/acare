import { useContext } from "react";
import router from "next/router";
import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "../assets/cow.json";
import AppNameHeader from "../components/AppNameHeader";
import AuthContext from "../context/AuthContext";
import ButtonOutlined from "../components/ButtonOutlined";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Error = () => {
  const authCtx = useContext(AuthContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={320}
        width={480}
        isStopped={false}
        isPaused={false}
      />
      <AppNameHeader text="Page not found" />
    </Container>
  );
};

export default Error;
