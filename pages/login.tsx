import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { LoginData, Tokens } from "./api/login";
import Loading from "../components/Loading";
import FormContainer from "../components/FormContainer";
import AppNameHeader from "../components/AppNameHeader";
import Input from "../components/Input";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";
import TextButton from "../components/TextButton";
import ErrorText from "../components/ErrorText";
import Loader from "react-loader-spinner";

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  min-height: 200px;
  justify-content: space-around;
  align-items: center;

  & > button {
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;

const Form = styled.form`
  margin-top: 60px;
  margin-bottom: 32px;
`;

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleInput = (value: string, name: string) => {
    if (error?.length) setError("");
    setLoginData((prevState: LoginData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const login = async (loginData: LoginData) => {
    setIsLoading(true);
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
                setIsLoading(false);
                console.log(error);
                setError("Something went wrong");
              });

            setIsLoading(false);
          } else {
            setError("Wrong credentials");
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setError("Something went wrong");
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <AppNameHeader text="Log In" margin={180} />
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          login(loginData);
        }}
      >
        <Input
          label="Email"
          placeholder="your email"
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleInput}
          isRequired={true}
        />
        <Input
          label="Password"
          placeholder="your password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleInput}
          isRequired={true}
        />
        <ErrorText text={error} />
        <ButtonsContainer>
          {!isLoading ? (
            <>
              <SubmitButton text="SUBMIT" isDisabled={isLoading} />
              <TextButton
                text="Create new account"
                onClick={() => Router.push("/register")}
              />{" "}
            </>
          ) : (
            <Loader type="TailSpin" color="#D4AFB9" height={70} width={70} />
          )}
        </ButtonsContainer>
      </Form>
    </FormContainer>
  );
};

export default Login;
