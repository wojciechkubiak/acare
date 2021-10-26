import React, { useContext } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { LoginData, Tokens } from "./api/login";
import LoginContext, { Step } from "../context/LoginContext";
import Loading from "../components/Loading";
import FormContainer from "../components/FormContainer";
import AppNameHeader from "../components/AppNameHeader";

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
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

const Login: React.FC = () => {
  const loginCtx = useContext(LoginContext);

  const loginData: LoginData = {
    email: "mail@test.com",
    password: "1234",
  };

  return (
    <Layout>
      <FormContainer>
        <>
          {loginCtx.step === Step.LOADING && <Loading />}
          {loginCtx.step === Step.LOGIN && (
            <>
              <AppNameHeader />
              <button onClick={() => login(loginData)}>tete</button>
            </>
          )}
        </>
      </FormContainer>
    </Layout>
  );
};

export default Login;
