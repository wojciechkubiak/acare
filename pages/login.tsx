import React from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { LoginData, Tokens } from "./api/login";

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
                  localStorage.setItem("authToken", data.authToken);
                }

                if (data.refreshToken) {
                  document.cookie = `refreshToken=${data.refreshToken}`;
                }

                Router.push("/");
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
  const loginData: LoginData = {
    email: "mail@test.com",
    password: "1234",
  };

  return (
    <Layout>
      <button onClick={() => login(loginData)}>Login</button>
    </Layout>
  );
};

export default Login;
