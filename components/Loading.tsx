import React, { useState, useContext } from "react";
import Lottie from "react-lottie";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { MdArrowForward } from "react-icons/md";
import LoadingContext from "../context/LoadingContext";
import animationData from "../assets/splash.json";

const FullscreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  position: fixed;
  left: 0;
  top: 0;
`;

const LottieContainer = styled.div`
  width: 500px;
  height: 620px;
  padding: 0px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: white;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 18px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const LoaderContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border: none;
  background-color: #D4AFB9;
  border-radius: 12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  cursor: pointer;
`;

const Header = styled.h1`
  font-family: "Merienda", cursive;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.67);
`;

const Loading: React.FC = () => {
  const loadingCtx = useContext(LoadingContext);
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
    <FullscreenContainer>
      <LottieContainer>
        <div style={{ textAlign: "center" }}>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            isStopped={isStopped}
            isPaused={isPaused}
          />
          <Header>Acare</Header>
        </div>

        <LoaderContainer>
          {loadingCtx.isLoading ? (
            <Loader type="TailSpin" color="#D4AFB9" height={70} width={70} />
          ) : (
            <Button onClick={() => loadingCtx.setIsContentVisible(true)}>
              <MdArrowForward color="white" size={30} />
            </Button>
          )}
        </LoaderContainer>
      </LottieContainer>
    </FullscreenContainer>
  );
};

export default Loading;
