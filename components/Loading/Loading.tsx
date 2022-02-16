import React from "react";
import Lottie from "react-lottie";
import Loader from "react-loader-spinner";

import animationData from "../../assets/splash.json";
import OptionPicker from "../OptionPicker/OptionPicker";

import { LoaderBody } from "./LoadingStyled";

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
        <OptionPicker text="Animalcare" />
        <Loader type="TailSpin" color="#D4AFB9" height={70} width={70} />
      </LoaderBody>
    </>
  );
};

export default Loading;
