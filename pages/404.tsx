import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/cow.json";
import OptionPicker from "../components/OptionPicker/OptionPicker";

import { Container } from "../styles/404Styled";

const Error = () => {
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
      <OptionPicker text="Page not found" />
    </Container>
  );
};

export default Error;
