import React, { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer/FormContainer";
import Router from "next/router";
import ErrorText from "../components/ErrorText/ErrorText";
import { RegisterSuccess } from "./api/register";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import Loader from "react-loader-spinner";
import OptionPicker from "../components/OptionPicker/OptionPicker";
import Input from "../components/Input/Input";
import { AiOutlineLeft } from "react-icons/ai";
import router from "next/router";
import { AuthRegisterData } from "../models/Auth";
import { useAppDispatch, useAppSelector } from "../store";
import { registerUser } from "../store/auth/auth-actions";
import { clearRegister } from "../store/auth/auth-slice";

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
  min-height: 100px;
  justify-content: space-around;
  align-items: center;

  & > button {
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;
const ButtonBack = styled.button`
  width: 45px;
  height: 45px;
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 100;
  padding: 0 !important;
  background-color: transparent;
  box-shadow: none;
  border: none;
`;

const Form = styled.form`
  margin-top: 60px;
  margin-bottom: 32px;
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

const Register: React.FC = () => {
  const dispatch = useAppDispatch();

  const { isRegister, isLoading } = useAppSelector((state) => state.auth);

  const [registerData, setRegisterData] = useState<AuthRegisterData>({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (isRegister) {
      dispatch(clearRegister());
      router.push("/login");
    }
  }, [isRegister]);

  const handleInput = (value: string, name: string) => {
    if (error?.length) setError("");
    setRegisterData((prevState: AuthRegisterData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const register = async (registerData: AuthRegisterData) => {
    dispatch(registerUser(registerData));
  };

  return (
    <BaseContainer>
      <FormContainer>
        <FormHeader>
          <OptionPicker
            text="Log In"
            isActive={false}
            isLeft={true}
            onClick={() => Router.push("/login")}
          />
          <OptionPicker text="Create" isActive={true} isLeft={false} />
        </FormHeader>
        {/*<ButtonBack onClick={() => router.push("/login")}>*/}
        {/*  <AiOutlineLeft size={32} color="gray" />*/}
        {/*</ButtonBack>*/}
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            register(registerData);
          }}
        >
          <Input
            label="Firstname"
            placeholder="your firstname"
            type="text"
            name="firstName"
            value={registerData.firstName}
            onChange={handleInput}
            isRequired={true}
            disabled={isLoading}
          />
          <Input
            label="Lastname"
            placeholder="your lastname"
            type="text"
            name="lastName"
            value={registerData.lastName}
            onChange={handleInput}
            isRequired={true}
            disabled={isLoading}
          />
          <Input
            label="Email"
            placeholder="your email"
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleInput}
            isRequired={true}
            disabled={isLoading}
          />
          <Input
            label="Password"
            placeholder="your password"
            type="password"
            name="password"
            value={registerData.password}
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

export default Register;
