import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import Router from "next/router";
import ErrorText from "../components/ErrorText";
import { RegisterData, RegisterSuccess } from "./api/register";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";
import Loader from "react-loader-spinner";
import AppNameHeader from "../components/AppNameHeader";
import Input from "../components/Input";
import { AiOutlineLeft } from "react-icons/ai";
import router from "next/router";

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

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [registerData, setRegisterData] = useState<RegisterData>({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState<string>("");

  const handleInput = (value: string, name: string) => {
    if (error?.length) setError("");
    setRegisterData((prevState: RegisterData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const register = async (registerData: RegisterData) => {
    setIsLoading(true);
    try {
      await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      }).then((result) => {
        if (result.status === 200) {
          result.json().then((data: RegisterSuccess) => {
            if (data) {
              if (data.isCreated) {
                Router.push("/login");
              } else {
                setIsLoading(false);
                return false;
              }
            }
            setIsLoading(false);
            return false;
          });
        } else {
          setIsLoading(false);
          setError("Email address already used");
        }
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <AppNameHeader text="Create account" margin={180} />
      <ButtonBack onClick={() => router.push("/login")}>
        <AiOutlineLeft size={32} color="gray" />
      </ButtonBack>
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
  );
};

export default Register;
