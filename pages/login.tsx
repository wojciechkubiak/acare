import React, { useContext, useEffect, useState } from "react";
import Router from "next/router";
import FormContainer from "../components/FormContainer/FormContainer";
import OptionPicker from "../components/OptionPicker/OptionPicker";
import Input from "../components/Input/Input";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import ErrorText from "../components/ErrorText/ErrorText";
import Loader from "react-loader-spinner";

import { useAppDispatch, useAppSelector } from "../store";
import { AuthLoginData } from "../models/Auth";
import { loginUser } from "../store/auth/auth-actions";

const BaseContainer = styled.div`
  position: relative;
  width: 35%;
  min-width: 600px;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  min-height: 80px;
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
  z-index: 1000;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 24px;
  width: 80%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 52px;
`;

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const isLoading: boolean = useAppSelector((state) => state.auth.isLoading);

  const [loginData, setLoginData] = useState<AuthLoginData>({
    email: "",
    password: "",
  });

  const isAuth: boolean = useAppSelector((state) => state.auth.isAuth);

  const [error, setError] = useState<string>("");

  const handleInput = (value: string, name: string) => {
    if (error?.length) setError("");
    setLoginData((prevState: AuthLoginData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const login = (loginData: AuthLoginData) => {
    dispatch(loginUser(loginData));
  };

  return (
    <BaseContainer>
      <FormContainer>
        <FormHeader>
          <OptionPicker text="Log In" isActive={true} isLeft={true} />
          <OptionPicker
            text="New account"
            isActive={false}
            isLeft={false}
            onClick={() => Router.push("/register")}
          />
        </FormHeader>
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
            disabled={isLoading}
          />
          <Input
            label="Password"
            placeholder="your password"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInput}
            isRequired={true}
            disabled={isLoading}
          />
          <ErrorText text={error} />
          <ButtonsContainer>
            {!isLoading ? (
              <SubmitButton isDisabled={isLoading} />
            ) : (
              <Loader type="TailSpin" color="#D4AFB9" height={70} width={70} />
            )}
          </ButtonsContainer>
        </Form>
      </FormContainer>
    </BaseContainer>
  );
};

export default Login;
