import React from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { RegisterData, RegisterSuccess } from "./api/register";

const register = async (registerData: RegisterData) => {
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
              return false;
            }
          }

          return false;
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const Register: React.FC = () => {
  const registerData: RegisterData = {
    firstName: "Test",
    lastName: "Test",
    password: "1234",
    email: "mail@test.com",
  };

  return (
    <Layout>
      <button onClick={() => register(registerData)}>Register</button>
    </Layout>
  );
};

export default Register;
