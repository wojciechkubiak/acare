import React, { useState, useContext, useCallback, useEffect } from "react";
import Lottie from "react-lottie";
import Router from "next/router";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { MdArrowForward } from "react-icons/md";
import LoadingContext from "../context/LoadingContext";
import animationData from "../assets/splash.json";
import FormContainer from "./FormContainer";
import { Token } from "../pages/api/auth";

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
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleRouting = useCallback(async () => {
    const refresh = document.cookie.replace("refreshToken=", "");

    if (refresh.length) {
      try {
        const result = await fetch("http://localhost:3000/api/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh: refresh }),
        });
        if (result.status === 200) {
          result.json().then((data: Token) => {
            if (data) {
              sessionStorage.setItem("authToken", data.authToken);
              setIsAuth(true);
              loadingCtx.setIsLoading(false);
            }
          });
        } else {
          loadingCtx.setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setTimeout(() => {
        loadingCtx.setIsLoading(false);
      }, 2000);
    }
  }, []);

  const handleForward = () => {
    if (!isAuth) Router?.push("/login");

    loadingCtx.setIsContentVisible(true);
  };

  useEffect(() => {
    handleRouting();
  }, [handleRouting]);

  return (
    <FormContainer>
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
          <Button onClick={handleForward}>
            <MdArrowForward color="white" size={30} />
          </Button>
        )}
      </LoaderContainer>
    </FormContainer>
  );
};

export default Loading;
