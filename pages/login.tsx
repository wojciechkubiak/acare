import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { LoginData, Tokens } from "./api/login";
import LoginContext, { Step } from "../context/LoginContext";
import Loading from "../components/Loading";
import FormContainer from "../components/FormContainer";
import AppNameHeader from "../components/AppNameHeader";
import Input from "../components/Input";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";
import TextButton from "../components/TextButton";
import ErrorText from "../components/ErrorText";

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const Login: React.FC = () => {
  const loginCtx = useContext(LoginContext);
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleEmail = (value: string) => {
    if (error?.length) setError("");
    setLoginData((prevState: LoginData) => ({
      ...prevState,
      email: value,
    }));
  };

  const handlePassword = (value: string) => {
    if (error?.length) setError("");
    setLoginData((prevState: LoginData) => ({
      ...prevState,
      password: value,
    }));
  };

  const login = async (loginData: LoginData) => {
    try {
      await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      })
        .then((result) => {
          if (result.status === 200) {
            result
              .json()
              .then((data: Tokens) => {
                if (data) {
                  if (data.authToken) {
                    sessionStorage.setItem("authToken", data.authToken);
                  }

                  if (data.refreshToken) {
                    document.cookie = `refreshToken=${data.refreshToken}`;
                  }

                  // Router.push("/");
                }
              })
              .catch((error) => {
                console.log(error);
                setError("Something went wrong");
              });
          } else {
            setError("Wrong credentials");
          }
        })
        .catch((error) => {
          console.log(error);
          setError("Something went wrong");
        });
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    }
  };

  return (
    <Layout>
      <FormContainer>
        <>
          {loginCtx.step === Step.LOADING && <Loading />}
          {loginCtx.step === Step.LOGIN && (
            <>
              <AppNameHeader text="Log In" margin={180} />
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  login(loginData);
                }}
              >
                <Input
                  label="Email"
                  placeholder="your email"
                  type="email"
                  value={loginData["email"]}
                  onChange={handleEmail}
                  isRequired={true}
                />
                <Input
                  label="Password"
                  placeholder="your password"
                  type="password"
                  value={loginData["password"]}
                  onChange={handlePassword}
                  isRequired={true}
                />
                <ErrorText text={error} />
                <ButtonsContainer>
                  <SubmitButton text="Submit" isDisabled={false} />
                  <TextButton
                    text="Create new account"
                    onClick={() => Router.push("/register")}
                  />
                </ButtonsContainer>
              </form>
            </>
          )}
        </>
      </FormContainer>
    </Layout>
  );
};

export default Login;
